---
name: cog-setup
description: Bootstrap a new COG memory domain by asking a few discovery questions, updating domains.yml, and creating starter files.
distribution: public
---

# COG Setup

Use this skill to add a new COG domain or bootstrap a missing domain structure.

## Triggers

- "setup cog"
- "add a domain"
- "bootstrap"
- requests to initialize or extend memory domains

## Memory Root

All memory files live under `~/.piclaw/cog/memory/`.

## What this skill does

- Collects a small amount of domain setup context
- Updates `domains.yml`
- Creates a starter directory and core files for the new domain

## Files

- Read and edit `~/.piclaw/cog/memory/domains.yml`
- Create a new domain directory under `~/.piclaw/cog/memory/`
- Create starter files:
  - `hot-memory.md`
  - `observations.md`
  - `action-items.md`
  - `entities.md`

## Procedure

1. Ask 3-4 discovery questions before creating files:
   - domain name
   - what belongs in it
   - how active it is
   - any special canonical files beyond the default set
2. Read `domains.yml` and preserve its existing structure.
3. Add the new domain entry.
4. Create the new domain directory with `bash` if needed:
   ```bash
   mkdir -p ~/.piclaw/cog/memory/<domain>
   ```
5. Create the starter files with `write`, using concise templates that match SSOT habits.

## Rules

- Do not invent domain scope without asking.
- Keep starter files minimal and easy to grow.
- `observations.md` should begin append-only from day one.
- If the new domain needs custom files, add them deliberately rather than copying every file from another domain.
