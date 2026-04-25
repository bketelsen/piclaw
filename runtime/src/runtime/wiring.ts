/**
 * runtime/wiring.ts – Runtime message/scheduler wiring helpers.
 */

import { startIpcWatcher, type IpcDeps } from "../ipc.js";
import { startSchedulerLoop, type SchedulerDeps } from "../task-scheduler.js";
import type { ChannelMessageOptions } from "../channels/delivery.js";

/** Minimal sender contract exposed to runtime worker wiring. */
export type RuntimeSenders = Pick<IpcDeps, "sendMessage" | "sendNudge">;

/** Optional sendMessage options accepted by web message dispatch. */
export type RuntimeSendMessageOptions = ChannelMessageOptions;

/** Web-channel capabilities required by runtime worker startup. */
export interface RuntimeWebWorkerChannel {
  sendMessage: RuntimeSenders["sendMessage"];
  resumeChat: (chatJid: string, threadRootId?: number | null) => void;
  resumePendingChats: (chatJid?: string) => void;
}

/** Telegram-channel capabilities required by runtime worker startup. */
export interface RuntimeTelegramWorkerChannel {
  sendMessage: RuntimeSenders["sendMessage"];
}

/** Agent-pool model resolution capability required by IPC update_task handling. */
export interface RuntimeModelResolver {
  resolveModelInput: NonNullable<IpcDeps["resolveModel"]>;
}

/** Build sendMessage/sendNudge closures for runtime workers. */
export function createRuntimeSenders(
  channels: {
    web: RuntimeWebWorkerChannel;
    telegram?: RuntimeTelegramWorkerChannel | null;
  }
): RuntimeSenders {
  const sendMessage = async (jid: string, text: string, options?: RuntimeSendMessageOptions) => {
    if (jid.startsWith("web:")) {
      await channels.web.sendMessage(jid, text, options);
      return;
    }
    if (jid.startsWith("telegram:") && channels.telegram) {
      await channels.telegram.sendMessage(jid, text, options);
    }
  };

  return { sendMessage, sendNudge: undefined };
}

/** Start IPC and scheduler background workers with runtime callbacks. */
export function startRuntimeWorkers(
  queue: SchedulerDeps["queue"],
  agentPool: SchedulerDeps["agentPool"] & RuntimeModelResolver,
  web: RuntimeWebWorkerChannel,
  senders: RuntimeSenders
): void {
  startIpcWatcher({
    sendMessage: senders.sendMessage,
    sendNudge: senders.sendNudge,
    resolveModel: (input) => agentPool.resolveModelInput(input),
    resumeChat: async (data) => {
      const chatJid = typeof data.chatJid === "string" && data.chatJid.trim()
        ? data.chatJid.trim()
        : "web:default";
      const threadRootId = typeof data.threadRootId === "number" ? data.threadRootId : null;
      web.resumeChat(chatJid, threadRootId);
    },
    resumePending: async (data) => {
      const chatJid = typeof data?.chatJid === "string" && data.chatJid.trim()
        ? data.chatJid.trim()
        : undefined;
      web.resumePendingChats(chatJid);
    },
  });

  startSchedulerLoop({
    queue,
    agentPool,
    sendMessage: senders.sendMessage,
    sendNudge: senders.sendNudge,
  });
}
