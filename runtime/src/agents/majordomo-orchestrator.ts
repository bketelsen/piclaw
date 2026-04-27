/**
 * agents/majordomo-orchestrator.ts – Phase 2: MajordomoOrchestrator singleton.
 *
 * Coordinates Miles (the lead agent) and its specialist sub-agents.
 * - Parses @mentions from Miles's output and enqueues specialist turns.
 * - Stalls the AgentQueue lane while specialists run (lead-wait pattern).
 * - Assembles specialist results into a synthesis message and wakes Miles.
 * - Handles explicit delegate tool calls via dispatchOne().
 *
 * See architecture doc §8 for full design notes.
 */

import { getDb, storeMessage } from "../db.js";
import { getLoadedAgentDefinitions } from "./agent-definition.js";
import { AgentTurnQueue, type AgentTurn } from "./agent-turn-queue.js";
import { SpecialistPool } from "./specialist-pool.js";
import { extractDelegations, formatSteerMessage, taskIdFromPrompt } from "./delegator.js";
import { TaskRouter } from "./task-router.js";
import type { AgentPool } from "../agent-pool.js";
import type { AgentDefinition } from "./agent-definition.js";
import { createLogger } from "../utils/logger.js";

const log = createLogger("agents.majordomo-orchestrator");

const MAX_RESULT_CHARS = 24_000;
const LEAD_SLUG = "miles";
const WATCHDOG_TIMEOUT_MS = 5 * 60 * 1000;

export interface SpecialistResult {
  slug: string;
  output: string;
  error?: string;
  elapsedSec: number;
}

export interface MajordomoOrchestratorOptions {
  mainChatJid: string;
  agentPool: AgentPool;
  broadcastEvent: (eventType: string, data: unknown) => void;
  processChat: (chatJid: string) => void;
}

export class MajordomoOrchestrator {
  private queue: AgentTurnQueue;
  private specialistPool: SpecialistPool;
  private router: TaskRouter;

  private pendingResults: SpecialistResult[] = [];
  private pendingSlugs = new Set<string>();
  private milesHeld = false;
  private leadHoldResolve: (() => void) | null = null;
  private watchdogTimer: ReturnType<typeof setTimeout> | null = null;

  /** Expose for processChat() to compare against. */
  readonly mainChatJid: string;

  constructor(private opts: MajordomoOrchestratorOptions) {
    this.mainChatJid = opts.mainChatJid;
    this.queue = new AgentTurnQueue(LEAD_SLUG);
    this.specialistPool = new SpecialistPool(opts.agentPool);
    this.router = new TaskRouter();
    this._registerAllAgents();
  }

  private _registerAllAgents(): void {
    const defs = getLoadedAgentDefinitions();
    for (const [slug, def] of defs) {
      if (def.skills && def.skills.length > 0) {
        this.router.registerAgent(slug, def.skills);
      }
    }
  }

  /**
   * Called after Miles produces a response.
   * Parses @mentions, enqueues specialists, sets the lane hold.
   * Returns true if Miles is now held (delegations were found), false otherwise.
   */
  async handleLeadOutput(
    milesOutput: string,
    _originalUserMessage: string,
  ): Promise<boolean> {
    const defs = getLoadedAgentDefinitions();
    const knownSlugs = [...defs.keys()];
    const delegations = extractDelegations(milesOutput, knownSlugs);

    if (delegations.length === 0) return false;

    log.info("Majordomo: extracted delegations", {
      operation: "handle_lead_output",
      delegations: delegations.map((d) => d.agentSlug),
    });

    this.pendingResults = [];
    this.pendingSlugs = new Set(delegations.map((d) => d.agentSlug));
    this.milesHeld = true;

    // 5-minute watchdog: force _wakeLead() if specialists never complete.
    this.watchdogTimer = setTimeout(() => {
      if (this.pendingSlugs.size === 0) return;
      log.error("Majordomo watchdog: specialists timed out, forcing wakeLead", {
        stuck: [...this.pendingSlugs],
      });
      for (const slug of [...this.pendingSlugs]) {
        this.pendingResults.push({
          slug,
          output: "",
          error: "Watchdog timeout — specialist did not complete within 5 minutes",
          elapsedSec: 300,
        });
        this.pendingSlugs.delete(slug);
      }
      void this._wakeLead();
    }, WATCHDOG_TIMEOUT_MS);

    this.opts.broadcastEvent("majordomo_dispatch", {
      specialists: delegations.map((d) => d.agentSlug),
      timestamp: new Date().toISOString(),
    });

    for (const delegation of delegations) {
      const agentDef = defs.get(delegation.agentSlug);
      if (!agentDef) {
        log.warn("Majordomo: unknown agent slug, skipping", { slug: delegation.agentSlug });
        this.pendingSlugs.delete(delegation.agentSlug);
        continue;
      }
      const prompt = formatSteerMessage(delegation);
      const turn: AgentTurn = {
        taskId: taskIdFromPrompt(prompt),
        prompt,
        enqueuedAt: Date.now(),
        attempts: 0,
      };
      this.queue.enqueue(delegation.agentSlug, turn);
      void this._runSpecialistWorker(delegation.agentSlug, agentDef, turn);
    }

    // If all slugs were unknown, none were actually enqueued — wake immediately.
    if (this.pendingSlugs.size === 0) {
      this.milesHeld = false;
      if (this.watchdogTimer) {
        clearTimeout(this.watchdogTimer);
        this.watchdogTimer = null;
      }
      return false;
    }

    return true; // caller (processChat) should stall the lane
  }

