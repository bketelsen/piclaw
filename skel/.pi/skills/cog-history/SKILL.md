---
name: cog-history
description: Search COG memory and PiClaw message history in three passes, then synthesize a precise recall answer with sources.
distribution: public
---

# COG History

Use this skill to recover prior discussions, facts, and timelines from memory files plus PiClaw conversation history.

## Triggers

- "what did I say about X"
- "when did we discuss Y"
- "find that conversation"
- "history of Z"

## Memory Root

All memory files live under `~/.piclaw/cog/memory/`.

## What this skill does

- Runs a three-pass search: grep -> locate -> synthesize
- Searches memory files, indexed workspace content, and chat history
- Returns the best answer with source pointers

## Files

- All files under `~/.piclaw/cog/memory/`
- Message history surfaced through `messages`

## Procedure

1. Pass 1: grep memory broadly.
   ```bash
   grep -Rni "keyword" ~/.piclaw/cog/memory
   ```
2. Pass 2: use `search_workspace` for broader indexed lookup when the keyword may appear outside the obvious file.
3. Pass 3: use `messages search` for conversation history, especially when the user is asking about what was said rather than what was written to memory.
4. Read the highest-signal files or messages and synthesize the answer with dates, context, and uncertainty.

## Rules

- Start broad, then narrow.
- Prefer exact quotes or dated summaries when available.
- If evidence is partial, say so clearly instead of pretending certainty.
- Cite the source files or message hits you relied on.
- Use PiClaw-native search only: `bash`, `search_workspace`, `messages`, and `read`.
