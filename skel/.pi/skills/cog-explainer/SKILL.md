---
name: cog-explainer
description: Draft explanations and longer-form writing in the user's voice by grounding the response in COG memory context.
distribution: public
---

# COG Explainer

Use this skill when the user wants polished prose, explanations, or drafts informed by memory context.

## Triggers

- "write about"
- "explain this"
- "draft a post"
- "help me write"

## Memory Root

All memory files live under `~/.piclaw/cog/memory/`.

## What this skill does

- Reads the most relevant domain context
- Pulls tone and priorities from prior observations and patterns
- Produces clear prose without generic filler

## Files

- Read the relevant domain files for subject matter
- Read `~/.piclaw/cog/memory/cog-meta/patterns.md` when voice or recurring framing matters
- Read `observations.md` files when examples or chronology improve the draft

## Procedure

1. Identify the domain that best matches the topic.
2. Read `hot-memory.md` first, then pull only the canonical files needed for substance.
3. Read `patterns.md` if it contains useful voice, preference, or framing cues.
4. Draft the requested explanation or writing artifact.
5. When the user shares new durable context during drafting, write it back to the appropriate memory file.

## Rules

- Ground claims in actual memory context; do not fabricate lived details.
- Match the user's likely voice and priorities, not a generic assistant tone.
- Keep research separate from drafting: retrieve context first, then write cleanly.
