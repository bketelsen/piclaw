/**
 * agents/agent-turn-queue.ts – Per-agent FIFO with dedup, lead 1-cap, and stale-cancel.
 *
 * Port of wuphf/internal/team/headless_codex.go queue logic.
 * Manages turn dispatch state for the majordomo orchestrator.
 */

export interface AgentTurn {
  taskId: string;    // dedup key — hash of prompt content
  prompt: string;
  enqueuedAt: number;
  attempts: number;
}

interface ActiveTurn {
  turn: AgentTurn;
  startedAt: number;
  cancel: () => void;
}

const LEAD_MAX_PENDING = 1;
const STALE_CANCEL_AFTER_MS = 90_000;
const MIN_TURN_AGE_BEFORE_CANCEL_MS = 2_000;

export class AgentTurnQueue {
  private queues = new Map<string, AgentTurn[]>();
  private active = new Map<string, ActiveTurn>();
  private workers = new Set<string>();
  private deferredLead: AgentTurn | null = null;

  constructor(private leadSlug: string) {}

  enqueue(slug: string, turn: AgentTurn): "enqueued" | "deferred" | "dropped" {
    const activeTurn = this.active.get(slug);
    if (activeTurn && activeTurn.turn.taskId === turn.taskId) return "dropped";

    const q = this.queues.get(slug) ?? [];
    const existingIdx = q.findIndex((t) => t.taskId === turn.taskId);
    if (existingIdx !== -1) {
      q[existingIdx] = turn;
      this.queues.set(slug, q);
      return "enqueued";
    }

    if (slug === this.leadSlug) {
      if (this._hasActiveOrQueuedSpecialists()) {
        this.deferredLead = turn;
        return "deferred";
      }
      if (q.length >= LEAD_MAX_PENDING) {
        q[q.length - 1] = turn;
        return "enqueued";
      }
    }

    if (activeTurn) {
      const age = Date.now() - activeTurn.startedAt;
      if (age >= MIN_TURN_AGE_BEFORE_CANCEL_MS && age >= STALE_CANCEL_AFTER_MS) {
        activeTurn.cancel();
      }
    }

    q.push(turn);
    this.queues.set(slug, q);
    return "enqueued";
  }

  dequeue(slug: string): AgentTurn | null {
    const q = this.queues.get(slug);
    if (!q || q.length === 0) {
      this.queues.delete(slug);
      this.workers.delete(slug);
      return null;
    }
    const turn = q.shift()!;
    if (q.length === 0) this.queues.delete(slug);
    return turn;
  }

  markActive(slug: string, turn: AgentTurn, cancel: () => void): void {
    this.active.set(slug, { turn, startedAt: Date.now(), cancel });
    this.workers.add(slug);
  }

  finishTurn(slug: string): AgentTurn | null {
    this.active.delete(slug);
    this.workers.delete(slug);
    if (slug !== this.leadSlug && !this._hasActiveOrQueuedSpecialists()) {
      const deferred = this.deferredLead;
      this.deferredLead = null;
      return deferred;
    }
    return null;
  }

  private _hasActiveOrQueuedSpecialists(): boolean {
    for (const [slug] of this.active) {
      if (slug !== this.leadSlug) return true;
    }
    for (const [slug, q] of this.queues) {
      if (slug !== this.leadSlug && q.length > 0) return true;
    }
    return false;
  }

  hasWork(slug: string): boolean {
    return (this.queues.get(slug)?.length ?? 0) > 0;
  }

  isWorkerActive(slug: string): boolean {
    return this.workers.has(slug);
  }
}
