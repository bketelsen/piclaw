---
name: cog-housekeeping
description: Prune active memory, archive older observations into glacier files, and rebuild COG indexes.
distribution: public
---

# COG Housekeeping

Use this skill for memory maintenance, pruning, archival, and index regeneration.

## Triggers

- "housekeeping"
- "clean up memory"
- "prune"
- "archive"
- scheduled weekly maintenance

## Memory Root

All memory files live under `~/.piclaw/cog/memory/`.

## What this skill does

- Archives older observation entries into `glacier/`
- Prunes oversized `hot-memory.md` files to active context only
- Rebuilds `link-index.md`
- Regenerates `glacier/index.md`

## Files

- Every `~/.piclaw/cog/memory/**/observations.md`
- Every `~/.piclaw/cog/memory/**/hot-memory.md`
- `~/.piclaw/cog/memory/link-index.md`
- `~/.piclaw/cog/memory/glacier/index.md`
- Glacier archive files under `~/.piclaw/cog/memory/glacier/`

## Procedure

1. Discover candidate files:
   ```bash
   find ~/.piclaw/cog/memory -name observations.md -o -name hot-memory.md
   ```
2. Read each `hot-memory.md` and prune it to active, high-signal context. Keep each file under 50 lines.
3. Read each `observations.md` and move older, low-active-value entries into dated glacier archive files.
4. When creating a glacier archive, use `write` with YAML frontmatter that identifies:
   - source file
   - archived date range
   - archive date
5. Rebuild `link-index.md` by scanning wiki-links:
   ```bash
   grep -Roh '\[\[[^]]\+\]\]' ~/.piclaw/cog/memory | sort | uniq -c | sort -nr
   ```
6. Regenerate `glacier/index.md` with links to current archive files and the date ranges they cover.

## Rules

- `observations.md` entries are append-only in normal use; housekeeping may move older blocks into glacier archives, but do not rewrite their content.
- Keep `hot-memory.md` files short and current rather than comprehensive.
- Use `read` to inspect file size and content before pruning.
- Use `write` for new glacier archive files and `edit` for index regeneration.
- Preserve traceability: every archive must point back to its source file and covered span.
