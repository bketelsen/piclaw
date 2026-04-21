import { describe, expect, test } from "bun:test";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

import { createFakeExtensionApi } from "./fake-extension-api.js";
import { importFresh, withTempWorkspaceEnv } from "../helpers.js";

describe("context-mode integration", () => {
  test("stores large bash outputs from fullOutputPath and points agents to search_tool_output", async () => {
    await withTempWorkspaceEnv("piclaw-context-mode-", {
      PICLAW_TOOL_OUTPUT_STORE_BYTES: "8",
      PICLAW_TOOL_OUTPUT_STORE_LINES: "2",
    }, async (workspace) => {
      const db = await importFresh<typeof import("../src/db.js")>("../src/db.js");
      db.initDatabase();

      const contextMode = await importFresh<any>("../extensions/integrations/context-mode.ts");
      const fake = createFakeExtensionApi({ allTools: [] });
      contextMode.default(fake.api);

      expect(fake.tools.has("search_tool_output")).toBe(true);
      expect(fake.tools.has("exec_batch")).toBe(true);
      expect(fake.tools.has("tool_output_search")).toBe(false);

      const fullOutputPath = join(workspace.workspace, "full-output.log");
      writeFileSync(fullOutputPath, "header\nneedle line from file\nfooter\n", "utf8");

      const toolResult = fake.handlers.find((entry) => entry.event === "tool_result")?.handler;
      expect(typeof toolResult).toBe("function");

      const result = await toolResult?.({
        toolName: "bash",
        content: [{ type: "text", text: "short inline preview" }],
        details: { fullOutputPath },
        input: { command: "cat full-output.log" },
        isError: false,
        toolCallId: "tool-1",
        type: "tool_result",
      });

      expect(result?.content?.[0]?.text).toContain("Output stored as tool-output:");
      expect(result?.content?.[0]?.text).toContain("search_tool_output");
      expect(result?.content?.[0]?.text).not.toContain("tool_output_search");
      expect(result?.details?.storedOutputId).toBeTruthy();
      expect(result?.details?.storedOutputPath).toBeTruthy();

      const searchTool = fake.tools.get("search_tool_output");
      const searchResult = await searchTool.execute("tool-2", {
        handle: result.details.storedOutputId,
        query: "needle",
      });

      expect(searchResult.content[0].text).toContain('Matches for "needle"');
      expect(searchResult.content[0].text).toContain("[needle] line from file");
    });
  });

  test("does not re-store outputs that already carry stored-output details", async () => {
    await withTempWorkspaceEnv("piclaw-context-mode-", {
      PICLAW_TOOL_OUTPUT_STORE_BYTES: "8",
      PICLAW_TOOL_OUTPUT_STORE_LINES: "2",
    }, async () => {
      const db = await importFresh<typeof import("../src/db.js")>("../src/db.js");
      db.initDatabase();

      const contextMode = await importFresh<any>("../extensions/integrations/context-mode.ts");
      const fake = createFakeExtensionApi({ allTools: [] });
      contextMode.default(fake.api);

      const toolResult = fake.handlers.find((entry) => entry.event === "tool_result")?.handler;
      const result = await toolResult?.({
        toolName: "bash",
        content: [{ type: "text", text: "already summarized" }],
        details: { storedOutputId: "out_existing", storedOutputPath: "/tmp/existing.log" },
        input: { command: "echo hi" },
        isError: false,
        toolCallId: "tool-3",
        type: "tool_result",
      });

      expect(result).toBeUndefined();
    });
  });
});
