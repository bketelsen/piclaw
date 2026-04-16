import { expect, test } from "bun:test";

import {
  DEFAULT_SESSION_IDLE_SETTLE_TICKS,
  extractAssistantText,
  extractAssistantThinking,
  formatTimeoutDuration,
  toSideReasoning,
  waitForSessionIdle,
} from "../../src/agent-pool/prompt-utils.js";

test("prompt utils format timeout durations compactly", () => {
  expect(formatTimeoutDuration(500)).toBe("0.5s");
  expect(formatTimeoutDuration(5000)).toBe("5s");
  expect(formatTimeoutDuration(0)).toBe("0ms");
});

test("prompt utils extract assistant text and thinking blocks", () => {
  const message = {
    content: [
      { type: "text", text: "hello" },
      { type: "thinking", thinking: "plan" },
      { type: "text", text: " world" },
    ],
  };

  expect(extractAssistantText(message)).toBe("hello world");
  expect(extractAssistantThinking(message)).toBe("plan");
  expect(toSideReasoning("high")).toBe("high");
  expect(toSideReasoning("off")).toBeUndefined();
});

test("waitForSessionIdle uses a 1s default settle window", () => {
  expect(DEFAULT_SESSION_IDLE_SETTLE_TICKS).toBe(20);
});

test("waitForSessionIdle does not settle during a 600ms mid-run idle gap", async () => {
  const session = {
    isStreaming: true,
    isCompacting: false,
    isRetrying: false,
  };

  const waitPromise = waitForSessionIdle(session);

  setTimeout(() => {
    session.isStreaming = false;
  }, 0);

  // 600ms of apparent idle between phases.
  setTimeout(() => {
    session.isStreaming = true;
  }, 600);

  // Final completion after the second active phase.
  setTimeout(() => {
    session.isStreaming = false;
  }, 700);

  const result = await Promise.race([
    waitPromise.then(() => "settled"),
    Bun.sleep(650).then(() => "pending"),
  ]);

  expect(result).toBe("pending");
  await expect(waitPromise).resolves.toBeUndefined();
});
