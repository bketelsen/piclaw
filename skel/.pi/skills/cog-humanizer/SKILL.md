---
name: cog-humanizer
description: Rewrite text so it sounds natural and specific while preserving the original meaning and the user's voice.
distribution: public
---

# COG Humanizer

Use this skill to de-robotify prose while keeping its intent intact.

## Triggers

- "humanize this"
- "make it sound natural"
- "rewrite so it doesn't sound like AI"

## Memory Root

All memory files live under `~/.piclaw/cog/memory/`.

## What this skill does

- Rewrites stiff or generic text into a more human voice
- Uses memory-based style context when available
- Preserves the original meaning, tone target, and key facts

## Files

- Read `~/.piclaw/cog/memory/cog-meta/patterns.md` for voice/style cues when useful
- Read relevant domain files only if the text depends on domain-specific context

## Procedure

1. Read the source text carefully.
2. Pull `patterns.md` if it helps align with the user's established voice or preferences.
3. Rewrite for:
   - less repetition
   - more natural cadence
   - sharper specificity
   - fewer stock assistant phrases
4. Preserve meaning, commitments, and factual claims.

## Rules

- Do not sand off the user's personality in the name of polish.
- Remove generic AI phrasing, but do not over-style the text.
- Preserve all concrete facts unless the user asks for a substantive rewrite.
