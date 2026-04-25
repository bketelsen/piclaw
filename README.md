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
- **Optional auth/channels** — passkeys/TOTP for the web UI, plus optional WhatsApp integration

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
| `PICLAW_ENABLE_M365_EXPERIMENTAL` | `0` | Enable the experimental Microsoft 365 extension bundle |
| `PICLAW_KEYCHAIN_KEY` | _(empty)_ | Master key for encrypted secret storage |
| `PICLAW_TRUST_PROXY` | `0` | Enable when behind a reverse proxy or tunnel |

For the full list, auth setup (TOTP/passkeys), session-scoped SSH-backed remote tools, reverse proxy configuration, SSHFS/FUSE support, and the workspace environment hook, see [docs/configuration.md](docs/configuration.md).
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
