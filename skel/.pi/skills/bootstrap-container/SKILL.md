---
name: bootstrap-container
description: Bootstrap a new container by validating required tools and installing missing dependencies.
distribution: public
---

# Bootstrap container

Use this on a fresh container to ensure required CLI tools and workspace dependencies are present.

## Steps

1. Run the bootstrap script:
   ```bash
   bash ~/.piclaw/.pi/skills/bootstrap-container/bootstrap-container.sh
   ```

2. Review the summary output for missing or failed steps.

## What it does

- Installs required CLI tools (curl, wget, git, jq, rg, sqlite3, restic, openssh-client, supervisorctl, iproute2, etc.) if missing.
- Ensures `~/.piclaw/package.json` exists and installs JS deps (`linkedom`, `turndown`, `playwright`).
- Installs Playwright Chromium + OS deps into `~/.piclaw/.cache/ms-playwright`.
- Prints a version/status summary at the end.

## Environment

- `PICLAW_HOME` (default: `~/.piclaw`)
- `PLAYWRIGHT_BROWSERS_PATH` (default: `~/.piclaw/.cache/ms-playwright`)
