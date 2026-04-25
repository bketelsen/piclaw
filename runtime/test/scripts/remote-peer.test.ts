import { expect, test } from "bun:test";
import "../helpers.js";
import { mkdirSync, readFileSync, readdirSync, rmSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import Database from "bun:sqlite";

const REMOTE_PEER_SCRIPT = join(import.meta.dir, "..", "..", "skills", "builtin", "remote-peer", "peer.ts");

test("remote-peer defaults to HOME/.piclaw store and data paths", () => {
  const homeDir = join(tmpdir(), `piclaw-remote-peer-home-${Date.now()}`);
  const storeDir = join(homeDir, ".piclaw", "store");
  mkdirSync(storeDir, { recursive: true });

  const db = new Database(join(storeDir, "messages.db"));
  db.exec(`
    CREATE TABLE remote_requests (
      id TEXT PRIMARY KEY,
      peer_instance_id TEXT NOT NULL,
      request_type TEXT NOT NULL,
      remote_mode TEXT NOT NULL,
      prompt TEXT,
      status TEXT NOT NULL,
      decision TEXT,
      error TEXT,
      created_at TEXT NOT NULL
    )
  `);
  db.prepare(`
    INSERT INTO remote_requests (
      id, peer_instance_id, request_type, remote_mode, prompt, status, decision, error, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    "req-1",
    "peer-instance-1",
    "proposal",
    "full",
    "Test prompt",
    "pending",
    null,
    null,
    new Date().toISOString(),
  );
  db.close();

  const proc = Bun.spawnSync([
    "bun",
    REMOTE_PEER_SCRIPT,
    "decide",
    "req-1",
    "accept",
  ], {
    env: {
      ...process.env,
      HOME: homeDir,
      PICLAW_WORKSPACE: undefined,
      PICLAW_STORE: undefined,
      PICLAW_DATA: undefined,
    },
  });

  expect(proc.exitCode).toBe(0);
  expect(proc.stdout.toString()).toContain("queued for execution");

  const tasksDir = join(homeDir, ".piclaw", "data", "ipc", "tasks");
  const files = readdirSync(tasksDir).filter((name) => name.endsWith(".json"));
  expect(files.length).toBe(1);
  const payload = JSON.parse(readFileSync(join(tasksDir, files[0]), "utf8"));
  expect(payload).toEqual({ type: "execute_proposal", proposal_id: "req-1" });

  rmSync(homeDir, { recursive: true, force: true });
});
