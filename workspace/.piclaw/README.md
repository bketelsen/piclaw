# Piclaw local config

This directory holds local Piclaw runtime configuration for the workspace.

## Workspace environment hook

PiClaw also supports a workspace shell hook at `~/.piclaw/.env.sh`.

This is a power-user feature. Use it when you intentionally want to customize the environment seen by the embedded terminal and the PiClaw runtime.

Use it for workspace-scoped environment variables that should persist across container recreation, for example:

```bash
export PATH="$HOME/.piclaw/.local/bin:$PATH"
export GH_CONFIG_DIR="$HOME/.piclaw/.config/gh"
mkdir -p "$HOME/.piclaw/.config/gh"
```

The file is sourced for interactive shells and on PiClaw startup. The default workspace `.gitignore` ignores `.env.sh` so local secrets and machine-specific paths do not get committed by accident.

### Embedded terminal use case: GitHub CLI

One practical use case is making `gh auth login` persist from the embedded terminal inside PiClaw.

```bash
export PATH="$HOME/.piclaw/.local/bin:$PATH"
export GH_CONFIG_DIR="$HOME/.piclaw/.config/gh"
mkdir -p "$HOME/.piclaw/.config/gh"
```

With that in `~/.piclaw/.env.sh`, you can install `gh` into `~/.piclaw/.local/bin`, open the embedded terminal, run `gh auth login`, and keep the GitHub CLI auth state in the PICLAW_HOME directory across restarts.

### Responsibility boundary

`~/.piclaw/.env.sh` runs as part of the user-controlled workspace environment. If you put incompatible exports, shell logic, or PATH overrides in this file and PiClaw stops working correctly, that breakage is the user's responsibility.

## FTS / workspace search

`search_workspace` indexes a configurable set of workspace roots.

To make COG memory searchable, include `cog/memory` alongside the usual note and skill roots.

Override them in `.piclaw/config.json`:

```json
{
  "tools": {
    "workspaceSearchRoots": [
      "notes",
      ".pi/skills",
      "cog/memory",
      "docs",
      "workitems"
    ]
  }
}
```

You can also enable `search_workspace` in the default active tool set:

```json
{
  "tools": {
    "additionalDefaultTools": [
      "search_workspace"
    ]
  }
}
```

Rules:

- relative paths are resolved from the workspace root
- absolute paths are allowed
- configured roots are indexed automatically at session start
- `scope: notes`, `scope: skills`, and `scope: memory` remain the built-in convenience filters
- `scope: all` searches across the configured root set

## COG memory system

PiClaw keeps durable memory under `~/.piclaw/cog/memory/`.

- **Hot**: `hot-memory.md` and per-domain hot files loaded every session
- **Warm**: domain files read on demand by COG skills
- **Glacier**: archived observation files plus `glacier/index.md`

`cogMemoryBootstrap` injects the current hot memory, shared patterns, foresight nudge, and domain registry into agent sessions automatically.

Built-in maintenance tasks:

- `cog-reflect` nightly
- `cog-housekeeping` weekly
- `cog-foresight` daily

Use `cog-setup` to add new domains. See also: `config.json.example`
