import { afterEach, expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { AuthStorage, ModelRegistry, SettingsManager, getAgentDir } from "@mariozechner/pi-coding-agent";
import "../helpers.js";
import { importFresh, setEnv } from "../helpers.js";

let restoreEnv: (() => void) | null = null;

afterEach(() => {
  restoreEnv?.();
  restoreEnv = null;
});

test("createSessionInDir prepends PICLAW_HOME AGENTS.md ahead of project AGENTS.md", async () => {
  const root = mkdtempSync(join(tmpdir(), "piclaw-session-agents-"));
  const piclawHome = join(root, "home");
  const projectDir = join(root, "project");
  const sessionDir = join(root, "session");
  mkdirSync(piclawHome, { recursive: true });
  mkdirSync(projectDir, { recursive: true });
  writeFileSync(join(piclawHome, "AGENTS.md"), "# Home AGENTS\nhome instructions\n", "utf8");
  writeFileSync(join(projectDir, "AGENTS.md"), "# Project AGENTS\nproject instructions\n", "utf8");

  restoreEnv = setEnv({
    PICLAW_HOME: piclawHome,
    PICLAW_WORKSPACE: projectDir,
    PICLAW_STORE: join(piclawHome, "store"),
    PICLAW_DATA: join(piclawHome, "data"),
  });

  const authStorage = AuthStorage.create();
  const modelRegistry = ModelRegistry.inMemory(authStorage);
  const settingsManager = SettingsManager.create(piclawHome, getAgentDir());

  try {
    const { createSessionInDir } = await importFresh<typeof import("../../src/agent-pool/session.ts")>("../src/agent-pool/session.ts");
    const runtime = await createSessionInDir(sessionDir, {
      authStorage,
      modelRegistry,
      settingsManager,
      tools: [],
    });
    const agentsFiles = runtime.services.resourceLoader.getAgentsFiles().agentsFiles;

    expect(agentsFiles.map((file: { path: string }) => file.path)).toEqual([
      join(piclawHome, "AGENTS.md"),
      join(projectDir, "AGENTS.md"),
    ]);

    await runtime.dispose?.();
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
