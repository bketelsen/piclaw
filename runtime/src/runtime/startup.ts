/**
 * runtime/startup.ts – Runtime startup wiring helpers.
 */

import { copyFileSync, cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync, writeFileSync } from "fs";
import { dirname, join, resolve } from "path";
import type { AgentPool } from "../agent-pool.js";
import { TELEGRAM_BOT_TOKEN } from "../core/config.js";
import { TelegramChannel } from "../channels/telegram.js";
import { WebChannel } from "../channels/web.js";
import { setMessagesPostFn } from "../extensions/messages-crud.js";
import {
  DATA_DIR,
  PICLAW_HOME,
  STORE_DIR,
  getToolOutputConfig,
} from "../core/config.js";
import { createTask, getDb, getTaskById, initDatabase } from "../db.js";
import type { AgentQueue } from "../queue.js";
import { computeNextRun } from "../task-scheduler-utils.js";
import { startToolOutputCleanup } from "../tool-output.js";
import { createUuid } from "../utils/ids.js";
import { createLogger } from "../utils/logger.js";
import { patchConsoleTimestamps } from "./console-timestamps.js";
import type { RuntimeState } from "./state.js";
import { launchWorkspaceIndexProcess } from "../workspace-index-process.js";
import { loadAgentDefinitions, setLoadedAgentDefinitions } from "../agents/agent-definition.js";
import { SystemMetricsSampler } from "../channels/web/agent/system-metrics.js";

const log = createLogger("runtime.startup");
const WORKSPACE_SKEL_DIR = resolve(import.meta.dir, "../../../skel");
const STARTUP_MEMORY_SNAPSHOT_DIR = join(DATA_DIR, "startup-memory-snapshots");
const DEFAULT_SCHEDULED_TASK_CHAT_JID = "web:default";

function parseStartupWarmupBoolean(value: string | undefined, fallback = false): boolean {
  const normalized = String(value || "").trim().toLowerCase();
  if (!normalized) return fallback;
  if (["1", "true", "yes", "on"].includes(normalized)) return true;
  if (["0", "false", "no", "off"].includes(normalized)) return false;
  return fallback;
}

