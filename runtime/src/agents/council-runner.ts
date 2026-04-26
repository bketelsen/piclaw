/**
 * agents/council-runner.ts – Multi-provider debate council.
 *
 * Runs a structured 4-phase debate across multiple AI models:
 *   Phase 1 (parallel): Each member posts an initial position.
 *   Phase 2 (parallel): Each member critiques all other positions.
 *   Phase 3 (parallel): Each member revises with all critiques in context.
 *   Phase 4 (single):   Synthesizer produces a final answer.
 *
 * Result is injected back into the main chat so Pi auto-responds.
 */

import { mkdirSync } from "fs";
import { join } from "path";
import { DATA_DIR } from "../core/config.js";
import { storeMessage, getDb } from "../db.js";
import { createLogger } from "../utils/logger.js";
import type { AgentPool } from "../agent-pool.js";
import type { AgentDefinition, CouncilMember } from "./agent-definition.js";

const log = createLogger("agents.council-runner");

const MAX_RESULT_CHARS = 16_000;

export interface CouncilOptions {
  agentDef: AgentDefinition;
  scenario: string;
  mainChatJid: string;
  agentPool: AgentPool;
  broadcastEvent: (eventType: string, data: unknown) => void;
  processChat: (chatJid: string) => void;
}

export function dispatchCouncil(opts: CouncilOptions): void {
  void _runCouncil(opts).catch((err) => {
    log.error("Unhandled error in council runner", {
      operation: "dispatch_council.unhandled_error",
      agentName: opts.agentDef.name,
      mainChatJid: opts.mainChatJid,
      err,
    });
    _injectResult(opts, null, String(err));
  });
}

