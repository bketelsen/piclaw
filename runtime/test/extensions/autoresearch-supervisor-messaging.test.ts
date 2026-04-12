import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

test("autoresearch supervisor messaging describes git worktree mode instead of direct in-repo edits", () => {
  const source = readFileSync(resolve(import.meta.dir, "../../src/extensions/autoresearch-supervisor.ts"), "utf8");
  expect(source).toContain("When off, runs in a fresh git worktree on a new branch in the same repo.");
  expect(source).toContain("Branch: ${branchName} (git worktree mode)");
  expect(source).toContain("⚠️ Git worktree mode — changes are made in a fresh git worktree on branch ${branchName} within the same repo.");
  expect(source).not.toContain("runs directly in the repo on a new git branch");
  expect(source).not.toContain("Branch: ${branchName} (direct mode)");
});
