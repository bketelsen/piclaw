---
id: fix-generic-editor-popout-reattach-state-and-title
title: Fix generic editor pop-out reattach state loss and window title
status: doing
priority: high
created: 2026-04-02
updated: 2026-04-02
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web-ui
  - editor
  - tabs
  - windows
  - regression
owner: pi
---

# Fix generic editor pop-out reattach state loss and window title

## Summary

Live testing of the generic editor pop-out flow exposed two regressions that do
not affect the simple viewer panes:

1. unsaved in-memory editor content transfers into the pop-out window, but is
   lost when the pop-out closes and the main shell reattaches the tab
2. the pop-out window title resolves from document content (for example the
   markdown heading `Smith`) instead of the file/tab label (`AGENTS.md · PiClaw`)

This ticket tracks the focused fix for generic editor tabs so their behavior is
consistent with the intended editor pop-out contract.

## Problem Statement

The current generic editor pop-out implementation is only partially correct.

Observed live behavior with `AGENTS.md`:
- add an unsaved in-memory marker in the main editor
- pop the tab out into a standalone window
- confirm the unsaved marker appears in the pop-out editor
- close the pop-out window
- the main shell reattaches the tab, but the unsaved marker is gone and the tab
  reopens from on-disk content
- the pop-out window title shows `Smith` rather than `AGENTS.md · PiClaw`

That means the editor-state transfer is working one-way into the pop-out, but
reattach/recovery does not preserve the authoritative in-memory state.

## Acceptance Criteria

- [x] Generic editor pop-outs preserve unsaved in-memory content when the
      detached window is closed and the tab reattaches to the main shell.
- [x] Generic editor pop-outs preserve unsaved in-memory content when using any
      manual reattach path, if present.
- [x] The standalone editor window title uses the file/tab label rather than a
      content-derived heading.
- [x] Exactly one editor tab exists after reattach; no duplicate tab is created.
- [ ] Existing viewer/simple-pane reattach behavior remains unchanged.
- [ ] Focused regression coverage exists for both unsaved-state recovery and
      window-title resolution.

## Suspected Areas

- `runtime/web/src/ui/app-pane-runtime-orchestration.ts`
- `runtime/web/src/ui/app-branch-pane-lifecycle-actions.ts`
- `runtime/web/src/panes/editor-popout-transfer.ts`
- `runtime/web/src/panes/editor-loader.ts`
- `runtime/web/src/ui/app-pane-state.ts`
- `runtime/web/src/ui/chat-window.ts`
- any editor-side title update path that currently overwrites the pane-popout
  document title after mount

## Suggested Fix Slices

### Slice 1 — preserve editor authority on reattach
- determine whether closing the detached window is restoring from disk instead
  of the last transferred editor state
- keep or rehydrate the most recent in-memory editor content during
  detached-window close recovery
- verify dirty-state and view-state continuity after reattach

### Slice 2 — stabilize standalone editor window title
- identify where the content-derived title overwrite happens
- keep the pane/tab label as the authoritative pop-out window title
- ensure markdown headings or editor content do not replace the outer window
  title unexpectedly

### Slice 3 — regression coverage
- add a focused test for unsaved editor content surviving pop-out close and
  reattach
- add a focused test for generic editor pop-out title resolution

## Reproduction

### Live reproduction used on 2026-04-02
- open `AGENTS.md`
- inject an unsaved marker line in the editor
- use tab context menu → `Open in Window`
- verify the marker is visible in the pop-out editor
- close the pop-out window
- observe that the main window reattaches the tab from disk and loses the
  marker
- observe the pop-out window title shows `Smith`

## Validation Plan

- [x] focused `bun test ...` for editor pop-out/reattach flows
- [x] live Playwright/browser reproduction for `AGENTS.md`
- [x] `bun run lint`
- [ ] `bun run typecheck`
- [x] `bun run build:web` if web bundles are affected

## Links

- `workitems/20-doing/live-tab-and-pane-popout-regression-sweep.md`
- `workitems/50-done/allow-any-editor-tab-to-open-in-a-standalone-pop-out-window.md`
- `runtime/web/src/panes/editor-popout-transfer.ts`
- `runtime/web/src/ui/app-pane-runtime-orchestration.ts`
- `runtime/web/src/ui/app-branch-pane-lifecycle-actions.ts`

## Updates

### 2026-04-02
- Created from the live regression sweep after the simple viewers passed but
  the generic editor failed reattach continuity.
- Known live failure:
  - unsaved marker transferred into the pop-out editor successfully
  - unsaved marker lost after closing the pop-out and reattaching in the main
    shell
  - pop-out title resolved to `Smith` instead of `AGENTS.md · PiClaw`
- Traced the title overwrite to the shared branding flow:
  - `runtime/web/src/app.ts` correctly sets the pane-popout document title
  - `runtime/web/src/ui/app-shell-environment-effects.ts` later overwrote it
    through `applyBranding(...)`
- Patched the branding flow to skip `document.title` overrides while running in
  pane-popout mode, while keeping normal branding behavior in the main shell.
- Live Playwright retest after deploying the freshly rebuilt browser bundle now
  passes for the title portion:
  - pop-out title is `AGENTS.md · PiClaw`
  - unsaved marker content still transfers into the pop-out editor
  - closing the pop-out still loses the unsaved marker during main-window
    reattach, so the state-loss half of this ticket remains open.
- Fixed the state-loss half by teaching pane-popout windows to send one-shot
  reattach transfer tokens back to the opener during manual reattach and
  `pagehide`/`beforeunload` close flows.
- The main shell now consumes those tokens before reopening the pane, so the
  editor remount rehydrates from the detached window's last in-memory content
  instead of reading from disk first.
- Focused regression coverage added for the reattach token builder/consumer.
- Latest live Playwright result for `AGENTS.md` is now fully green:
  - pop-out title remains `AGENTS.md · PiClaw`
  - unsaved marker survives pop-out close and main-window reattach
  - exactly one `AGENTS.md` tab exists after reattach
  - no detached badge remains after recovery
- `bun run typecheck` still fails for unrelated existing `contextLength`
  errors in `src/agent-pool/run-agent-orchestrator.ts`.
