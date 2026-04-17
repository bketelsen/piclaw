# Memory Footprint History

Track Piclaw memory measurements over time with the repo commit context that produced them.

## How to use this log

- Add a new entry whenever memory-related changes land or are benchmarked.
- Record the Git commit hash that best matches the measured code.
- If the workspace is not clean, mark the entry as `dirty` and describe why.
- Regenerate the SVG chart with:
  - `bun run runtime/scripts/render-memory-progress-chart.ts --template docs/performance/memory-progress.template.json --input docs/performance/memory-footprint-history.md --output docs/performance/memory-progress-2026-04-17.svg`
- Prefer two measurement types:
  - **live-service snapshot** — running `piclaw.service` after restart/settle
  - **fresh-process cold-session benchmark** — isolated one-shot measurement of session bootstrap cost
- Backfilled entries are allowed when we already have trustworthy values in tickets, shell output, or journals; mark those clearly in the notes.

## Measurement fields

- **commit** — repo HEAD used for the measurement
- **dirty** — whether the workspace had uncommitted changes
- **scenario** — what was measured
- **rss / pss / cgroup** — main resident memory numbers
- **vmhwm** — peak RSS seen by the process so far
- **heap_used / external** — Node/Bun process memory breakdown
- **runtime counters** — cached sessions / active chats / prewarm state
- **notes** — what changed or why the number matters

## Live service snapshots

| Timestamp (UTC) | Commit | Dirty | Scenario | RSS | PSS | cgroup current | VmHWM | Heap used | External | Cached main | Active chats | Prewarm queue | Notes |
|---|---|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-04-17T18:02:53Z | `d35e1f61dd1ed99662616384307ba7ca475e9ede` | yes | Live `piclaw.service` after landing startup warmup disable, removing workspace-local extensions, and moving workspace indexing off `session_start` into a background process | 450.8 MB | 449.7 MB | 429.0 MB | 651.5 MB | 257.4 MB | 203.2 MB | 1 | 1 | 0 | Service PID 24685. Runtime counters: `cached_side_sessions=0`, `create_in_flight=0`, `prewarm_in_flight=0`, `queued_prewarms=0`, `prewarm_cooldowns=0`. Workspace was dirty because the current implementation tranche was in progress, but the installed runtime had been verified against the workspace before restart. |

## Fresh-process cold-session benchmarks

| Timestamp (UTC) | Commit | Dirty | Scenario | Elapsed | RSS delta | Tool count | Notes |
|---|---|---:|---|---:|---:|---:|---|
| 2026-04-17T17:22:20Z* | `d35e1f61dd1ed99662616384307ba7ca475e9ede` | yes | Empty-workspace cold-session baseline | 370 ms | 83.3 MB | 46 | Backfilled from earlier shell output during the audit; timestamp approximate. Useful baseline for the base Piclaw session bootstrap cost without local workspace extensions. |
| 2026-04-17T17:22:20Z* | `d35e1f61dd1ed99662616384307ba7ca475e9ede` | yes | Real workspace cold-session benchmark before removing workspace-local extensions | 630 ms | 133.3 MB | 46 | Backfilled from earlier shell output during the audit; timestamp approximate. Included active workspace-local `github-copilot-opus-1m-safe.ts` and `gist-badlogic-edit.ts`. |
| 2026-04-17T17:34:55Z | `d35e1f61dd1ed99662616384307ba7ca475e9ede` | yes | Real workspace cold-session benchmark after removing workspace-local extensions | 314 ms | 81.3 MB | 46 | Compared to the earlier ~630 ms / 133.3 MB pre-removal measurement. |
| 2026-04-17T17:50:06Z | `d35e1f61dd1ed99662616384307ba7ca475e9ede` | yes | Real workspace cold-session benchmark with background indexing disabled for the harness | 317 ms | 78.6 MB | 46 | Spot-check after removing blocking workspace indexing from session bootstrap. |
| 2026-04-17T18:16:00Z | `d35e1f61dd1ed99662616384307ba7ca475e9ede` | yes | Real workspace cold-session benchmark after removing redundant per-session startup hooks | 295 ms | 84.3 MB | 46 | Time improved modestly; RSS delta remained noisy. This tranche removed duplicate `session_start` work from `context-mode` and Azure refresh extensions. |
| 2026-04-17T18:18:23Z | `d35e1f61dd1ed99662616384307ba7ca475e9ede` | yes | Real web-chat cold-session benchmark after platform/channel bundled-extension gating | 296 ms | 80.0 MB | 46 | Linux web path stayed roughly flat, as expected, because web viewer extensions still load for web chats. |
| 2026-04-17T18:18:39Z | `d35e1f61dd1ed99662616384307ba7ca475e9ede` | yes | Real non-web-chat cold-session benchmark after platform/channel bundled-extension gating | 277 ms | 79.3 MB | 44 | Non-web chats now skip web-only viewer tools, dropping tool count from 46 to 44. |
| 2026-04-17T18:47:37Z | `d35e1f61dd1ed99662616384307ba7ca475e9ede` | yes | Real web-chat cold-session benchmark after lazy-loading heavy Office/CDP modules | 215 ms | 25.3 MB | 46 | `cdp-browser` and `office-tools` now lazy-load their heavier dependencies, cutting the earlier Linux web benchmark from ~296 ms / 80.0 MB while keeping the same exposed tool count. |

## Notes

- `*` marks a backfilled entry where the value is trustworthy but the timestamp is approximate.
- Earlier 2026-04-17 audit findings showed the startup crash loop was an OOM/restart storm triggered during startup session creation.
- Journal-derived failure-path memory figures from the crash loop:
  - repeated failed startup attempts peaked around **475–477 MB** RSS-equivalent per systemd accounting
  - each failed attempt consumed roughly **~1.9s CPU time** before OOM kill
- The most important immediate deltas already landed before this log was created were:
  - startup warmup disabled by default
  - workspace-local `github-copilot-opus-1m-safe.ts` removed from active `.pi/extensions`
  - workspace-local `gist-badlogic-edit.ts` removed from active `.pi/extensions`
  - workspace indexing moved off blocking `session_start` into a background process
- Subsequent dirty-workspace changes landed after the latest measured entries and still need fresh numbers recorded here:
  - startup warmup is now env-tunable via `PICLAW_STARTUP_WARM_DEFAULT_CHAT` and `PICLAW_STARTUP_WARMUP_RECENT_LIMIT`
  - cached main sessions are now bounded by `PICLAW_MAIN_SESSION_POOL_MAX_SIZE` / `PICLAW_SESSION_POOL_MAX_SIZE` (default 2)
  - recent-chat background warmup now uses a lightweight cache-priming path instead of materializing a full `AgentSessionRuntime`
  - explicit/priority warmup still creates a live runtime, and deferred branch seeds still realize eagerly on the full path
- Next measurements to append should cover:
  - live-service idle RSS/PSS after the new main-session cap and lightweight prewarm changes
  - explicit warmup vs lightweight-recent-warmup runtime counter differences
  - whether the capped pool materially lowers steady-state retained-memory pressure on the crash-prone VM
- Follow-up work should append entries after any change to:
  - packaged extension load gating
  - session bootstrap composition
  - provider refresh behavior
  - memory telemetry interpretation
  - session-cache retention policy
