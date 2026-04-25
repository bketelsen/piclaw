/**
 * test/scripts/codemirror-vendor.test.ts – Smoke tests for the
 * checked-in CodeMirror vendor bundle.
 */

import { expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const REPO_ROOT = resolve(import.meta.dir, "../../..");
const BUNDLE_PATH = join(REPO_ROOT, "runtime/web/static/js/vendor/codemirror.js");
const PACKAGE_JSON_PATH = join(REPO_ROOT, "package.json");

test("checked-in codemirror vendor bundle is present", () => {
  expect(existsSync(BUNDLE_PATH)).toBe(true);

  const bundle = readFileSync(BUNDLE_PATH, "utf8");
  expect(bundle).toContain("@codemirror/state");
  expect(bundle).toContain("EditorState");
});

test("package.json keeps codemirror pinned for the shipped bundle", () => {
  const pkg = JSON.parse(readFileSync(PACKAGE_JSON_PATH, "utf8")) as {
    devDependencies?: Record<string, string>;
  };

  expect(pkg.devDependencies?.codemirror).toBe("6.0.2");
});

test("codemirror vendor bundle exports EditorState and minimalSetup compatibly", async () => {
  const mod = await import(pathToFileURL(BUNDLE_PATH).href) as {
    EditorState: { create: (input: { doc: string; extensions: unknown[] }) => unknown };
    minimalSetup: unknown;
  };

  expect(typeof mod.EditorState?.create).toBe("function");
  expect(mod.minimalSetup).toBeDefined();
  expect(() => mod.EditorState.create({ doc: "hello", extensions: [mod.minimalSetup] })).not.toThrow();
});
