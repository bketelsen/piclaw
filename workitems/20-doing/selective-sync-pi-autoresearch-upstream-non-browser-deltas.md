---
id: selective-sync-pi-autoresearch-upstream-non-browser-deltas
title: "Selective sync of pi-autoresearch upstream changes (non-browser deltas only)"
status: doing
created: 2026-04-17
updated: 2026-04-17
tags:
  - work-item
  - kanban
  - autoresearch
  - upstream-sync
  - vendor
owner: smith
---

# Selective sync of pi-autoresearch upstream changes (non-browser deltas only)

## Summary

Review and selectively port useful upstream changes from `davebcn87/pi-autoresearch` into Piclaw's vendored copy under `runtime/vendor/autoresearch/`, while explicitly **not** importing browser-export/dashboard-server behavior that does not fit Piclaw's headless tmux sub-agent model.

Upstream HEAD checked on 2026-04-17:
- repo: `https://github.com/davebcn87/pi-autoresearch`
- commit: `5a29db080131449edc6d25a6b351b12879063366`
- title: `Merge pull request #42 from guwidoe/pr/clear-widget-off`

The upstream delta includes:
- browser export dashboard + local HTTP/SSE server
- extra dashboard lifecycle cleanup tied to that server
- iteration token tracking (`iterationStartTokens`, `iterationTokenHistory`, per-result `iterationTokens`)
- TUI/widget rendering refinements
- documentation refresh
- a relaxed `SKILL.md` setup flow that removes the fresh-workspace safety check

Current recommendation:
- **Do not import** browser export/server behavior
- **Do not import** the relaxed skill setup step
- **Consider selectively importing** iteration token tracking and TUI/widget refinements

## Acceptance Criteria

### Scope selection
- [x] Review the upstream extension diff against Piclaw's vendored copy
- [x] Classify each upstream delta as one of:
  - import now
  - import later
  - explicitly reject for Piclaw
- [x] Record the decision and rationale in this work item update history

### Explicit exclusions
- [x] Browser export/dashboard server is **not** imported unless separately approved
- [x] Local HTTP/SSE dashboard server is **not** imported unless separately approved
- [x] `SKILL.md` fresh-workspace safeguard is preserved
- [x] `session_before_fork` overlay cleanup is preserved unless proven unnecessary

### Selective import candidates
- [x] Decide whether to import iteration token tracking
- [x] Decide whether to import TUI/widget rendering refinements
- [x] If imported, port them with Piclaw-compatible behavior and tests
- [x] No extra follow-up ticket is required for the safe TUI/widget tranche because it landed here

## Implementation Paths

### Path A — Minimal selective sync (preferred)
- Port iteration token tracking only:
  - `iterationStartTokens`
  - `iterationTokenHistory`
  - per-result `iterationTokens`
- Keep Piclaw vendoring model and current sub-agent launch behavior unchanged
- Do not import browser export/server code

### Path B — Quality-of-life TUI sync
- Port only the safe rendering helpers and widget/layout improvements
- Keep slash commands, lifecycle hooks, and storage semantics Piclaw-compatible
- Do not import browser export/server code

### Path C — Documentation sync only
- Refresh vendored README notes if useful for maintainers
- Keep runtime behavior unchanged

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [ ] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [x] Pane / viewer contract test
  - [ ] Real-browser smoke test
- [x] Existing tests to rerun are listed
- [x] New regression coverage to add is listed
- [ ] Real-browser smoke pass required? If yes, record the surface

### Existing tests to rerun
- `runtime/test/extensions/autoresearch-renderers.test.ts`
- `runtime/test/extensions/session-shutdown-hooks.test.ts`
- `runtime/test/vendor/autoresearch-session-lifecycle-compat.test.ts`
- `runtime/test/vendor/autoresearch-iteration-tokens.test.ts`

### New regression coverage to add if code changes land
- [x] Iteration token persistence/reconstruction test
- [x] Widget rendering regression for narrow widths / adaptive hints
- [x] `/autoresearch off` cleanup regression if lifecycle changes are ported
- [x] Verify browser-export/server code remains absent from Piclaw vendored path unless explicitly approved

## Definition of Done

- [x] All acceptance criteria satisfied and verified
- [x] Tests added or updated — passing locally
- [x] Type check clean
- [ ] Docs and notes updated with links to ticket
- [x] Operational impact assessed
- [x] Follow-up tickets created for deferred scope
- [x] Update history complete with evidence
- [x] Ticket front matter updated

## Updates

