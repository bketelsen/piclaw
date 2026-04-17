import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const INSTALL_SCRIPT_PATH = resolve(import.meta.dir, "../../../scripts/docker/install-agent-runtime.sh");

test("install-agent-runtime pins and verifies the Homebrew bootstrap script", () => {
  const script = readFileSync(INSTALL_SCRIPT_PATH, "utf8");

  expect(script).toMatch(/HOMEBREW_INSTALL_COMMIT="[0-9a-f]{40}"/);
  expect(script).toMatch(/HOMEBREW_INSTALL_SCRIPT_SHA256="[0-9a-f]{64}"/);
  expect(script).toContain('https://raw.githubusercontent.com/Homebrew/install/${HOMEBREW_INSTALL_COMMIT}/install.sh');
  expect(script).toContain('actual_brew_install_sha256=$(sha256sum "$BREW_INSTALL_SCRIPT" | awk \'{print $1}\')');
  expect(script).toContain('if [ "$actual_brew_install_sha256" != "$HOMEBREW_INSTALL_SCRIPT_SHA256" ]; then');
  expect(script).not.toContain("https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh");
});
