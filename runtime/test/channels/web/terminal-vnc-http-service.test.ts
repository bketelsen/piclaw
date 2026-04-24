import { describe, expect, test } from "bun:test";

import {
  WebTerminalVncHttpService,
  type WebTerminalVncHttpServiceDeps,
} from "../../../src/channels/web/terminal-vnc-http-service.js";

function json(payload: unknown, status = 200): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function createRequest(path: string, init: RequestInit = {}): Request {
  return new Request(`http://localhost${path}`, {
    headers: {
      origin: "http://localhost",
      host: "localhost",
      ...(init.headers || {}),
    },
    ...init,
  });
}

function createFixture(overrides: Partial<WebTerminalVncHttpServiceDeps> = {}) {
  const state = {
    authChecks: [] as string[],
    terminalResolveCalls: [] as boolean[],
    terminalSessionInfoOwners: [] as Array<{ token: string; userId: string }>,
    terminalHandoffCalls: [] as boolean[],
    csrfChecks: [] as string[],
  };

  const terminalOwner = { kind: "terminal" as const, token: "terminal-token", userId: "user-1" };

  const deps: WebTerminalVncHttpServiceDeps = {
    webRuntimeConfig: {
      terminalEnabled: true,
    },
    json,
    authGateway: {
      isAuthEnabled: () => {
        state.authChecks.push("enabled");
        return false;
      },
      isAuthenticated: () => {
        state.authChecks.push("authenticated");
        return true;
      },
    },
    terminalService: {
      resolveOwnerFromRequest: (_req, allowUnauthenticated = false) => {
        state.terminalResolveCalls.push(allowUnauthenticated);
        return terminalOwner;
      },
      getSessionInfo: (owner) => {
        state.terminalSessionInfoOwners.push({ token: owner.token, userId: owner.userId });
        return { enabled: true, transport: "websocket", ws_path: "/terminal/ws", owner: owner.token };
      },
      createHandoffFromRequest: (_req, allowUnauthenticated = false) => {
        state.terminalHandoffCalls.push(allowUnauthenticated);
        return { token: "terminal-handoff-1", expires_at: "2026-03-27T00:00:00.000Z" };
      },
    },
    checkCsrfOrigin: (req) => {
      state.csrfChecks.push(new URL(req.url).pathname);
      return true;
    },
    ...overrides,
  };

  return {
    state,
    terminalOwner,
    service: new WebTerminalVncHttpService(deps),
  };
}

describe("web terminal/VNC HTTP service", () => {
  test("terminal session preserves auth gating and owner/session-info delegation", async () => {
    const disabled = createFixture({
      webRuntimeConfig: { terminalEnabled: false },
    });
    const disabledResponse = disabled.service.handleTerminalSession(createRequest("/terminal/session"));
    expect(disabledResponse.status).toBe(200);
    expect(await disabledResponse.json()).toEqual({ enabled: false, error: "Web terminal is disabled." });

    const unauthenticated = createFixture({
      authGateway: {
        isAuthEnabled: () => true,
        isAuthenticated: () => false,
      },
    });
    expect(unauthenticated.service.handleTerminalSession(createRequest("/terminal/session")).status).toBe(401);
    expect(unauthenticated.state.terminalResolveCalls).toEqual([]);

    const fixture = createFixture();
    const response = fixture.service.handleTerminalSession(createRequest("/terminal/session"));
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      enabled: true,
      transport: "websocket",
      ws_path: "/terminal/ws",
      owner: "terminal-token",
    });
    expect(fixture.state.authChecks).toEqual(["enabled"]);
    expect(fixture.state.terminalResolveCalls).toEqual([true]);
    expect(fixture.state.terminalSessionInfoOwners).toEqual([{ token: "terminal-token", userId: "user-1" }]);
  });

  test("terminal handoff preserves auth, CSRF, and live-session transfer behavior", async () => {
    const disabled = createFixture({
      webRuntimeConfig: { terminalEnabled: false },
    });
    expect((await disabled.service.handleTerminalHandoff(createRequest("/terminal/handoff", { method: "POST" }))).status).toBe(404);

    const unauthenticated = createFixture({
      authGateway: {
        isAuthEnabled: () => true,
        isAuthenticated: () => false,
      },
    });
    expect((await unauthenticated.service.handleTerminalHandoff(createRequest("/terminal/handoff", { method: "POST" }))).status).toBe(401);
    expect(unauthenticated.state.csrfChecks).toEqual([]);

    const csrfBlocked = createFixture({
      checkCsrfOrigin: () => false,
    });
    expect((await csrfBlocked.service.handleTerminalHandoff(createRequest("/terminal/handoff", { method: "POST" }))).status).toBe(403);
    expect(csrfBlocked.state.terminalHandoffCalls).toEqual([]);

    const noLiveSession = createFixture({
      terminalService: {
        resolveOwnerFromRequest: (_req, allowUnauthenticated = false) => {
          noLiveSession.state.terminalResolveCalls.push(allowUnauthenticated);
          return noLiveSession.terminalOwner;
        },
        getSessionInfo: (owner) => ({ enabled: true, transport: "websocket", ws_path: "/terminal/ws", owner: owner.token }),
        createHandoffFromRequest: (_req, allowUnauthenticated = false) => {
          noLiveSession.state.terminalHandoffCalls.push(allowUnauthenticated);
          return null;
        },
      },
    });
    expect((await noLiveSession.service.handleTerminalHandoff(createRequest("/terminal/handoff", { method: "POST" }))).status).toBe(409);
    expect(noLiveSession.state.terminalHandoffCalls).toEqual([true]);

    const fixture = createFixture();
    const response = await fixture.service.handleTerminalHandoff(createRequest("/terminal/handoff", { method: "POST" }));
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      ok: true,
      handoff: { token: "terminal-handoff-1", expires_at: "2026-03-27T00:00:00.000Z" },
    });
    expect(fixture.state.authChecks).toEqual(["enabled"]);
    expect(fixture.state.csrfChecks).toEqual(["/terminal/handoff"]);
    expect(fixture.state.terminalHandoffCalls).toEqual([true]);
  });

});
