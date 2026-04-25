---
name: cog-foresight
description: Read across COG domains and produce one concrete strategic nudge grounded in active memory signals.
distribution: public
---

# COG Foresight

Use this skill to connect signals across domains and surface one practical thing worth acting on next.

## Triggers

- "foresight"
- "what should I be thinking about"
- "connect the dots"
- "what am I missing"
- scheduled daily foresight sweep

## Memory Root

All memory files live under `~/.piclaw/cog/memory/`.

## What this skill does

- Reads active context across domains
- Finds a cross-domain signal worth attention
- Writes a single nudge file with evidence and a suggested action

## Files

- Read all domain `hot-memory.md`
- Read all domain `action-items.md`
- Read all domain `observations.md` as needed
- Overwrite `~/.piclaw/cog/memory/cog-meta/foresight-nudge.md`

## Procedure

1. Read all current `hot-memory.md` files to understand active pressures.
2. Read `action-items.md` files to see where obligations are accumulating or drifting.
3. Pull `observations.md` only where chronology or repeated evidence matters.
4. Synthesize one nudge, not a brainstorming dump.
5. Write `foresight-nudge.md` in this format:
   - `Signal`
   - `Insight`
   - `Suggested Action`
   - `Sources`

## Tool examples

```bash
find ~/.piclaw/cog/memory -maxdepth 2 -name hot-memory.md -o -name action-items.md
```

## Rules

- Produce one concrete nudge per run unless the user explicitly asks for more.
- The action should be small enough to act on now, not an essay about strategy.
- Include source links or source file paths so the reasoning is inspectable.
- Prefer present tension and convergence over abstract speculation.
