/**
 * extensions/delegate-tool.ts – Internal delegate tool for Pi.
 *
 * Allows Pi to dispatch named agents directly from within a turn,
 * without going through the HTTP API (which requires TOTP auth).
 *
 * Wire up at startup via setDelegateFn() after the web channel is started.
 */
import { Type } from "@sinclair/typebox";
import type { AgentToolResult, ExtensionAPI, ExtensionFactory } from "@mariozechner/pi-coding-agent";
import { getChatJid } from "../core/chat-context.js";
import { getLoadedAgentDefinitions } from "../agents/agent-definition.js";
import { dispatchDelegate } from "../agents/delegate-runner.js";
import { dispatchCouncil } from "../agents/council-runner.js";
import type { AgentPool } from "../agent-pool.js";
import { getMajordomoOrchestrator } from "../agents/majordomo-orchestrator.js";

// Injected at startup by the web channel — same pattern as setMessagesPostFn.
type DelegateChannelFns = {
  broadcastEvent: (eventType: string, data: unknown) => void;
  processChat: (chatJid: string) => void;
  agentPool: AgentPool;
};

let _fns: DelegateChannelFns | undefined;

export function setDelegateChannelFns(fns: DelegateChannelFns): void {
  _fns = fns;
}

const DelegateSchema = Type.Object({
  agent: Type.String({ description: "Agent name to dispatch (e.g. 'coder', 'architect', 'council')." }),
  task: Type.String({ description: "Task description for the agent." }),
  context: Type.Optional(Type.String({ description: "Optional context briefing (project paths, constraints, etc.)." })),
  chat_jid: Type.Optional(Type.String({ description: "Chat JID to inject the result into. Defaults to current chat." })),
});

const DELEGATE_TOOL_HINT = `
## Delegate tool
Use \`delegate\` to dispatch a named agent asynchronously. The agent runs in the background; its result is injected back into this chat and Pi responds to it automatically.

### When to use
Prefer \`delegate\` over implementing anything yourself for:
- Coding tasks → agent: "coder"
- Architecture/design → agent: "architect"  
- Code/design review → agent: "reviewer"
- Research → agent: "researcher"
- Infra/deployment → agent: "devops"
- Documentation → agent: "docs-writer"
- AGENTS.md / skill maintenance → agent: "context-engineer"
- Multi-provider debate → agent: "council"

### Usage
\`\`\`json
{ "agent": "coder", "task": "add --verbose flag to cmd/list.go", "context": "project at ~/projects/wuphf-eval, Go CLI, build: make build" }
\`\`\`

### Delegate rule
If you could delegate the task, you MUST. Never implement something yourself when a delegate agent can do it.
`.trim();


function ok(data: Record<string, unknown>): AgentToolResult<Record<string, unknown>> {
  return { content: [{ type: "text", text: JSON.stringify(data) }], details: data };
}

function err(message: string): AgentToolResult<Record<string, unknown>> {
  return { content: [{ type: "text", text: `Error: ${message}` }], details: { error: message } };
}

export const delegateTool: ExtensionFactory = (pi: ExtensionAPI) => {
  pi.on("before_agent_start", async (event) => ({
    systemPrompt: `${event.systemPrompt}\n\n${DELEGATE_TOOL_HINT}`,
  }));

  pi.registerTool({
    name: "delegate",
    label: "delegate",
    description: "Dispatch a named agent (coder, architect, reviewer, researcher, devops, docs-writer, context-engineer, council) to run a task asynchronously. Result is injected back into the chat.",
    promptSnippet: "delegate: dispatch a named agent asynchronously — never implement code yourself when you can delegate.",
    parameters: DelegateSchema,
    async execute(_toolCallId, params, _signal, _onUpdate, _ctx) {
      const agentName = String(params.agent ?? "").trim().toLowerCase();
      const task = String(params.task ?? "").trim();
      const context = String(params.context ?? "").trim();
      const chatJid = String(params.chat_jid ?? "").trim() || getChatJid("web:default");

      if (!agentName) return err("agent name is required");
      if (!task) return err("task is required");

      const defs = getLoadedAgentDefinitions();
      const agentDef = defs.get(agentName);
      if (!agentDef) {
        const available = [...defs.keys()].join(", ");
        return err(`Unknown agent '${agentName}'. Available: ${available}`);
      }

      if (!_fns) {
        return err("Delegate channel not wired. Cannot dispatch agent.");
      }

      if (agentDef.council) {
        dispatchCouncil({
          agentDef,
          scenario: context ? `${context}\n\n${task}` : task,
          mainChatJid: chatJid,
          agentPool: _fns.agentPool,
          broadcastEvent: _fns.broadcastEvent,
          processChat: _fns.processChat,
        });
        return ok({
          status: "dispatched",
          mode: "council",
          agent: agentName,
          members: agentDef.council.members.map((m) => `${m.id} (${m.model})`),
          message: `Council convened with ${agentDef.council.members.length} members. Result will appear in chat when the debate concludes.`,
        });
      }

      // Route through the majordomo orchestrator if it is wired up.
      const orchestrator = getMajordomoOrchestrator();
      if (orchestrator) {
        await orchestrator.dispatchOne(agentName, task, context);
        return ok({
          status: "dispatched",
          mode: "majordomo",
          agent: agentName,
          message: `@${agentName} dispatched via orchestrator. Result will appear when done.`,
        });
      }

      // Fallback: existing fire-and-forget path (orchestrator not yet wired).
      dispatchDelegate({
        agentDef,
        task,
        context,
        mainChatJid: chatJid,
        agentPool: _fns.agentPool,
        broadcastEvent: _fns.broadcastEvent,
        processChat: _fns.processChat,
      });

      return ok({
        status: "dispatched",
        agent: agentName,
        task,
        message: `@${agentName} dispatched. Result will appear in chat when done.`,
      });
    },
  });
};