### 2026-04-17
- Audited upstream `pi-autoresearch` HEAD against Piclaw's vendored copy.
- Confirmed meaningful upstream movement in:
  - browser export dashboard / local server
  - dashboard cleanup tied to that server
  - iteration token tracking
  - widget/TUI rendering refinements
  - README expansion
  - skill setup wording
- Decision split:
  - reject browser export/server for Piclaw's current sub-agent model
  - preserve Piclaw's stricter fresh-workspace safeguard in `SKILL.md`
  - import iteration token tracking now
  - resume evaluation of the safe TUI/widget rendering refinements as the next active tranche
- Landed the minimal selective port in `runtime/vendor/autoresearch/extensions/pi-autoresearch/index.ts`:
  - added runtime tracking fields `iterationStartTokens` and `iterationTokenHistory`
  - persisted per-result `iterationTokens` in `log_experiment`
  - reconstructed token history from `autoresearch.jsonl` and fallback session-history state
  - kept Piclaw behavior tracking-only (no upstream browser export/server code, no upstream auto-stop-on-context-exhaustion behavior)
- Added regression coverage in `runtime/test/vendor/autoresearch-iteration-tokens.test.ts` for persistence + reload behavior.
- Reran targeted compatibility coverage:
  - `runtime/test/vendor/autoresearch-session-lifecycle-compat.test.ts`
  - `runtime/test/vendor/autoresearch-iteration-tokens.test.ts`
  - `runtime/test/extensions/autoresearch-renderers.test.ts`
  - `runtime/test/extensions/session-shutdown-hooks.test.ts`
- Lane cleanup: moved this ticket into `20-doing/` to match its actual active status before resuming the safe non-browser render/widget sync.
- Landed the safe non-browser TUI/widget refinement tranche from upstream without importing browser export/server code:
  - added adaptive render helpers (`truncateDisplayText`, `joinPartsToWidth`, `appendRightAlignedAdaptiveHint`, `getTuiSize`)
  - upgraded dashboard table rendering to support adaptive header hints and narrower widths
  - upgraded collapsed/expanded widget rendering to width-aware render objects instead of fixed-width `Text` payloads
  - preserved Piclaw-specific lifecycle behavior, including `session_before_fork` overlay cleanup and the absence of upstream dashboard server code
- Added a new renderer regression in `runtime/test/extensions/autoresearch-renderers.test.ts` covering:
  - collapsed widget rendering under bounded width
  - expanded widget rendering via `ctrl+x`
  - adaptive shortcut hint presence without line overflow
  - `/autoresearch off` clearing runtime state and suppressing auto-resume
- Extended `runtime/test/vendor/autoresearch-session-lifecycle-compat.test.ts` to pin that upstream browser-export/server code remains absent from Piclaw's vendored copy.
- Revalidated the selective-sync suite:
  - `runtime/test/extensions/autoresearch-renderers.test.ts`
  - `runtime/test/vendor/autoresearch-session-lifecycle-compat.test.ts`
  - `runtime/test/vendor/autoresearch-iteration-tokens.test.ts`
  - `runtime/test/extensions/session-shutdown-hooks.test.ts`
  - focused suite result: `10 pass / 0 fail`
  - `bunx tsc --noEmit -p runtime/tsconfig.json` remained silent with zero-byte stdout/stderr, matching the earlier known silent-success behavior on this lane

## Notes

### Why browser export is currently a mismatch
Piclaw runs autoresearch inside a headless tmux sub-agent supervised by Piclaw. Upstream's `/autoresearch export` assumes a local browser-open flow and a local HTTP/SSE server owned by the extension itself. Piclaw already has a web UI, timeline, widgets, and supervisor surfaces, so importing a second ad-hoc dashboard delivery path would cut across the product model.

### Why the current skill is safer
Piclaw's vendored `SKILL.md` explicitly confirms a fresh experiment workspace before starting. This is a good safeguard in a persistent multi-project workspace and should not be relaxed without explicit approval.

## Links

- Upstream repo: `https://github.com/davebcn87/pi-autoresearch`
- Upstream reviewed commit: `5a29db080131449edc6d25a6b351b12879063366`
- Vendored extension: `runtime/vendor/autoresearch/extensions/pi-autoresearch/index.ts`
- Vendored skill: `runtime/vendor/autoresearch/skills/autoresearch-create/SKILL.md`
- Supervisor extension: `runtime/src/extensions/autoresearch-supervisor.ts`
- Existing done item: `workitems/50-done/autoresearch-sub-agent-supervisor.md`
- Existing research item: `workitems/50-done/investigate-pi-autoresearch.md`
