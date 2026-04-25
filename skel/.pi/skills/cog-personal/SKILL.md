---
name: cog-personal
description: Manage the personal COG domain by reading hot memory first, routing facts to one canonical file, and updating personal memory immediately.
distribution: public
---

# COG Personal

Use this skill for personal topics: family, health, calendar, habits, logistics, routines, and day-to-day life.

## Triggers

- personal updates or preferences
- family or relationship context
- health, symptoms, treatments, or metrics
- calendar, appointments, travel, or reminders
- habits, routines, and recurring goals

## Memory Root

All memory files live under `~/.piclaw/cog/memory/`.

## What this skill does

- Retrieves personal context in layers: L0 -> L1 -> L2.
- Writes new facts immediately to the correct personal memory file.
- Preserves SSOT: each fact belongs in one canonical file, with links elsewhere instead of duplication.

## Files

- `~/.piclaw/cog/memory/personal/hot-memory.md` — L0 summary; rewrite freely.
- `~/.piclaw/cog/memory/personal/entities.md` — L1 personal entity registry; keep entries compact.
- `~/.piclaw/cog/memory/personal/calendar.md` — edit in place for upcoming events and commitments.
- `~/.piclaw/cog/memory/personal/health.md` — edit `Current State`; append to `History`.
- `~/.piclaw/cog/memory/personal/habits.md` — edit `Current State`.
- `~/.piclaw/cog/memory/personal/action-items.md` — append new items; check off completed ones.
- `~/.piclaw/cog/memory/personal/observations.md` — L2 append-only log.

## Procedure

1. Read L0 first:
   ```text
   read ~/.piclaw/cog/memory/personal/hot-memory.md
   ```
2. Pull L1 files only as needed for the current topic:
   - `entities.md` for people, places, and stable facts
   - `calendar.md` for dated commitments
   - `health.md` for symptoms, care plans, medications, or metrics
   - `habits.md` for recurring behavior
   - `action-items.md` for open loops
3. Pull L2 history when the answer needs nuance or chronology:
   ```bash
   grep -n "keyword" ~/.piclaw/cog/memory/personal/observations.md
   ```
4. When the user shares a new fact, write it immediately to the canonical file:
   - stable person/place/fact -> `entities.md`
   - event or appointment -> `calendar.md`
   - active health state -> `health.md`
   - routine or target behavior -> `habits.md`
   - task or follow-up -> `action-items.md`
   - notable event, quote, or change over time -> append to `observations.md`
5. Refresh `hot-memory.md` after meaningful updates so L0 stays current.

## Rules

- Always read `hot-memory.md` first.
- Treat `hot-memory.md` as L0, canonical domain files as L1, and `observations.md` as L2.
- Append to `observations.md`; never rewrite past observation entries.
- Keep one source of truth per fact. Elsewhere, link to that file instead of duplicating content.
- When updating health or habit status, edit the current-state section in place and preserve history separately.
