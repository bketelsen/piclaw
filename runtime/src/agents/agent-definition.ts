/**
 * agents/agent-definition.ts – Discovery, parsing, and registry for delegate agent definitions.
 *
 * Agent definitions live in markdown files with YAML frontmatter under:
 *   - skel/.pi/agents/   (bundled, read-only)
 *   - ~/.piclaw/.pi/agents/  (user-defined, wins on name conflict)
 *
 * Format:
 *   ---
 *   name: architect
 *   description: Senior software architect...
 *   model: claude-opus-4-5    # optional
 *   tools: [read, bash, grep] # explicit grants; nothing is implicit
 *   max_turns: 20             # optional, default 20
 *   ---
 *
 *   <system prompt body>
 */

import { existsSync, readdirSync, readFileSync } from "fs";
import { join, resolve } from "path";
import { PICLAW_HOME } from "../core/config.js";
import { createLogger } from "../utils/logger.js";

const log = createLogger("agents.agent-definition");

const BUNDLED_AGENTS_DIR = resolve(import.meta.dir, "../../../skel/.pi/agents");
const USER_AGENTS_DIR = join(PICLAW_HOME, ".pi", "agents");

export interface AgentDefinition {
  /** Canonical name — matches filename without extension. Used for @name dispatch. */
  name: string;
  /** Short summary for /agents listing. */
  description: string;
  /** Optional model override. Inherits Pi's active model if omitted. */
  model?: string;
  /** Explicit tool grants. Nothing is granted implicitly. */
  tools: string[];
  /** Turn cap. Default 20. */
  maxTurns: number;
  /** Full system prompt (the markdown body below frontmatter). */
  systemPrompt: string;
  /** Absolute path of the source file — for debugging and reload. */
  sourcePath: string;
  /** If set, this agent runs as a multi-provider debate council. */
  council?: CouncilConfig;
}

export interface CouncilMember {
  /** Short identifier used in prompts and JIDs. */
  id: string;
  /** Full model label e.g. "github-copilot/claude-sonnet-4.6" */
  model: string;
  /** Role description injected into the member's system prompt. */
  role: string;
}

export interface CouncilConfig {
  members: CouncilMember[];
  /** id of the member that produces the final synthesis. */
  synthesizer: string;
  maxRounds: number;
}

// Module-level registry, populated at startup.
let _registry: Map<string, AgentDefinition> = new Map();

/** Return the loaded agent definition registry. */
export function getLoadedAgentDefinitions(): Map<string, AgentDefinition> {
  return _registry;
}

/** Replace the registry. Called by loadAgentDefinitions() at startup and on reload. */
export function setLoadedAgentDefinitions(defs: Map<string, AgentDefinition>): void {
  _registry = defs;
}

/**
 * Discover and parse all agent definition files.
 * Bundled agents are loaded first; user agents win on name conflict.
 */
export function loadAgentDefinitions(): Map<string, AgentDefinition> {
  const defs = new Map<string, AgentDefinition>();

  for (const dir of [BUNDLED_AGENTS_DIR, USER_AGENTS_DIR]) {
    if (!existsSync(dir)) continue;

    let entries: string[];
    try {
      entries = readdirSync(dir);
    } catch (err) {
      log.warn("Failed to read agents directory", { operation: "load_agent_definitions.readdir", dir, err });
      continue;
    }

    for (const entry of entries) {
      if (!entry.endsWith(".md")) continue;
      const filePath = join(dir, entry);
      const def = parseAgentDefinition(filePath);
      if (!def) continue;
      if (defs.has(def.name)) {
        log.info("User agent definition overrides bundled", { name: def.name, path: filePath });
      }
      defs.set(def.name, def);
    }
  }

  log.info("Loaded agent definitions", {
    operation: "load_agent_definitions",
    count: defs.size,
    names: [...defs.keys()],
  });

  return defs;
}

/**
 * Parse a single agent definition markdown file.
 * Returns null if the file is missing, malformed, or has no valid name/tools.
 */
