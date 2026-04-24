import { describe, expect, test } from "bun:test";

import { createRuntimeSenders } from "../../src/runtime/wiring.js";

describe("runtime wiring", () => {
  test("createRuntimeSenders routes web chat messages to web channel", async () => {
    const webCalls: Array<{ jid: string; text: string; source?: string }> = [];

    const senders = createRuntimeSenders({
      sendMessage: async (jid, text, options) => {
        webCalls.push({ jid, text, source: options?.source });
      },
      resumeChat: () => {},
      resumePendingChats: () => {},
    });

    await senders.sendMessage("web:default", "hello", { source: "scheduled" });

    expect(webCalls).toHaveLength(1);
    expect(webCalls[0]).toEqual({ jid: "web:default", text: "hello", source: "scheduled" });
  });

  test("createRuntimeSenders ignores non-web chat messages", async () => {
    const webCalls: Array<{ jid: string; text: string }> = [];

    const senders = createRuntimeSenders({
      sendMessage: async (jid, text) => {
        webCalls.push({ jid, text });
      },
      resumeChat: () => {},
      resumePendingChats: () => {},
    });

    await senders.sendMessage("12345@s.whatsapp.net", "hi");

    expect(webCalls).toHaveLength(0);
    expect(senders.sendNudge).toBeUndefined();
  });
});
