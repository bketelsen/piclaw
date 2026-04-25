import { existsSync, readFileSync } from "fs";
import { join, resolve } from "path";
import type { ExtensionAPI, ExtensionFactory } from "@mariozechner/pi-coding-agent";

import { COG_MEMORY_DIR } from "../core/config.js";

const MAX_CONTEXT_CHARS = 15000;
const TRUNCATION_NOTE = "\n\n[truncated to fit memory bootstrap budget]";

type MemorySection = {
  heading: string;
  relativePath: string[];
};

const MEMORY_SECTIONS: MemorySection[] = [
  { heading: "Hot Memory", relativePath: ["hot-memory.md"] },
  { heading: "Patterns (universal)", relativePath: ["cog-meta", "patterns.md"] },
  { heading: "Foresight Nudge", relativePath: ["cog-meta", "foresight-nudge.md"] },
  { heading: "Domains", relativePath: ["domains.yml"] },
];

function getCogMemoryDir(): string {
  const envHome = process.env.PICLAW_HOME || process.env.PICLAW_WORKSPACE;
  return envHome ? join(resolve(envHome), "cog", "memory") : COG_MEMORY_DIR;
}

function readOptional(path: string): string | null {
  if (!existsSync(path)) return null;
  const text = readFileSync(path, "utf8").trim();
  return text || null;
}

function truncate(text: string): string {
  if (text.length <= MAX_CONTEXT_CHARS) return text;
  return `${text.slice(0, MAX_CONTEXT_CHARS - TRUNCATION_NOTE.length)}${TRUNCATION_NOTE}`;
}

function buildCogMemoryBootstrap(): string | null {
  const cogMemoryDir = getCogMemoryDir();
  if (!existsSync(cogMemoryDir)) return null;

  const sections = MEMORY_SECTIONS
    .map(({ heading, relativePath }) => {
      const filePath = join(cogMemoryDir, ...relativePath);
      const content = readOptional(filePath);
      return content ? `### ${heading}\n${content}` : null;
    })
    .filter((section): section is string => Boolean(section));

  if (sections.length === 0) return null;
  return truncate(`## Current Memory\n\n${sections.join("\n\n")}`);
}

export const cogMemoryBootstrap: ExtensionFactory = (pi: ExtensionAPI) => {
  pi.on("before_agent_start", async (event) => {
    const bootstrap = buildCogMemoryBootstrap();
    if (!bootstrap) return;
    return {
      systemPrompt: `${event.systemPrompt}\n\n${bootstrap}`,
    };
  });
};
