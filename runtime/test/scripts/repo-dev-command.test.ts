import { expect, test } from "bun:test";
import { join, resolve } from "node:path";

import {
  createRepoDevCommandPlan,
  listMissingRepoBinaries,
  resolveRepoBinary,
} from "../../scripts/repo-dev-command.js";

const REPO_ROOT = resolve(import.meta.dir, "../../..");
const RUNTIME_DIR = join(REPO_ROOT, "runtime");

test("createRepoDevCommandPlan resolves repo-root binaries for build, lint, and typecheck", () => {
  const buildPlan = createRepoDevCommandPlan("build", RUNTIME_DIR);
  const lintPlan = createRepoDevCommandPlan("lint", RUNTIME_DIR);
  const typecheckPlan = createRepoDevCommandPlan("typecheck", RUNTIME_DIR);

  expect(buildPlan.cwd).toBe(RUNTIME_DIR);
  expect(buildPlan.binaryPath).toBe(join(REPO_ROOT, "node_modules/typescript/bin/tsc"));
  expect(buildPlan.args).toEqual(["-p", "tsconfig.json"]);
  expect(typeof buildPlan.preRun).toBe("function");
  expect(typeof buildPlan.postRun).toBe("function");

  expect(lintPlan.cwd).toBe(RUNTIME_DIR);
  expect(lintPlan.binaryPath).toBe(join(REPO_ROOT, "node_modules/eslint/bin/eslint.js"));
  expect(lintPlan.args).toEqual([
    "--config",
    join(RUNTIME_DIR, "eslint.config.js"),
    "src/**/*.ts",
    "test/**/*.ts",
  ]);

  expect(typecheckPlan.cwd).toBe(RUNTIME_DIR);
  expect(typecheckPlan.binaryPath).toBe(join(REPO_ROOT, "node_modules/typescript/bin/tsc"));
  expect(typecheckPlan.args).toEqual(["--noEmit", "-p", "tsconfig.json"]);
});

test("resolveRepoBinary points at the repo-local node_modules bin directory", () => {
  expect(resolveRepoBinary(REPO_ROOT, "tsc")).toBe(join(REPO_ROOT, "node_modules/typescript/bin/tsc"));
});

test("listMissingRepoBinaries reports missing tools from the repo-local bin directory", () => {
  const plan = {
    packageDir: "/tmp/piclaw-missing-bins",
    runtimeDir: "/tmp/piclaw-missing-bins/runtime",
    cwd: "/tmp/piclaw-missing-bins/runtime",
    binaryPath: "/tmp/piclaw-missing-bins/node_modules/.bin/eslint",
    args: [],
    requiredBinaries: ["eslint", "tsc"],
  };

  expect(listMissingRepoBinaries(plan)).toEqual(["eslint", "tsc"]);
});