export function parseAgentDefinition(filePath: string): AgentDefinition | null {
  let raw: string;
  try {
    raw = readFileSync(filePath, "utf8");
  } catch (err) {
    log.warn("Failed to read agent definition file", { operation: "parse_agent_definition.read", filePath, err });
    return null;
  }

  const { frontmatter, body } = splitFrontmatter(raw);
  if (!frontmatter) {
    log.warn("Agent definition missing frontmatter", { filePath });
    return null;
  }

  const fields = parseFrontmatterFields(frontmatter);
  const name = normalizeAgentName(String(fields.name ?? ""));
  if (!name) {
    log.warn("Agent definition missing or invalid name", { filePath, raw: fields.name });
    return null;
  }

  const tools = parseToolList(fields.tools);
  if (tools.length === 0) {
    log.warn("Agent definition has no tools — check 'tools:' frontmatter field", { filePath, name });
  }

  const description = String(fields.description ?? "").trim() || `Agent: ${name}`;
  const model = typeof fields.model === "string" && fields.model.trim() ? fields.model.trim() : undefined;
  const maxTurns = parseMaxTurns(fields.max_turns);
  const systemPrompt = body.trim();
  const council = parseCouncilConfig(frontmatter);

  return { name, description, model, tools, maxTurns, systemPrompt, sourcePath: filePath, ...(council ? { council } : {}) };
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function splitFrontmatter(raw: string): { frontmatter: string | null; body: string } {
  const trimmed = raw.trimStart();
  if (!trimmed.startsWith("---")) return { frontmatter: null, body: raw };

  const end = trimmed.indexOf("\n---", 3);
  if (end === -1) return { frontmatter: null, body: raw };

  const frontmatter = trimmed.slice(3, end).trim();
  const body = trimmed.slice(end + 4).trimStart();
  return { frontmatter, body };
}

/** Minimal YAML field parser — handles string, optional-quoted string, and inline list. */
function parseFrontmatterFields(frontmatter: string): Record<string, unknown> {
  const fields: Record<string, unknown> = {};

  for (const line of frontmatter.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;

    const key = line.slice(0, colonIdx).trim();
    const rawVal = line.slice(colonIdx + 1).trim();
    if (!key) continue;

    // Inline list: [a, b, c]
    if (rawVal.startsWith("[") && rawVal.endsWith("]")) {
      fields[key] = rawVal
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ""))
        .filter(Boolean);
      continue;
    }

    // Strip inline comment (# ...)
    const commentIdx = rawVal.indexOf(" #");
    const val = commentIdx !== -1 ? rawVal.slice(0, commentIdx).trim() : rawVal;

    // Unquote
    fields[key] = val.replace(/^['"]|['"]$/g, "");
  }

  return fields;
}

function normalizeAgentName(raw: string): string {
  return String(raw ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "");
}

function parseToolList(raw: unknown): string[] {
  if (Array.isArray(raw)) return raw.map(String).map((s) => s.trim()).filter(Boolean);
  if (typeof raw === "string" && raw.trim()) return raw.split(",").map((s) => s.trim()).filter(Boolean);
  return [];
}

function parseMaxTurns(raw: unknown): number {
  const n = Number.parseInt(String(raw ?? ""), 10);
  if (Number.isFinite(n) && n > 0) return Math.min(n, 100);
  return 20;
}

/**
 * Parse the `council:` block from raw YAML frontmatter.
 * Handles the multi-line list format:
 *   council:
 *     members:
 *       - id: claude
 *         model: github-copilot/claude-sonnet-4.6
 *         role: Senior architect.
 *     synthesizer: claude
 *     max_rounds: 3
 */
function parseCouncilConfig(frontmatter: string): CouncilConfig | null {
  const councilStart = frontmatter.indexOf("\ncouncil:");
  if (councilStart === -1) return null;

  const block = frontmatter.slice(councilStart + 1);
  const lines = block.split("\n");

  const members: CouncilMember[] = [];
  let synthesizer = "";
  let maxRounds = 3;
  let currentMember: Partial<CouncilMember> | null = null;

  for (const line of lines) {
    // Detect list item start
    if (/^\s+-\s+id:\s*/.test(line)) {
      if (currentMember?.id) members.push(currentMember as CouncilMember);
      currentMember = { id: line.replace(/^\s+-\s+id:\s*/, "").trim() };
      continue;
    }
    if (currentMember) {
      const modelMatch = /^\s+model:\s*(.+)/.exec(line);
      if (modelMatch) { currentMember.model = modelMatch[1].trim(); continue; }
      const roleMatch = /^\s+role:\s*(.+)/.exec(line);
      if (roleMatch) { currentMember.role = roleMatch[1].trim(); continue; }
      // Leaving member block
      if (/^\s+\w+:/.test(line) && !/^\s+(model|role|id):/.test(line)) {
        if (currentMember?.id) { members.push(currentMember as CouncilMember); currentMember = null; }
      }
    }
    const synthMatch = /^\s+synthesizer:\s*(.+)/.exec(line);
    if (synthMatch) { synthesizer = synthMatch[1].trim(); continue; }
    const roundsMatch = /^\s+max_rounds:\s*(\d+)/.exec(line);
    if (roundsMatch) { maxRounds = parseInt(roundsMatch[1], 10) || 3; continue; }
  }
  if (currentMember?.id) members.push(currentMember as CouncilMember);

  if (members.length === 0) return null;
  if (!synthesizer && members[0]) synthesizer = members[0].id;

  return { members, synthesizer, maxRounds };
}
