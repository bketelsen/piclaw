# Delegation

PiClaw's delegation system lets Pi dispatch named AI agents as background tasks. Each agent runs in an isolated session with its own model and tool grants, then injects its result back into the main chat so Pi reads it and responds naturally. You can also dispatch agents directly from the chat by typing `@agentname`.

**Jump to:**
[Architecture](#architecture) ·
[Agent definitions](#agent-definitions) ·
[Bundled agents](#bundled-agents) ·
[The council agent](#the-council-agent) ·
[SSE events](#sse-events) ·
[The delegate tool](#the-delegate-tool) ·
[Orchestration patterns](#orchestration-patterns) ·
[Adding a custom agent](#adding-a-custom-agent) ·
[Concurrency and isolation](#concurrency-and-isolation)

---

## Architecture

### End-to-end flow

```
User types "@coder fix the auth bug"
          │
          ▼
handleAgentMessage()              HTTP handler intercepts the @mention
  │  parses leading @name
  │  looks up agent definition
  │  stores user message in DB
  │  broadcasts new_post SSE
  │  returns HTTP 200 immediately  ← main chat unblocked
          │
          ▼
dispatchDelegate()                fire-and-forget; returns immediately
  │  creates delegateJid          e.g. web:default__delegate-coder-1714000000000
  │  mkdir sessions/<delegateJid>
  │  broadcasts delegate_started SSE
  │  calls agentPool.runAgent()   isolated Pi session, scoped tool set
          │
          ▼ (background, async)
Agent runs to completion
  │  result stored in messages DB (is_bot_message=false, sender=delegate:coder)
  │  broadcasts new_post SSE      web UI renders @coder's reply in timeline
  │  broadcasts delegate_done SSE sidebar updates
  │  calls processChat(mainChatJid)
          │
          ▼
Pi sees the injected message, auto-responds in main chat
```

### Key design decisions

- **Fire-and-forget dispatch.** `dispatchDelegate()` returns immediately. The HTTP handler never blocks waiting for the agent.
- **Isolated sessions.** Each delegate gets a unique JID derived from the main chat JID plus the agent name and a millisecond timestamp. No shared session state with the main chat.
- **Tool ceiling enforcement.** A `toolCeilingFilter` function built from the agent's `tools` list is applied to `runAgent()`. Tools not in the list are invisible to the agent — the ceiling is enforced at the session level, not by prompt.
- **Result injection as a user message.** The result is stored with `is_bot_message=false` so the message loop picks it up and Pi responds to it. The `sender` field is set to `delegate:<agentname>` so the web UI renders it as `@agentname` rather than "You".
- **Result truncation.** Results exceeding 32,000 characters are truncated before injection to avoid overwhelming Pi's context.

---

## Agent definitions

### File format

Agent definitions are Markdown files with YAML frontmatter. The frontmatter supplies metadata; everything below the closing `---` is the agent's system prompt.

```markdown
---
name: myagent
description: Short summary shown in /agents listing.
model: github-copilot/claude-sonnet-4.6   # optional
tools: [read, bash, grep, find, ls]        # explicit grants required
max_turns: 20                              # optional, default 20, cap 100
---

System prompt body. This becomes the agent's instructions.
```

#### Frontmatter fields

| Field | Required | Default | Description |
|---|---|---|---|
| `name` | yes | — | Canonical name. Used for `@name` dispatch. Lowercase alphanumeric, hyphens and underscores only. |
| `description` | no | `Agent: <name>` | One-line summary shown by `/agents`. |
| `model` | no | Pi's active model | Model override. Full provider/model label, e.g. `github-copilot/claude-sonnet-4.6`. |
| `tools` | yes | — | Inline list of tool names: `[read, bash, grep]`. Nothing is granted implicitly. |
| `max_turns` | no | `20` | Turn cap. Capped at 100. Timeout is `max_turns × 60s`. |
| `council` | no | — | Multi-member debate config. See [The council agent](#the-council-agent). |

### Discovery order

At startup, `loadAgentDefinitions()` scans two directories in order:

1. **`skel/.pi/agents/`** — bundled agents, read-only, shipped with PiClaw
2. **`~/.piclaw/.pi/agents/`** — user-defined agents

If the same `name` appears in both directories, the user-defined version wins. The bundled version is silently replaced.

### Tool grants and the ceiling

`tools:` is an explicit allowlist. If a tool name is not in the list, the agent cannot use it — not even if Pi's session has it active. This is enforced by `toolCeilingFilter` passed to `agentPool.runAgent()`, not by the prompt.

There is no implicit grant. An agent with an empty `tools:` list has no tools at all (a warning is logged).

---

## Bundled agents

| Name | Description | Tools | Max turns |
|---|---|---|---|
| `architect` | Senior software architect. Designs systems, writes technical plans, evaluates tradeoffs. | read, bash, grep, find, ls, search_workspace | 20 |
| `coder` | Implements features and fixes bugs. Has write access. | read, write, edit, bash, grep, find, ls, search_workspace | 30 |
| `reviewer` | Antagonistic code and design reviewer. Finds real problems — no praise, no softening. | read, bash, grep, find, ls, search_workspace | 15 |
| `researcher` | Deep technical researcher. Reads codebases, docs, sources. Does not speculate. | read, bash, grep, find, ls, search_workspace | 25 |
| `devops` | Infrastructure, deployment, CI/CD. Probes the live environment before prescribing. | read, write, edit, bash, grep, find, ls, search_workspace | 25 |
| `docs-writer` | Writes user-facing documentation. Reads code first. | read, write, edit, bash, grep, find, ls, search_workspace | 25 |
| `context-engineer` | AI context engineer. Produces and maintains AGENTS.md, skill files, prompt templates. | read, write, edit, bash, grep, find, ls, search_workspace | 30 |
| `council` | Multi-provider debate council. See [The council agent](#the-council-agent). | read, bash, grep, find, ls | 5 per member |

---

## The council agent

The `council` agent runs a structured 4-phase debate across multiple AI models. Use it for architecture decisions, technology choices, or any question that benefits from adversarial pressure before settling on an answer.

### How the debate works

```
Phase 1 (parallel)    Each member posts an initial position.
Phase 2 (parallel)    Each member critiques all other members' positions.
Phase 3 (parallel)    Each member revises its position given all critiques.
Phase 4 (single)      The synthesizer produces a final answer.
```

Phases 1–3 run all members in parallel with `Promise.all()`. Phase 4 runs the designated synthesizer alone with the full debate context.

### Default council members

The bundled `council.md` configures three members:

| ID | Model | Role |
|---|---|---|
| `claude` | `github-copilot/claude-sonnet-4.6` | Senior architect. Favors correctness, maintainability, long-term design integrity. |
| `codex` | `github-copilot/gpt-5.3-codex` | Pragmatic engineer. Favors simplicity, shipping speed, proven patterns. |
| `gemini` | `github-copilot/gemini-3.1-pro-preview` | Systems thinker. Favors scalability, observability, operational concerns. |

`claude` is the synthesizer.

### Configuring members in frontmatter

The `council:` block uses a multi-line YAML format:

```markdown
---
name: council
description: Multi-provider debate council.
tools: [read, bash, grep, find, ls]
max_turns: 5
council:
  members:
    - id: claude
      model: github-copilot/claude-sonnet-4.6
      role: Senior architect. Favors correctness and maintainability.
    - id: codex
      model: github-copilot/gpt-5.3-codex
      role: Pragmatic engineer. Favors simplicity and speed.
  synthesizer: claude
  max_rounds: 3
---

System prompt for the synthesizer only.
```

- `id` — short identifier used in phase prompts and session JIDs.
- `model` — full `provider/model` label. Each member's session is switched to this model before running.
- `role` — injected into the member's prompt as its persona. Keep it directive — it shapes how aggressively the member argues.
- `synthesizer` — must match one member's `id`. Defaults to the first member if omitted.
- `max_rounds` — parsed but currently used for `max_turns` context; the phase count is fixed at 4.

### Result format

The council result injected into chat looks like:

```
[Council @council returned, 47s]

**Members:** @claude (github-copilot/claude-sonnet-4.6), @codex (github-copilot/gpt-5.3-codex), @gemini (github-copilot/gemini-3.1-pro-preview)

**Positions summary:**
**@claude** (github-copilot/claude-sonnet-4.6): Use an event-sourced store...
**@codex** (github-copilot/gpt-5.3-codex): A simple append-only log is sufficient...
**@gemini** (github-copilot/gemini-3.1-pro-preview): Both miss the observability gap...

---

**Synthesis (github-copilot/claude-sonnet-4.6):**

...definitive recommendation...
```

Council results are displayed with `sender_name` set to `@council`.

---

## SSE events

The delegation system broadcasts two SSE event types. The web UI agent-status sidebar consumes these to show in-progress and completed delegates.

### `delegate_started`

Broadcast when `dispatchDelegate()` begins. The sidebar uses this to show the agent as running.

```json
{
  "agent_name": "coder",
  "task": "fix the auth bug in handlers/auth.go",
  "started_at": "2026-04-25T12:00:00.000Z",
  "delegate_jid": "web:default__delegate-coder-1714000000000"
}
```

### `delegate_done`

Broadcast when the agent finishes (success or error). The sidebar uses this to mark the agent as done and link to the result row.

```json
{
  "agent_name": "coder",
  "task": "fix the auth bug in handlers/auth.go",
  "started_at": "2026-04-25T12:00:00.000Z",
  "delegate_jid": "web:default__delegate-coder-1714000000000",
  "completed_at": "2026-04-25T12:03:47.000Z",
  "elapsed_sec": 227,
  "status": "success",
  "row_id": 1042
}
```

`row_id` is the DB rowid of the injected result message. The sidebar can use it to scroll to or highlight the result in the timeline.

The council runner does not emit `delegate_started` / `delegate_done` events — council results arrive as a `new_post` event.

### `new_post`

Both delegate and council runners broadcast a standard `new_post` event when the result is injected, causing the web UI to append the result message to the timeline immediately.

### Checking delegate status

Send `/agent-status` in the chat to get a snapshot of currently running delegates:

```
/agent-status
```

Example output:
```
**@coder** running since 2026-04-25T12:00:00.000Z
Task: fix the auth bug in handlers/auth.go
```

Send `/agents` to list all loaded agent definitions with their tools and turn caps:

```
/agents
```

---

## The delegate tool

Pi can dispatch agents internally from within a turn, without going through the HTTP API. This is how the AGENTS.md system prompt instructs Pi to "always delegate coding tasks to @coder" — Pi calls the `delegate` tool directly.

### How it works

The `delegate` tool is registered as a Pi extension at startup via `addExtensionFactory(delegateTool)`. When registered, it:

1. Injects delegation guidance into Pi's system prompt via the `before_agent_start` hook.
2. Registers a `delegate` tool with the parameters below.

When Pi calls `delegate`, the tool looks up the named agent definition and calls `dispatchDelegate()` or `dispatchCouncil()` — the same code path used by the HTTP handler. The call returns immediately with `{ status: "dispatched" }` so Pi's turn completes without waiting.

### Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `agent` | string | yes | Agent name to dispatch (e.g. `"coder"`, `"architect"`, `"council"`). |
| `task` | string | yes | Task description for the agent. |
| `context` | string | no | Optional context briefing: project paths, conventions, constraints. |
| `chat_jid` | string | no | Chat to inject the result into. Defaults to the current chat. |

### Example call

```json
{
  "agent": "coder",
  "task": "Add a --verbose flag to cmd/list.go that prints full task IDs",
  "context": "Project: wuphf-eval at ~/projects/wuphf-eval. Go CLI. Build: make build. Test: make test. list command uses flag.NewFlagSet in cmd/list.go."
}
```

### Activation requirement

The `delegate` tool is part of PiClaw's extension layer. It is registered at startup and available in Pi's effective tool set without needing `activate_tools`. If you are customizing the tool configuration and have overridden the default tool set, ensure `delegate` is not excluded.

---

## Orchestration patterns

Three bundled skills define the standard delegation patterns. Read the skill file before implementing a multi-step pipeline — the skills contain the exact dispatch templates.

### Simple dispatch — `delegate-simple`

**Skill:** `skel/.pi/skills/delegate-simple/SKILL.md`

Use for well-scoped implementation tasks where the what and how are clear.

```
User: "add a --verbose flag to the list command"

Pi: "On it — delegating to @coder."

delegate tool call:
{
  "agent": "coder",
  "task": "Add --verbose flag to cmd/list.go that prints full task IDs (currently truncated). Run make test before finishing.",
  "context": "Project: wuphf-eval at ~/projects/wuphf-eval. Go CLI, flag.NewFlagSet in cmd/list.go. Build: make build. Test: make test."
}
```

### Plan then build — `delegate-plan-build`

**Skill:** `skel/.pi/skills/delegate-plan-build/SKILL.md`

Two sequential phases: `@architect` designs, `@coder` implements. Use when the task touches multiple files or requires architecture decisions.

```
Phase 1: dispatch @architect → wait for plan
Phase 2: dispatch @coder with architect's plan as the implementation spec
```

Pi reads the architect's plan when it arrives. If the plan looks sound, Pi dispatches `@coder` with the plan verbatim as the implementation spec. If it has problems, Pi adjusts or asks before proceeding.

### Full quality pipeline — `delegate-full-pipeline`

**Skill:** `skel/.pi/skills/delegate-full-pipeline/SKILL.md`

Four sequential stages: design → adversarial review → implement → verify. Use for security-sensitive features, public APIs, or anything where "good enough" is not acceptable.

```
Stage 1: @architect   → design + task breakdown
Stage 2: @reviewer    → adversarial challenge of the design
          PASS → Stage 3
          FAIL (P0) → loop @architect with findings, then Stage 3
          FAIL (P1/P2) → pass findings to @coder as guidance, proceed
Stage 3: @coder       → implement the (reviewed) plan
Stage 4: @reviewer    → verify implementation against design
          PASS/CONCERNS → deliver to user
          FAIL → loop @coder with findings
```

**Concurrency note:** Stages 1→2 are strictly sequential (reviewer needs architect's output). Stages 3→4 are strictly sequential (reviewer needs coder's output). Independent pipelines for different features can run concurrently.

---

## Adding a custom agent

### Step 1 — Create the definition file

```bash
mkdir -p ~/.piclaw/.pi/agents
```

Create `~/.piclaw/.pi/agents/myagent.md`:

```markdown
---
name: myagent
description: Does something specific and useful for my workflow.
model: github-copilot/claude-sonnet-4.6
tools: [read, bash, grep, find, ls]
max_turns: 20
---

You are a specialist agent working for Pi. Your output goes back to Pi, not to the user directly.

## Your job

<describe what the agent does and how it should approach tasks>

## Standards

<any output quality requirements>

## Output structure

1. **What you examined**
2. **Findings / work done**
3. **Status** — DONE / BLOCKED (with reason)
```

### Step 2 — Restart PiClaw

Agent definitions are loaded at startup. Restart the server to pick up the new file:

```bash
# If running under systemd:
systemctl --user restart piclaw

# Or kill and restart directly.
```

### Step 3 — Verify

```
/agents
```

Your agent should appear in the list with its description, tools, and max_turns.

### Step 4 — Dispatch

```
@myagent investigate why the nightly cron is failing
```

Or have Pi dispatch it programmatically:

```json
{ "agent": "myagent", "task": "...", "context": "..." }
```

### Name conflict resolution

If your agent has the same `name` as a bundled agent, your version wins. This is the correct way to override a bundled agent's system prompt, model, or tool grants without modifying the read-only `skel/` directory.

---

## Concurrency and isolation

### Session isolation

Every dispatched agent gets a unique session JID:

```
<mainChatJid>__delegate-<agentname>-<timestamp_ms>
```

For example: `web:default__delegate-coder-1714000000000`

This JID has its own:
- Session directory under `~/.piclaw/data/sessions/`
- Conversation history (no cross-contamination with the main chat or other delegates)
- Model state (can be switched independently via the `model` frontmatter field)

Council members get their own JIDs too:

```
<mainChatJid>__council-<sessionId>-<memberId>
```

Model switching for council members happens via `agentPool.applyControlCommand()` before each member's first turn.

### Parallel dispatch

Multiple `@agentname` mentions or `delegate` tool calls can run simultaneously. They use different JIDs and do not share state. Each injects its result independently when done.

The `processChat()` call that follows result injection is enqueued on the main chat's queue lane (`chat:<mainChatJid>`), so multiple delegates completing close together are serialized when Pi responds to them — Pi sees them one at a time in order of arrival.

### Checking running delegates

```
/agent-status
```

Returns all agents currently executing, with start time and task preview. The in-memory registry (`_activeDelegates`) is cleared when each agent finishes. Delegates that crashed before cleanup may not appear.

### Turn timeout

Each delegate's `agentPool.runAgent()` call is given a timeout of `max_turns × 60 seconds`. A coder with `max_turns: 30` has a 30-minute wall-clock budget. Agents that exceed this are terminated and inject an error result.

### Future: `PICLAW_MAX_DELEGATES`

A `PICLAW_MAX_DELEGATES` environment variable is planned to cap concurrent delegate sessions and prevent runaway resource consumption. It is not yet enforced — there is currently no hard limit on concurrency beyond the model provider's own rate limits.

---

## Reference: agent definition parser

The parser in `runtime/src/agents/agent-definition.ts` implements a minimal YAML subset. It does **not** support:
- Multi-line string values
- Nested objects outside the `council:` block
- Anchors, aliases, or tags
- Block scalar indicators (`|`, `>`)

The `council:` block uses a dedicated parser and supports its own nested list format (see the council example above). Everything else uses key: value parsing with inline-list support (`[a, b, c]`).

Inline comments are stripped from scalar values (`model: claude-opus-4-5  # optional` works correctly). Quoted strings are unquoted. Unrecognized fields are silently ignored.
