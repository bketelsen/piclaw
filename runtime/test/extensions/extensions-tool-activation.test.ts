/**
 * test/extensions/extensions-tool-activation.test.ts – Tests for lazy tool activation.
 */

import { describe, expect, test } from "bun:test";
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import "../helpers.js";
import { withTempWorkspaceEnv } from "../helpers.js";
import { createFakeExtensionApi } from "./fake-extension-api.js";

describe("tool-activation extension", () => {
  test("registers activation tools and default baseline metadata", async () => {
    const { toolActivation, getDefaultActiveToolNames } = await import("../../src/extensions/tool-activation.js");
    const fake = createFakeExtensionApi({ allTools: [] });

    toolActivation(fake.api);

    expect(fake.tools.has("activate_tools")).toBe(true);
    expect(fake.tools.has("reset_active_tools")).toBe(true);
    expect(getDefaultActiveToolNames()).toContain("list_internal_tools");
    expect(getDefaultActiveToolNames()).toContain("attach_file");
    expect(getDefaultActiveToolNames()).toContain("messages");
    expect(getDefaultActiveToolNames()).toContain("keychain");
    expect(getDefaultActiveToolNames()).toContain("exit_process");
    expect(getDefaultActiveToolNames()).not.toContain("list_models");
    expect(getDefaultActiveToolNames("win32")).toContain("powershell");
    expect(getDefaultActiveToolNames("win32")).not.toContain("bash");
  });

  test("session_start resets active tools to the default minimal baseline", async () => {
    const { toolActivation, getDefaultActiveToolNames } = await import("../../src/extensions/tool-activation.js");
    const fake = createFakeExtensionApi({
      allTools: getDefaultActiveToolNames().map((name) => ({ name, description: `${name} description` })),
      activeTools: ["messages", "keychain"],
    });

    toolActivation(fake.api);

    const sessionStart = fake.handlers.find((entry) => entry.event === "session_start");
    expect(sessionStart).toBeDefined();
    await sessionStart!.handler({}, {});
    expect(fake.api.getActiveTools()).toEqual(getDefaultActiveToolNames());
  });

  test("activate_tools appends tools and reports missing names", async () => {
    const { toolActivation } = await import("../../src/extensions/tool-activation.js");
    const fake = createFakeExtensionApi({
      allTools: [
        { name: "read", description: "Read a file." },
        { name: "bash", description: "Run shell commands." },
        { name: "messages", description: "Read and write timeline messages." },
        { name: "list_internal_tools", description: "List tools." },
        { name: "activate_tools", description: "Activate tools." },
        { name: "reset_active_tools", description: "Reset tools." },
        { name: "attach_file", description: "Attach a file." },
        { name: "read_attachment", description: "Read attachment." },
        { name: "export_attachment", description: "Export attachment." },
        { name: "get_model_state", description: "Get model state." },
        { name: "list_models", description: "List models." },
        { name: "switch_model", description: "Switch model." },
        { name: "switch_thinking", description: "Switch thinking." },
      ],
      activeTools: ["read", "bash", "list_internal_tools", "activate_tools", "reset_active_tools"],
    });

    toolActivation(fake.api);

    const tool = fake.tools.get("activate_tools");
    const result = await tool.execute("t1", { names: ["messages", "missing_tool"] });
    expect(result.content[0].text).toContain("1 accepted");
    expect(result.content[0].text).toContain("same turn");
    expect(result.details.availability).toBe("same_turn");
    expect(result.details.newlyActivated).toEqual(["messages"]);
    expect(result.details.missing).toEqual(["missing_tool"]);
    expect(fake.api.getActiveTools()).toContain("messages");
  });

  test("reset_active_tools returns to baseline after manual activation", async () => {
    const { toolActivation, getDefaultActiveToolNames } = await import("../../src/extensions/tool-activation.js");
    const available = [
      ...getDefaultActiveToolNames(),
      "introspect_sql",
    ];
    const fake = createFakeExtensionApi({
      allTools: available.map((name) => ({ name, description: `${name} description` })),
      activeTools: getDefaultActiveToolNames(),
    });

    toolActivation(fake.api);

    const activateTools = fake.tools.get("activate_tools");
    const resetActiveTools = fake.tools.get("reset_active_tools");

    await activateTools.execute("t2", { names: ["introspect_sql"] });
    expect(fake.api.getActiveTools()).toContain("introspect_sql");

    const resetResult = await resetActiveTools.execute("t3", {});
    expect(resetResult.details.availability).toBe("same_turn");
    expect(fake.api.getActiveTools()).toEqual(getDefaultActiveToolNames());
  });

  test("default active tools include config-defined additions", async () => {
    await withTempWorkspaceEnv("piclaw-tool-activation-config-", {}, async (ws) => {
      const configDir = join(ws.workspace, ".piclaw");
      mkdirSync(configDir, { recursive: true });
      writeFileSync(join(configDir, "config.json"), JSON.stringify({
        tools: {
          additionalDefaultTools: ["search_workspace", "introspect_sql"],
        },
      }, null, 2));

      const proc = Bun.spawnSync({
        cmd: [
          "bun",
          "-e",
          "import { getDefaultActiveToolNames } from './src/extensions/tool-activation.js'; console.log(JSON.stringify(getDefaultActiveToolNames()));",
        ],
        cwd: join(import.meta.dir, "../.."),
        env: {
          PATH: process.env.PATH || "",
          HOME: process.env.HOME || "/tmp",
          TMPDIR: process.env.TMPDIR || "/tmp",
          TMP: process.env.TMP || "/tmp",
          TEMP: process.env.TEMP || "/tmp",
          USER: process.env.USER || "agent",
          PICLAW_WORKSPACE: ws.workspace,
          PICLAW_STORE: ws.store,
          PICLAW_DATA: ws.data,
          PICLAW_DB_IN_MEMORY: "1",
        },
        stdout: "pipe",
        stderr: "pipe",
      });

      expect(proc.exitCode, proc.stderr.toString()).toBe(0);
      const names = JSON.parse(proc.stdout.toString().trim());
      expect(names).toContain("search_workspace");
      expect(names).toContain("introspect_sql");
      expect(names).not.toContain("activate_toolset");
    });
  });
});