  /**
   * Stalls the AgentQueue lane until _wakeLead() resolves the hold promise.
   * If _wakeLead() already ran (milesHeld is false), returns immediately.
   */
  waitForSpecialists(): Promise<void> {
    if (!this.milesHeld) return Promise.resolve();
    return new Promise<void>((resolve) => {
      this.leadHoldResolve = resolve;
    });
  }

  private async _runSpecialistWorker(
    slug: string,
    agentDef: AgentDefinition,
    turn: AgentTurn,
  ): Promise<void> {
    const startedAt = Date.now();
    const ac = new AbortController();
    this.queue.markActive(slug, turn, () => ac.abort());

    this.opts.broadcastEvent("specialist_started", {
      slug,
      taskId: turn.taskId,
      timestamp: new Date().toISOString(),
    });

    let output = "";
    let error: string | undefined;

    try {
      output = await this.specialistPool.runTurn(slug, agentDef, turn.prompt, ac.signal);
    } catch (err) {
      error = err instanceof Error ? err.message : String(err);
      log.error("Majordomo: specialist failed", { slug, error });
    } finally {
      // Guaranteed cleanup — pendingSlugs.delete() runs even if runTurn throws.
      const elapsedSec = Math.round((Date.now() - startedAt) / 1000);

      this.opts.broadcastEvent("specialist_done", {
        slug,
        elapsedSec,
        status: error ? "error" : "success",
        timestamp: new Date().toISOString(),
      });

      this.queue.finishTurn(slug);

      this.pendingResults.push({
        slug,
        output: output.slice(0, MAX_RESULT_CHARS),
        error,
        elapsedSec,
      });
      this.pendingSlugs.delete(slug);

      if (this.pendingSlugs.size === 0) {
        await this._wakeLead();
      }
    }
  }

  private async _wakeLead(): Promise<void> {
    log.info("Majordomo: all specialists done — waking Miles", {
      resultSlugs: this.pendingResults.map((r) => r.slug),
    });

    if (this.watchdogTimer) {
      clearTimeout(this.watchdogTimer);
      this.watchdogTimer = null;
    }

    const parts = this.pendingResults.map((r) =>
      r.error
        ? `**@${r.slug}** (error after ${r.elapsedSec}s):\n${r.error}`
        : `**@${r.slug}** (${r.elapsedSec}s):\n${r.output}`,
    );

    const body = [
      `[Specialist results — ${this.pendingResults.length} agent(s) reported]`,
      "",
      ...parts,
    ].join("\n\n");

    const db = getDb();
    const now = new Date().toISOString();
    const { mainChatJid } = this.opts;

    db.prepare(`INSERT OR IGNORE INTO chats (jid, last_message_time) VALUES (?, ?)`).run(
      mainChatJid,
      now,
    );
    storeMessage({
      id: `majordomo-synthesis-${Date.now()}`,
      chat_jid: mainChatJid,
      sender: "majordomo:orchestrator",
      sender_name: "[Specialist Results]",
      content: body,
      timestamp: now,
      is_bot_message: false,
      is_from_me: false,
    });

    this.pendingResults = [];
    this.milesHeld = false;

    this.opts.broadcastEvent("majordomo_synthesis_ready", { timestamp: now });

    // Resolve the hold promise — the stalled processChat() lane item resumes
    // and calls channel.resumeChat().  Do NOT call opts.processChat() here;
    // that re-trigger must come from within the lane to preserve FIFO order.
    this.leadHoldResolve?.();
    this.leadHoldResolve = null;
  }

  /** True if Miles's lane is currently held waiting for specialists. */
  get isLeadHeld(): boolean {
    return this.milesHeld;
  }

  /**
   * Called when Miles uses the `delegate` tool directly (not via @mention).
   * Sets milesHeld immediately so processChat() will stall the lane after
   * runAgent() returns.
   */
  async dispatchOne(slug: string, task: string, context: string): Promise<void> {
    const prompt = context ? `[Context]\n${context}\n\n[Task]\n${task}` : task;
    const turn: AgentTurn = {
      taskId: taskIdFromPrompt(prompt),
      prompt,
      enqueuedAt: Date.now(),
      attempts: 0,
    };
    const defs = getLoadedAgentDefinitions();
    const agentDef = defs.get(slug);
    if (!agentDef) throw new Error(`Unknown agent: ${slug}`);

    // If not already held, set up the hold machinery fresh.
    if (!this.milesHeld) {
      this.pendingResults = [];
      this.pendingSlugs = new Set();

      // Watchdog — same 5-minute guard as handleLeadOutput.
      this.watchdogTimer = setTimeout(() => {
        if (this.pendingSlugs.size === 0) return;
        log.error("Majordomo watchdog (dispatchOne): timed out, forcing wakeLead", {
          stuck: [...this.pendingSlugs],
        });
        for (const s of [...this.pendingSlugs]) {
          this.pendingResults.push({
            slug: s,
            output: "",
            error: "Watchdog timeout — specialist did not complete within 5 minutes",
            elapsedSec: 300,
          });
          this.pendingSlugs.delete(s);
        }
        void this._wakeLead();
      }, WATCHDOG_TIMEOUT_MS);

      this.milesHeld = true;
    }

    this.pendingSlugs.add(slug);
    this.queue.enqueue(slug, turn);

    this.opts.broadcastEvent("majordomo_dispatch", {
      specialists: [slug],
      timestamp: new Date().toISOString(),
    });

    void this._runSpecialistWorker(slug, agentDef, turn);
  }
}

// ── Module-level singleton ────────────────────────────────────────────────────

let _orchestrator: MajordomoOrchestrator | null = null;

export function setMajordomoOrchestrator(o: MajordomoOrchestrator): void {
  _orchestrator = o;
}

export function getMajordomoOrchestrator(): MajordomoOrchestrator | null {
  return _orchestrator;
}
