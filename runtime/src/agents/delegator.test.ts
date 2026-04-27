/**
 * agents/delegator.test.ts – Unit tests for delegator.ts
 *
 * Tests @mention extraction, limit splitting, steer message formatting,
 * and task ID generation.
 */

import { describe, expect, test } from "bun:test";
import {
  applyLimit,
  extractDelegations,
  formatSteerMessage,
  taskIdFromPrompt,
} from "./delegator.js";

describe("extractDelegations", () => {
  test("extracts a known slug from response text", () => {
    const result = extractDelegations("Ask @coder to fix the bug.", ["coder", "researcher"]);
    expect(result).toHaveLength(1);
    expect(result[0]!.agentSlug).toBe("coder");
  });

  test("ignores unknown slugs", () => {
    const result = extractDelegations("Ask @unknown to do something.", ["coder", "researcher"]);
    expect(result).toHaveLength(0);
  });

  test("deduplicates — first mention wins", () => {
    const result = extractDelegations(
      "@coder do this. Then @coder do that.",
      ["coder"],
    );
    expect(result).toHaveLength(1);
    expect(result[0]!.agentSlug).toBe("coder");
  });

  test("extracts multiple distinct slugs", () => {
    const result = extractDelegations(
      "@coder implement it and @researcher find the docs.",
      ["coder", "researcher"],
    );
    expect(result).toHaveLength(2);
    expect(result.map((d) => d.agentSlug)).toEqual(["coder", "researcher"]);
  });

  test("sentence context contains the mention", () => {
    const response = "Please have @coder implement the feature.";
    const result = extractDelegations(response, ["coder"]);
    expect(result).toHaveLength(1);
    expect(result[0]!.task).toContain("@coder");
  });

  test("sentence context is trimmed to surrounding sentence", () => {
    const response = "First do this. Then @coder writes the tests. Done.";
    const result = extractDelegations(response, ["coder"]);
    expect(result[0]!.task).not.toContain("First do this");
    expect(result[0]!.task).toContain("@coder");
  });

  test("returns empty array when response is empty", () => {
    expect(extractDelegations("", ["coder"])).toHaveLength(0);
  });

  test("returns empty array when knownSlugs is empty", () => {
    expect(extractDelegations("@coder do it", [])).toHaveLength(0);
  });
});

describe("applyLimit", () => {
  const makeDelegations = (slugs: string[]) =>
    slugs.map((s) => ({ agentSlug: s, task: `task for ${s}` }));

  test("under limit: all go to immediate, queued is empty", () => {
    const { immediate, queued } = applyLimit(makeDelegations(["a", "b"]), 3);
    expect(immediate).toHaveLength(2);
    expect(queued).toHaveLength(0);
  });

  test("at limit: all go to immediate", () => {
    const { immediate, queued } = applyLimit(makeDelegations(["a", "b", "c"]), 3);
    expect(immediate).toHaveLength(3);
    expect(queued).toHaveLength(0);
  });

  test("over limit: splits correctly", () => {
    const { immediate, queued } = applyLimit(makeDelegations(["a", "b", "c", "d", "e"]), 3);
    expect(immediate).toHaveLength(3);
    expect(queued).toHaveLength(2);
    expect(immediate.map((d) => d.agentSlug)).toEqual(["a", "b", "c"]);
    expect(queued.map((d) => d.agentSlug)).toEqual(["d", "e"]);
  });

  test("default maxConcurrent is 3", () => {
    const { immediate, queued } = applyLimit(makeDelegations(["a", "b", "c", "d"]));
    expect(immediate).toHaveLength(3);
    expect(queued).toHaveLength(1);
  });
});

describe("formatSteerMessage", () => {
  test("formats with MILES DELEGATION prefix", () => {
    const result = formatSteerMessage({ agentSlug: "coder", task: "@coder write tests." });
    expect(result).toBe("[MILES DELEGATION] @coder write tests.");
  });
});

describe("taskIdFromPrompt", () => {
  test("same input produces same id", () => {
    const a = taskIdFromPrompt("implement feature X");
    const b = taskIdFromPrompt("implement feature X");
    expect(a).toBe(b);
  });

  test("different inputs produce different ids", () => {
    const a = taskIdFromPrompt("implement feature X");
    const b = taskIdFromPrompt("implement feature Y");
    expect(a).not.toBe(b);
  });

  test("id has expected prefix", () => {
    expect(taskIdFromPrompt("hello")).toMatch(/^task-[0-9a-f]+$/);
  });

  test("empty string produces a stable id", () => {
    const id = taskIdFromPrompt("");
    expect(typeof id).toBe("string");
    expect(id.startsWith("task-")).toBe(true);
    expect(taskIdFromPrompt("")).toBe(id);
  });
});
