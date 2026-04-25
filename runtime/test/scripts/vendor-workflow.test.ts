import { expect, test } from "bun:test";
import { join, resolve } from "node:path";

import { findProjectPackageDir } from "../../scripts/vendor-workflow.js";

const REPO_ROOT = resolve(import.meta.dir, "../../..");
const RUNTIME_DIR = join(REPO_ROOT, "runtime");

test("findProjectPackageDir resolves the repo root from runtime scripts", () => {
  expect(findProjectPackageDir(RUNTIME_DIR)).toBe(REPO_ROOT);
});

test("findProjectPackageDir returns the package dir when already at repo root", () => {
  expect(findProjectPackageDir(REPO_ROOT)).toBe(REPO_ROOT);
});
