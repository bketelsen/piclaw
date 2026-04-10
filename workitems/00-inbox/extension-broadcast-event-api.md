---
id: extension-broadcast-event-api
title: Typed extension broadcast event API for live UI updates
status: inbox
created: 2026-04-10
updated: 2026-04-10
tags:
  - work-item
  - kanban
  - extensions
  - web
  - sse
  - api
  - architecture
owner: pi
origin: "https://github.com/rcarmo/piclaw/issues/18"
---

# Typed extension broadcast event API for live UI updates

## Summary

Extensions need a sanctioned way to push live status/widget updates into
the web client (status panels, toast notifications, widget state changes)
without reaching into web channel internals.

Issue #18 proposes `globalThis.__PICLAW_BROADCAST_EVENT__` as a quick
hook. The underlying need is real, but the implementation should be a
typed, lifecycle-aware extension API rather than a global mutable function.

This aligns with the existing workitem
`define-first-class-extension-ui-surface-for-piclaw-extensions` and
should be designed alongside it.

## Origin

- GitHub issue: https://github.com/rcarmo/piclaw/issues/18 (item 1)
- External patch: `02-bootstrap-broadcast-event.patch`
- Repo: https://github.com/aliceisjustplaying/piclaw-customizations

## Acceptance Criteria

- [ ] Extensions can emit live UI events through a typed API method.
- [ ] Events are scoped to chat/session, not globally broadcast.
- [ ] The API is versioned and documented for extension authors.
- [ ] No `globalThis` mutation required.
- [ ] Existing `extension_ui_*` SSE plumbing is reused or superseded cleanly.

## Implementation Paths

### Path A — Extension context method
Add a `broadcastUIEvent(type, payload)` method to the extension context
passed during registration. Scoped by session/chat.

### Path B — Extension event bus
Expose a typed event bus that extensions can publish to. The web channel
subscribes and bridges to SSE. More flexible but heavier.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Interaction scenario test
  - [ ] State-machine / invariant test
- [ ] Unit test: extension emits event → web channel receives it
- [ ] Unit test: event scoping by chat/session

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
- Created from GitHub issue #18 triage. External patch reviewed; need is
  accepted but implementation shape should be a typed API, not globalThis.
- Related: `define-first-class-extension-ui-surface-for-piclaw-extensions`

## Notes

## Links

- https://github.com/rcarmo/piclaw/issues/18
- `workitems/00-inbox/define-first-class-extension-ui-surface-for-piclaw-extensions.md`
- `runtime/src/runtime/bootstrap.ts`
- `runtime/src/channels/web/theming/ui-bridge.ts`
