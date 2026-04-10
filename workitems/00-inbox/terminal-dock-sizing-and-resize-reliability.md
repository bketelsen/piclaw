---
id: terminal-dock-sizing-and-resize-reliability
title: Terminal dock sizing, resize reliability, and popout reattach fixes
status: inbox
created: 2026-04-10
updated: 2026-04-10
priority: high
tags:
  - work-item
  - kanban
  - web-ui
  - terminal
  - panes
  - ux
owner: pi
origin: "https://github.com/rcarmo/piclaw/issues/18"
---

# Terminal dock sizing, resize reliability, and popout reattach fixes

## Summary

Issue #18 includes a substantial terminal patch
(`06-terminal-dock-and-popout-fixes.patch`) that addresses several
related terminal dock UX issues:

1. **Sizing:** dock panel does not fill the available sidebar area;
   standalone (no-editor) mode needs explicit flex sizing.
2. **TUI garbling:** full-screen TUIs like `vi` render incorrectly
   because the terminal canvas is CSS-scaled rather than properly resized.
3. **Resize reliability:** font/layout metrics settle after initial mount,
   so a single resize pass is insufficient.
4. **Popout reattach:** dock → popout → dock transitions lose live
   terminal state; the patch adds a live-transfer claim path.

This overlaps with the existing
`restore-proper-safari-terminal-popout-close-and-reattach` inbox item.
The sizing and resize portions are lower-risk and could land independently.

## Origin

- GitHub issue: https://github.com/rcarmo/piclaw/issues/18 (item 6)
- External patch: `06-terminal-dock-and-popout-fixes.patch`
- Repo: https://github.com/aliceisjustplaying/piclaw-customizations

## Acceptance Criteria

### A. Sizing
- [ ] Dock panel fills available space in standalone (no-editor) mode.
- [ ] Terminal host, body, and canvas elements use flex sizing, not fixed.
- [ ] `min-height: 0` applied where needed to prevent flex overflow.

### B. Resize reliability
- [ ] Delayed resize retries are queued after initial mount and reconnect.
- [ ] `scheduleResize` supports a `force` flag to bypass signature dedup.
- [ ] Resize retries are cleaned up on dispose.

### C. TUI rendering
- [ ] Canvas is not CSS-scaled (`maxHeight: none` on canvas).
- [ ] Full-screen TUIs render correctly in the dock.

### D. Popout reattach
- [ ] Closing a popout and re-docking preserves live terminal state.
- [ ] Live-transfer claim path is implemented for dock mount.
- [ ] Disposed flag prevents stale instance binding.

## Implementation Paths

### Recommended: split into sub-PRs
1. **CSS/flex layout** — low risk, easy to validate.
2. **Resize retry policy** — medium risk, testable in isolation.
3. **Popout reattach live-transfer** — highest risk, needs careful
   lifecycle testing. May overlap with Safari reattach workitem.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Pane / viewer contract test
  - [ ] Restore / reconnect matrix test
  - [ ] Real-browser smoke test
- [ ] Manual: dock terminal fills sidebar in standalone mode
- [ ] Manual: `vi` / `htop` render correctly in dock
- [ ] Manual: popout → dock transition preserves terminal session
- [ ] Unit: resize retry timers are cleaned up on dispose

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Tests added or updated — passing locally
- [ ] Type check clean
- [ ] Docs and notes updated with links to ticket
- [ ] Operational impact assessed
- [ ] Follow-up tickets created for deferred scope
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Updates

### 2026-04-10
- Created from GitHub issue #18 triage. External patch reviewed and found
  to be the strongest of the set. Recommended split into 3 sub-PRs for
  safer review.
- Related: `restore-proper-safari-terminal-popout-close-and-reattach`.

## Notes

The external patch also changes `document.createElement` to
`this.ownerDocument.createElement` in one place — a real fix for
popout window correctness that should be included.

## Links

- https://github.com/rcarmo/piclaw/issues/18
- `workitems/00-inbox/restore-proper-safari-terminal-popout-close-and-reattach.md`
- `runtime/web/src/panes/terminal-pane.ts`
- `runtime/web/src/ui/app-main-shell-render.ts`
- `runtime/web/src/ui/app-pane-runtime-orchestration.ts`
- `runtime/web/static/css/editor.css`
