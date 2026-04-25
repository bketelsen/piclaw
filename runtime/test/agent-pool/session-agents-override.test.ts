import { afterEach, expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import "../helpers.js";
import { setEnv } from "../helpers.js";

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

  try {
    const proc = Bun.spawnSync(
      [
        "bun",
        "-e",
        `import { AuthStorage, ModelRegistry, SettingsManager, getAgentDir } from "@mariozechner/pi-coding-agent";
         import { createSessionInDir } from "./src/agent-pool/session.ts";
         const authStorage = AuthStorage.create();
         const modelRegistry = ModelRegistry.inMemory(authStorage);
         const settingsManager = SettingsManager.create(process.env.PICLAW_HOME, getAgentDir());
         const runtime = await createSessionInDir(process.env.TEST_SESSION_DIR, {
           authStorage,
           modelRegistry,
           settingsManager,
           tools: [],
         });
         const agentsFiles = runtime.services.resourceLoader.getAgentsFiles().agentsFiles;
         console.log(JSON.stringify(agentsFiles.map((file) => file.path)));
         await runtime.dispose?.();`,
      ],
      {
        cwd: join(import.meta.dir, "..", ".."),
        env: {
          ...process.env,
          TEST_SESSION_DIR: sessionDir,
        },
      },
    );

    expect(proc.exitCode, proc.stderr.toString()).toBe(0);
    expect(JSON.parse(proc.stdout.toString())).toEqual([
      join(piclawHome, "AGENTS.md"),
      join(projectDir, "AGENTS.md"),
    ]);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
