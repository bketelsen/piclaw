---
name: cog-evolve
description: Audit the COG memory architecture, identify structural drift or bloat, and propose rule changes without auto-applying them.
distribution: public
---

# COG Evolve

Use this skill to audit how the COG system is organized and propose improvements to the rules or structure.

## Triggers

- "evolve"
- "system audit"
- "audit yourself"
- requests to review COG organization or memory architecture

## Memory Root

All memory files live under `~/.piclaw/cog/memory/`.

## What this skill does

- Reads across the full memory tree
- Audits flow from active memory to archive
- Identifies bloat, staleness, missing structure, or rule drift
- Proposes changes without applying them automatically

## Files

- Everything under `~/.piclaw/cog/memory/`

## Procedure

1. Survey the memory tree with `bash`:
   ```bash
   find ~/.piclaw/cog/memory -maxdepth 3 -type f | sort
   ```
2. Inspect representative `hot-memory.md`, canonical domain files, `observations.md`, and glacier files.
3. Check whether information flows cleanly from active context to canonical summaries to archive.
4. Look for:
   - oversized hot memory
   - duplicated facts across files
   - stale action items or dead domains
   - missing indexes or broken wiki-link habits
   - domains that need a stronger SSOT split
5. Produce recommendations only. Do not auto-edit memory unless the user explicitly asks for changes.

## Rules

- Focus on system structure, not content grooming.
- Propose rule changes, file layout changes, or maintenance habits.
- Distinguish observations from recommendations.
- Do not auto-apply architectural changes from this skill alone.
