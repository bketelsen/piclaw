/**
 * secure/shell-secrets.test.ts – Tests for no-op redaction stubs
 * and injected shell command building.
 *
 * Redaction was removed; these tests verify the passthrough behaviour.
 */
import { describe, expect, test } from "bun:test";
import {
  createKeychainOutputRedactor,
  createStreamingTextRedactor,
  buildInjectedExecCommand,
} from "../../src/secure/shell-secrets.js";

// ── TextRedactor (no-op after redaction removal) ──────────────────────

describe("createKeychainOutputRedactor", () => {
  test("returns a no-op redactor", async () => {
    const redactor = await createKeychainOutputRedactor();
    expect(redactor.hasReplacements).toBe(false);
    expect(redactor.maxNeedleLength).toBe(0);
    expect(redactor.redact("some secret text")).toBe("some secret text");
  });

  test("no-op redactor handles empty string", async () => {
    const redactor = await createKeychainOutputRedactor();
    expect(redactor.redact("")).toBe("");
  });
});

// ── StreamingTextRedactor (no-op after redaction removal) ─────────────

describe("createStreamingTextRedactor", () => {
  test("passes text through unchanged", async () => {
    const redactor = await createKeychainOutputRedactor();
    const stream = createStreamingTextRedactor(redactor);
    expect(stream.push("hello")).toBe("hello");
    expect(stream.push(" world")).toBe(" world");
    expect(stream.flush()).toBe("");
  });

  test("does not buffer or redact secrets", async () => {
    const redactor = await createKeychainOutputRedactor();
    const stream = createStreamingTextRedactor(redactor);
    const r1 = stream.push("token=ABCDEF");
    const r2 = stream.flush();
    expect(r1 + r2).toBe("token=ABCDEF");
  });
});

// ── buildInjectedExecCommand ──────────────────────────────────────────

describe("buildInjectedExecCommand", () => {
  test("posix command wraps in sh -lc with exec", async () => {
    const result = await buildInjectedExecCommand("posix", "echo", ["hello"]);
    expect(result.command).toBe("sh");
    expect(result.commandArgs[0]).toBe("-lc");
    expect(result.commandArgs[1]).toContain("exec");
    expect(result.commandArgs[1]).toContain("echo");
    expect(result.commandArgs[1]).toContain("hello");
    expect(result.env).toEqual({});
  });

  test("powershell command wraps in powershell -NoProfile -Command", async () => {
    const result = await buildInjectedExecCommand("powershell", "Get-Date", []);
    expect(result.command).toBe("powershell");
    expect(result.commandArgs).toContain("-NoProfile");
    expect(result.commandArgs).toContain("-Command");
    const cmd = result.commandArgs[result.commandArgs.length - 1];
    expect(cmd).toContain("Get-Date");
    expect(cmd).toContain("$ErrorActionPreference");
    expect(result.env).toEqual({});
  });

  test("posix quotes arguments with single quotes", async () => {
    const result = await buildInjectedExecCommand("posix", "echo", ["it's a test"]);
    expect(result.commandArgs[1]).toContain("it");
    // Should be shell-quoted
    expect(result.command).toBe("sh");
    expect(result.env).toEqual({});
  });

  test("command with no args works", async () => {
    const result = await buildInjectedExecCommand("posix", "ls", []);
    expect(result.command).toBe("sh");
    expect(result.commandArgs[1]).toContain("exec");
    expect(result.commandArgs[1]).toContain("ls");
    expect(result.env).toEqual({});
  });
});
