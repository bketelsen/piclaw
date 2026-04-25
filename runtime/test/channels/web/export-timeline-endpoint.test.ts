import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { writeFileSync } from "fs";
import { createTempWorkspace, importFresh, setEnv } from "../../helpers.js";
import { debugSuppressedError } from "../../../src/utils/logger.js";
import { createLogger } from "../../../src/utils/logger.js";

const log = createLogger("test.export-timeline-endpoint");

let restoreEnv: (() => void) | null = null;
let cleanupWorkspace: (() => void) | null = null;
let workspaceRoot = "";
let db: typeof import("../../../src/db.js");
let exportEndpoint: typeof import("../../../src/channels/web/export/export-timeline-endpoint.js");

const runtimeDir = new URL("../../../", import.meta.url).pathname.replace(/\/$/, "");

beforeEach(async () => {
  const ws = createTempWorkspace("piclaw-export-timeline-");
  cleanupWorkspace = ws.cleanup;
  workspaceRoot = ws.workspace;
  restoreEnv = setEnv({
    PICLAW_WORKSPACE: ws.workspace,
    PICLAW_STORE: ws.store,
    PICLAW_DATA: ws.data,
  });

  db = await importFresh<typeof import("../../../src/db.js")>("../src/db.js");
  exportEndpoint = await importFresh<typeof import("../../../src/channels/web/export/export-timeline-endpoint.js")>("../src/channels/web/export/export-timeline-endpoint.js");
  db.initDatabase();
});

afterEach(() => {
  try {
    db?.closeDatabase?.();
  } catch (err) {
    debugSuppressedError(log, "Failed to close in-memory test DB handle; already closed.", err);
  }
  restoreEnv?.();
  cleanupWorkspace?.();
  restoreEnv = null;
  cleanupWorkspace = null;
});

describe("export timeline endpoint", () => {
  test("rejects non-loopback hosts", async () => {
    const response = exportEndpoint.handleExportTimeline(
      new Request("http://example.com/internal/export/timeline", {
        headers: { authorization: "Bearer secret123" },
      }),
      { runtimeDir, internalSecret: "secret123" },
    );

    expect(response.status).toBe(403);
    expect(await response.json()).toEqual({ error: "Export endpoint is localhost-only" });
  });

  test("rejects loopback requests without the internal secret", async () => {
    const response = exportEndpoint.handleExportTimeline(
      new Request("http://127.0.0.1/internal/export/timeline"),
      { runtimeDir, internalSecret: "secret123" },
    );

    expect(response.status).toBe(401);
    expect(await response.json()).toEqual({ error: "Unauthorized" });
  });

  test("renders printable HTML for the requested chat and last-N range", async () => {
    writeFileSync(`${workspaceRoot}/config.json`, `${JSON.stringify({
      assistant: { assistantName: "PiClaw" },
      user: { userName: "Bjørn" },
    }, null, 2)}\n`, "utf8");

    db.storeMessage({
      id: "msg-export-1",
      chat_jid: "web:default",
      sender: "user",
      sender_name: "User",
      content: "first message",
      timestamp: "2026-04-21T10:00:00.000Z",
      is_from_me: false,
      is_bot_message: false,
    });
    db.storeMessage({
      id: "msg-export-2",
      chat_jid: "web:default",
      sender: "agent",
      sender_name: "Smith",
      content: "second message",
      timestamp: "2026-04-21T10:01:00.000Z",
      is_from_me: true,
      is_bot_message: true,
    });
    db.storeMessage({
      id: "msg-export-3",
      chat_jid: "web:other",
      sender: "user",
      sender_name: "User",
      content: "other chat message",
      timestamp: "2026-04-21T10:02:00.000Z",
      is_from_me: false,
      is_bot_message: false,
    });

    const response = exportEndpoint.handleExportTimeline(
      new Request("http://127.0.0.1/internal/export/timeline?chat_jid=web%3Adefault&last=1&theme=dark", {
        headers: { authorization: "Bearer secret123" },
      }),
      { runtimeDir, internalSecret: "secret123" },
    );

    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toContain("text/html");

    const html = await response.text();
    expect(html).toContain('id="export-root"');
    expect(html).toContain('data-render-done="true"');
    expect(html).toContain('data-theme="dark"');
    expect(html).toContain('second message');
    expect(html).not.toContain('first message');
    expect(html).not.toContain('other chat message');
    expect(html).toContain('Messages: 1');
    expect(html).toContain("PiClaw");
  });
});
