---
id: adopt-systempromptoptions-and-session-shutdown-metadata
title: Adopt systemPromptOptions and session_shutdown metadata
status: doing
priority: medium
created: 2026-04-21
updated: 2026-04-21
estimate: M
risk: low
tags:
  - work-item
  - kanban
  - extensions
  - upstream
  - lifecycle
  - prompts
owner: smith
blocked-by: []
---

# Adopt systemPromptOptions and session_shutdown metadata

## Summary

Pi 0.68.0 added two new extension-facing data surfaces that Piclaw is not using yet:

- `before_agent_start.systemPromptOptions`
- `session_shutdown.reason` / `targetSessionFile`

This ticket adopts them selectively where they actually improve correctness or UX.

## Current Piclaw usage to audit

### Extensions using `before_agent_start`
- `runtime/src/extensions/bun-runner.ts`
- `runtime/src/extensions/workspace-memory-bootstrap.ts`
- `runtime/src/extensions/keychain-tools.ts`
- `runtime/src/extensions/portainer.ts`
- `runtime/src/extensions/send-dashboard-widget.ts`
- `runtime/src/extensions/workspace-search.ts`
- `runtime/src/extensions/model-control.ts`
- `runtime/src/extensions/tool-activation.ts`
- `runtime/src/extensions/send-adaptive-card.ts`
- `runtime/src/extensions/open-workspace-file.ts`
- `runtime/src/extensions/exit-process.ts`
- `runtime/src/extensions/ssh.ts`
- `runtime/src/extensions/runtime-scripts.ts`
- `runtime/src/extensions/messages-crud.ts`
- `runtime/src/extensions/file-attachments.ts`
- `runtime/src/extensions/image-processing.ts`
- `runtime/src/extensions/autoresearch-supervisor.ts`
- `runtime/src/extensions/sql-introspect.ts`
- `runtime/src/extensions/proxmox.ts`
- `runtime/src/extensions/internal-tools.ts`
- `runtime/src/extensions/ssh-core.ts`

### Extensions using `session_shutdown`
- `runtime/src/extensions/ssh-core.ts`
- `runtime/extensions/integrations/azure-openai.ts`

## Acceptance Criteria

- [ ] Each extension using `before_agent_start` is classified as:
  - [ ] static hint only, no action
  - [ ] candidate for `systemPromptOptions`
  - [ ] should adopt now
- [ ] `ssh-core` adopts shutdown reason/target metadata.
- [ ] `azure-openai` adopts shutdown reason/target metadata.
- [ ] At least one concrete use of `systemPromptOptions` is implemented or explicitly rejected with rationale.
- [ ] Tests cover any lifecycle behavior change introduced.

## Recommended adoption scope

### Adopt now
- `ssh-core`
  - use `session_shutdown.reason`
  - evaluate `systemPromptOptions` for safer cwd-aware prompt mutation
- `azure-openai`
  - use `session_shutdown.reason` to distinguish transient teardown from final stop

### Likely defer / audit only
- `workspace-memory-bootstrap`
- `keychain-tools`
- most prompt-hint injectors that simply append stable guidance

## Detailed changes to make

### 1. `ssh-core`
- inspect event payload typing and use reason/target data
- decide whether reconnect/cache/cleanup behavior should differ for:
  - quit
  - reload
  - resume
  - new-session
  - fork/clone
- explore `systemPromptOptions` only if it reduces brittle string replacement logic

### 2. `azure-openai`
- use shutdown metadata to decide how to stop bootstrap/refresh work
- add logging/telemetry note if different shutdown classes matter operationally

### 3. Prompt-option audit
- review all `before_agent_start` users
- identify any extension doing more than plain hint appending
- only adopt structured prompt metadata where it improves correctness

## Spec

### `systemPromptOptions`
Use only for:
- cwd-aware or context-aware prompt transforms
- avoiding re-derivation of structured prompt inputs

Do not use it just because it exists.

### `session_shutdown`
Adopt when shutdown cause affects:
- cache preservation
- reconnect behavior
- teardown cost
- diagnostics/telemetry

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [x] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [ ] Routing matrix test
  - [x] Interaction scenario test
  - [ ] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test

### Candidate tests to add or extend
- `runtime/test/extensions/ssh-core.test.ts`
- `runtime/test/extensions/azure-openai-session.test.ts`
- lifecycle tests for shutdown reason handling
- prompt-transform tests if `systemPromptOptions` is adopted in `ssh-core`

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

### 2026-04-21
- `ssh-core` now uses `before_agent_start.systemPromptOptions.cwd` when rewriting the working-directory prompt line for SSH-backed sessions.
- Added regression coverage in `runtime/test/extensions/ssh-core.test.ts` for both configured and chat-scoped SSH sessions where the session/worktree cwd differs from the launcher cwd.
- `ssh-core`, `azure-openai`, and the Azure harness now all consume `session_shutdown.reason` / `targetSessionFile` for diagnostics and safer lifecycle handling.
- Current classification outcome:
  - `ssh-core` — adopted now
  - `workspace-memory-bootstrap` — static hint only, no action
  - `keychain-tools` — static hint only, no action
  - most prompt-hint appenders — audit only unless they need cwd-aware prompt mutation

## Links

- Parent: `workitems/20-doing/adopt-pi-coding-agent-0.68.0-followups-and-web-progress-mapping.md`
- Related: `workitems/20-doing/audit-and-improve-azure-extensions-after-pi-0.68.0.md`
