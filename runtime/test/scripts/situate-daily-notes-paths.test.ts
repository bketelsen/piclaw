import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import path from "node:path";

const REPO_ROOT = path.resolve(import.meta.dir, "../../..");

const TARGET_FILES = [
  "skel/.pi/skills/situate-daily-notes/SKILL.md",
  "skel/.pi/skills/situate-daily-notes/situate.ts",
  "skel/.pi/skills/situate-daily-notes/daily-notes.ts",
  "skel/.pi/skills/situate-daily-notes/agent-memory-sidecar.ts",
  "workspace/.pi/skills/situate-daily-notes/SKILL.md",
  "workspace/.pi/skills/situate-daily-notes/situate.ts",
  "workspace/.pi/skills/situate-daily-notes/daily-notes.ts",
  "workspace/.pi/skills/situate-daily-notes/agent-memory-sidecar.ts",
  "skel/scripts/situate.ts",
  "skel/scripts/daily-notes.ts",
  "skel/scripts/lib/agent-memory-sidecar.ts",
];

describe("situate daily notes path defaults", () => {
  test("targeted repo files do not keep legacy /workspace path assumptions", () => {
    for (const relativePath of TARGET_FILES) {
      const source = readFileSync(path.join(REPO_ROOT, relativePath), "utf8");
      expect(source).not.toContain("/workspace");
      expect(source).not.toContain("PICLAW_WORKSPACE");
    }
  });
});
