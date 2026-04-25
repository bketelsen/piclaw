import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const README_PATH = resolve(import.meta.dir, "../../..", "README.md");

test("README quick start documents native PICLAW_HOME startup", () => {
  const readme = readFileSync(README_PATH, "utf8");

  expect(readme).toContain("### Native install");
  expect(readme).toContain('export PICLAW_HOME="${PICLAW_HOME:-$HOME/.piclaw}"');
  expect(readme).toContain("bun run start");
  expect(readme).not.toContain("docker run -d \\\n  --init \\");
});