function parseStartupWarmupLimit(value: string | undefined, fallback = 0): number {
  const parsed = Number.parseInt(String(value || "").trim(), 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(0, Math.min(8, parsed));
}
const BOOTSTRAP_ENTRIES = [
  "AGENTS.md",
  ".mcp.json.example",
  ".pi/skills",
  ".pi/agents",
  ".pi/mcp.json.example",
  "README.md",
  "config.json.example",
  "cog/memory/domains.yml",
  "cog/memory/hot-memory.md",
  "cog/memory/cog-meta/patterns.md",
  "cog/memory/cog-meta/self-observations.md",
  "cog/memory/cog-meta/improvements.md",
  "cog/memory/cog-meta/foresight-nudge.md",
  "cog/memory/cog-meta/scenarios/.gitkeep",
  "cog/memory/personal/hot-memory.md",
  "cog/memory/personal/observations.md",
  "cog/memory/personal/action-items.md",
  "cog/memory/personal/entities.md",
  "cog/memory/glacier/.gitkeep",
  "notes/index.md",
  "notes/memory/README.md",
  "notes/daily/.gitkeep",
  "notes/memory/days/.gitkeep",
  "notes/preferences/.gitkeep",
] as const;

const DEFAULT_COG_SCHEDULED_TASKS = [
  {
    id: "cog-reflect",
    prompt: "Run the cog-reflect skill now. Mine recent conversations for patterns, update patterns.md, append to self-observations.md, and update the reflect cursor.",
    schedule_value: "0 2 * * *",
  },
  {
    id: "cog-housekeeping",
    prompt: "Run the cog-housekeeping skill now. Archive old observations to glacier, prune hot-memory files to <50 lines, rebuild link-index.md, regenerate glacier/index.md.",
    schedule_value: "0 3 * * 0",
  },
  {
    id: "cog-foresight",
    prompt: "Run the cog-foresight skill now. Read across all domains and synthesize one concrete strategic nudge into cog-meta/foresight-nudge.md.",
    schedule_value: "0 7 * * *",
  },
] as const;

function sanitizeSessionDirName(chatJid: string): string {
  return String(chatJid || "").replace(/[^a-zA-Z0-9._-]/g, "_");
}

function isDirectoryEmpty(path: string): boolean {
  try {
    return readdirSync(path).length === 0;
  } catch {
    return false;
  }
}

export function cleanupOrphanedActiveChatArtifacts(): number {
  const db = getDb();
  const rows = db.prepare(
    `SELECT b.chat_jid
       FROM chat_branches b
       LEFT JOIN chat_cursors cc ON cc.chat_jid = b.chat_jid
       LEFT JOIN (
         SELECT chat_jid, COUNT(*) AS cnt
           FROM messages
          GROUP BY chat_jid
       ) m ON m.chat_jid = b.chat_jid
      WHERE b.archived_at IS NULL
        AND cc.chat_jid IS NULL
        AND COALESCE(m.cnt, 0) = 0`
  ).all() as Array<{ chat_jid: string }>;

  let cleaned = 0;
  for (const row of rows) {
    const chatJid = String(row.chat_jid || "").trim();
    if (!chatJid) continue;

    const mainDir = join(DATA_DIR, "sessions", sanitizeSessionDirName(chatJid));
    const sideDir = join(DATA_DIR, "sessions", `${sanitizeSessionDirName(chatJid)}__btw-side`);
    const mainDirExists = existsSync(mainDir);
    const sideDirExists = existsSync(sideDir);
    const mainDirEmpty = !mainDirExists || isDirectoryEmpty(mainDir);
    const sideDirEmpty = !sideDirExists || isDirectoryEmpty(sideDir);

    if (!mainDirEmpty || !sideDirEmpty) {
      continue;
    }

    db.prepare("DELETE FROM chat_branches WHERE chat_jid = ?").run(chatJid);
    db.prepare("DELETE FROM chats WHERE jid = ?").run(chatJid);
    db.prepare("DELETE FROM token_usage WHERE chat_jid = ?").run(chatJid);

    if (mainDirExists) rmSync(mainDir, { recursive: true, force: true });
    if (sideDirExists) rmSync(sideDir, { recursive: true, force: true });

    cleaned += 1;
  }

  return cleaned;
}

function bootstrapWorkspaceFromSkel(): void {
  if (!existsSync(WORKSPACE_SKEL_DIR)) return;
  mkdirSync(PICLAW_HOME, { recursive: true });

  for (const entry of BOOTSTRAP_ENTRIES) {
    const source = join(WORKSPACE_SKEL_DIR, entry);
    const target = join(PICLAW_HOME, entry);
    if (!existsSync(source) || existsSync(target)) continue;

    mkdirSync(dirname(target), { recursive: true });
    try {
      if (statSync(source).isDirectory()) {
        cpSync(source, target, { recursive: true, force: false, errorOnExist: false });
      } else {
        copyFileSync(source, target);
      }
    } catch (error) {
      log.warn("Failed to seed workspace bootstrap entry", {
        operation: "workspace_bootstrap.seed",
        entry,
        err: error,
      });
    }
  }
}

function ensureDefaultCogScheduledTasks(): void {
  const createdAt = new Date().toISOString();

  for (const task of DEFAULT_COG_SCHEDULED_TASKS) {
    if (getTaskById(task.id)) continue;

    createTask({
      id: task.id,
      chat_jid: DEFAULT_SCHEDULED_TASK_CHAT_JID,
      prompt: task.prompt,
      task_kind: "agent",
      schedule_type: "cron",
      schedule_value: task.schedule_value,
      next_run: computeNextRun("cron", task.schedule_value, { currentDate: createdAt }),
      status: "active",
      created_at: createdAt,
    });
  }
}

/** Initialize directories, database, and persisted runtime state. */
export function initializeRuntimeEnvironment(state: RuntimeState): void {
  patchConsoleTimestamps();
  mkdirSync(STORE_DIR, { recursive: true });
  mkdirSync(DATA_DIR, { recursive: true });
  mkdirSync(PICLAW_HOME, { recursive: true });
  bootstrapWorkspaceFromSkel();

  initDatabase();
  ensureDefaultCogScheduledTasks();
  const cleanedOrphans = cleanupOrphanedActiveChatArtifacts();
  if (cleanedOrphans > 0) {
    log.info("Cleaned orphaned active chat artifacts at startup", {
      operation: "cleanup_orphaned_active_chat_artifacts",
      cleaned: cleanedOrphans,
    });
  }
  launchWorkspaceIndexProcess({ scope: "all" });
  setLoadedAgentDefinitions(loadAgentDefinitions());
  const toolOutputConfig = getToolOutputConfig();
  startToolOutputCleanup(toolOutputConfig.retentionMs, toolOutputConfig.cleanupIntervalMs);
  state.loadTimestamps();
  state.loadChats();
}

export function resolveStartupSessionWarmupOptions(env: NodeJS.ProcessEnv = process.env): {
  warmDefaultChat: boolean;
  recentLimit: number;
} {
  return {
    warmDefaultChat: parseStartupWarmupBoolean(env.PICLAW_STARTUP_WARM_DEFAULT_CHAT, false),
    recentLimit: parseStartupWarmupLimit(env.PICLAW_STARTUP_WARMUP_RECENT_LIMIT, 0),
  };
}

export function queueStartupSessionWarmup(
  agentPool: AgentPool & {
    scheduleChatWarmup?: (chatJid: string, options?: { priority?: boolean }) => boolean;
    scheduleRecentChatWarmup?: (options?: { limit?: number; excludeChatJids?: string[] }) => string[];
  },
  options: { defaultChatJid?: string; recentLimit?: number; warmDefaultChat?: boolean } = {},
): void {
  const defaultChatJid = typeof options.defaultChatJid === "string" && options.defaultChatJid.trim()
    ? options.defaultChatJid.trim()
    : "web:default";
  const warmDefaultChat = options.warmDefaultChat ?? false;
  const recentLimit = Math.max(0, Math.min(8, Math.trunc(options.recentLimit ?? 0) || 0));

  if (warmDefaultChat) {
    agentPool.scheduleChatWarmup?.(defaultChatJid, { priority: true });
  }
  if (recentLimit > 0) {
    agentPool.scheduleRecentChatWarmup?.({
      limit: recentLimit,
      excludeChatJids: warmDefaultChat ? [defaultChatJid] : [],
    });
  }
}

function sanitizeStartupSnapshotLabel(label: string): string {
  return label.trim().replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "startup";
}

export function captureStartupMemorySnapshot(
  agentPool: Pick<AgentPool, "getMemoryInstrumentationSnapshot">,
  options: { label?: string } = {},
): string | null {
  try {
    mkdirSync(STARTUP_MEMORY_SNAPSHOT_DIR, { recursive: true });
    const capturedAt = new Date();
    const stamp = capturedAt.toISOString().replace(/[:.]/g, "-");
    const label = sanitizeStartupSnapshotLabel(options.label || "startup");
    const filePath = join(STARTUP_MEMORY_SNAPSHOT_DIR, `${stamp}_${label}.json`);
    const sampler = new SystemMetricsSampler(1, 2000);
    const snapshot = sampler.readSnapshot(agentPool.getMemoryInstrumentationSnapshot());
    writeFileSync(filePath, `${JSON.stringify({
      captured_at: capturedAt.toISOString(),
      pid: process.pid,
      label,
      snapshot,
    }, null, 2)}\n`, "utf8");
    log.info("Captured startup memory snapshot", {
      operation: "startup_memory_snapshot.capture",
      filePath,
      label,
      rssBytes: snapshot.process_memory.rss_bytes,
      activeChats: snapshot.runtime_memory?.active_chats ?? null,
    });
    return filePath;
  } catch (error) {
    log.warn("Failed to capture startup memory snapshot", {
      operation: "startup_memory_snapshot.capture",
      label: options.label || "startup",
      err: error,
    });
    return null;
  }
}

/** Start web channel and run immediate crash-recovery bootstrap. */
export async function startWebChannel(queue: AgentQueue, agentPool: AgentPool): Promise<WebChannel> {
  const web = new WebChannel({ queue, agentPool });
  await web.start();
  captureStartupMemorySnapshot(agentPool, { label: "post-web-start" });
  queueStartupSessionWarmup(agentPool, resolveStartupSessionWarmupOptions());
  web.recoverInflightRuns();
  // Run an immediate pending-resume scan at startup so deferred queued
  // follow-ups are picked up even before IPC workers process resume tasks.
  // Queue dedupe keeps this safe when IPC-driven resume_pending runs too.
  web.resumePendingChats();

  // Wire the messages tool post action to use the web channel for broadcast.
  setMessagesPostFn((chatJid, content, isBot, mediaIds, contentBlocks) => {
    const interaction = web.storeMessage(chatJid, content, isBot, mediaIds, {
      contentBlocks,
    });
    if (!interaction) return null;
    web.broadcastEvent(isBot ? "agent_response" : "new_post", interaction);
    return interaction.id;
  });

  return web;
}

export async function startTelegramChannel(
  state: RuntimeState,
  queue: AgentQueue,
  agentPool: AgentPool,
): Promise<TelegramChannel | null> {
  if (!(process.env.PICLAW_TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN)) return null;
  const telegram = new TelegramChannel({ state, queue, agentPool });
  await telegram.start();
  return telegram;
}

/**
 * Queue a self-addressed IPC task to resume pending chats once background
 * workers and external channels are fully online.
 */
export function queueStartupResumePendingIpc(): void {
  try {
    const tasksDir = join(DATA_DIR, "ipc", "tasks");
    mkdirSync(tasksDir, { recursive: true });

    const payload = {
      type: "resume_pending",
      chatJid: "all",
      reason: "startup",
    };
    const filePath = join(tasksDir, `resume_pending_${createUuid("startup")}.json`);
    writeFileSync(filePath, JSON.stringify(payload));
    log.info("Queued startup resume_pending IPC", {
      operation: "queue_resume_pending_ipc",
      filePath,
    });
  } catch (error) {
    log.error("Failed to queue resume_pending IPC", {
      operation: "queue_resume_pending_ipc",
      err: error,
    });
  }
}
