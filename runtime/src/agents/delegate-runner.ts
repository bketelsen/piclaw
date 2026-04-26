/**
 * agents/delegate-runner.ts – Async agent delegation.
 *
 * Dispatches a named agent definition as a fire-and-forget background task.
 * When the delegate completes, its result is injected into the main chat as a
 * new user-facing message so Pi sees it and responds naturally.
 *
 * Flow:
 *   1. Pi intercepts "@agentName task" in handleAgentMessage.
 *   2. Pi returns acknowledgment immediately (main chat unblocked).
 *   3. dispatchDelegate() runs the agent in an isolated session.
 *   4. On completion, result is stored via the channel's storeMessage (returns
 *      a proper InteractionRow), broadcast as "new_post", then processChat is
 *      called so Pi auto-responds to the result.
 */

import { join } from "path";
import { mkdirSync } from "fs";
import { DATA_DIR } from "../core/config.js";
import { storeMessage, getDb } from "../db.js";
import { createLogger } from "../utils/logger.js";
import type { AgentPool } from "../agent-pool.js";
import type { AgentDefinition } from "./agent-definition.js";

const log = createLogger("agents.delegate-runner");

/** Maximum result length stored back into the main chat (chars). Truncated beyond this. */
const MAX_RESULT_CHARS = 32_000;

export interface DelegateOptions {
  /** The resolved agent definition to run. */
  agentDef: AgentDefinition;
  /** The task text (user's message with @name prefix stripped). */
  task: string;
  /** Pi-synthesized context briefing for the agent. */
  context: string;
  /** The main chat JID to inject the result into. */
  mainChatJid: string;
  /** Agent pool — used to run the delegate session. */
  agentPool: AgentPool;
  /** Broadcast an event to connected web clients. */
  broadcastEvent: (eventType: string, data: unknown) => void;
  /**
   * Enqueue a processChat call for the main chat so Pi auto-responds.
   * Caller is responsible for proper queue serialisation.
   */
  processChat: (chatJid: string) => void;
}

export interface ActiveDelegate {
  agentName: string;
  task: string;
  startedAt: string;
  delegateJid: string;
}

// In-memory registry of running delegates for /agent-status.
const _activeDelegates = new Map<string, ActiveDelegate>();

export function getActiveDelegates(): ActiveDelegate[] {
  return [..._activeDelegates.values()];
}

/**
 * Fire-and-forget async agent delegation.
 * Returns immediately. The delegate runs in the background.
 */
export function dispatchDelegate(opts: DelegateOptions): void {
  void _runDelegate(opts).catch((err) => {
    log.error("Unhandled error in delegate runner", {
      operation: "dispatch_delegate.unhandled_error",
      agentName: opts.agentDef.name,
      mainChatJid: opts.mainChatJid,
      err,
    });
    _injectResult(opts, null, String(err));
  });
}

