/**
 * runtime/message-loop.ts – Core message processing and enqueue logic.
 *
 * Implements the main polling callback that:
 *   1. Fetches new messages since the last timestamp (via db/messages.ts).
 *   2. Detects whether each message is a control command (agent-control) or
 *      a regular user message.
 *   3. Formats messages into XML and enqueues agent runs on the AgentQueue.
 *   4. Delivers agent responses through injected outbound callbacks.
 *
 * Also provides the processChat() helper used by the web channel to inject
 * messages directly into the queue without going through the poll cycle.
 *
 * Consumers:
 *   - runtime.ts passes processMessages() to the polling timer.
 *   - channels/web.ts calls processChat() when a web-channel message arrives.
 */

import type { AgentPool } from "../agent-pool.js";
import type { AttachmentInfo } from "../agent-pool/attachments.js";
import { formatRecoverySummary } from "../agent-pool/automatic-recovery.js";
import { parseControlCommand, type AgentControlCommand } from "../agent-control/index.js";
import { buildAttachmentMessageOptions, type ChannelMessageOptions } from "../channels/delivery.js";
import { getMessagesSince, getNewMessages } from "../db.js";
import type { AgentQueue } from "../queue.js";
import { detectChannel, formatMessages, formatOutbound } from "../router.js";
import { createLogger } from "../utils/logger.js";
import type { RuntimeState } from "./state.js";

const log = createLogger("runtime.message-loop");

/**
 * Dependencies injected into the message-processing functions.
 * Provided by runtime.ts to avoid circular imports.
 */
export interface MessageProcessingDeps {
  agentPool: AgentPool;
  state: RuntimeState;
  assistantName: string;
  triggerPattern: RegExp;
  sendMessage?: (chatJid: string, text: string, options?: ChannelMessageOptions) => Promise<void>;
  setTyping?: (chatJid: string, active: boolean) => Promise<void>;
}

