import { expect, test } from "bun:test";
import { mkdtempSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";

const TEST_SHELL = "bash";
const ENTRYPOINT_PATH = resolve(import.meta.dir, "../../..", "entrypoint.sh");

function writeConfig(path: string, content: string): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content);
}

function syncWorkspaceSupervisorDefaults(defaultsDir: string, workspaceDir: string, manifestPath: string) {
  return Bun.spawnSync(
    [
      TEST_SHELL,
      "-lc",
      `set -euo pipefail
source <(awk '/^record_runtime_ids\\(\\)/{exit} {print}' ${JSON.stringify(ENTRYPOINT_PATH)})
sync_workspace_supervisor_defaults ${JSON.stringify(defaultsDir)} ${JSON.stringify(workspaceDir)} ${JSON.stringify(manifestPath)}
`,
    ],
    {
      stdout: "pipe",
      stderr: "pipe",
    },
  );
}

test("workspace supervisor defaults reseed once and preserve later customizations", () => {
  const base = mkdtempSync(join(tmpdir(), "piclaw-supervisor-sync-"));
  const defaultsDir = join(base, "defaults");
  const workspaceDir = join(base, "workspace");
  const manifestPath = join(workspaceDir, ".defaults-manifest");
  const workspaceMain = join(workspaceDir, "supervisord.conf");
  const workspaceService = join(workspaceDir, "conf.d", "piclaw.conf");
  const defaultsMain = join(defaultsDir, "supervisord.conf");
  const defaultsService = join(defaultsDir, "conf.d", "piclaw.conf");

  try {
    writeConfig(defaultsMain, "main=v1\n");
    writeConfig(defaultsService, "service=v1\n");
    writeConfig(workspaceMain, "workspace-old-main\n");
    writeConfig(workspaceService, "workspace-old-service\n");

    const firstSync = syncWorkspaceSupervisorDefaults(defaultsDir, workspaceDir, manifestPath);
    expect(firstSync.exitCode, firstSync.stderr.toString() || firstSync.stdout.toString()).toBe(0);

    expect(readFileSync(workspaceMain, "utf8")).toBe("main=v1\n");
    expect(readFileSync(workspaceService, "utf8")).toBe("service=v1\n");
    expect(readdirSync(workspaceDir).some((name) => name.startsWith("supervisord.conf.preseed."))).toBe(true);
    expect(readdirSync(join(workspaceDir, "conf.d")).some((name) => name.startsWith("piclaw.conf.preseed."))).toBe(true);

    const manifest = readFileSync(manifestPath, "utf8");
    expect(manifest).toContain("supervisord.conf\t");
    expect(manifest).toContain("conf.d/piclaw.conf\t");

    writeConfig(defaultsMain, "main=v2\n");
    writeConfig(defaultsService, "service=v2\n");
    writeConfig(workspaceService, "service=custom\n");

    const secondSync = syncWorkspaceSupervisorDefaults(defaultsDir, workspaceDir, manifestPath);
    expect(secondSync.exitCode, secondSync.stderr.toString() || secondSync.stdout.toString()).toBe(0);

    expect(readFileSync(workspaceMain, "utf8")).toBe("main=v2\n");
    expect(readFileSync(workspaceService, "utf8")).toBe("service=custom\n");
  } finally {
    rmSync(base, { recursive: true, force: true });
  }
});