async function _runCouncil(opts: CouncilOptions): Promise<void> {
  const { agentDef, scenario, mainChatJid, agentPool } = opts;
  const council = agentDef.council!;
  const sessionId = Date.now();
  const startedAt = Date.now();

  log.info("Council started", {
    operation: "council_runner.start",
    members: council.members.map((m) => m.id),
    synthesizer: council.synthesizer,
  });

  const toolGrants = new Set(agentDef.tools);
  const toolCeilingFilter = (t: string) => toolGrants.has(t);

  function memberJid(memberId: string) {
    return `${mainChatJid}__council-${sessionId}-${memberId}`;
  }

  async function runMember(member: CouncilMember, prompt: string): Promise<string> {
    const jid = memberJid(member.id);
    mkdirSync(join(DATA_DIR, "sessions", jid.replace(/[^a-zA-Z0-9._-]/g, "_")), { recursive: true });

    // Switch model for this member's session.
    const slashIdx = member.model.indexOf("/");
    if (slashIdx !== -1) {
      const provider = member.model.slice(0, slashIdx);
      const modelId = member.model.slice(slashIdx + 1);
      await agentPool.applyControlCommand(jid, {
        type: "model",
        provider,
        modelId,
        raw: `/model ${member.model}`,
      });
    }

    const output = await agentPool.runAgent(
      `${member.role}\n\n${prompt}`,
      jid,
      { toolCeilingFilter, timeoutMs: agentDef.maxTurns * 60_000 },
    );

    if (output.status === "success" || output.status === "tool_complete") {
      return output.result ?? "(no output)";
    }
    return `[error: ${output.error ?? "unknown"}]`;
  }

  // ── Phase 1: Initial positions ──────────────────────────────────────────
  log.info("Council phase 1: initial positions");
  const initialPrompt = `Scenario:\n${scenario}\n\nProvide your initial position. Be specific and direct.`;
  const initialResults = await Promise.all(
    council.members.map((m) => runMember(m, initialPrompt).then((r) => ({ id: m.id, result: r }))),
  );

  // ── Phase 2: Critiques ──────────────────────────────────────────────────
  log.info("Council phase 2: critiques");
  const critiqueResults = await Promise.all(
    council.members.map((m) => {
      const others = initialResults
        .filter((r) => r.id !== m.id)
        .map((r) => `[@${r.id}]\n${truncate(r.result)}`)
        .join("\n\n");
      const prompt = `Scenario:\n${scenario}\n\nOther members' positions:\n${others}\n\nCritique the other positions. Find weaknesses, gaps, and errors. Be direct and adversarial.`;
      return runMember(m, prompt).then((r) => ({ id: m.id, result: r }));
    }),
  );

  // ── Phase 3: Revisions ──────────────────────────────────────────────────
  log.info("Council phase 3: revisions");
  const allInitial = initialResults.map((r) => `[@${r.id} initial]\n${truncate(r.result)}`).join("\n\n");
  const allCritiques = critiqueResults.map((r) => `[@${r.id} critique]\n${truncate(r.result)}`).join("\n\n");

  const revisionResults = await Promise.all(
    council.members.map((m) => {
      const prompt = `Scenario:\n${scenario}\n\nAll initial positions:\n${allInitial}\n\nAll critiques:\n${allCritiques}\n\nRevise your position incorporating valid critiques. Present your final position.`;
      return runMember(m, prompt).then((r) => ({ id: m.id, result: r }));
    }),
  );

  // ── Phase 4: Synthesis ──────────────────────────────────────────────────
  log.info("Council phase 4: synthesis");
  const synthesizer = council.members.find((m) => m.id === council.synthesizer)
    ?? council.members[0];

  const allRevisions = revisionResults.map((r) => `[@${r.id} final position]\n${truncate(r.result)}`).join("\n\n");
  const synthPrompt = `${agentDef.systemPrompt}\n\nScenario:\n${scenario}\n\nCouncil members' final positions:\n${allRevisions}\n\nSynthesize into one definitive answer. Note where members agreed, where they diverged, and your final recommendation.`;

  const synthesis = await runMember(synthesizer, synthPrompt);

  const elapsed = Math.round((Date.now() - startedAt) / 1000);

  // Build summary header
  const memberSummaries = revisionResults.map((r) => {
    const member = council.members.find((m) => m.id === r.id)!;
    const firstLine = r.result.split("\n").find((l) => l.trim()) ?? r.result.slice(0, 80);
    return `**@${r.id}** (${member.model}): ${firstLine.trim()}`;
  }).join("\n");

  const body = `[Council @${agentDef.name} returned, ${elapsed}s]\n\n**Members:** ${council.members.map((m) => `@${m.id} (${m.model})`).join(", ")}\n\n**Positions summary:**\n${memberSummaries}\n\n---\n\n**Synthesis (${synthesizer.model}):**\n\n${synthesis}`;

  _injectResult(opts, body, null);
}

function truncate(s: string): string {
  return s.length > MAX_RESULT_CHARS ? s.slice(0, MAX_RESULT_CHARS) + "\n_(truncated)_" : s;
}

function _injectResult(
  opts: CouncilOptions,
  body: string | null,
  error: string | null,
): void {
  const { mainChatJid, agentDef, broadcastEvent, processChat } = opts;
  const content = error ? `[Council @${agentDef.name} error]\n\n${error}` : (body ?? "(empty)");
  const sender = `council:${agentDef.name}`;
  const senderName = `@council`;
  const now = new Date().toISOString();

  try {
    const db = getDb();
    db.prepare(`INSERT OR IGNORE INTO chats (jid, last_message_time) VALUES (?, ?)`).run(mainChatJid, now);

    const rowId = storeMessage({
      id: `council-${agentDef.name}-${Date.now()}`,
      chat_jid: mainChatJid,
      sender,
      sender_name: senderName,
      content,
      timestamp: now,
      is_bot_message: false,
      is_from_me: false,
    });

    db.prepare(`UPDATE chats SET last_message_time = ? WHERE jid = ?`).run(now, mainChatJid);

    broadcastEvent("new_post", {
      id: rowId,
      chat_jid: mainChatJid,
      timestamp: now,
      data: {
        type: "user_message" as const,
        content,
        agent_id: "default",
        media_ids: [] as number[],
        sender,
        sender_name: senderName,
      },
    });

    processChat(mainChatJid);
  } catch (err) {
    log.error("Failed to inject council result", { operation: "council_runner.inject", err });
  }
}
