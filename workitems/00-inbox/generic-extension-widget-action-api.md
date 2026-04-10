---
id: generic-extension-widget-action-api
title: Generic extension widget action/callback API
status: inbox
created: 2026-04-10
updated: 2026-04-10
tags:
  - work-item
  - kanban
  - extensions
  - web
  - api
  - architecture
owner: pi
origin: "https://github.com/rcarmo/piclaw/issues/18"
---

# Generic extension widget action/callback API

## Summary

Extension-owned UI widgets (status panels, live progress, task cards) need
a return path so the user can trigger actions like stop, dismiss, retry,
or copy. Currently the only upstream pattern is the autoresearch panel's
hardcoded action types.

Issue #18 proposes codex-specific `/agent/codex/stop` and
`/agent/codex/dismiss` endpoints plus matching frontend action handlers.
The need is valid but the implementation should be generic — routed by
extension ID and action key, not feature-specific endpoint names.

This is the server-side counterpart to the extension broadcast event API
and the extension UI surface contract.

## Origin

- GitHub issue: https://github.com/rcarmo/piclaw/issues/18 (items 2–3)
- External patches: `03-dispatch-codex-endpoints.patch`,
  `04-web-codex-action-handler.patch`
- Repo: https://github.com/aliceisjustplaying/piclaw-customizations

## Acceptance Criteria

- [ ] A generic `POST /agent/extension-action` (or similar) endpoint exists.
- [ ] Payload includes extension ID, widget key, action key, chat context.
- [ ] The request is routed to the owning extension's registered action handler.
- [ ] The frontend dispatches to the generic endpoint based on action type prefix.
- [ ] Existing autoresearch panel actions migrate to (or coexist with) the new model.
- [ ] No feature-specific route names in core dispatch tables.

## Implementation Paths

### Path A — Single generic action endpoint (recommended)
Add one `POST /agent/extension-action` route. Dispatch by extension ID
from the request body. Extensions register action handlers during init.

### Path B — Extension-namespaced routes
Each extension gets `/agent/ext/<id>/<action>`. More REST-like but
creates route proliferation.

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Routing matrix test
  - [ ] Interaction scenario test
- [ ] Unit test: action dispatches to correct extension handler
- [ ] Unit test: unknown extension/action returns structured error
- [ ] Frontend test: widget button triggers correct fetch

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
- Created from GitHub issue #18 triage. External patches reviewed;
  codex-specific route names rejected but the generic capability is wanted.
- Related: extension broadcast event API, extension UI surface contract.

## Notes

## Links

- https://github.com/rcarmo/piclaw/issues/18
- `workitems/00-inbox/extension-broadcast-event-api.md`
- `workitems/00-inbox/define-first-class-extension-ui-surface-for-piclaw-extensions.md`
- `runtime/src/channels/web/http/dispatch-agent.ts`
- `runtime/web/src/ui/app-extension-status.ts`
