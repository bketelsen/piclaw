import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import fs from "node:fs/promises";
import type { ExtensionAPI, ExtensionFactory } from "@mariozechner/pi-coding-agent";

import { createTempWorkspace, importFresh, setEnv } from "../helpers.js";

type BeforeAgentStartHandler = (event: {
  type: "before_agent_start";
  prompt: string;
  images: unknown[];
  systemPrompt: string;
}) => Promise<{ systemPrompt?: string } | void>;

function captureBeforeAgentStartHandlers(factories: ExtensionFactory[]) {
  const handlers: Array<{ extensionName: string; handler: BeforeAgentStartHandler }> = [];

  for (const factory of factories) {
    const extensionName = factory.name || "anonymous_extension";
    const api = {
      on(event: string, handler: BeforeAgentStartHandler) {
        if (event === "before_agent_start") {
          handlers.push({ extensionName, handler });
        }
      },
      registerTool() {},
      registerCommand() {},
      registerShortcut() {},
      registerFlag() {},
      getFlag() { return undefined; },
      registerMessageRenderer() {},
      sendMessage() {},
      sendUserMessage() {},
      appendEntry() {},
      setSessionName() {},
      getSessionName() { return undefined; },
      setLabel() {},
      exec: async () => ({ exitCode: 0, stdout: "", stderr: "" }),
      getActiveTools: () => [],
      getAllTools: () => [],
      setActiveTools() {},
      getCommands: () => [],
      setModel: async () => true,
      getThinkingLevel: () => "off" as const,
      setThinkingLevel() {},
      registerProvider() {},
      unregisterProvider() {},
    } as unknown as ExtensionAPI;

    factory(api);
  }

  return handlers;
}

async function applyCogBootstrap(systemPrompt = "Base system prompt") {
  const { createBuiltinExtensionFactories } = await importFresh<typeof import("../../src/extensions/index.js")>("../src/extensions/index.js");
  const handlers = captureBeforeAgentStartHandlers(createBuiltinExtensionFactories());
  const hook = handlers.find((entry) => entry.extensionName === "cogMemoryBootstrap");
  expect(hook).toBeDefined();
  const result = await hook!.handler({
    type: "before_agent_start",
    prompt: "hello",
    images: [],
    systemPrompt,
  });
  return result?.systemPrompt ?? systemPrompt;
}

describe("cog memory bootstrap extension", () => {
  let ws: ReturnType<typeof createTempWorkspace>;
  let restoreEnv: (() => void) | null = null;

  beforeEach(() => {
    ws = createTempWorkspace("piclaw-cog-bootstrap-");
    restoreEnv = setEnv({
      PICLAW_WORKSPACE: ws.workspace,
      PICLAW_HOME: ws.workspace,
      PICLAW_STORE: ws.store,
      PICLAW_DATA: ws.data,
    });
  });

  afterEach(() => {
    restoreEnv?.();
    restoreEnv = null;
    ws.cleanup();
  });

  test("injects current COG memory sections into the system prompt", async () => {
    await fs.mkdir(`${ws.workspace}/cog/memory/cog-meta`, { recursive: true });
    await fs.writeFile(`${ws.workspace}/cog/memory/hot-memory.md`, "# Hot Memory\nTop priority");
    await fs.writeFile(`${ws.workspace}/cog/memory/cog-meta/patterns.md`, "# Patterns\nAlways be concise");
    await fs.writeFile(`${ws.workspace}/cog/memory/cog-meta/foresight-nudge.md`, "# Foresight Nudge\nWatch the search scope coupling");
    await fs.writeFile(`${ws.workspace}/cog/memory/domains.yml`, "domains:\n  - id: personal");

    const systemPrompt = await applyCogBootstrap();

    expect(systemPrompt).toContain("## Current Memory");
    expect(systemPrompt).toContain("### Hot Memory");
    expect(systemPrompt).toContain("Top priority");
    expect(systemPrompt).toContain("### Patterns (universal)");
    expect(systemPrompt).toContain("Always be concise");
    expect(systemPrompt).toContain("### Foresight Nudge");
    expect(systemPrompt).toContain("### Domains");
  });

  test("injects nothing when the COG memory directory is absent", async () => {
    const systemPrompt = await applyCogBootstrap();
    expect(systemPrompt).toBe("Base system prompt");
  });

  test("caps injected memory and leaves a truncation note", async () => {
    const largeChunk = "x".repeat(7000);
    await fs.mkdir(`${ws.workspace}/cog/memory/cog-meta`, { recursive: true });
    await fs.writeFile(`${ws.workspace}/cog/memory/hot-memory.md`, largeChunk);
    await fs.writeFile(`${ws.workspace}/cog/memory/cog-meta/patterns.md`, largeChunk);
    await fs.writeFile(`${ws.workspace}/cog/memory/cog-meta/foresight-nudge.md`, largeChunk);
    await fs.writeFile(`${ws.workspace}/cog/memory/domains.yml`, "domains:\n  - id: personal");

    const systemPrompt = await applyCogBootstrap();

    expect(systemPrompt.length).toBeLessThanOrEqual(16000);
    expect(systemPrompt).toContain("[truncated");
  });
});
