---
name: cog-reflect
description: Mine recent PiClaw conversations and domain observations, distill recurring patterns, and update the reflective COG meta files.
distribution: public
---

# COG Reflect

Use this skill to reflect on recent conversations, detect recurring behaviors or mistakes, and update meta-memory.

## Triggers

- "reflect"
- "what have you learned"
- "how can you improve"
- "review yourself"
- scheduled nightly reflection

## Memory Root

All memory files live under `~/.piclaw/cog/memory/`.

## What this skill does

- Reads the last processed cursor.
- Queries recent conversation history from PiClaw's message store.
- Clusters repeated themes with domain observations.
- Updates `patterns.md`, appends a reflection entry, and advances the cursor.

## Files

- Read `~/.piclaw/cog/memory/cog-meta/reflect-cursor.md`
- Read `~/.piclaw/cog/memory/cog-meta/self-observations.md`
- Read every domain `observations.md`
- Edit `~/.piclaw/cog/memory/cog-meta/patterns.md` in place, keeping it at or under 70 lines
- Append a new entry to `~/.piclaw/cog/memory/cog-meta/self-observations.md`
- Update `~/.piclaw/cog/memory/cog-meta/reflect-cursor.md` after processing

## Procedure

1. Read the cursor file to find the last processed timestamp or message id.
2. Gather recent messages using one of these PiClaw-native paths:
   - `messages` with `search` for recent assistant/user exchanges
   - `introspect_sql` against the `messages` table when you need structured filtering or grouping
3. Read the relevant domain `observations.md` files to correlate message patterns with lived behavior.
4. Distill only repeated, durable patterns:
   - communication style
   - recurring blockers
   - repeated requests or corrections
   - habits that keep showing up across days
5. Edit `patterns.md` in place. Keep it short, practical, and current.
6. Append one dated reflection line to `self-observations.md`.
7. Write the new cursor so future runs continue from the correct point.

## Tool examples

```sql
SELECT id, role, created_at, substr(content, 1, 240)
FROM messages
WHERE created_at > ?
ORDER BY created_at ASC;
```

```bash
find ~/.piclaw/cog/memory -name observations.md -print
```

## Rules

- Use `messages search` first for lightweight retrieval; use `introspect_sql` when filtering or aggregation matters.
- Do not rewrite old self-observation entries; append new dated lines.
- `patterns.md` is an edited summary, not a raw dump.
- Only promote patterns that recur. One-off events belong in observations, not patterns.
- Always update the cursor last, after successful writes.
