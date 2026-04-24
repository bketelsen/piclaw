import { expect, test } from "bun:test";

import { importFresh, withTempWorkspaceEnv } from "../helpers.js";

function makeMessage(chatJid: string, content: string, timestamp: string) {
  return {
    id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    chat_jid: chatJid,
    sender: "user",
    sender_name: "User",
    content,
    timestamp,
    is_from_me: false,
    is_bot_message: false,
  };
}

test("processMessages leaves lastAgentTimestamp unchanged when runAgent throws", async () => {
  await withTempWorkspaceEnv("piclaw-message-loop-", { PICLAW_KEYCHAIN_KEY: "test-key" }, async () => {
    const db = await importFresh<typeof import("../../src/db.js")>("../src/db.js");
    const loop = await importFresh<typeof import("../../src/runtime/message-loop.js")>("../src/runtime/message-loop.js");
    db.initDatabase();

    const chatJid = `wa:${Date.now()}`;
    const timestamp = "2026-04-17T01:00:00.000Z";
    db.storeMessage(makeMessage(chatJid, "@Pi hello", timestamp));

    let saveCalls = 0;
    const state = {
      lastAgentTimestamp: {} as Record<string, string>,
      wasCommandProcessed: () => false,
      markCommandProcessed: () => {},
      saveTimestamps: () => {
        saveCalls += 1;
      },
    };

    await expect(loop.processMessages(chatJid, {
      state: state as any,
      assistantName: "Pi",
      triggerPattern: /@Pi/i,
      whatsapp: {
        sendMessage: async () => {},
        setTyping: async () => {},
      } as any,
      agentPool: {
        runAgent: async () => {
          throw new Error("agent crashed");
        },
      } as any,
    })).rejects.toThrow("agent crashed");

    expect(state.lastAgentTimestamp[chatJid]).toBeUndefined();
    expect(saveCalls).toBe(0);
  });
});

test("processMessages persists lastAgentTimestamp after a recovered successful agent run without changing outbound text", async () => {
  await withTempWorkspaceEnv("piclaw-message-loop-", { PICLAW_KEYCHAIN_KEY: "test-key" }, async () => {
    const db = await importFresh<typeof import("../../src/db.js")>("../src/db.js");
    const loop = await importFresh<typeof import("../../src/runtime/message-loop.js")>("../src/runtime/message-loop.js");
    db.initDatabase();

    const chatJid = `wa:${Date.now()}`;
    const timestamp = "2026-04-17T01:05:00.000Z";
    db.storeMessage(makeMessage(chatJid, "@Pi hello", timestamp));

    let saveCalls = 0;
    const outbound: string[] = [];
    const state = {
      lastAgentTimestamp: {} as Record<string, string>,
      wasCommandProcessed: () => false,
      markCommandProcessed: () => {},
      saveTimestamps: () => {
        saveCalls += 1;
      },
    };

    const ok = await loop.processMessages(chatJid, {
      state: state as any,
      assistantName: "Pi",
      triggerPattern: /@Pi/i,
      whatsapp: {
        sendMessage: async (_jid: string, text: string) => {
          outbound.push(text);
        },
        setTyping: async () => {},
      } as any,
      agentPool: {
        runAgent: async () => ({
          status: "success",
          result: "done",
          recovery: {
            attemptsUsed: 1,
            totalElapsedMs: 1200,
            recovered: true,
            exhausted: false,
            lastClassifier: "transient",
            strategyHistory: ["retry"],
          },
        }),
      } as any,
    });

    expect(ok).toBe(true);
    expect(state.lastAgentTimestamp[chatJid]).toBe(timestamp);
    expect(saveCalls).toBe(1);
    expect(outbound).toEqual(["done"]);
  });
});

test("processMessages persists lastAgentTimestamp after a successful agent run", async () => {
  await withTempWorkspaceEnv("piclaw-message-loop-", { PICLAW_KEYCHAIN_KEY: "test-key" }, async () => {
    const db = await importFresh<typeof import("../../src/db.js")>("../src/db.js");
    const loop = await importFresh<typeof import("../../src/runtime/message-loop.js")>("../src/runtime/message-loop.js");
    db.initDatabase();

    const chatJid = `wa:${Date.now()}`;
    const timestamp = "2026-04-17T01:05:00.000Z";
    db.storeMessage(makeMessage(chatJid, "@Pi hello", timestamp));

    let saveCalls = 0;
    const outbound: string[] = [];
    const state = {
      lastAgentTimestamp: {} as Record<string, string>,
      wasCommandProcessed: () => false,
      markCommandProcessed: () => {},
      saveTimestamps: () => {
        saveCalls += 1;
      },
    };

    const ok = await loop.processMessages(chatJid, {
      state: state as any,
      assistantName: "Pi",
      triggerPattern: /@Pi/i,
      whatsapp: {
        sendMessage: async (_jid: string, text: string) => {
          outbound.push(text);
        },
        setTyping: async () => {},
      } as any,
      agentPool: {
        runAgent: async () => ({
          status: "success",
          result: "done",
        }),
      } as any,
    });

    expect(ok).toBe(true);
    expect(state.lastAgentTimestamp[chatJid]).toBe(timestamp);
    expect(saveCalls).toBe(1);
    expect(outbound).toEqual(["done"]);
  });
});

test("processMessages marks control commands as processed without sending outbound control replies", async () => {
  await withTempWorkspaceEnv("piclaw-message-loop-", { PICLAW_KEYCHAIN_KEY: "test-key" }, async () => {
    const db = await importFresh<typeof import("../../src/db.js")>("../src/db.js");
    const loop = await importFresh<typeof import("../../src/runtime/message-loop.js")>("../src/runtime/message-loop.js");
    db.initDatabase();

    const chatJid = `web:${Date.now()}`;
    const messageId = `msg-control-${Date.now()}`;
    db.storeMessage({
      id: messageId,
      chat_jid: chatJid,
      sender: "user",
      sender_name: "User",
      content: "@Pi /model gpt-5-mini",
      timestamp: "2026-04-17T02:00:00.000Z",
      is_from_me: false,
      is_bot_message: false,
    });

    const processed: string[] = [];
    const outbound: string[] = [];
    const state = {
      lastAgentTimestamp: {} as Record<string, string>,
      wasCommandProcessed: () => false,
      markCommandProcessed: (_chatJid: string, id: string) => {
        processed.push(id);
      },
      saveTimestamps: () => {},
    };

    const ok = await loop.processMessages(chatJid, {
      state: state as any,
      assistantName: "Pi",
      triggerPattern: /@Pi/i,
      whatsapp: {
        sendMessage: async (_jid: string, text: string) => {
          outbound.push(text);
        },
        setTyping: async () => {},
      } as any,
      agentPool: {
        applyControlCommand: async () => ({
          status: "success",
          message: "model set",
        }),
      } as any,
    });

    expect(ok).toBe(true);
    expect(processed).toEqual([messageId]);
    expect(outbound).toEqual([]);
  });
});
