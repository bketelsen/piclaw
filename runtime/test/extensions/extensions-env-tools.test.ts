import path from "node:path";
import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { readFileSync, writeFileSync } from "fs";

import { createTempWorkspace } from "../helpers.js";

describe("env-tools extension", () => {
  let ws: ReturnType<typeof createTempWorkspace>;

  beforeEach(() => {
    ws = createTempWorkspace("piclaw-env-tools-");
    delete process.env.TEST_ENV_TOOL_VAR;
    delete process.env.KEEP_ME;
  });

  afterEach(() => {
    delete process.env.TEST_ENV_TOOL_VAR;
    delete process.env.KEEP_ME;
    ws.cleanup();
  });

  function runEnvToolScript(script: string, extraEnv: Record<string, string | undefined> = {}) {
    const env = Object.fromEntries(
      Object.entries({
        ...process.env,
        PICLAW_WORKSPACE: ws.workspace,
        PICLAW_STORE: ws.store,
        PICLAW_DATA: ws.data,
        PICLAW_DB_IN_MEMORY: "1",
        BAR: "copied-value",
        ...extraEnv,
      }).filter(([, value]) => value !== undefined),
    ) as Record<string, string>;

    const proc = Bun.spawnSync([
      "bun",
      "-e",
      `import { envTools } from "./src/extensions/env-tools.ts";
       const tools = new Map();
       const handlers = [];
       const api = {
         on(event, handler) { handlers.push({ event, handler }); },
         registerTool(tool) { tools.set(tool.name, tool); },
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
         getThinkingLevel: () => "off",
         setThinkingLevel() {},
         registerProvider() {},
         unregisterProvider() {},
       };
       envTools(api);
       const tool = tools.get("env");
       ${script}`,
    ], {
      cwd: path.resolve(import.meta.dir, "../.."),
      env,
      stdout: "pipe",
      stderr: "pipe",
    });

    expect(proc.exitCode, `stderr: ${proc.stderr.toString()}`).toBe(0);
    return JSON.parse(proc.stdout.toString());
  }

  test("uses PICLAW_HOME root paths and ~/.piclaw prompt text", () => {
    const result = runEnvToolScript(`
      const beforeStart = handlers.find((handler) => handler.event === "before_agent_start");
      const promptUpdate = await beforeStart.handler({ systemPrompt: "base prompt" });
      await tool.execute("env-root-1", { action: "set", name: "TEST_ENV_TOOL_VAR", value: "abc" });
      console.log(JSON.stringify({
        description: tool.description,
        promptSnippet: tool.promptSnippet,
        systemPrompt: promptUpdate.systemPrompt,
      }));
    `);

    expect(result.description).toContain("~/.piclaw/.env.sh");
    expect(result.description).toContain("~/.piclaw/env-tool.json");
    expect(result.description).not.toContain("/workspace");
    expect(result.promptSnippet).toContain("~/.piclaw/.env.sh");
    expect(result.promptSnippet).not.toContain("/workspace");
    expect(result.systemPrompt).toContain("~/.piclaw/.env.sh");
    expect(result.systemPrompt).toContain("~/.piclaw/env-tool.json");
    expect(result.systemPrompt).not.toContain("/workspace");

    const envScript = readFileSync(`${ws.workspace}/.env.sh`, "utf8");
    expect(envScript).toContain("export TEST_ENV_TOOL_VAR='abc'");

    const stateJson = JSON.parse(readFileSync(`${ws.workspace}/env-tool.json`, "utf8"));
    expect(stateJson).toEqual({ TEST_ENV_TOOL_VAR: "abc" });
  });

  test("get without a name lists managed variable names only", () => {
    const result = runEnvToolScript(`
      const empty = await tool.execute("env-1", { action: "get" });
      await tool.execute("env-2", { action: "set", name: "TEST_ENV_TOOL_VAR", value: "abc" });
      const listed = await tool.execute("env-3", { action: "get" });
      console.log(JSON.stringify({
        emptyText: empty.content[0].text,
        listedText: listed.content[0].text,
      }));
    `);

    expect(result.emptyText).toContain("No managed workspace environment variables found");
    expect(result.listedText).toContain("TEST_ENV_TOOL_VAR");
    expect(result.listedText).not.toContain("abc");
  });

  test("set persists the managed env, updates process.env immediately, and get returns the stored value", () => {
    const result = runEnvToolScript(`
      const setResult = await tool.execute("env-4", { action: "set", name: "TEST_ENV_TOOL_VAR", value: "hello world" });
      const getResult = await tool.execute("env-5", { action: "get", name: "TEST_ENV_TOOL_VAR" });
      console.log(JSON.stringify({
        setDetails: setResult.details,
        currentValue: process.env.TEST_ENV_TOOL_VAR,
        getText: getResult.content[0].text,
        getDetails: getResult.details,
      }));
    `);

    expect(result.setDetails.applied_immediately).toBe(true);
    expect(result.currentValue).toBe("hello world");

    const envScript = readFileSync(`${ws.workspace}/.env.sh`, "utf8");
    expect(envScript).toContain("# >>> piclaw env tool >>>");
    expect(envScript).toContain("export TEST_ENV_TOOL_VAR='hello world'");

    const stateJson = JSON.parse(readFileSync(`${ws.workspace}/env-tool.json`, "utf8"));
    expect(stateJson).toEqual({ TEST_ENV_TOOL_VAR: "hello world" });

    expect(result.getText).toBe("hello world");
    expect(result.getDetails.source).toBe("managed");
    expect(result.getDetails.persisted).toBe(true);
  });

  test("set can copy from an existing environment variable via $NAME", () => {
    const result = runEnvToolScript(`
      const setResult = await tool.execute("env-6", { action: "set", name: "TEST_ENV_TOOL_VAR", value: "$BAR" });
      const getResult = await tool.execute("env-7", { action: "get", name: "TEST_ENV_TOOL_VAR" });
      console.log(JSON.stringify({
        setDetails: setResult.details,
        currentValue: process.env.TEST_ENV_TOOL_VAR,
        getText: getResult.content[0].text,
      }));
    `);

    expect(result.setDetails.copied_from_env).toBe("BAR");
    expect(result.currentValue).toBe("copied-value");
    expect(result.getText).toBe("copied-value");
  });

  test("clear removes one managed variable while preserving user content outside the managed block", () => {
    writeFileSync(`${ws.workspace}/.env.sh`, "export KEEP_ME='yes'\n", "utf8");

    const result = runEnvToolScript(`
      await tool.execute("env-8", { action: "set", name: "TEST_ENV_TOOL_VAR", value: "abc" });
      const clearResult = await tool.execute("env-9", { action: "clear", name: "TEST_ENV_TOOL_VAR" });
      console.log(JSON.stringify({
        clearDetails: clearResult.details,
        currentValue: process.env.TEST_ENV_TOOL_VAR ?? null,
      }));
    `);

    expect(result.clearDetails.cleared).toBe(true);
    expect(result.currentValue).toBeNull();

    const envScript = readFileSync(`${ws.workspace}/.env.sh`, "utf8");
    expect(envScript).toContain("export KEEP_ME='yes'");
    expect(envScript).not.toContain("TEST_ENV_TOOL_VAR");
  });

  test("clear without a name clears all managed variables", () => {
    const result = runEnvToolScript(`
      await tool.execute("env-10", { action: "set", name: "TEST_ENV_TOOL_VAR", value: "abc" });
      await tool.execute("env-11", { action: "set", name: "KEEP_ME", value: "def" });
      const clearAll = await tool.execute("env-12", { action: "clear" });
      const getAll = await tool.execute("env-13", { action: "get" });
      console.log(JSON.stringify({
        clearDetails: clearAll.details,
        getDetails: getAll.details,
        testEnv: process.env.TEST_ENV_TOOL_VAR ?? null,
        keepEnv: process.env.KEEP_ME ?? null,
      }));
    `);

    expect(result.clearDetails.cleared).toBe(true);
    expect(result.testEnv).toBeNull();
    expect(result.keepEnv).toBeNull();
    expect(result.getDetails.count).toBe(0);
  });
});
