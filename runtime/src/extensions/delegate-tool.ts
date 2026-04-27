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

const MAJORDOMO_ROUTING_HINT = `
## Majordomo routing

You receive every message first. Decide:

1. **Handle directly** — factual questions, conversational replies, quick file reads,
   anything you can complete in one turn without specialized tool sequences.

2. **Delegate explicitly** — tasks requiring deep coding, multi-file refactoring,
   architecture design, long research sessions, deployment sequences, or document
   authoring. Use the \`delegate\` tool or mention @agent-slug naturally in your reply.

When you mention @agent-slug in your reply text, the orchestrator parses it and
dispatches that agent. You do NOT need to call the delegate tool for this to work —
natural @mentions are intercepted automatically.

Routing signals:
- "implement / build / write code / fix bug" → @coder
- "design / architecture / system design" → @architect
- "review / audit / security check" → @reviewer
- "research / find / what is / compare" → @researcher
- "deploy / infra / docker / systemd / server" → @devops
- "document / write docs / explain for users" → @docs-writer
- "update AGENTS.md / skill / memory" → @context-engineer

You are suppressed while specialists run. When they finish you will receive
their combined output and produce a synthesis for Brian.
`.trim();

const SYNTHESIS_TRIGGER_HINT = `
## Specialist results synthesis

When you receive a message from **[Specialist Results]**, one or more specialists
you previously delegated to have finished their work and the results are ready.

**Rules for this turn:**

1. Read all specialist outputs in the message carefully.
2. Synthesize them into a single, coherent reply for Brian. Do NOT dump raw
   specialist output at him — curate, integrate, and highlight what matters.
3. If a specialist is marked \`(error after Xs)\`, acknowledge the failure and
   describe what partial information or alternative path is available.
4. Do NOT issue any new @mentions or call the \`delegate\` tool in this turn.
   This is a synthesis-only turn. Delegating again here creates an infinite loop.
5. Format your response normally: Markdown, tables, code blocks as appropriate.

If you later receive another [Specialist Results] message, treat it as a fresh
delegation batch — not a continuation of this one.
`.trim();


function ok(data: Record<string, unknown>): AgentToolResult<Record<string, unknown>> {
  return { content: [{ type: "text", text: JSON.stringify(data) }], details: data };
}

function err(message: string): AgentToolResult<Record<string, unknown>> {
  return { content: [{ type: "text", text: `Error: ${message}` }], details: { error: message } };
}

export const delegateTool: ExtensionFactory = (pi: ExtensionAPI) => {
  pi.on("before_agent_start", async (event) => ({
    systemPrompt: `${event.systemPrompt}\n\n${DELEGATE_TOOL_HINT}\n\n${MAJORDOMO_ROUTING_HINT}\n\n${SYNTHESIS_TRIGGER_HINT}`,
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
