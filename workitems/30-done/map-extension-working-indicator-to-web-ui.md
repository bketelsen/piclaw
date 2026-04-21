---
id: map-extension-working-indicator-to-web-ui
title: Map extension working indicator to the web UI
status: done
priority: high
created: 2026-04-21
updated: 2026-04-21
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web
  - tui
  - progress
  - extensions
  - sse
owner: smith
blocked-by: []
---

# Map extension working indicator to the web UI

## Summary

Upstream Pi 0.68.0 added `ctx.ui.setWorkingIndicator(options?)` as the structured extension-facing progress API. Piclaw currently exposes that method in the web bridge only as a **no-op compatibility shim**.

This ticket implements real end-to-end support so extension progress can be rendered in the web UI instead of being limited to plain text working messages.

## Problem Statement

Current web support is incomplete:

- `setWorkingMessage()` is forwarded
- `setStatus()` is forwarded
- `setWidget()` is forwarded
- `setWorkingIndicator()` is ignored

That means extensions cannot express:
- animated progress frames
- hidden indicators
- static single-frame indicators
- custom indicator styling intent

## Acceptance Criteria

- [ ] `ctx.ui.setWorkingIndicator()` is forwarded from the web runtime bridge to the browser.
- [ ] The web client maintains per-chat working-indicator state.
- [ ] The web UI supports:
  - [ ] default spinner / reset-to-default
  - [ ] hidden indicator
  - [ ] static single-frame indicator
  - [ ] animated custom-frame indicator
- [ ] Indicator state clears correctly on turn completion, error, and chat switch.
- [ ] At least one built-in extension adopts the surface in the same workstream.
- [ ] Browser and runtime tests cover event wiring and state transitions.

## Core changes required

### Runtime / channel
- `runtime/src/channels/web/theming/ui-bridge.ts`
  - implement `setWorkingIndicator(options?)`
  - emit a dedicated event instead of swallowing it
- `runtime/src/channels/web/sse/sse.ts`
  - register the new event type
- any web channel contract/types surface that enumerates extension UI events

### Web client
- `runtime/web/src/ui/extension-ui-events.ts`
  - add the browser event mapping
- `runtime/web/src/ui/app-sse-events.ts`
  - route the new event
- add state holder(s) for working indicator lifecycle
- update the agent-running surface to render the indicator

### Candidate render locations
- agent status strip
- compose header / active-turn bar
- compact status pill near the running state

## Extensions to audit/adopt in this ticket

### First adopters
- `runtime/src/extensions/smart-compaction.ts`
- `runtime/src/extensions/ssh-core.ts`

### Follow-up adopters to inspect while wiring
- `runtime/src/extensions/autoresearch-supervisor.ts`
- `runtime/src/extensions/image-processing.ts`
- `runtime/src/extensions/proxmox.ts`
- `runtime/src/extensions/portainer.ts`
- `runtime/extensions/integrations/office-tools/index.ts`
- `runtime/extensions/integrations/office-tools-tool/index.ts`

## Spec

### Event shape
Recommended payload:
- `chat_jid`
- `frames?: string[]`
- `interval_ms?: number`
- `visible?: boolean`
- optional `key?: string`
- optional `source?: string`

### Semantics
- omitted argument → restore default indicator
- `frames: []` → hide indicator
- `frames: ["●"]` → static indicator
- `frames.length > 1` → animate at `interval_ms` or default cadence

### State model
- store indicator state per chat
- reset on turn completion/failure unless explicitly intended to persist
- do not leak state across chat switches

## Implementation Paths

### Path A — Minimal event-only support
- add event transport
- render in one UI location
- support default/static/hidden/custom animation

### Path B — Full status-model unification
- combine working indicator with status, working message, and widgets
- one per-chat extension status model

### Preferred
- Path A first, with Path B tracked separately

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [ ] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [x] Pane / viewer contract test
  - [ ] Real-browser smoke test

### Coverage to add
- runtime bridge event emission for `setWorkingIndicator`
- web reducer/state tests for:
  - reset to default
  - hidden indicator
  - custom frames
  - chat switch clearing
- UI rendering test for active indicator state

### Browser smoke
- one web chat turn using a test extension or harness that toggles indicator modes

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Tests added or updated — passing locally
- [ ] Type check clean
- [ ] Docs and notes updated with links to ticket
- [ ] Operational impact assessed
- [ ] Follow-up tickets created for deferred scope
- [ ] Update history complete with evidence
- [ ] Ticket front matter updated

## Links

- Parent: `workitems/20-doing/adopt-pi-coding-agent-0.68.0-followups-and-web-progress-mapping.md`
- Related: `workitems/20-doing/specify-web-progress-and-extension-status-model.md`
