/**
 * channels/telegram.ts – Telegram Bot API channel adapter using grammY.
 */

import { Bot, InputFile } from "grammy";
import { basename } from "path";

import type { AgentPool } from "../agent-pool.js";
import type { AgentQueue } from "../queue.js";
import type { ChannelMessageOptions } from "./delivery.js";
import { TELEGRAM_ALLOWED_USERS, TELEGRAM_BOT_TOKEN, getIdentityConfig, getRoutingConfig } from "../core/config.js";
import { attachMediaToMessage, createMedia, getMediaById, storeChatMetadata, storeMessage } from "../db.js";
import { processMessages, type MessageProcessingDeps } from "../runtime/message-loop.js";
import type { RuntimeState } from "../runtime/state.js";
import type { NewMessage } from "../types.js";
import { createLogger, debugSuppressedError } from "../utils/logger.js";

const log = createLogger("telegram");
const TELEGRAM_TYPING_INTERVAL_MS = 4000;
const TELEGRAM_CAPTION_LIMIT = 1024;

interface TelegramFileDownload {
  data: Uint8Array;
  contentType: string;
  filename: string;
}

interface TelegramPhotoLike {
  file_id?: string;
}

interface TelegramDocumentLike {
  file_id?: string;
  file_name?: string;
  mime_type?: string;
}

interface TelegramMessageLike {
  message_id?: number;
  date?: number;
  text?: string;
  caption?: string;
  photo?: TelegramPhotoLike[];
  document?: TelegramDocumentLike;
}

interface TelegramUserLike {
  id?: number;
  username?: string;
  first_name?: string;
  last_name?: string;
}

interface TelegramChatLike {
  id?: number;
  type?: string;
}

interface TelegramContextLike {
  chat?: TelegramChatLike;
  from?: TelegramUserLike;
  msg?: TelegramMessageLike;
}

interface TelegramApiLike {
  sendMessage(chatId: number | string, text: string, options?: Record<string, unknown>): Promise<unknown>;
  sendPhoto(chatId: number | string, file: unknown, options?: Record<string, unknown>): Promise<unknown>;
  sendDocument(chatId: number | string, file: unknown, options?: Record<string, unknown>): Promise<unknown>;
  sendChatAction(chatId: number | string, action: string): Promise<unknown>;
  getFile(fileId: string): Promise<{ file_path?: string }>;
}

interface TelegramBotLike {
  api: TelegramApiLike;
  on(event: "message:text" | "message:photo" | "message:document", handler: (ctx: TelegramContextLike) => Promise<void> | void): void;
  catch(handler: (error: unknown) => void): void;
  start(options?: Record<string, unknown>): Promise<void> | void;
  stop(): void;
}

interface TelegramOutboundAttachment {
  mediaId: number;
  name: string;
  contentType: string;
  kind: "image" | "file";
}

export interface TelegramChannelOptions {
  state: RuntimeState;
  queue: Pick<AgentQueue, "enqueue">;
  agentPool: AgentPool;
  token?: string;
  allowedUsers?: string[];
  createBot?: (token: string) => TelegramBotLike;
  processMessages?: (chatJid: string, deps: MessageProcessingDeps) => Promise<boolean>;
  downloadFile?: (
    fileId: string,
    options?: { filename?: string; contentType?: string }
  ) => Promise<TelegramFileDownload>;
}

function normalizeChatId(chatJid: string): number | string {
  const raw = chatJid.replace(/^telegram:/, "").trim();
  const numeric = Number(raw);
  return Number.isFinite(numeric) ? numeric : raw;
}

function normalizeTelegramSenderName(user: TelegramUserLike | undefined): string {
  const first = typeof user?.first_name === "string" ? user.first_name.trim() : "";
  const last = typeof user?.last_name === "string" ? user.last_name.trim() : "";
  const username = typeof user?.username === "string" ? user.username.trim() : "";
  return [first, last].filter(Boolean).join(" ") || username || "Telegram user";
}

function createTelegramMessageId(chatId: number | string, messageId: number | undefined): string {
  return `telegram:${chatId}:${messageId ?? "unknown"}`;
}

function renderInboundAttachmentDescription(kind: "photo" | "document", filename: string, caption: string): string {
  const label = kind === "photo" ? "Photo" : "Document";
  if (caption) return `${caption}\n\n[${label}: ${filename}]`;
  return `[${label}: ${filename}]`;
}

