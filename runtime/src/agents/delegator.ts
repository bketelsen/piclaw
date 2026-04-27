/**
 * agents/delegator.ts – @mention extraction and delegation helpers.
 *
 * Port of wuphf/internal/orchestration/delegator.go.
 * Pure logic — no dependencies, no side effects.
 */

export interface Delegation {
  agentSlug: string;
  task: string; // surrounding sentence context
}

const MENTION_RE = /@([a-z][a-z0-9-]*)/g;

/**
 * Build a Set of character positions that fall inside backtick spans (inline
 * code or fenced code blocks). @mentions inside these regions are NOT
 * delegation signals — they are examples or instructions to the user.
 */
function backtickRanges(text: string): Array<[number, number]> {
  const ranges: Array<[number, number]> = [];
  // Fenced code blocks: ```...```
  const fenceRe = /```[\s\S]*?```/g;
  let m: RegExpExecArray | null;
  while ((m = fenceRe.exec(text)) !== null) {
    ranges.push([m.index, m.index + m[0].length]);
  }
  // Inline code: `...`
  const inlineRe = /`[^`\n]+`/g;
  while ((m = inlineRe.exec(text)) !== null) {
    ranges.push([m.index, m.index + m[0].length]);
  }
  return ranges;
}

function isInsideRange(pos: number, ranges: Array<[number, number]>): boolean {
  return ranges.some(([start, end]) => pos >= start && pos < end);
}

/**
 * Parse a Team-Lead response for @agent-slug mentions.
 * Only slugs present in knownSlugs are returned.
 * Each slug appears at most once (first mention wins).
 */
export function extractDelegations(
  response: string,
  knownSlugs: string[],
): Delegation[] {
  const known = new Set(knownSlugs);
  const seen = new Set<string>();
  const delegations: Delegation[] = [];
  const codeRanges = backtickRanges(response);

  let match: RegExpExecArray | null;
  MENTION_RE.lastIndex = 0;
  while ((match = MENTION_RE.exec(response)) !== null) {
    const slug = match[1];
    if (!known.has(slug) || seen.has(slug)) continue;
    if (isInsideRange(match.index, codeRanges)) continue; // skip code-fence / backtick spans
    seen.add(slug);
    delegations.push({
      agentSlug: slug,
      task: extractSentence(response, match.index),
    });
  }
  return delegations;
}

export function applyLimit(
  delegations: Delegation[],
  maxConcurrent = 3,
): { immediate: Delegation[]; queued: Delegation[] } {
  if (delegations.length <= maxConcurrent) return { immediate: delegations, queued: [] };
  return { immediate: delegations.slice(0, maxConcurrent), queued: delegations.slice(maxConcurrent) };
}

export function formatSteerMessage(d: Delegation): string {
  return `[MILES DELEGATION] ${d.task}`;
}

function extractSentence(text: string, pos: number): string {
  let start = 0;
  for (let i = pos - 1; i >= 0; i--) {
    if (text[i] === "." || text[i] === "\n") {
      start = i + 1;
      break;
    }
  }
  let end = text.length;
  for (let i = pos; i < text.length; i++) {
    if (text[i] === "." || text[i] === "\n") {
      end = i + 1;
      break;
    }
  }
  return text.slice(start, end).trim();
}

export function taskIdFromPrompt(prompt: string): string {
  let h = 5381;
  for (let i = 0; i < prompt.length && i < 512; i++) {
    h = ((h << 5) + h) ^ prompt.charCodeAt(i);
    h = h >>> 0;
  }
  return `task-${h.toString(16)}`;
}