async function _runDelegate(opts: DelegateOptions): Promise<void> {
  const { agentDef, task, context, mainChatJid, agentPool } = opts;
  const startedAt = new Date().toISOString();

  const stamp = Date.now();
  const delegateJid = `${mainChatJid}__delegate-${agentDef.name}-${stamp}`;
  const delegateSessionDir = join(
    DATA_DIR,
    "sessions",
    delegateJid.replace(/[^a-zA-Z0-9._-]/g, "_"),
  );
  mkdirSync(delegateSessionDir, { recursive: true });

  const activeKey = `${agentDef.name}-${stamp}`;
  _activeDelegates.set(activeKey, {
    agentName: agentDef.name,
    task,
    startedAt,
    delegateJid,
  });

  log.info("Delegate started", {
    operation: "delegate_runner.start",
    agentName: agentDef.name,
    delegateJid,
    mainChatJid,
    tools: agentDef.tools,
    maxTurns: agentDef.maxTurns,
  });

  const toolGrants = new Set(agentDef.tools);
  const toolCeilingFilter = (toolName: string) => toolGrants.has(toolName);
  const fullPrompt = _buildPrompt(agentDef.systemPrompt, context, task);

  let result: string | null = null;
  let error: string | null = null;

  try {
    const output = await agentPool.runAgent(fullPrompt, delegateJid, {
      toolCeilingFilter,
      timeoutMs: agentDef.maxTurns * 60_000,
    });

    if (output.status === "success" || output.status === "tool_complete") {
      result = output.result ?? "(no output)";
    } else {
      error = output.error ?? "Delegate failed with unknown error.";
    }
  } catch (err) {
    error = err instanceof Error ? err.message : String(err);
  } finally {
    _activeDelegates.delete(activeKey);
  }

  const elapsed = Math.round((Date.now() - stamp) / 1000);
  log.info("Delegate finished", {
    operation: "delegate_runner.finish",
    agentName: agentDef.name,
    delegateJid,
    mainChatJid,
    elapsedSec: elapsed,
    status: error ? "error" : "success",
  });

  _injectResult(opts, result, error, elapsed);
}

function _buildPrompt(systemPrompt: string, context: string, task: string): string {
  const parts: string[] = [];
  if (systemPrompt.trim()) { parts.push(systemPrompt.trim()); parts.push(""); }
  if (context.trim()) { parts.push("[Context]"); parts.push(context.trim()); parts.push(""); }
  parts.push("[Task]");
  parts.push(task.trim());
  return parts.join("\n");
}

function _injectResult(
  opts: DelegateOptions,
  result: string | null,
  error: string | null,
  elapsedSec?: number,
): void {
  const { mainChatJid, agentDef, broadcastEvent, processChat } = opts;
  const elapsedStr = elapsedSec !== undefined ? `, ${elapsedSec}s` : "";
  const header = `[Delegate @${agentDef.name} returned${elapsedStr}]`;

  let body: string;
  if (error) {
    body = `${header}\n\n**Error:** ${error}`;
  } else {
    const truncated = result && result.length > MAX_RESULT_CHARS
      ? result.slice(0, MAX_RESULT_CHARS) + "\n\n_(result truncated)_"
      : (result ?? "(empty result)");
    body = `${header}\n\n${truncated}`;
  }

  try {
    const db = getDb();
    const now = new Date().toISOString();
    const senderName = `@${agentDef.name}`;
    const sender = `delegate:${agentDef.name}`;

    // Ensure chat row exists.
    db.prepare(`INSERT OR IGNORE INTO chats (jid, last_message_time) VALUES (?, ?)`).run(mainChatJid, now);

    // Store with explicit sender so the UI shows @agentName, not "You".
    const rowId = storeMessage({
      id: `delegate-${agentDef.name}-${Date.now()}`,
      chat_jid: mainChatJid,
      sender,
      sender_name: senderName,
      content: body,
      timestamp: now,
      is_bot_message: false,  // false so message loop picks it up and Pi responds
      is_from_me: false,
    });

    db.prepare(`UPDATE chats SET last_message_time = ? WHERE jid = ?`).run(now, mainChatJid);

    // Build a proper InteractionRow shape so the web UI renders it correctly.
    const interaction = {
      id: rowId,
      chat_jid: mainChatJid,
      timestamp: now,
      data: {
        type: "user_message" as const,
        content: body,
        agent_id: "default",
        media_ids: [] as number[],
        sender,
        sender_name: senderName,
      },
    };

    log.info("Delegate result injected", {
      operation: "delegate_runner.inject",
      agentName: agentDef.name,
      mainChatJid,
      rowId,
    });

    broadcastEvent("new_post", interaction);

    // Trigger Pi to respond to the delegate result.
    processChat(mainChatJid);
  } catch (err) {
    log.error("Failed to inject delegate result", {
      operation: "delegate_runner.inject.error",
      agentName: agentDef.name,
      mainChatJid,
      err,
    });
  }
}