function normalizeTelegramMarkdown(text: string): string {
  if (!text) return "";

  const codeBlocks: string[] = [];
  const inlineCode: string[] = [];
  let normalized = text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

  normalized = normalized.replace(/```[a-zA-Z0-9_-]*\n([\s\S]*?)```/g, (_match, code: string) => {
    const placeholder = `\u0000TG_CODE_BLOCK_${codeBlocks.length}\u0000`;
    const body = code.replace(/\n+$/g, "");
    codeBlocks.push(`\`\`\`\n${body}\n\`\`\``);
    return placeholder;
  });

  normalized = normalized.replace(/`([^`\n]+)`/g, (_match, code: string) => {
    const placeholder = `\u0000TG_INLINE_CODE_${inlineCode.length}\u0000`;
    inlineCode.push(`\`${code}\``);
    return placeholder;
  });

  normalized = normalized.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1 ($2)");
  normalized = normalized.replace(/^#{1,6}\s+(.+)$/gm, "*$1*");
  normalized = normalized.replace(/\*\*([^*]+)\*\*/g, "*$1*");
  normalized = normalized.replace(/__([^_]+)__/g, "*$1*");
  normalized = normalized.replace(/^\s*[-*]\s+/gm, "• ");
  normalized = normalized.replace(/(?<!\\)([\[\]])/g, "\\$1");

  for (const [index, code] of codeBlocks.entries()) {
    normalized = normalized.replace(`\u0000TG_CODE_BLOCK_${index}\u0000`, code);
  }
  for (const [index, code] of inlineCode.entries()) {
    normalized = normalized.replace(`\u0000TG_INLINE_CODE_${index}\u0000`, code);
  }

  return normalized.trim();
}

function buildTelegramOutboundAttachments(options?: ChannelMessageOptions): TelegramOutboundAttachment[] {
  const ordered = new Map<number, TelegramOutboundAttachment>();
  const contentBlocks = Array.isArray(options?.contentBlocks) ? options?.contentBlocks : [];
  for (const block of contentBlocks) {
    const mediaId = Number((block as { media_id?: unknown }).media_id);
    if (!Number.isFinite(mediaId) || mediaId <= 0) continue;
    ordered.set(mediaId, {
      mediaId,
      name: String((block as { name?: unknown; filename?: unknown }).name ?? (block as { filename?: unknown }).filename ?? ""),
      contentType: String((block as { mime_type?: unknown }).mime_type ?? ""),
      kind: (block as { type?: unknown }).type === "image" ? "image" : "file",
    });
  }

  for (const mediaId of options?.mediaIds ?? []) {
    if (ordered.has(mediaId)) continue;
    const media = getMediaById(mediaId);
    if (!media) continue;
    ordered.set(mediaId, {
      mediaId,
      name: media.filename,
      contentType: media.content_type,
      kind: media.content_type.startsWith("image/") ? "image" : "file",
    });
  }

  return [...ordered.values()];
}

export class TelegramChannel {
  private readonly token: string;
  private readonly allowedUsers: Set<string>;
  private readonly bot: TelegramBotLike;
  private readonly processMessagesImpl: (chatJid: string, deps: MessageProcessingDeps) => Promise<boolean>;
  private readonly downloadFileImpl: (
    fileId: string,
    options?: { filename?: string; contentType?: string }
  ) => Promise<TelegramFileDownload>;
  private readonly typingIntervals = new Map<string, ReturnType<typeof setInterval>>();
  private started = false;

  constructor(private readonly options: TelegramChannelOptions) {
    this.token = options.token ?? process.env.PICLAW_TELEGRAM_BOT_TOKEN ?? TELEGRAM_BOT_TOKEN;
    this.allowedUsers = new Set(
      (options.allowedUsers ?? (
        process.env.PICLAW_TELEGRAM_ALLOWED_USERS
          ? process.env.PICLAW_TELEGRAM_ALLOWED_USERS.split(",")
          : TELEGRAM_ALLOWED_USERS
      ))
        .map((value) => String(value).trim())
        .filter(Boolean)
    );
    this.bot = (options.createBot ?? ((token) => new Bot(token) as unknown as TelegramBotLike))(this.token);
    this.processMessagesImpl = options.processMessages ?? processMessages;
    this.downloadFileImpl = options.downloadFile ?? ((fileId, downloadOptions) => this.downloadTelegramFile(fileId, downloadOptions));

    this.bot.catch((error) => {
      log.error("Telegram bot handler failed", {
        operation: "telegram.bot.catch",
        err: error,
      });
    });

    this.bot.on("message:text", async (ctx) => {
      await this.handleTextMessage(ctx);
    });
    this.bot.on("message:photo", async (ctx) => {
      await this.handlePhotoMessage(ctx);
    });
    this.bot.on("message:document", async (ctx) => {
      await this.handleDocumentMessage(ctx);
    });
  }

