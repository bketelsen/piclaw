---
name: cog-commit
description: Create git commits informed by relevant COG memory so the message reflects real context, scope, and intent.
distribution: private
---

# COG Commit

Use this internal skill when making a git commit and you want the commit message informed by relevant memory context.

## Triggers

- the agent is about to commit changes in a git repository
- the user asks for a commit and memory context would improve the message

## Memory Root

All memory files live under `~/.piclaw/cog/memory/`.

## What this skill does

- Reviews the repo diff
- Pulls relevant memory context from the matching domain
- Drafts a commit message that reflects the real why, not just the file list
- Runs the git commit with `bash`

## Files

- Read the relevant domain `hot-memory.md`, `action-items.md`, or `observations.md` files
- Read repo status and diff with `bash`

## Procedure

1. Inspect the repo first:
   ```bash
   git status --short && git diff --stat && git diff --cached --stat
   ```
2. Infer which memory domain best matches the work.
3. Read the smallest useful set of domain files for context.
4. Draft a concise conventional-style commit message grounded in both the diff and memory context.
5. Stage the intended files and commit with `bash`.

## Rules

- Use memory context to improve the message, not to pad it.
- Never invent rationale that is not supported by the diff or memory.
- Keep the commit message focused on the actual change.
- This skill is internal-facing; do not force it when a normal commit flow is enough.
