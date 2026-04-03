import { describe, expect, test } from "bun:test";
import { Type } from "@sinclair/typebox";
import { Agent } from "@mariozechner/pi-agent-core";
import { fauxAssistantMessage, fauxToolCall, registerFauxProvider } from "@mariozechner/pi-ai";
import "../helpers.js";
import { applyActiveToolsImmediately, bindImmediateToolActivation } from "../../src/agent-pool/tool-activation-live-update.js";

describe("same-turn tool activation live update", () => {
  test("newly activated tools become callable later in the same turn", async () => {
    const faux = registerFauxProvider();
    try {
      const delayedCalls: string[] = [];
      const agent = new Agent({
        initialState: {
          model: faux.getModel(),
          tools: [],
        },
        toolExecution: "sequential",
      });

      const session = {
        agent,
        _toolRegistry: new Map<string, any>(),
        _baseSystemPrompt: "",
        _rebuildSystemPrompt: (toolNames: string[]) => `tools: ${toolNames.join(", ")}`,
      };

      const activateToolsTool = {
        name: "activate_tools",
        description: "Activate tools.",
        parameters: Type.Object({ names: Type.Array(Type.String()) }),
        async execute(_toolCallId: string, params: { names: string[] }) {
          applyActiveToolsImmediately(session, ["activate_tools", ...params.names]);
          return {
            content: [{ type: "text" as const, text: `Activated: ${params.names.join(", ")}` }],
            details: { ok: true },
          };
        },
      };

      const delayedTool = {
        name: "delayed_tool",
        description: "Only available after activation.",
        parameters: Type.Object({}),
        async execute() {
          delayedCalls.push("delayed_tool");
          return {
            content: [{ type: "text" as const, text: "Delayed tool ran" }],
            details: { ok: true },
          };
        },
      };

      session._toolRegistry.set(activateToolsTool.name, activateToolsTool);
      session._toolRegistry.set(delayedTool.name, delayedTool);

      const initialToolsRef = agent.state.tools;
      bindImmediateToolActivation(session as any);
      session.setActiveToolsByName?.(["activate_tools"]);
      expect(agent.state.tools).toBe(initialToolsRef);
      expect(agent.state.tools.map((tool) => tool.name)).toEqual(["activate_tools"]);

      faux.setResponses([
        fauxAssistantMessage(fauxToolCall("activate_tools", { names: ["delayed_tool"] })),
        (context) => fauxAssistantMessage(
          context.tools?.some((tool) => tool.name === "delayed_tool")
            ? fauxToolCall("delayed_tool", {})
            : "delayed tool missing",
        ),
        fauxAssistantMessage("done"),
      ]);

      await agent.prompt("activate and use the delayed tool");

      expect(delayedCalls).toEqual(["delayed_tool"]);
      expect(agent.state.tools).toBe(initialToolsRef);
      expect(agent.state.tools.map((tool) => tool.name)).toEqual(["activate_tools", "delayed_tool"]);

      const assistantTexts = agent.state.messages
        .filter((message) => message.role === "assistant")
        .flatMap((message) => message.content)
        .filter((block) => block.type === "text")
        .map((block) => block.text);
      expect(assistantTexts).toContain("done");

      const toolResults = agent.state.messages.filter((message) => message.role === "toolResult");
      expect(toolResults.map((message) => message.toolName)).toContain("delayed_tool");
    } finally {
      faux.unregister();
    }
  });
});
