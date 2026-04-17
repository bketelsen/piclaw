import { expect, test } from "bun:test";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

import { waitFor } from "../helpers.js";

const TEST_SHELL = process.env.SHELL || "bash";
const ENTRYPOINT_PATH = resolve(import.meta.dir, "../../..", "entrypoint.sh");

function processExists(pid: number): boolean {
  const probe = Bun.spawnSync([TEST_SHELL, "-lc", `kill -0 ${pid}`], { stdout: "pipe", stderr: "pipe" });
  return probe.exitCode === 0;
}

test("entrypoint forwards SIGTERM to supervisord when running as pid 1 shell", async () => {
  const base = mkdtempSync(join(tmpdir(), "piclaw-entrypoint-signal-"));
  const fakeSupervisord = join(base, "fake-supervisord.sh");
  const fakeConf = join(base, "supervisord.conf");
  const pidFile = join(base, "supervisord.pid");
  const signalFile = join(base, "signals.log");

  writeFileSync(fakeConf, "[supervisord]\nnodaemon=true\n", "utf8");
  writeFileSync(
    fakeSupervisord,
    `#!/usr/bin/env bash
set -euo pipefail
printf '%s\n' "$$" > ${JSON.stringify(pidFile)}
trap 'printf "TERM\\n" >> ${JSON.stringify(signalFile)}; exit 0' TERM
while true; do sleep 1; done
`,
    "utf8",
  );
  Bun.spawnSync(["chmod", "+x", fakeSupervisord]);

  const proc = Bun.spawn([
    TEST_SHELL,
    "-lc",
    `set -euo pipefail
source <(awk '/^apply_puid_pgid_remap$/{exit} {print}' ${JSON.stringify(ENTRYPOINT_PATH)})
SUPERVISORD_BIN=${JSON.stringify(fakeSupervisord)}
run_supervisord_managed ${JSON.stringify(fakeConf)}
`,
  ], {
    cwd: base,
    stdout: "pipe",
    stderr: "pipe",
  });

  let childPid = 0;

  try {
    await waitFor(() => {
      try {
        childPid = Number.parseInt(readFileSync(pidFile, "utf8").trim(), 10);
      } catch {
        childPid = 0;
      }
      return childPid > 0 && processExists(childPid);
    }, 5000, 100);

    proc.kill("SIGTERM");
    const exitCode = await proc.exited;
    expect([0, 143]).toContain(exitCode);

    await waitFor(() => !processExists(childPid), 5000, 100);
    expect(readFileSync(signalFile, "utf8")).toContain("TERM");
  } finally {
    if (!proc.killed) {
      proc.kill("SIGKILL");
      await proc.exited.catch(() => {});
    }
    rmSync(base, { recursive: true, force: true });
  }
});