  async start(): Promise<void> {
    if (this.started || !this.token) return;
    log.info("Starting Telegram bot", { operation: "telegram.start", hasToken: Boolean(this.token), allowedUsers: [...this.allowedUsers] });
    await this.bot.start({ drop_pending_updates: true });
    this.started = true;
    log.info("Telegram bot started", { operation: "telegram.start.done" });
  }

  async stop(): Promise<void> {
    for (const interval of this.typingIntervals.values()) {
      clearInterval(interval);
    }
    this.typingIntervals.clear();
    this.bot.stop();
    this.started = false;
  }

  async sendMessage(chatJid: string, text: string, options?: ChannelMessageOptions): Promise<void> {
    const chatId = normalizeChatId(chatJid);
    const attachments = buildTelegramOutboundAttachments(options);
    const normalizedText = normalizeTelegramMarkdown(text || "");

    if (attachments.length === 0) {
      if (!normalizedText) return;
      await this.bot.api.sendMessage(chatId, normalizedText, { parse_mode: "Markdown" });
      return;
    }

    const caption = normalizedText.length > 0 && normalizedText.length <= TELEGRAM_CAPTION_LIMIT
      ? normalizedText
      : "";
    if (normalizedText && !caption) {
      await this.bot.api.sendMessage(chatId, normalizedText, { parse_mode: "Markdown" });
    }

    for (const [index, attachment] of attachments.entries()) {
      const media = getMediaById(attachment.mediaId);
      if (!media) {
        log.warn("Skipping missing Telegram outbound media attachment", {
          operation: "telegram.send_message.missing_media",
          chatJid,
          mediaId: attachment.mediaId,
        });
        continue;
      }
      const file = new InputFile(media.data, media.filename);
      const sendOptions = index === 0 && caption
        ? { caption, parse_mode: "Markdown" }
        : undefined;
      if (attachment.kind === "image") {
        await this.bot.api.sendPhoto(chatId, file, sendOptions);
      } else {
        await this.bot.api.sendDocument(chatId, file, sendOptions);
      }
    }
  }

  async setTyping(chatJid: string, active: boolean): Promise<void> {
    const chatId = normalizeChatId(chatJid);
    if (!active) {
      const interval = this.typingIntervals.get(chatJid);
      if (interval) {
        clearInterval(interval);
        this.typingIntervals.delete(chatJid);
      }
      return;
    }
    if (this.typingIntervals.has(chatJid)) return;

    const sendTyping = async () => {
      try {
        await this.bot.api.sendChatAction(chatId, "typing");
      } catch (error) {
        debugSuppressedError(log, "Failed to send Telegram typing indicator", error, {
          operation: "telegram.set_typing",
          chatJid,
        });
      }
    };

    await sendTyping();
    const interval = setInterval(() => {
      void sendTyping();
    }, TELEGRAM_TYPING_INTERVAL_MS);
    this.typingIntervals.set(chatJid, interval);
  }

  private async handleTextMessage(ctx: TelegramContextLike): Promise<void> {
    const text = typeof ctx.msg?.text === "string" ? ctx.msg.text.trim() : "";
    if (!text) return;
    await this.persistInboundMessage(ctx, text);
  }

  private async handlePhotoMessage(ctx: TelegramContextLike): Promise<void> {
    const photo = Array.isArray(ctx.msg?.photo) ? ctx.msg?.photo.filter((item) => item?.file_id) : [];
    const fileId = photo.length > 0 ? photo[photo.length - 1]?.file_id : "";
    if (!fileId) return;
    const caption = typeof ctx.msg?.caption === "string" ? ctx.msg.caption.trim() : "";
    await this.persistInboundMessage(ctx, renderInboundAttachmentDescription("photo", "photo.jpg", caption), {
      fileId,
      filename: "photo.jpg",
      contentType: "image/jpeg",
      kind: "image",
    });
  }

  private async handleDocumentMessage(ctx: TelegramContextLike): Promise<void> {
    const document = ctx.msg?.document;
    const fileId = typeof document?.file_id === "string" ? document.file_id : "";
    if (!fileId) return;
    const filename = typeof document?.file_name === "string" && document.file_name.trim()
      ? document.file_name.trim()
      : "document";
    const contentType = typeof document?.mime_type === "string" && document.mime_type.trim()
      ? document.mime_type.trim()
      : "application/octet-stream";
    const caption = typeof ctx.msg?.caption === "string" ? ctx.msg.caption.trim() : "";
    await this.persistInboundMessage(ctx, renderInboundAttachmentDescription("document", filename, caption), {
      fileId,
      filename,
      contentType,
      kind: contentType.startsWith("image/") ? "image" : "file",
    });
  }

