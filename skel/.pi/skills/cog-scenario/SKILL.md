---
name: cog-scenario
description: Model decision branches using relevant memory context and write a scenario file with risks, signals, and confidence.
distribution: public
---

# COG Scenario

Use this skill to simulate options, compare paths, and make decision tradeoffs explicit.

## Triggers

- "scenario"
- "what if"
- "simulate"
- "model the options"
- "walk through a decision"

## Memory Root

All memory files live under `~/.piclaw/cog/memory/`.

## What this skill does

- Reads relevant domain memory for context
- Compares decision branches
- Writes a scenario file in `cog-meta/scenarios/`

## Files

- Read the relevant domain files for the decision
- Write `~/.piclaw/cog/memory/cog-meta/scenarios/<topic>.md`

## Procedure

1. Read the domain files that affect the decision: hot memory, action items, calendar, entities, or observations.
2. Pick a stable topic slug for the scenario file.
3. Create or overwrite `cog-meta/scenarios/<topic>.md` with:
   - decision framing
   - assumptions
   - option-by-option paths
   - pros and cons
   - risks
   - canary signals
   - confidence level
4. Ground every option in actual memory context where possible.

## Rules

- Model realistic options, not fake symmetry.
- Include canary signals that show whether an option is working.
- Keep confidence calibrated and explicit.
- Use `write` for new scenario files and `edit` for follow-up refinement.
