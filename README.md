# `piclaw` — your self-hosted AI workspace

![PiClaw](docs/icon-256.png)

PiClaw packages the [Pi Coding Agent](https://github.com/badlogic/pi-mono) into a self-hosted workspace with a streaming web UI, persistent state, multi-provider LLM support, and a practical built-in toolset.

It is for people who want one stateful agent workspace they can run locally or in a container without stitching together half a dozen separate services.

## Why PiClaw

![Demo Animation](docs/demo.gif)

- **One workspace, one app** — chat, editor, terminal, viewers, boards, uploads, and automation in the same web UI
- **Persistent state** — SQLite-backed messages, media, tasks, token usage, encrypted keychain, and session-scoped SSH / Proxmox / Portainer profiles
- **Practical built-ins** — code editing, Office/PDF/CSV/image/video viewing, draw.io, VNC, browser automation, image processing, MCP, infra tools, and optional cross-instance IPC for paired remote peers
- **Agent-first workflows** — steering, queued follow-ups, side prompts, autoresearch loops, scheduled tasks, and visual artifact generation
- **Context conservation** — small always-active tool baseline with staged discovery via `list_tools` / `list_scripts`
- **Optional auth/channels** — passkeys/TOTP for the web UI, plus optional WhatsApp and Telegram integrations

## Quick start

### Native install

```bash
export PICLAW_HOME="${PICLAW_HOME:-$HOME/.piclaw}"
mkdir -p "$PICLAW_HOME"
bun install
bun run start
```

Open `http://localhost:8080` and type `/login` to configure your LLM provider, including custom OpenAI-compatible endpoints when you are not using one of the built-in hosted providers.

> [!WARNING]
> Never delete `~/.piclaw/store/messages.db`. It contains chat history, media, and task state.

> [!IMPORTANT]
> You do **not** need to set provider API keys in piclaw environment variables. PiClaw reuses provider credentials configured in Pi Agent settings.

> [!NOTE]
> Power users can place shell environment overrides in `~/.piclaw/.env.sh`. PiClaw sources that file for the embedded terminal and on runtime startup, which is useful for things like `PATH` tweaks or persisting `gh auth login` with `GH_CONFIG_DIR=~/.piclaw/.config/gh`. This hook is user-controlled: if its contents break PiClaw startup, shell behavior, or tool resolution, that breakage is the user's responsibility.

## Web UI at a glance

PiClaw is single-user, mobile-friendly, and streams updates over SSE.

| Area | Highlights |
|---|---|
| Chat | Thought/draft panels, steering, queued follow-ups, Adaptive Cards, `/btw`, link previews, threaded turns, recovery/timeout chips |
| Status UX | Tool/intended status stays visible during silence probing, recent activity restores useful context, and tool rows can show compact `x ago` hints in the meta row |
| Workspace | Sidebar browser, drag-and-drop uploads, file-reference pills, explorer search/reindex status |
| Editor | CodeMirror 6, search/replace, dirty-state tracking, syntax highlighting, lazy local bundle |
| Terminal | Ghostty-based web terminal as dock or tab; detachable popouts |
| Viewers | Draw.io, Office docs, CSV/TSV, PDF, images, video, code previews, kanban boards, mindmaps, VNC |
| Automation | `/image`, `/flux`, `image_process`, `cdp_browser`, `mcp`, experimental `m365`, Windows-only `win_*` tools |

For the full feature tour, see [docs/web-ui.md](docs/web-ui.md).

## Configuration

Most users only need a few environment variables:

| Variable | Default | Purpose |
|---|---|---|
| `PICLAW_WEB_PORT` | `8080` | Web UI port |
| `PICLAW_WEB_TERMINAL_ENABLED` | `1` on Linux/macOS, `0` on Windows | Enable or disable the authenticated Ghostty-based web terminal |
| `PICLAW_WEB_VNC_ALLOW_DIRECT` | `1` on Linux/macOS/Windows | Allow or disable direct VNC targets supplied at runtime |
| `PICLAW_WEB_TOTP_SECRET` | _(empty)_ | Base32 TOTP secret; enables login gate (or initialize with `/totp`) |
| `PICLAW_WEB_PASSKEY_MODE` | `totp-fallback` | `totp-fallback`, `passkey-only`, or `totp-only` |
| `PICLAW_ASSISTANT_NAME` | `PiClaw` | Display name in the UI |
| `PICLAW_TELEGRAM_BOT_TOKEN` | _(empty)_ | Enable Telegram DM access with a BotFather token |
| `PICLAW_TELEGRAM_ALLOWED_USERS` | _(empty)_ | Comma-separated Telegram user IDs allowed to use the bot |
| `PICLAW_ENABLE_M365_EXPERIMENTAL` | `0` | Enable the experimental Microsoft 365 extension bundle |
| `PICLAW_KEYCHAIN_KEY` | _(empty)_ | Master key for encrypted secret storage |
| `PICLAW_TRUST_PROXY` | `0` | Enable when behind a reverse proxy or tunnel |

For the full list, auth setup (TOTP/passkeys), session-scoped SSH-backed remote tools, reverse proxy configuration, SSHFS/FUSE support, and the workspace environment hook, see [docs/configuration.md](docs/configuration.md).

## Telegram

Telegram is optional. If `PICLAW_TELEGRAM_BOT_TOKEN` is unset, PiClaw starts exactly as before with no Telegram connection attempts.

1. Create a bot with [@BotFather](https://t.me/BotFather) and copy the bot token.
2. Set your Telegram config:

```bash
export PICLAW_TELEGRAM_BOT_TOKEN="123456:replace-me"
export PICLAW_TELEGRAM_ALLOWED_USERS="123456789"
```

To find your Telegram user ID, send your bot any direct message once, then inspect the sender ID from Telegram's Bot API:

```bash
curl -s "https://api.telegram.org/bot$PICLAW_TELEGRAM_BOT_TOKEN/getUpdates" | jq '.result[]?.message?.from?.id'
```

Use the numeric `from.id` value in `PICLAW_TELEGRAM_ALLOWED_USERS`. Then start PiClaw and message the bot directly; replies appear in the same chat. The first version is DM-only and does not support group chats.

## COG memory system

PiClaw now ships with a filesystem-resident COG memory tree under `~/.piclaw/cog/memory/`. It keeps always-on context small, pulls domain detail only when a matching skill needs it, and archives older observations into glacier files instead of letting active memory sprawl.

| Tier | What lives there |
|---|---|
| Hot | `hot-memory.md` and small per-domain hot files loaded every session; keep under 50 lines |
| Warm | Domain files such as `entities.md`, `action-items.md`, `calendar.md`, `health.md`, and `observations.md`, loaded by the relevant skill |
| Glacier | Archived observation blocks and indexes under `~/.piclaw/cog/memory/glacier/` |

Before each agent session, the `cogMemoryBootstrap` extension injects the current `hot-memory.md`, `cog-meta/patterns.md`, `cog-meta/foresight-nudge.md`, and `domains.yml` into the system prompt when they exist.

Use the `cog-setup` skill to add or bootstrap a domain. Detailed procedures live in the skill docs under `~/.piclaw/.pi/skills/cog-*/SKILL.md`.

| Skill | Purpose |
|---|---|
| `cog-commit` | Write commit messages using relevant memory context |
| `cog-evolve` | Audit the COG structure and suggest rule-level improvements |
| `cog-explainer` | Draft explanations and long-form writing in the user's voice |
| `cog-foresight` | Produce one concrete cross-domain strategic nudge |
| `cog-history` | Recover prior discussions and facts from memory plus message history |
| `cog-housekeeping` | Prune hot memory, archive observations, and rebuild indexes |
| `cog-humanizer` | Rewrite text so it sounds natural without changing meaning |
| `cog-personal` | Maintain the personal domain with clear source-of-truth rules |
| `cog-reflect` | Mine recent conversations for recurring patterns and update meta-memory |
| `cog-scenario` | Model decisions and write scenario files with risks and signals |
| `cog-setup` | Create a new domain and its starter files |

The built-in maintenance pipeline keeps the tree healthy in local runtime time:

- `cog-reflect` nightly (`0 2 * * *`)
- `cog-housekeeping` weekly (`0 3 * * 0`)
- `cog-foresight` daily (`0 7 * * *`)

If you want `search_workspace` to index COG memory alongside notes and skills, add `cog/memory` to `tools.workspaceSearchRoots` in `~/.piclaw/config.json`.

## Agent delegation

PiClaw ships a built-in delegation system that lets Pi (or you directly) dispatch specialist background agents. Each agent runs in an isolated session and injects its result back into the main chat when done.

### @agentName syntax

Prefix your message with `@agentName` followed by the task:

```
@coder add pagination to the /posts endpoint in ~/projects/myapp
@architect design a caching layer for the current Redis setup
@researcher summarise the tradeoffs between SQLite WAL and rollback journal modes
```

PiClaw intercepts the message immediately, dispatches the agent asynchronously, and returns an acknowledgment. The agent's output appears in chat when it finishes, and Pi auto-responds to it.

### Bundled agents

| Agent | What it does |
|---|---|
| `architect` | Designs systems, writes technical plans, evaluates tradeoffs — read-only tools |
| `coder` | Implements features and fixes bugs — has write access |
| `reviewer` | Reviews code or designs for correctness, security, and style — read-only |
| `researcher` | Searches the web and workspace, summarises findings — read-only |
| `devops` | Handles infra, deployment, and shell automation — write access |
| `docs-writer` | Writes and updates documentation — read/write |
| `context-engineer` | Maintains `AGENTS.md`, skills, and prompt scaffolding — read/write |
| `council` | Multi-provider debate (see below) |

### @council: multi-provider debate

`@council` routes your question through three AI models in four phases:

1. **Position** — each model posts an independent initial answer (parallel)
2. **Critique** — each model critiques the others (parallel)
3. **Revision** — each model updates its position with all critiques in context (parallel)
4. **Synthesis** — the designated synthesizer produces one definitive recommendation

Default members are `claude` (Claude Sonnet), `codex` (GPT Codex), and `gemini` (Gemini Pro). Example:

```
@council should we use a monorepo or separate repos for the new service?
```

The synthesis appears in chat with a summary of each member's final position and where they agreed or diverged.

### /agents and /agent-status commands

| Command | What it does |
|---|---|
| `/agents` | List all loaded agent definitions with their descriptions |
| `/agent-status` | List currently running delegate tasks |

### Agent status sidebar

A live panel on the right side of the chat UI shows all running and recently completed delegates. Each card displays the agent name, elapsed time (updated per second while running), and the task summary. When a delegate completes, a **View result** button scrolls the chat to the injected message. A badge on the panel tab shows the active count and an unread indicator when new results land.

The sidebar receives updates over SSE — no polling. Open it with the **Agents** tab on the right edge of the chat.

### Custom agent definitions

Agent definitions are Markdown files with YAML frontmatter. Bundled agents live in `skel/.pi/agents/` (read-only). User-defined agents go in `~/.piclaw/.pi/agents/` and win on name conflict:

```markdown
---
name: my-agent
description: Does something specific.
tools: [read, bash, grep, find]
max_turns: 15
---

Your system prompt here.
```

`tools` is an explicit allowlist — nothing is granted implicitly. Available tool names are the same as Pi's built-in tool set.

### delegate tool (Pi-internal)

Pi can also dispatch agents directly from within a turn without any HTTP round-trip. The `delegate` tool is available in Pi's tool set and accepts `agent`, `task`, and an optional `context` briefing. This is how AGENTS.md rules like _"delegate coding tasks to coder"_ work automatically during agentic sessions.

---

## Production deployment

### systemd user service

On Linux, run PiClaw as a `systemd --user` service so it starts on login and restarts automatically. Create `~/.config/systemd/user/piclaw.service`:

```ini
[Unit]
Description=PiClaw agent
After=network.target

[Service]
Type=simple
WorkingDirectory=%h/.piclaw
Environment=HOME=/home/YOUR_USER
Environment=PICLAW_HOME=%h/.piclaw
Environment=PICLAW_STORE=%h/.piclaw/store
Environment=PICLAW_DATA=%h/.piclaw/data
Environment=PICLAW_AGENT_TIMEOUT=1800000
ExecStart=/usr/local/bin/piclaw --port 8080
Restart=always
RestartSec=2

[Install]
WantedBy=default.target
```

Then enable and start it:

```bash
loginctl enable-linger $USER
systemctl --user daemon-reload
systemctl --user enable --now piclaw.service
```

Keep `PICLAW_STORE` and `PICLAW_DATA` on persistent storage. The startup recovery flow reads `PICLAW_DATA/ipc/tasks` to resume in-flight operations after a crash or restart.

For full Azure VM deployment instructions including Caddy reverse proxy setup, see [docs/azure/README.md](docs/azure/README.md).

### TOTP authentication

Gate the web UI behind a 6-digit authenticator code:

```bash
export PICLAW_WEB_TOTP_SECRET="your-base32-secret"
```

Or initialize from the UI with no pre-configuration:

1. Leave `PICLAW_WEB_TOTP_SECRET` unset and start PiClaw.
2. Run `/totp` in chat — PiClaw generates a QR code.
3. Scan with any TOTP app (Authy, 1Password, Google Authenticator).
4. Confirm with the first live code. Only on success does PiClaw commit the secret.

To reset TOTP: run `/totp reset <current-code>`.

Optionally add WebAuthn passkeys after enrolment:

1. Sign in with TOTP.
2. Run `/passkey enrol` in chat and follow the browser prompt.

Passkey mode is controlled by `PICLAW_WEB_PASSKEY_MODE` (`totp-fallback` by default; also `passkey-only` or `totp-only`).

### Reverse proxy

Set `PICLAW_TRUST_PROXY=1` when running behind a reverse proxy or tunnel (Caddy, nginx, Cloudflare Tunnel, etc.). This tells PiClaw to read `Forwarded` / `X-Forwarded-*` headers for the real client IP, protocol, and host — needed for correct TOTP lockout tracking, redirect URIs, and passkey origin validation.

```bash
export PICLAW_TRUST_PROXY=1
```

Do **not** set this on a publicly exposed instance without a proxy in front — it would allow clients to spoof their IP.

### /health endpoint

`GET /health` returns `200 OK` with a plain-text body when PiClaw is running. Use it for load-balancer health checks or uptime monitors. The endpoint requires no authentication and serves no session data.

### Restic backups

The container image ships a pinned `restic` binary with Azure Blob backend support. The backup script is at `~/.piclaw/restic/backup.sh`. See [docs/storage.md](docs/storage.md) for full details.

---

## Other install methods

### Global install

```bash
bun add -g github:rcarmo/piclaw
```

Set `PICLAW_HOME` if you do not want the default `~/.piclaw` state directory. See [docs/install-from-repo.md](docs/install-from-repo.md).

On Windows, PiClaw remains a secondary / not-officially-supported target. Shell-like child processes now run attached there (`detached=false`) so stdout/stderr remain capturable; Unix-like hosts still use detached process groups for cleaner tree termination on abort/shutdown.

### Build from source

See [docs/development.md](docs/development.md).

## Documentation

| Area | Docs |
|---|---|
| Getting started | [Configuration](docs/configuration.md), [Web UI](docs/web-ui.md), [Install from repo](docs/install-from-repo.md) |
| Operations | [Azure VM deployment](docs/azure/README.md), [Reverse proxy](docs/reverse-proxy.md), [Release process](docs/release.md) |
| Runtime internals | [Architecture](docs/architecture.md), [Runtime flows](docs/runtime-flows.md), [Storage model](docs/storage.md) |
| UI extension model | [Web pane extensions](docs/web-pane-extensions.md), [Extension UI contract](docs/extension-ui-contract.md), [Vendored widget libraries](docs/vendored-widget-libraries.md) |
| Agent capabilities | [Tools and skills](docs/tools-and-skills.md), [Visual artifact generator](docs/visual-artifact-generator.md), [MCP via pi-mcp-adapter](docs/mcp.md), [Keychain](docs/keychain.md) |
| Other references | [Web notification delivery policy](docs/web-notification-delivery-policy.md), [iOS PWA reference](docs/PWA.md), [WhatsApp](docs/whatsapp.md), [Cross-instance interop](docs/cross-instance-ipc.md), [Experimental M365 extension](docs/m365-experimental-extension.md), [Development](docs/development.md) |
| Platform study | [Azure Functions feasibility study](docs/azure/azure-functions-feasibility-study-2026-04-17.md) |

## Contributing

Work items and bug reports are tracked in **[GitHub Issues](https://github.com/rcarmo/piclaw/issues)**.

- [Open a work item or bug report](https://github.com/rcarmo/piclaw/issues/new?template=workitem.md)
- [Ask a question](https://github.com/rcarmo/piclaw/issues/new?template=question.md)
- [View the project board](https://github.com/users/rcarmo/projects/13)

See [WORKITEMS.md](WORKITEMS.md) for board lane definitions and label taxonomy.

## Credits

- [rcarmo/agentbox](https://github.com/rcarmo/agentbox)
- [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)
- [badlogic/pi-mono](https://github.com/badlogic/pi-mono)
- [davebcn87/pi-autoresearch](https://github.com/davebcn87/pi-autoresearch) — autonomous experiment loop by Tobi Lutke and David Cortés (vendored under `runtime/vendor/autoresearch/`)
- [nicobailon/visual-explainer](https://github.com/nicobailon/visual-explainer) — visual artifact generation skill philosophy, prompt workflow, and template patterns by Nico Bailon (adapted, not vendored)

## Licence

MIT