/** Process pending messages for a single chat: send to agent, deliver response. */
export async function processMessages(chatJid: string, deps: MessageProcessingDeps): Promise<boolean> {
  const since = deps.state.lastAgentTimestamp[chatJid] || "";
  const messages = getMessagesSince(chatJid, since, deps.assistantName);
  if (messages.length === 0) return true;

  const commandQueue: Array<{ message: (typeof messages)[number]; command: AgentControlCommand }> = [];
  const promptMessages: typeof messages = [];

  for (const message of messages) {
    const command = !message.is_bot_message
      ? parseControlCommand(message.content, deps.triggerPattern)
      : null;
    if (command) {
      if (!deps.state.wasCommandProcessed(chatJid, message.id)) {
        commandQueue.push({ message, command });
      }
      continue;
    }
    promptMessages.push(message);
  }

  for (const { message, command } of commandQueue) {
    await deps.agentPool.applyControlCommand(chatJid, command);
    deps.state.markCommandProcessed(chatJid, message.id);
  }

  // Check trigger on non-command messages only.
  // For Telegram private chats (jid starts with telegram:), all messages are
  // implicitly addressed to Miles — skip the trigger pattern gate.
  const isTelegramChat = chatJid.startsWith("telegram:");
  const hasTrigger = isTelegramChat || promptMessages.some((m) => deps.triggerPattern.test(m.content.trim()));
  if (!hasTrigger) return true;

  const channel = detectChannel(chatJid);
  const nextTimestamp = messages[messages.length - 1].timestamp;
  const commitLastAgentTimestamp = () => {
    deps.state.lastAgentTimestamp[chatJid] = nextTimestamp;
    deps.state.saveTimestamps();
  };

  const stripTrigger = (text: string): string => {
    if (!text) return "";
    const flags = deps.triggerPattern.flags.includes("g")
      ? deps.triggerPattern.flags
      : `${deps.triggerPattern.flags}g`;
    const pattern = new RegExp(deps.triggerPattern.source, flags);
    return text.replace(pattern, " ").trim();
  };

  const lastPrompt = promptMessages[promptMessages.length - 1];
  const cleaned = lastPrompt ? stripTrigger(lastPrompt.content) : "";
  if (promptMessages.length === 1 && cleaned.startsWith("/")) {
    log.info("Executing slash command", {
      operation: "process_messages.slash_command",
      chatJid,
    });
    await deps.setTyping?.(chatJid, true);
    const result = await deps.agentPool.applySlashCommand(chatJid, cleaned);
    await deps.setTyping?.(chatJid, false);

    if (result.message) {
      const text = formatOutbound(result.message, channel);
      if (text) await deps.sendMessage?.(chatJid, text);
    }

    if (result.status === "error") {
      log.error("Slash command failed", {
        operation: "process_messages.slash_command",
        chatJid,
        errorMessage: result.message,
      });
      return true;
    }

    commitLastAgentTimestamp();
    return true;
  }

  const prompt = formatMessages(promptMessages, channel);

  log.info("Processing queued prompt messages", {
    operation: "process_messages.prompt",
    chatJid,
    promptMessageCount: promptMessages.length,
  });

  await deps.setTyping?.(chatJid, true);

  const output = await deps.agentPool.runAgent(prompt, chatJid, {
    onTurnComplete: async (turn) => {
      if (turn.text || turn.attachments.length > 0) {
        const text = formatOutbound(turn.text, channel);
        if (text || turn.attachments.length > 0) {
          await deps.sendMessage?.(chatJid, text, buildAttachmentMessageOptions(turn.attachments as AttachmentInfo[]));
        }
      }
    },
  });

  const recoverySummary = formatRecoverySummary(output.recovery);

  if (output.recovery?.recovered) {
    log.info("Agent run recovered before outbound delivery", {
      operation: "process_messages.prompt.recovered",
      chatJid,
      recovery: output.recovery,
      recoverySummary,
    });
  }

  await deps.setTyping?.(chatJid, false);

  if (output.status === "error") {
    log.error("Agent run failed", {
      operation: "process_messages.prompt",
      chatJid,
      errorMessage: output.error,
      recovery: output.recovery || null,
      recoverySummary,
    });
    return true;
  }

  if (output.result || output.attachments?.length) {
    const text = formatOutbound(output.result || "", channel);
    if (text || output.attachments?.length) {
      await deps.sendMessage?.(
        chatJid,
        text,
        buildAttachmentMessageOptions((output.attachments ?? []) as AttachmentInfo[]),
      );
    }
  }

  commitLastAgentTimestamp();
  return true;
}

/** Dependencies for the message polling loop. */
export interface MessageLoopDeps {
  queue: AgentQueue;
  state: RuntimeState;
  assistantName: string;
  pollIntervalMs: number;
  processMessages: (chatJid: string) => Promise<boolean>;
}

/** Start the polling loop that checks for new messages across all chats. */
export async function runMessageLoop(deps: MessageLoopDeps): Promise<void> {
  log.info("Starting runtime message loop", {
    operation: "run_message_loop.start",
    assistantName: deps.assistantName,
  });
  while (true) {
    try {
      const jids = [...deps.state.chatJids];
      const { messages, newTimestamp } = getNewMessages(jids, deps.state.lastTimestamp, deps.assistantName);
      if (messages.length > 0) {
        deps.state.lastTimestamp = newTimestamp;
        deps.state.saveTimestamps();
        // Deduplicate by chat
        const byChat = new Map<string, boolean>();
        for (const msg of messages) byChat.set(msg.chat_jid, true);
        for (const chatJid of byChat.keys()) {
          deps.queue.enqueue(async () => {
            const ok = await deps.processMessages(chatJid);
            if (!ok) throw new Error(`Agent processing failed for ${chatJid}`);
          }, `chat:${chatJid}`, `chat:${chatJid}`);
        }
      }
    } catch (error) {
      log.error("Message loop iteration failed", {
        operation: "run_message_loop.iteration",
        err: error,
      });
    }
    await Bun.sleep(deps.pollIntervalMs);
  }
}
