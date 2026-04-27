/**
 * agents/task-router.ts – Dice bigram skill matching for agent task routing.
 *
 * Port of wuphf/internal/orchestration/router.go.
 * Pure logic — no dependencies, no side effects. Retained as infrastructure;
 * no active auto-routing rollout planned (see architecture §10).
 */

export interface SkillDeclaration {
  name: string;
  description?: string;
  proficiency: number; // 0-1
}

export interface TaskDefinition {
  requiredSkills: string[];
}

export interface RoutingResult {
  agentSlug: string;
  score: number;
}

export class TaskRouter {
  private agents = new Map<string, SkillDeclaration[]>();

  registerAgent(slug: string, skills: SkillDeclaration[]): void {
    this.agents.set(slug, skills);
  }

  unregisterAgent(slug: string): void {
    this.agents.delete(slug);
  }

  scoreMatch(agentSlug: string, task: TaskDefinition): number {
    const skills = this.agents.get(agentSlug);
    if (!skills || task.requiredSkills.length === 0) return 0;
    let total = 0;
    for (const required of task.requiredSkills) {
      let best = 0;
      for (const skill of skills) {
        const score = similarity(required, skill.name) * skill.proficiency;
        if (score > best) best = score;
      }
      if (best >= 0.3) total += best;
    }
    return total / task.requiredSkills.length;
  }

  findBestAgent(task: TaskDefinition): RoutingResult | null {
    const results = this.findCapableAgents(task);
    if (results.length === 0) return null;
    return results.reduce((a, b) => (b.score > a.score ? b : a));
  }

  findCapableAgents(task: TaskDefinition): RoutingResult[] {
    const results: RoutingResult[] = [];
    for (const [slug] of this.agents) {
      const score = this.scoreMatch(slug, task);
      if (score > 0) results.push({ agentSlug: slug, score });
    }
    return results.sort((a, b) => b.score - a.score);
  }
}

function similarity(a: string, b: string): number {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a === b) return 1;
  if (a.length < 2 || b.length < 2) return a === b ? 1 : 0;
  const biA = bigrams(a);
  const biB = bigrams(b);
  const usedB = new Array<boolean>(biB.length).fill(false);
  let intersection = 0;
  for (const bg of biA) {
    for (let i = 0; i < biB.length; i++) {
      if (!usedB[i] && biB[i] === bg) {
        intersection++;
        usedB[i] = true;
        break;
      }
    }
  }
  return (2 * intersection) / (biA.length + biB.length);
}

function bigrams(s: string): string[] {
  const out: string[] = [];
  for (let i = 0; i < s.length - 1; i++) out.push(s.slice(i, i + 2));
  return out;
}
