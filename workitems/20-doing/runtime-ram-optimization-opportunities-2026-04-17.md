---
id: runtime-ram-optimization-opportunities-2026-04-17
title: "Runtime RAM optimization opportunities and execution plan"
status: doing
priority: high
created: 2026-04-17
updated: 2026-04-17
tags:
  - work-item
  - kanban
  - memory
  - performance
  - runtime
  - test-infra
owner: smith
blocked-by: []
---

# Runtime RAM optimization opportunities and execution plan

## Summary

Track the active RAM-reduction work for Piclaw runtime and tests.

Current instrumentation shows that the biggest live-footprint issue is not web optional-service startup anymore; it is retained agent-session state. The most likely high-return levers are startup warmup count, main-session cache policy, prewarm behavior, shared session-bootstrap inputs, and per-session retained context/resource state.

## Current findings

### Verified
- `/agent/system-metrics` now exposes:
  - `process_memory`
  - `process_rss_series_bytes`
  - `process_heap_used_series_bytes`
  - `runtime_memory`
- controlled staged test runner is now the default `bun run test` path
- terminal/VNC/remote web services are lazily constructed
- shared session-bootstrap inputs are memoized in `runtime/src/agent-pool/session.ts`

### Current live shape
- idle runtime memory is dominated by cached main sessions rather than side sessions
- representative live counters after reload:
  - `cached_main_sessions`: 6
  - `cached_side_sessions`: 0
  - `active_chats`: 6
  - `prewarm_cooldowns`: 6
- startup warmup policy currently prewarms:
  - `web:default`
  - plus 5 recent chats

## Optimization opportunities

### 1. Reduce startup warmup fan-out
- Lower recent warmup count from 5 to 0 or 1
- Optionally gate recent warmup behind explicit activity / low-memory mode
- Re-measure idle RSS/PSS after settle

### 2. Add a hard cap / LRU budget for cached main sessions
- Keep only the hottest 1–2 main sessions resident
- Evict oldest idle non-streaming sessions immediately when above budget
- Keep current safety exemptions for streaming / bash / compaction

### 3. Make prewarm cheaper than full runtime creation
- Split prewarm into lightweight metadata/index warming vs full session runtime materialization
- Avoid `getOrCreate()` for recent-chat prewarm where possible

### 4. Continue memoizing or sharing immutable session-bootstrap inputs
- bundled extension path resolution
- node_modules lookup / symlink setup
- channel-specific prompt appendix helpers
- resource-loader static inputs that are identical across sessions

### 5. Trim per-session retained state
- inspect session tree/context retention
- inspect resource loader / extension retention
- inspect diagnostic buffers and large external memory contributors
- rank heap/external contributors after session-count reductions

### 6. Revisit session TTL defaults after cache-cap work lands
- main idle TTL is currently 3 minutes
- side idle TTL is currently 1 minute
- cleanup interval is currently 30 seconds
- shorten only after budget/cap changes are in place

### 7. Keep test runner staged and tune stage shape
- use controlled runner reports to pick stage sizes that avoid heap growth spikes
- compare memory across representative suites after runtime changes

## Recommended execution order

1. startup warmup reduction
2. main-session cache cap / LRU eviction
3. lightweight prewarm design
4. per-session retained-state audit using the new telemetry
5. TTL retuning
6. broader staged test memory comparison

## Test Plan

- Applicable regression classes from `workitems/regression-test-planning-reference.md`:
  - [ ] Bug replay / known-regression test
  - [x] State-machine / invariant test
  - [x] Routing matrix test
  - [ ] Interaction scenario test
  - [x] Restore / reconnect matrix test
  - [ ] Pane / viewer contract test
  - [ ] Real-browser smoke test
- Which regression classes does this ticket risk, and which tests will pin them?
  - Session-cache, warmup, and eviction changes risk state/lifecycle regressions; cover with `AgentSessionManager` invariants and reconnect/startup behavior checks.
  - Startup warmup reductions risk restore/reconnect drift for active/default chats; pin with startup/system-metrics/runtime-memory checks plus targeted session lifecycle tests.
  - No real-browser smoke is required unless changes start affecting browser-owned reconnect behavior directly.
- [x] Existing tests to rerun are listed
- [x] New regression coverage to add is listed
- [ ] Real-browser smoke pass required? If yes, record the surface

### Existing tests to rerun
- `runtime/test/agent-pool/session-manager.test.ts`
- `runtime/test/channels/web/system-metrics.test.ts`
- `runtime/test/channels/web/core/web-channel-constructor-wiring-factory.test.ts`
- `runtime/test/channels/web/server-lifecycle-gateway-service.test.ts`
- `runtime/test/remote/remote-interop.test.ts`

### New regression coverage to add
- [x] startup warmup-count regression test
- [x] main-session cache-cap/LRU eviction test
- [x] lightweight-prewarm behavior test
- [x] runtime-memory snapshot assertion for warmup/cached-session counts

## Definition of Done

- [ ] RAM opportunities are all recorded with rationale
- [ ] highest-return tranche lands with tests
- [ ] idle RSS/PSS is re-measured after reload
- [ ] controlled staged test report is refreshed
- [ ] follow-up tickets are split out for deferred work if needed

## Updates

### 2026-04-17
- Captured the current ranked RAM optimization opportunities after landing memory telemetry and staged test execution.
- Confirmed the dominant live factor is retained main sessions, not side sessions and not optional web services.
- Recorded the intended execution order so follow-up work stays evidence-driven.
- Added startup warmup env controls via `PICLAW_STARTUP_WARM_DEFAULT_CHAT` and `PICLAW_STARTUP_WARMUP_RECENT_LIMIT` so aggressive recent-chat prewarm can stay disabled or be tuned per deployment.
- Added a main-session cache cap/LRU-style eviction path with `PICLAW_MAIN_SESSION_POOL_MAX_SIZE` / `PICLAW_SESSION_POOL_MAX_SIZE` (default 2), evicting the oldest idle non-streaming main sessions when the pool grows beyond budget.
- Added regression coverage for env-backed startup warmup parsing and capped main-session eviction behavior.
- Switched recent-chat background warmup to a lightweight path that primes session directories and extension-resolution caches without materializing a live `AgentSessionRuntime`.
- Kept explicit/priority warmup and deferred-branch realization on the full-runtime path so forked branches still realize their seed eagerly when requested.
- Added regression coverage proving lightweight recent prewarm does not increase cached-main-session counts while explicit warmup still does.

## Links

- RAM audit note: `notes/audits/piclaw-ram-audit-2026-04-17.md`
- Controlled runner: `runtime/scripts/controlled-test-runner.ts`
- System metrics endpoint: `runtime/src/channels/web/agent/system-metrics.ts`
- Session cache manager: `runtime/src/agent-pool/session-manager.ts`
- Session bootstrap memoization: `runtime/src/agent-pool/session.ts`
