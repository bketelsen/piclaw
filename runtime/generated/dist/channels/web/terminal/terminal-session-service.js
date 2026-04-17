import { spawn } from "node:child_process";
import { openSync, closeSync, readlinkSync, readdirSync, readFileSync, accessSync, constants } from "node:fs";
import { FFIType, dlopen } from "bun:ffi";
import { WORKSPACE_DIR } from "../../../core/config.js";
import { DEFAULT_WEB_USER_ID, getWebSession } from "../../../db.js";
import { createLogger, debugSuppressedError } from "../../../utils/logger.js";
import { getSessionTokenFromRequest } from "../auth/session-auth.js";
const DEFAULT_COLS = 120;
const DEFAULT_ROWS = 30;
const TERMINAL_FONT_FAMILY = "FiraCode Nerd Font Mono";
const TERMINAL_ANON_CLIENT_HEADER = "x-piclaw-terminal-client";
const IS_LINUX = process.platform === "linux";
const DEFAULT_TERMINAL_HANDOFF_TTL_MS = 5 * 60 * 1000;
const DEFAULT_TERMINAL_RECONNECT_GRACE_MS = 3_000;
const DEFAULT_TERMINAL_OUTPUT_HISTORY_LIMIT_BYTES = 2 * 1024 * 1024;
const log = createLogger("web.terminal-session-service");
function createTerminalHandoffToken() {
    try {
        return crypto.randomUUID();
    }
    catch (error) {
        debugSuppressedError(log, "crypto.randomUUID unavailable for terminal handoff token", error);
        return `terminal-handoff-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
    }
}
function createTerminalSessionId() {
    try {
        return crypto.randomUUID();
    }
    catch (error) {
        debugSuppressedError(log, "crypto.randomUUID unavailable for terminal session id", error);
        return `terminal-session-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
    }
}
function readAnonymousTerminalClientToken(req) {
    try {
        const urlToken = new URL(req.url).searchParams.get("client")?.trim() || "";
        const headerToken = req.headers.get(TERMINAL_ANON_CLIENT_HEADER)?.trim() || "";
        const token = urlToken || headerToken;
        return /^[a-zA-Z0-9._:-]{8,128}$/.test(token) ? token : null;
    }
    catch {
        return null;
    }
}
// ioctl request code for setting terminal window size (Linux)
const TIOCSWINSZ = 0x5414;
/**
 * Lazy-loaded libc ioctl binding via Bun FFI.
 * Used to call ioctl(fd, TIOCSWINSZ, &winsize) for PTY resize.
 */
let _libc = null;
let _libcLoaded = false;
function getLibc() {
    if (_libcLoaded)
        return _libc;
    _libcLoaded = true;
    try {
        const lib = dlopen("libc.so.6", {
            ioctl: {
                args: [FFIType.i32, FFIType.u64, FFIType.ptr],
                returns: FFIType.i32,
            },
        });
        _libc = {
            ioctl: (fd, request, buf) => lib.symbols.ioctl(fd, request, buf),
        };
    }
    catch (error) {
        debugSuppressedError(log, "libc FFI unavailable; PTY resize disabled", error);
        _libc = null;
    }
    return _libc;
}
/**
 * Resize a PTY device via ioctl(TIOCSWINSZ).
 *
 * Opens the PTS device path, sets the kernel window size via the winsize
 * struct, then closes the fd. This is the same mechanism that terminal
 * emulators and Docker's exec resize API use.
 */
function resizePty(ptsPath, cols, rows) {
    const libc = getLibc();
    if (!libc)
        return false;
    let fd = -1;
    try {
        // struct winsize { unsigned short ws_row, ws_col, ws_xpixel, ws_ypixel; }
        const winsize = new Uint16Array([rows, cols, 0, 0]);
        fd = openSync(ptsPath, 0); // O_RDONLY
        return libc.ioctl(fd, TIOCSWINSZ, winsize) === 0;
    }
    catch (error) {
        debugSuppressedError(log, "failed to resize PTY", error, { ptsPath, cols, rows });
        return false;
    }
    finally {
        if (fd >= 0) {
            try {
                closeSync(fd);
            }
            catch (error) {
                debugSuppressedError(log, "failed to close PTY fd after resize", error, { fd, ptsPath });
            }
        }
    }
}
/**
 * Find child PIDs of a given parent by reading /proc.
 */