  private async persistInboundMessage(
    ctx: TelegramContextLike,
    content: string,
    attachment?: { fileId: string; filename: string; contentType: string; kind: "image" | "file" },
  ): Promise<void> {
    const chatId = ctx.chat?.id;
    const userId = ctx.from?.id;
    const messageId = ctx.msg?.message_id;
    if (chatId === undefined || userId === undefined || !messageId) return;
    if (ctx.chat?.type !== "private") {
      log.info("Dropping non-private Telegram message", {
        operation: "telegram.persist_inbound_message.non_private",
        chatType: ctx.chat?.type,
        chatId,
        userId,
      });
      return;
    }
    if (!this.allowedUsers.has(String(userId))) {
      log.warn("Dropping Telegram message from unauthorized user", {
        operation: "telegram.persist_inbound_message.unauthorized",
        userId: String(userId),
        allowedUsers: [...this.allowedUsers],
      });
      return;
    }

    const chatJid = `telegram:${chatId}`;
    const timestamp = new Date((ctx.msg?.date ?? Math.floor(Date.now() / 1000)) * 1000).toISOString();
    const senderName = normalizeTelegramSenderName(ctx.from);
    const sender = String(userId);

    this.registerChat(chatJid);
    storeChatMetadata(chatJid, timestamp, senderName);

    const contentBlocks: Array<Record<string, unknown>> = [];
    const mediaIds: number[] = [];
    if (attachment) {
      try {
        const downloaded = await this.downloadFileImpl(attachment.fileId, {
          filename: attachment.filename,
          contentType: attachment.contentType,
        });
        const mediaId = createMedia(
          downloaded.filename,
          downloaded.contentType || attachment.contentType,
          downloaded.data,
          null,
          { kind: attachment.kind, source: "telegram" },
        );
        mediaIds.push(mediaId);
        contentBlocks.push({
          type: attachment.kind === "image" ? "image" : "file",
          media_id: mediaId,
          name: downloaded.filename,
          filename: downloaded.filename,
          mime_type: downloaded.contentType || attachment.contentType,
        });
      } catch (error) {
        log.warn("Failed to download inbound Telegram attachment", {
          operation: "telegram.persist_inbound_message.download_attachment",
          chatJid,
          err: error,
        });
      }
    }

    const inboundMessage: NewMessage = {
      id: createTelegramMessageId(chatId, messageId),
      chat_jid: chatJid,
      sender,
      sender_name: senderName,
      content,
      timestamp,
      is_from_me: false,
      is_bot_message: false,
      content_blocks: contentBlocks.length > 0 ? contentBlocks : undefined,
    };
    const rowId = storeMessage(inboundMessage);
    if (rowId > 0 && mediaIds.length > 0) {
      attachMediaToMessage(rowId, mediaIds);
    }

    this.options.queue.enqueue(async () => {
      const processed = await this.processMessagesImpl(chatJid, {
        agentPool: this.options.agentPool,
        state: this.options.state,
        assistantName: getIdentityConfig().assistantName,
        triggerPattern: getRoutingConfig().triggerPattern,
        sendMessage: (jid, text, sendOptions) => this.sendMessage(jid, text, sendOptions),
        setTyping: (jid, active) => this.setTyping(jid, active),
      });
      if (!processed) {
        throw new Error(`Telegram processing failed for ${chatJid}`);
      }
    }, `chat:${chatJid}`, `chat:${chatJid}`);
  }

  private registerChat(chatJid: string): void {
    if (this.options.state.chatJids.has(chatJid)) return;
    this.options.state.chatJids.add(chatJid);
    this.options.state.saveChats();
  }

  private async downloadTelegramFile(
    fileId: string,
    options?: { filename?: string; contentType?: string },
  ): Promise<TelegramFileDownload> {
    const file = await this.bot.api.getFile(fileId);
    if (!file?.file_path) {
      throw new Error("Telegram file path missing from Bot API response.");
    }
    const response = await fetch(`https://api.telegram.org/file/bot${this.token}/${file.file_path}`);
    if (!response.ok) {
      throw new Error(`Telegram file download failed with HTTP ${response.status}.`);
    }
    const filename = options?.filename?.trim() || basename(file.file_path);
    const contentType = response.headers.get("content-type") || options?.contentType || "application/octet-stream";
    return {
      data: new Uint8Array(await response.arrayBuffer()),
      contentType,
      filename,
    };
  }
}
