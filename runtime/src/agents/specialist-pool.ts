/**
 * agents/specialist-pool.ts – Persistent session pool for majordomo specialists.
 *
 * Each specialist slug maps to a fixed JID (`majordomo:specialist:<slug>`) that
 * is reused across delegations, accumulating context. Uses AgentPool.runAgent()
 * so the pool's idle-eviction and memory-pressure machinery applies normally.
 */

import type { AgentSessionRuntime } from "@mariozechner/pi-coding-agent";
import type { AgentPool } from "../agent-pool.js";
import type { AgentDefinition } from "./agent-definition.js";

export const SPECIALIST_JID_PREFIX = "majordomo:specialist:";

export class SpecialistPool {
  constructor(private agentPool: AgentPool) {}

  /**
   * Returns or creates the persistent session runtime for a named specialist.
   * Accesses the internal sessionManager directly — required to return
   * AgentSessionRuntime rather than AgentSession.
   */
  async getOrCreate(slug: string): Promise<AgentSessionRuntime> {
    const jid = `${SPECIALIST_JID_PREFIX}${slug}`;
    // sessionManager is private on AgentPool; cast to access it.
    // This is safe: AgentPool.sessionManager is a stable internal service.
    return (this.agentPool as unknown as { sessionManager: { getOrCreate(jid: string): Promise<AgentSessionRuntime> } })
      .sessionManager.getOrCreate(jid);
  }

  /**
   * Run one specialist turn against the persistent session for `slug`.
   * Returns the text output on success; throws on failure.
   * The `signal` parameter is accepted for API compatibility but not
   * forwarded to runAgent in Phase 0 (RunAgentOptions has no `signal` field).
   */
  async runTurn(
    slug: string,
    agentDef: AgentDefinition,
    prompt: string,
    _signal?: AbortSignal,
  ): Promise<string> {
    const jid = `${SPECIALIST_JID_PREFIX}${slug}`;
    const toolGrants = new Set(agentDef.tools);
    const result = await this.agentPool.runAgent(prompt, jid, {
      toolCeilingFilter: (name) => toolGrants.has(name),
      timeoutMs: agentDef.maxTurns * 60_000,
    });
    if (result.status === "success" || result.status === "tool_complete") {
      return result.result ?? "(no output)";
    }
    throw new Error(result.error ?? "Specialist run failed");
  }
}
