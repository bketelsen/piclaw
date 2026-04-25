import { afterEach, describe, expect, test } from "bun:test";
import { existsSync, readFileSync } from "fs";
import { join } from "path";

import "../helpers.js";
import { closeDbQuietly, createTempWorkspace, importFresh, setEnv } from "../helpers.js";

type FakeHandler = (ctx: any) => unknown;

class FakeTelegramBot {
  readonly handlers = new Map<string, FakeHandler[]>();
  readonly api = {
    sendMessage: async (chatId: number | string, text: string, options?: Record<string, unknown>) => {
      this.apiCalls.push({ method: "sendMessage", chatId, text, options });
      return {};
    },
    sendPhoto: async (chatId: number | string, file: unknown, options?: Record<string, unknown>) => {
      this.apiCalls.push({ method: "sendPhoto", chatId, file, options });
      return {};
    },
    sendDocument: async (chatId: number | string, file: unknown, options?: Record<string, unknown>) => {
      this.apiCalls.push({ method: "sendDocument", chatId, file, options });
      return {};
    },
    sendChatAction: async (chatId: number | string, action: string) => {
      this.apiCalls.push({ method: "sendChatAction", chatId, action });
      return {};
    },
    getFile: async (_fileId: string) => ({ file_path: "telegram/file.bin" }),
  };

  apiCalls: Array<Record<string, unknown>> = [];
  started = false;
  stopped = false;
  errorHandler: ((error: unknown) => unknown) | null = null;

  on(event: string, handler: FakeHandler): void {
    const list = this.handlers.get(event) ?? [];
    list.push(handler);
    this.handlers.set(event, list);
  }

  catch(handler: (error: unknown) => unknown): void {
    this.errorHandler = handler;
  }

  async start(): Promise<void> {
    this.started = true;
  }

  stop(): void {
    this.stopped = true;
  }

  async emit(event: string, ctx: any): Promise<void> {
    for (const handler of this.handlers.get(event) ?? []) {
      await handler(ctx);
    }
  }
}

let restoreEnv: (() => void) | null = null;

afterEach(() => {
  restoreEnv?.();
  restoreEnv = null;
});

