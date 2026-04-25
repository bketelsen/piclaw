import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import path from "node:path";

const REPO_ROOT = path.resolve(import.meta.dir, "../../..");

const TARGET_FILES = [
  "workspace/.pi/skills/bootstrap-container/SKILL.md",
  "workspace/.pi/skills/bootstrap-container/bootstrap-container.sh",
  "workspace/.pi/skills/close-of-day/close-of-day.ts",
  "workspace/.pi/skills/close-of-day/SKILL.md",
  "workspace/.pi/skills/export-timeline-pdf/export-timeline-pdf.ts",
  "workspace/.pi/skills/export-timeline-pdf/SKILL.md",
  "workspace/.pi/skills/extension-design/SKILL.md",
  "workspace/.pi/skills/extension-troubleshoot/SKILL.md",
  "workspace/.pi/skills/feed-digest/feeds-digest.ts",
  "workspace/.pi/skills/feed-digest/SKILL.md",
  "workspace/.pi/skills/graphite-power-chart/graphite-power-chart.ts",
  "workspace/.pi/skills/graphite-power-chart/SKILL.md",
  "workspace/.pi/skills/kanban-management/kanban-board-svg.ts",
  "workspace/.pi/skills/kanban-management/SKILL.md",
  "workspace/.pi/skills/mcp-adapter/SKILL.md",
  "workspace/.pi/skills/playwright/SKILL.md",
  "workspace/.pi/skills/reload/restart-piclaw.sh",
  "workspace/.pi/skills/reload/SKILL.md",
  "workspace/.pi/skills/remote-peer/SKILL.md",
  "workspace/.pi/skills/timeline-cleanup/cleanup.ts",
  "workspace/.pi/skills/timeline-cleanup/SKILL.md",
  "workspace/.pi/skills/token-chart/SKILL.md",
  "workspace/.pi/skills/token-chart/token-chart.ts",
  "workspace/.pi/skills/twitter-summary/SKILL.md",
  "workspace/.pi/skills/web-search/SKILL.md",
  "workspace/.pi/skills/web-search-summary/SKILL.md",
  "workspace/.pi/skills/debug/SKILL.md",
  "workspace/.pi/skills/schedule/SKILL.md",
  "skel/.piclaw/README.md",
  "skel/.pi/extensions/context-mode.ts",
  "skel/README.md",
  "workspace/.piclaw/README.md",
];

describe("workspace path cleanup", () => {
  test("targeted skills, scripts, and docs do not keep legacy /workspace filesystem paths", () => {
    for (const relativePath of TARGET_FILES) {
      const source = readFileSync(path.join(REPO_ROOT, relativePath), "utf8");
      expect(source).not.toContain("/workspace");
    }
  });
});
