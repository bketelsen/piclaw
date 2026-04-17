import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const README_PATH = resolve(import.meta.dir, "../../..", "README.md");

test("README quick start uses docker --init for cleaner container shutdown", () => {
  const readme = readFileSync(README_PATH, "utf8");

  expect(readme).toContain("docker run -d \\\n  --init \\");
  expect(readme).toContain("The bundled `docker-compose.yml` now sets the equivalent `init: true` flag.");
});