describe("TelegramChannel", () => {
  test("registers authorized telegram chats, persists chats.json, and enqueues processing", async () => {
    const ws = createTempWorkspace("piclaw-telegram-");
    restoreEnv = setEnv({
      PICLAW_WORKSPACE: ws.workspace,
      PICLAW_STORE: ws.store,
      PICLAW_DATA: ws.data,
      PICLAW_TELEGRAM_BOT_TOKEN: "test-token",
      PICLAW_TELEGRAM_ALLOWED_USERS: "42",
    });

    let dbMod: any = null;
    try {
      dbMod = await importFresh("../src/db.js");
      dbMod.initDatabase();
      const { RuntimeState } = await importFresh<typeof import("../../src/runtime/state.js")>("../src/runtime/state.js");
      const { TelegramChannel } = await importFresh<typeof import("../../src/channels/telegram.js")>("../src/channels/telegram.js");

      const state = new RuntimeState(ws.data);
      const bot = new FakeTelegramBot();
      const processed: string[] = [];

      const channel = new TelegramChannel({
        state,
        queue: {
          enqueue: (fn: () => Promise<void>) => {
            void fn();
          },
        } as any,
        agentPool: {} as any,
        createBot: () => bot as any,
        processMessages: async (chatJid: string) => {
          processed.push(chatJid);
          return true;
        },
      });

      await channel.start();
      await bot.emit("message:text", {
        chat: { id: 123, type: "private" },
        from: { id: 42, first_name: "Alice" },
        msg: {
          message_id: 7,
          date: 1_700_000_000,
          text: "@PiClaw hello telegram",
        },
      });

      expect(bot.started).toBe(true);
      expect(state.chatJids.has("telegram:123")).toBe(true);
      expect(processed).toEqual(["telegram:123"]);

      const chatsFile = join(ws.data, "chats.json");
      expect(existsSync(chatsFile)).toBe(true);
      expect(JSON.parse(readFileSync(chatsFile, "utf8"))).toEqual({ jids: ["telegram:123"] });

      const chatRow = dbMod.getDb().prepare("SELECT jid FROM chats WHERE jid = ?").get("telegram:123");
      const messageRow = dbMod.getDb().prepare("SELECT chat_jid, content FROM messages WHERE chat_jid = ?").get("telegram:123");
      expect(chatRow).toEqual({ jid: "telegram:123" });
      expect(messageRow).toEqual({ chat_jid: "telegram:123", content: "@PiClaw hello telegram" });

      await channel.stop();
    } finally {
      closeDbQuietly(dbMod);
      ws.cleanup();
    }
  });

  test("ignores unauthorized telegram users", async () => {
    const ws = createTempWorkspace("piclaw-telegram-");
    restoreEnv = setEnv({
      PICLAW_WORKSPACE: ws.workspace,
      PICLAW_STORE: ws.store,
      PICLAW_DATA: ws.data,
      PICLAW_TELEGRAM_BOT_TOKEN: "test-token",
      PICLAW_TELEGRAM_ALLOWED_USERS: "42",
    });

    let dbMod: any = null;
    try {
      dbMod = await importFresh("../src/db.js");
      dbMod.initDatabase();
      const { RuntimeState } = await importFresh<typeof import("../../src/runtime/state.js")>("../src/runtime/state.js");
      const { TelegramChannel } = await importFresh<typeof import("../../src/channels/telegram.js")>("../src/channels/telegram.js");

      const state = new RuntimeState(ws.data);
      const bot = new FakeTelegramBot();
      const channel = new TelegramChannel({
        state,
        queue: { enqueue: () => {} } as any,
        agentPool: {} as any,
        createBot: () => bot as any,
      });

      await bot.emit("message:text", {
        chat: { id: 123, type: "private" },
        from: { id: 99, first_name: "Mallory" },
        msg: {
          message_id: 8,
          date: 1_700_000_001,
          text: "@PiClaw blocked",
        },
      });

      expect(state.chatJids.size).toBe(0);
      const row = dbMod.getDb().prepare("SELECT COUNT(*) AS count FROM messages").get() as { count: number };
      expect(row.count).toBe(0);
    } finally {
      closeDbQuietly(dbMod);
      ws.cleanup();
    }
  });

  test("stores inbound telegram documents as media attachments", async () => {
    const ws = createTempWorkspace("piclaw-telegram-");
    restoreEnv = setEnv({
      PICLAW_WORKSPACE: ws.workspace,
      PICLAW_STORE: ws.store,
      PICLAW_DATA: ws.data,
      PICLAW_TELEGRAM_BOT_TOKEN: "test-token",
      PICLAW_TELEGRAM_ALLOWED_USERS: "42",
    });

    let dbMod: any = null;
    try {
      dbMod = await importFresh("../src/db.js");
      dbMod.initDatabase();
      const { RuntimeState } = await importFresh<typeof import("../../src/runtime/state.js")>("../src/runtime/state.js");
      const { TelegramChannel } = await importFresh<typeof import("../../src/channels/telegram.js")>("../src/channels/telegram.js");

      const state = new RuntimeState(ws.data);
      const bot = new FakeTelegramBot();
      const channel = new TelegramChannel({
        state,
        queue: { enqueue: () => {} } as any,
        agentPool: {} as any,
        createBot: () => bot as any,
        downloadFile: async () => ({
          data: new TextEncoder().encode("hello"),
          contentType: "text/plain",
          filename: "note.txt",
        }),
      });

      await bot.emit("message:document", {
        chat: { id: 123, type: "private" },
        from: { id: 42, first_name: "Alice" },
        msg: {
          message_id: 9,
          date: 1_700_000_002,
          caption: "please read this",
          document: {
            file_id: "doc-1",
            file_name: "note.txt",
            mime_type: "text/plain",
          },
        },
      });

      const mediaRow = dbMod.getDb().prepare("SELECT filename, content_type FROM media").get();
      const linkedCount = dbMod.getDb().prepare("SELECT COUNT(*) AS count FROM message_media").get() as { count: number };
      expect(mediaRow).toEqual({ filename: "note.txt", content_type: "text/plain" });
      expect(linkedCount.count).toBe(1);
    } finally {
      closeDbQuietly(dbMod);
      ws.cleanup();
    }
  });

  test("sends telegram markdown text and attachments through the bot API", async () => {
    const ws = createTempWorkspace("piclaw-telegram-");
    restoreEnv = setEnv({
      PICLAW_WORKSPACE: ws.workspace,
      PICLAW_STORE: ws.store,
      PICLAW_DATA: ws.data,
      PICLAW_TELEGRAM_BOT_TOKEN: "test-token",
      PICLAW_TELEGRAM_ALLOWED_USERS: "42",
    });

    let dbMod: any = null;
    try {
      dbMod = await importFresh("../src/db.js");
      dbMod.initDatabase();
      const { RuntimeState } = await importFresh<typeof import("../../src/runtime/state.js")>("../src/runtime/state.js");
      const { createMedia } = await importFresh<typeof import("../../src/db/media.js")>("../src/db/media.js");
      const { TelegramChannel } = await importFresh<typeof import("../../src/channels/telegram.js")>("../src/channels/telegram.js");

      const imageId = createMedia("pic.png", "image/png", new Uint8Array([1, 2, 3]), null, null);
      const fileId = createMedia("report.txt", "text/plain", new TextEncoder().encode("report"), null, null);

      const state = new RuntimeState(ws.data);
      const bot = new FakeTelegramBot();
      const channel = new TelegramChannel({
        state,
        queue: { enqueue: () => {} } as any,
        agentPool: {} as any,
        createBot: () => bot as any,
      });

      await channel.sendMessage("telegram:123", "**Report**\n```ts\nconst x = 1;\n```", {
        mediaIds: [imageId, fileId],
        contentBlocks: [
          { type: "image", media_id: imageId, name: "pic.png", mime_type: "image/png" },
          { type: "file", media_id: fileId, name: "report.txt", mime_type: "text/plain" },
        ],
      });

      expect(bot.apiCalls[0]).toMatchObject({
        method: "sendPhoto",
        chatId: 123,
      });
      expect(bot.apiCalls[1]).toMatchObject({
        method: "sendDocument",
        chatId: 123,
      });
      expect(bot.apiCalls[0]?.options).toMatchObject({
        caption: "*Report*\n```\nconst x = 1;\n```",
        parse_mode: "Markdown",
      });
    } finally {
      closeDbQuietly(dbMod);
      ws.cleanup();
    }
  });
});
