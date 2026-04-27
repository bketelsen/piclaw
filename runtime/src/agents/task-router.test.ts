/**
 * agents/task-router.test.ts – Unit tests for task-router.ts
 *
 * Tests TaskRouter.registerAgent, scoreMatch, findBestAgent, findCapableAgents,
 * and the module-private similarity function via observable behaviour.
 */

import { describe, expect, test } from "bun:test";
import { TaskRouter } from "./task-router.js";
import type { SkillDeclaration } from "./task-router.js";

// Helper to build a SkillDeclaration
function skill(name: string, proficiency = 0.9): SkillDeclaration {
  return { name, proficiency };
}

describe("TaskRouter.registerAgent + scoreMatch", () => {
  test("known agent with matching skill scores > 0", () => {
    const router = new TaskRouter();
    router.registerAgent("coder", [skill("typescript", 0.95)]);
    const score = router.scoreMatch("coder", { requiredSkills: ["typescript"] });
    expect(score).toBeGreaterThan(0);
  });

  test("unknown agent scores 0", () => {
    const router = new TaskRouter();
    const score = router.scoreMatch("nobody", { requiredSkills: ["typescript"] });
    expect(score).toBe(0);
  });

  test("empty requiredSkills returns 0", () => {
    const router = new TaskRouter();
    router.registerAgent("coder", [skill("typescript", 0.9)]);
    const score = router.scoreMatch("coder", { requiredSkills: [] });
    expect(score).toBe(0);
  });

  test("exact skill name match scores near proficiency", () => {
    const router = new TaskRouter();
    router.registerAgent("agent", [skill("go", 0.8)]);
    const score = router.scoreMatch("agent", { requiredSkills: ["go"] });
    // similarity("go","go") = 1 * 0.8 = 0.8 (but bigrams can differ — go has length 2, bigrams=["go"]=1)
    // similarity uses bigrams: "go" length is 2, so bigrams = ["go"]; exact match → 1.0
    expect(score).toBeCloseTo(0.8, 5);
  });

  test("unregistering an agent removes it from scoring", () => {
    const router = new TaskRouter();
    router.registerAgent("coder", [skill("typescript", 0.95)]);
    router.unregisterAgent("coder");
    expect(router.scoreMatch("coder", { requiredSkills: ["typescript"] })).toBe(0);
  });
});

describe("TaskRouter.findBestAgent", () => {
  test("returns the highest-scoring agent", () => {
    const router = new TaskRouter();
    router.registerAgent("coder", [skill("typescript", 0.95)]);
    router.registerAgent("researcher", [skill("research", 0.95)]);
    const result = router.findBestAgent({ requiredSkills: ["typescript"] });
    expect(result).not.toBeNull();
    expect(result!.agentSlug).toBe("coder");
  });

  test("returns null when no agent has a matching skill", () => {
    const router = new TaskRouter();
    router.registerAgent("coder", [skill("typescript", 0.95)]);
    // "quantum-physics" has zero overlap with "typescript"
    const result = router.findBestAgent({ requiredSkills: ["quantum-physics"] });
    expect(result).toBeNull();
  });

  test("returns null when router is empty", () => {
    const router = new TaskRouter();
    const result = router.findBestAgent({ requiredSkills: ["typescript"] });
    expect(result).toBeNull();
  });

  test("result has score > 0", () => {
    const router = new TaskRouter();
    router.registerAgent("coder", [skill("typescript", 0.8)]);
    const result = router.findBestAgent({ requiredSkills: ["typescript"] });
    expect(result!.score).toBeGreaterThan(0);
  });
});

describe("similarity (via scoreMatch behaviour)", () => {
  // We can't import similarity directly (module-private), so we test through scoreMatch.

  test("exact match skill returns max score", () => {
    const router = new TaskRouter();
    router.registerAgent("agent", [skill("typescript", 1.0)]);
    const score = router.scoreMatch("agent", { requiredSkills: ["typescript"] });
    // similarity("typescript","typescript") = 1.0 * 1.0 = 1.0
    expect(score).toBeCloseTo(1.0, 5);
  });

  test("empty-like skill name (single char) against itself returns 1", () => {
    // Single char has no bigrams — similarity falls back to string equality check.
    // "a" === "a" → 1; but proficiency 0.8 → score = 0.8 (if >= 0.3 threshold)
    const router = new TaskRouter();
    router.registerAgent("agent", [skill("a", 0.8)]);
    const score = router.scoreMatch("agent", { requiredSkills: ["a"] });
    expect(score).toBeCloseTo(0.8, 5);
  });

  test("known similar pairs (typescript vs typescripting) score > 0", () => {
    // "typescript" and "typescripting" share many bigrams → similarity > 0
    const router = new TaskRouter();
    router.registerAgent("agent", [skill("typescript", 1.0)]);
    const score = router.scoreMatch("agent", { requiredSkills: ["typescripting"] });
    expect(score).toBeGreaterThan(0);
  });

  test("completely dissimilar strings score 0 (below 0.3 threshold)", () => {
    const router = new TaskRouter();
    router.registerAgent("agent", [skill("xyz", 1.0)]);
    // "abc" and "xyz" share no bigrams
    const score = router.scoreMatch("agent", { requiredSkills: ["abc"] });
    expect(score).toBe(0);
  });

  test("findCapableAgents returns sorted descending by score", () => {
    const router = new TaskRouter();
    router.registerAgent("good", [skill("typescript", 0.95), skill("bun", 0.9)]);
    router.registerAgent("ok", [skill("typescript", 0.5)]);
    const results = router.findCapableAgents({ requiredSkills: ["typescript"] });
    expect(results.length).toBeGreaterThanOrEqual(2);
    for (let i = 1; i < results.length; i++) {
      expect(results[i - 1]!.score).toBeGreaterThanOrEqual(results[i]!.score);
    }
  });
});