function getChildPids(parentPid) {
    if (!IS_LINUX)
        return [];
    try {
        return readdirSync("/proc")
            .filter((entry) => /^\d+$/.test(entry))
            .map((entry) => {
            try {
                const stat = readFileSync(`/proc/${entry}/stat`, "utf8");
                // Format: pid (comm) state ppid ...
                const match = stat.match(/^\d+\s+\(.*?\)\s+\S+\s+(\d+)/);
                return match && parseInt(match[1], 10) === parentPid ? parseInt(entry, 10) : 0;
            }
            catch (error) {
                debugSuppressedError(log, "failed to inspect child process stat", error, { procEntry: entry, parentPid });
                return 0;
            }
        })
            .filter((pid) => pid > 0);
    }
    catch (error) {
        debugSuppressedError(log, "failed to scan /proc for child processes", error, { parentPid });
        return [];
    }
}
/**
 * Find the PTS device path for the shell spawned inside `script`.
 *
 * The process tree is: piclaw → script → bash
 * We walk child PIDs and check /proc/<pid>/fd/0 for a /dev/pts/* link.
 */
function findChildPts(parentPid) {
    if (!IS_LINUX)
        return null;
    const childPids = getChildPids(parentPid);
    for (const cpid of childPids) {
        try {
            const target = readlinkSync(`/proc/${cpid}/fd/0`);
            if (target.startsWith("/dev/pts/")) {
                return { ptsPath: target, childPids };
            }
        }
        catch (error) {
            debugSuppressedError(log, "failed to inspect child PTY path", error, { parentPid, childPid: cpid });
        }
    }
    return null;
}
function normalizeChunk(chunk) {
    if (typeof chunk === "string")
        return chunk;
    return Buffer.from(chunk).toString("utf8");
}
const EXTRA_BIN_DIRS = ["/run/current-system/sw/bin", "/usr/local/bin", "/usr/bin", "/bin"];
function findExecutable(name) {
    const dirs = (process.env.PATH || "").split(":").concat(EXTRA_BIN_DIRS);
    for (const dir of dirs) {
        const candidate = `${dir}/${name}`;
        try {
            accessSync(candidate, constants.X_OK);
            return candidate;
        }
        catch (error) {
            debugSuppressedError(log, "candidate executable unavailable", error, { name, candidate });
        }
    }
    return name;
}
const SCRIPT_BIN = findExecutable("script");
const BASH_BIN = findExecutable("bash");
function defaultSpawnProcess(cwd) {
    return spawn(SCRIPT_BIN, ["-qf", "-c", `${BASH_BIN} -i`, "/dev/null"], {
        cwd,
        env: {
            ...process.env,
            TERM: process.env.TERM || "xterm-256color",
            COLORTERM: process.env.COLORTERM || "truecolor",
            CLICOLOR: process.env.CLICOLOR || "1",
            FORCE_COLOR: process.env.FORCE_COLOR || "1",
            HOME: process.env.HOME || "/home/agent",
            COLUMNS: String(DEFAULT_COLS),
            LINES: String(DEFAULT_ROWS),
        },
        stdio: ["pipe", "pipe", "pipe"],
    });
}
export class TerminalSessionService {
    sessions = new Map();
    handoffs = new Map();
    spawnProcess;
    handoffTtlMs;
    reconnectGraceMs;
    constructor(options = {}) {
        this.spawnProcess = options.spawnProcess ?? defaultSpawnProcess;
        this.handoffTtlMs = Number.isFinite(options.handoffTtlMs)
            ? Math.max(1, Number(options.handoffTtlMs))
            : DEFAULT_TERMINAL_HANDOFF_TTL_MS;
        this.reconnectGraceMs = Number.isFinite(options.reconnectGraceMs)
            ? Math.max(0, Number(options.reconnectGraceMs))
            : DEFAULT_TERMINAL_RECONNECT_GRACE_MS;
    }
    resolveOwnerFromRequest(req, allowUnauthenticated = false) {
        const token = getSessionTokenFromRequest(req);
        if (token) {
            const session = getWebSession(token);
            if (session) {
                return { kind: "terminal", token, userId: session.user_id, handoffToken: null };
            }
        }
        if (!allowUnauthenticated)
            return null;
        const anonymousClientToken = readAnonymousTerminalClientToken(req);
        if (!anonymousClientToken)
            return null;
        return {
            kind: "terminal",
            token: `web-terminal-anon:${anonymousClientToken}`,
            userId: DEFAULT_WEB_USER_ID,
            handoffToken: null,
        };
    }
    getSessionInfo(owner) {
        const session = this.sessions.get(owner.token);
        return {
            enabled: true,
            transport: "websocket",
            ws_path: "/terminal/ws",
            cwd: WORKSPACE_DIR,
            shell: "/usr/bin/bash -i",
            font_family: TERMINAL_FONT_FAMILY,
            active: Boolean(session),
            connected_clients: session?.clients.size ?? 0,
        };
    }
    attachClient(ws) {
        const owner = ws.data;
        const isHandoff = this.validateHandoff(owner);
        const canResumeDetachedSession = !isHandoff && this.canResumeDetachedSession(owner);
        if (!isHandoff && !canResumeDetachedSession) {
            this.resetSession(owner, "fresh attach");
        }
        const session = this.ensureSession(owner);
        this.clearReconnectGrace(session);
        if (isHandoff) {
            for (const client of Array.from(session.clients)) {
                if (client === ws)
                    continue;
                try {
                    client.close(1000, "terminal handoff");
                }
                catch (error) {
                    debugSuppressedError(log, "Old terminal websocket was already closing during handoff.", error, {
                        token: owner.token,
                        userId: owner.userId,
                    });
                }
                session.clients.delete(client);
            }
        }
        const replayOutput = this.getReplayOutput(session);
        ws.data.attachedSessionId = session.id;
        session.clients.add(ws);
        this.send(ws, {
            type: "session",
            session_id: session.id,
            created_at: session.createdAt,
            process_pid: session.process.pid ?? null,
            cwd: session.cwd,
            cols: session.cols,
            rows: session.rows,
            font_family: TERMINAL_FONT_FAMILY,
        });
        if (replayOutput) {
            this.send(ws, {
                type: "output",
                data: replayOutput,
            });
        }
    }
    handleMessage(ws, rawMessage) {
        const session = this.sessions.get(ws.data.token);
        if (!session)
            return;
        if (!session.clients.has(ws))
            return;
        const messageText = typeof rawMessage === "string" ? rawMessage : Buffer.from(rawMessage).toString("utf8");
        const payload = this.parseClientMessage(messageText);
        if (payload.type === "input") {
            if (typeof payload.data === "string" && payload.data.length > 0) {
                try {
                    session.process.stdin.write(payload.data);
                }
                catch (error) {
                    debugSuppressedError(log, "failed to write terminal input to process stdin", error, {
                        token: ws.data.token,
                        userId: ws.data.userId,
                        sessionId: session.id,
                        processPid: session.process.pid ?? null,
                        ptsPath: session.ptsPath,
                    });
                }
            }
            return;
        }
        if (payload.type === "resize") {
            const cols = Number.isFinite(payload.cols) ? Math.max(20, Math.min(400, Math.floor(payload.cols))) : session.cols;
            const rows = Number.isFinite(payload.rows) ? Math.max(5, Math.min(200, Math.floor(payload.rows))) : session.rows;
            if (cols !== session.cols || rows !== session.rows) {
                session.cols = cols;
                session.rows = rows;
                this.resizeSession(session, cols, rows);
            }
            return;
        }
    }
    detachClient(ws) {
        const attachedSessionId = String(ws.data.attachedSessionId || "").trim();
        if (!attachedSessionId)
            return;
        const session = Array.from(this.sessions.values()).find((candidate) => candidate.id === attachedSessionId && candidate.owner.token === ws.data.token);
        if (!session)
            return;
        session.clients.delete(ws);
        if (session.clients.size > 0) {
            this.clearReconnectGrace(session);
            return;
        }
        if (this.hasPendingHandoff(ws.data)) {
            this.clearReconnectGrace(session);
            return;
        }
        this.scheduleReconnectGrace(session);
    }
    parseClientMessage(messageText) {
        try {
            return JSON.parse(messageText);
        }
        catch (error) {
            debugSuppressedError(log, "terminal control frame was not JSON; treating as input", error);
            return { type: "input", data: messageText };
        }
    }
    createHandoffFromRequest(req, allowUnauthenticated = false) {
        const owner = this.resolveOwnerFromRequest(req, allowUnauthenticated);
        if (!owner)
            return null;
        const session = this.sessions.get(owner.token);
        if (!session || session.clients.size === 0)
            return null;
        this.sweepExpiredHandoffs();
        const token = createTerminalHandoffToken();
        const expiresAt = Date.now() + this.handoffTtlMs;
        this.handoffs.set(token, {
            owner: { token: owner.token, userId: owner.userId, handoffToken: null },
            expiresAt,
        });
        return {
            token,
            expires_at: new Date(expiresAt).toISOString(),
        };
    }
    shutdown() {
        for (const session of this.sessions.values()) {
            this.clearReconnectGrace(session);
            try {
                session.process.kill("SIGHUP");
            }
            catch (error) {
                debugSuppressedError(log, "terminal process already exited during shutdown", error, { pid: session.process.pid ?? null });
            }
        }
        this.sessions.clear();
        this.handoffs.clear();
    }
    /**
     * Resize a terminal session's PTY via ioctl(TIOCSWINSZ) + SIGWINCH.
     *
     * On first resize, discovers the PTS device path by walking /proc for
     * the child shell's fd/0 link. Once found, caches it for subsequent
     * resizes. Sends SIGWINCH to all child processes after updating the
     * kernel window size.
     */
    resizeSession(session, cols, rows) {
        const pid = session.process.pid;
        if (!pid)
            return;
        if (!session.ptsPath) {
            const result = findChildPts(pid);
            if (result)
                session.ptsPath = result.ptsPath;
        }
        if (!session.ptsPath)
            return;
        if (resizePty(session.ptsPath, cols, rows)) {
            // Send SIGWINCH to child processes so they re-query the terminal size
            for (const cpid of getChildPids(pid)) {
                try {
                    process.kill(cpid, "SIGWINCH");
                }
                catch (error) {
                    debugSuppressedError(log, "failed to deliver SIGWINCH to child process", error, { childPid: cpid, sessionPid: pid });
                }
            }
        }
    }
    sweepExpiredHandoffs(nowMs = Date.now()) {
        for (const [token, record] of this.handoffs.entries()) {
            if (!record || record.expiresAt <= nowMs) {
                this.handoffs.delete(token);
            }
        }
    }
    validateHandoff(owner) {
        const handoffToken = String(owner?.handoffToken || "").trim();
        if (!handoffToken)
            return false;
        this.sweepExpiredHandoffs();
        const record = this.handoffs.get(handoffToken);
        if (!record)
            return false;
        if (record.owner.token !== owner.token || record.owner.userId !== owner.userId)
            return false;
        this.handoffs.delete(handoffToken);
        return true;
    }
    hasPendingHandoff(owner) {
        this.sweepExpiredHandoffs();
        for (const record of this.handoffs.values()) {
            if (record.owner.token === owner.token && record.owner.userId === owner.userId) {
                return true;
            }
        }
        return false;
    }
    ensureSession(owner) {
        const existing = this.sessions.get(owner.token);
        if (existing)
            return existing;
        const proc = this.spawnProcess(WORKSPACE_DIR);
        const session = {
            id: createTerminalSessionId(),
            owner,
            process: proc,
            clients: new Set(),
            createdAt: new Date().toISOString(),
            cwd: WORKSPACE_DIR,
            cols: DEFAULT_COLS,
            rows: DEFAULT_ROWS,
            ptsPath: null,
            reconnectGraceDeadlineAt: null,
            reconnectGraceTimer: null,
            outputHistory: [],
            outputHistoryBytes: 0,
        };
        proc.stdout.on("data", (chunk) => {
            const data = normalizeChunk(chunk);
            this.appendOutputHistory(session, data);
            this.broadcast(session, { type: "output", data });
        });
        proc.stderr.on("data", (chunk) => {
            const data = normalizeChunk(chunk);
            this.appendOutputHistory(session, data);
            this.broadcast(session, { type: "output", data });
        });
        proc.on("exit", (code, signal) => {
            this.broadcast(session, { type: "exit", code: code ?? null, signal: signal ?? null });
            const current = this.sessions.get(owner.token);
            if (current?.id === session.id) {
                this.clearReconnectGrace(session);
                this.sessions.delete(owner.token);
            }
        });
        // Discover PTS device path after a short delay to let `script` allocate the PTY,
        // then set the initial window size via ioctl so the shell starts with correct dimensions.
        if (IS_LINUX && proc.pid) {
            setTimeout(() => {
                if (!proc.pid)
                    return;
                const result = findChildPts(proc.pid);
                if (result) {
                    session.ptsPath = result.ptsPath;
                    resizePty(result.ptsPath, session.cols, session.rows);
                    for (const cpid of result.childPids) {
                        try {
                            process.kill(cpid, "SIGWINCH");
                        }
                        catch (error) {
                            debugSuppressedError(log, "failed to deliver initial SIGWINCH to child process", error, { childPid: cpid, sessionPid: proc.pid ?? null });
                        }
                    }
                }
            }, 300);
        }
        this.sessions.set(owner.token, session);
        return session;
    }
    resetSession(owner, reason) {
        const session = this.sessions.get(owner.token);
        if (!session)
            return;
        this.clearReconnectGrace(session);
        for (const client of Array.from(session.clients)) {
            try {
                client.close(1000, reason);
            }
            catch (error) {
                debugSuppressedError(log, "terminal websocket already closing during session reset", error, {
                    token: owner.token,
                    userId: owner.userId,
                    reason,
                });
            }
        }
        session.clients.clear();
        try {
            session.process.kill("SIGHUP");
        }
        catch (error) {
            debugSuppressedError(log, "terminal process already exited during session reset", error, {
                pid: session.process.pid ?? null,
                token: owner.token,
                userId: owner.userId,
                reason,
            });
        }
        this.sessions.delete(owner.token);
    }
    appendOutputHistory(session, chunk) {
        if (!chunk)
            return;
        session.outputHistory.push(chunk);
        session.outputHistoryBytes += Buffer.byteLength(chunk, "utf8");
        while (session.outputHistoryBytes > DEFAULT_TERMINAL_OUTPUT_HISTORY_LIMIT_BYTES && session.outputHistory.length > 1) {
            const removed = session.outputHistory.shift() || "";
            session.outputHistoryBytes -= Buffer.byteLength(removed, "utf8");
        }
        if (session.outputHistoryBytes < 0) {
            session.outputHistoryBytes = 0;
        }
    }
    getReplayOutput(session) {
        return session.outputHistory.length > 0 ? session.outputHistory.join("") : "";
    }
    clearReconnectGrace(session) {
        if (!session)
            return;
        session.reconnectGraceDeadlineAt = null;
        if (!session.reconnectGraceTimer)
            return;
        clearTimeout(session.reconnectGraceTimer);
        session.reconnectGraceTimer = null;
    }
    canResumeDetachedSession(owner, nowMs = Date.now()) {
        const session = this.sessions.get(owner.token);
        if (!session)
            return false;
        if (session.clients.size > 0)
            return false;
        const deadline = Number.isFinite(session.reconnectGraceDeadlineAt)
            ? Number(session.reconnectGraceDeadlineAt)
            : null;
        return deadline !== null && deadline >= nowMs;
    }
    scheduleReconnectGrace(session, nowMs = Date.now()) {
        this.clearReconnectGrace(session);
        if (!(this.reconnectGraceMs > 0)) {
            this.terminateDetachedSession(session, "last-client detach");
            return;
        }
        session.reconnectGraceDeadlineAt = nowMs + this.reconnectGraceMs;
        session.reconnectGraceTimer = setTimeout(() => {
            session.reconnectGraceTimer = null;
            const current = this.sessions.get(session.owner.token);
            if (current?.id !== session.id)
                return;
            if (session.clients.size > 0) {
                this.clearReconnectGrace(session);
                return;
            }
            if (this.hasPendingHandoff(session.owner)) {
                this.clearReconnectGrace(session);
                return;
            }
            this.terminateDetachedSession(session, "last-client detach");
        }, this.reconnectGraceMs);
    }
    terminateDetachedSession(session, reason) {
        this.clearReconnectGrace(session);
        try {
            session.process.kill("SIGHUP");
        }
        catch (error) {
            debugSuppressedError(log, "terminal process already exited during detached session cleanup", error, {
                pid: session.process.pid ?? null,
                token: session.owner.token,
                userId: session.owner.userId,
                sessionId: session.id,
                reason,
            });
        }
        const current = this.sessions.get(session.owner.token);
        if (current?.id === session.id) {
            this.sessions.delete(session.owner.token);
        }
    }
    broadcast(session, payload) {
        const encoded = JSON.stringify(payload);
        for (const client of Array.from(session.clients)) {
            this.send(client, encoded, true);
        }
    }
    send(ws, payload, preEncoded = false) {
        try {
            ws.send(preEncoded ? payload : JSON.stringify(payload));
        }
        catch (error) {
            debugSuppressedError(log, "failed to send terminal websocket payload", error, { token: ws.data?.token ?? null, userId: ws.data?.userId ?? null });
        }
    }
}
