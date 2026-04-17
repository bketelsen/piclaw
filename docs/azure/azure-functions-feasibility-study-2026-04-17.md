# Piclaw on Azure Functions — feasibility study (2026-04-17)

## Executive summary

**Short answer:** running Piclaw **entirely** on Azure Functions is **not a good fit** for the current architecture, and a faithful port is **not practically feasible without major redesign**.

### Bottom line

| Option | Verdict | Why |
|---|---|---|
| **Classic Azure Functions as the whole runtime** | **No** | Piclaw assumes a long-lived Bun process, warm per-chat sessions, SQLite, a persistent workspace, SSE/chat continuity, terminal/VNC WebSocket upgrades, scheduled background polling, and local process execution. |
| **Azure Functions + major replatforming** | **Possible in theory, but effectively a rewrite** | You could rebuild Piclaw into a function-oriented control plane with Durable Functions, external DB/storage, and separate real-time/session services, but that would no longer be “Piclaw as-is on Functions”. |
| **Azure Functions for a narrow subset only** | **Yes** | Good fit for webhook ingress, async triggers, scheduled fan-out, thin auth/gateway glue, or Durable orchestration around a separate runtime. |
| **Azure Container Apps / App Service / VM on Azure** | **Yes** | Much better fit for the current stateful runtime. |

## Scope of this study

This study evaluates whether Piclaw can run **entirely on Azure Functions** as a production deployment target.

Interpretation used here:

- the primary Piclaw runtime is hosted on Azure Functions rather than a VM/container-first service
- Azure-native backing services (Storage, SQL, Web PubSub, etc.) are allowed if Functions requires them
- the question is whether the **current product shape** can be preserved, not whether a serverless-inspired successor could be built

## Piclaw runtime assumptions today

From the current repo/docs, Piclaw is explicitly designed as a **stateful self-hosted workspace runtime**:

- long-lived Bun runtime with one warm session per chat JID
- SQLite source of truth at `/workspace/.piclaw/store/messages.db`
- persistent `/workspace` for notes, files, uploads, generated artifacts, media, task state, and search indexes
- streaming web UI over SSE
- scheduled task loop and IPC watcher running in-process
- authenticated terminal via `GET /terminal/ws` WebSocket upgrades
- VNC via `GET /vnc/ws` WebSocket upgrades and raw TCP bridging
- browser automation, shell execution, local file editing, document viewers, media handling, and image processing

Relevant current docs:

- `README.md`
- `docs/storage.md`
- `docs/architecture.md`
- `docs/runtime-flows.md`
- `docs/azure/README.md`

## Azure Functions platform constraints that matter here

### 1. Native runtime mismatch

Piclaw runs on **Bun**. Azure Functions does **not** offer Bun as a native first-class worker runtime.

The closest escape hatch is **custom handlers**, where Azure Functions can run a custom executable/web server for non-default runtimes. That means Bun is **theoretically hostable**, but only through the custom-handler path rather than as a natural Functions runtime.

### 2. HTTP response duration limit

Microsoft documents that:

- Flex Consumption default timeout: **30 min**, max **unbounded**
- Premium default timeout: **30 min**, max **unbounded**
- Dedicated/App Service default timeout: **30 min**, max **unbounded**
- Consumption default timeout: **5 min**, max **10 min**

But **regardless of the function timeout setting**, an **HTTP-triggered function has a maximum response time of 230 seconds** because of Azure Load Balancer idle timeout.

This is a major issue for Piclaw because:

- chat streaming over SSE can be long-lived
- terminal/VNC/session-related flows are interactive
- uploads/downloads and long-running tool outputs can exceed that window

Azure Functions now supports HTTP streaming/chunked responses, including `text/event-stream`, but the **230-second HTTP ceiling still matters**.

### 3. Mandatory externalized storage model

Azure Functions requires a backing Azure Storage account. Microsoft documents that Azure Functions uses:

- Blob storage for bindings state, keys, Durable task hubs, deployment sources
- **Azure Files** to store and run function app code in Consumption and Premium plans
- Queue/Table storage for several runtime behaviors and Durable Functions internals

That storage model is fine for Functions itself, but it does **not** map cleanly to Piclaw’s current persistent workspace + SQLite + media model.

### 4. Durable Functions help with workflows, not with the whole app shape

Durable Functions is explicitly for **stateful workflows in a serverless environment** with orchestrator/activity/entity functions, checkpoints, retries, and recovery.

That helps with:

- scheduled tasks
- async orchestration
- long-running workflows
- background state machines

It does **not** solve:

- a persistent interactive agent runtime
- per-chat warm in-memory sessions
- a live terminal
- raw VNC bridging
- workspace-local file semantics
- a SQLite-centered application data model

## Fit-by-subsystem assessment

| Subsystem | Current shape | Azure Functions fit | Notes |
|---|---|---|---|
| Web app static assets | Local static files served by Piclaw | **Partial** | Could be served via Functions/custom handler, but Blob/static hosting or Front Door/CDN would be cleaner. |
| Chat API + basic HTTP endpoints | Bun HTTP server | **Partial** | HTTP routes are fine in principle. |
| SSE chat streaming | Long-lived `text/event-stream` | **Weak** | Technically streamable, but the 230-second HTTP cap is a bad fit for long/interactive sessions. |
| Warm per-chat agent sessions | In-memory long-lived sessions | **Poor** | Functions are request-driven and elastically scaled; warm, stateful session ownership becomes fragile. |
| SQLite store | `/workspace/.piclaw/store/messages.db` | **Poor** | Azure Functions scaling + shared network storage is a bad match for SQLite locking/performance. |
| Persistent workspace | Real writable filesystem | **Poor** | Requires a replatform to Blob/Files/DB semantics; current workspace-native behavior assumes POSIX-like storage. |
| Scheduled task loop | In-process scheduler polling DB | **Partial** | Could be redesigned around Timer triggers/Durable Functions, but not reused as-is. |
| IPC file watcher | Polling `DATA_DIR/ipc/*` | **Poor** | File-based IPC is not a natural Functions pattern. |
| Terminal | PTY + WebSocket upgrades + long-lived shell session | **No** | This is fundamentally the wrong platform shape. |
| VNC | WebSocket + raw TCP bridge | **No** | Requires long-lived socket/TCP bridging not suitable for standard Functions. |
| Shell tools / local exec | Spawn local processes against workspace | **Poor** | Possible in limited cases, but not reliable/safe as the core product model. |
| Browser automation / Playwright-like workloads | Heavy, long-lived, binary-heavy execution | **Poor** | Better in containers/VMs. |
| Media / file upload / attachment store | SQLite + filesystem blobs | **Weak** | Requires redesign to Blob Storage or other external store. |
| Search indexing / workspace FTS | SQLite FTS + local files | **Poor** | Requires alternate indexing/storage architecture. |
| Keychain / secret-backed tool env | Local encrypted store + process env injection | **Partial** | Can be redesigned with Key Vault/App Config, but not lifted directly. |

## The biggest blockers

## 1. Piclaw is not just HTTP functions

Piclaw is a **stateful interactive application server**.

The biggest mismatch is not “Bun vs Node”; it is:

- long-lived stateful runtime vs request/event-triggered execution model
- workspace-native local app vs externally sharded cloud services
- socket/session-heavy UX vs bounded HTTP-triggered platform behavior

## 2. SQLite is central, not incidental

Piclaw’s storage model is centered on one SQLite database holding:

- messages
- media metadata
- tasks
- token usage
- tool outputs
- workspace FTS indexes
- session/web auth state
- channel/session-scoped config

To make Azure Functions work cleanly, you would likely need to replace or split this into:

- Azure SQL / PostgreSQL / Cosmos DB for relational state
- Blob Storage for attachments/media
- separate search/index store for workspace content
- alternative session caches for warm agent state

That is a **data-plane rewrite**, not a hosting tweak.

## 3. The terminal/VNC surfaces are non-starters on standard Functions

Piclaw explicitly ships:

- `GET /terminal/ws` with PTY-backed terminal sessions
- `GET /vnc/ws` with WebSocket-to-TCP VNC bridging

These are core product features, not optional internal diagnostics.

Could they be re-implemented on Azure? Yes, but not naturally as standard Azure Functions endpoints. You would need adjunct services such as:

- Azure Web PubSub or another real-time socket broker
- a separate long-lived process host for PTY and TCP bridge workloads

At that point, Functions is no longer the whole runtime.

## 4. Workspace-native behavior would need redesign

The current product assumes a writable `/workspace` that can hold:

- notes
- projects
- uploads
- generated charts/reports/images
- `.piclaw` runtime state
- search indexes
- media-related workflows

Azure Functions can of course talk to Blob/File storage, but the current product behavior is built around a normal filesystem with immediate local access semantics.

That gap affects:

- editor save/load flows
- upload/move/rename behavior
- local search indexing
- shell command cwd semantics
- tool outputs and file attachments

## What is feasible on Azure Functions

### Feasible: thin or auxiliary slices

Azure Functions is a reasonable fit for **narrow adjunct roles**, such as:

- webhook ingress
- lightweight HTTP APIs
- scheduled triggers / timer-based automation
- Durable orchestrations
- auth or notification glue
- queue-driven background actions that hand work off elsewhere

### Potential hybrid architecture

A hybrid Azure design that **does** make sense would look more like:

- **Azure Container Apps / App Service / VM** for the main Piclaw runtime
- **Azure Functions** for timer/webhook/orchestration glue
- **Blob Storage** for large attachments or exports
- **Azure SQL / PostgreSQL** only if you intentionally replatform state away from SQLite
- **Web PubSub** only if you intentionally redesign real-time socket features

That is feasible.

## What a full Functions port would require

If you insisted on “Functions-first”, the required work would be roughly:

### Phase 1 — host/runtime adaptation

- run Bun through a custom handler or abandon Bun and port runtime assumptions
- separate static asset serving from application routing
- redesign startup/config/runtime lifecycle for per-trigger execution

### Phase 2 — persistence rewrite

- replace SQLite as the source of truth
- move media/blob storage to Azure Blob Storage
- redesign FTS/search indexing
- replace workspace-local assumptions with cloud storage semantics

### Phase 3 — orchestration rewrite

- replace in-process scheduler loop with Timer triggers / Durable Functions
- replace file-based IPC with queues, storage, or Durable orchestration
- redesign crash recovery and warm session ownership

### Phase 4 — feature triage / removal / adjunct services

- drop or externalize terminal
- drop or externalize VNC
- externalize shell-heavy workloads
- re-home browser automation and other binary-heavy tasks

### Phase 5 — real-time UX redesign

- redesign SSE and long-lived interaction patterns around Functions constraints
- possibly add Web PubSub or an equivalent broker for live session features

## Effort estimate

For a faithful port that preserves the current Piclaw product shape:

- **Lift-and-shift effort:** not realistic
- **Functions-first rewrite effort:** **very high**
- **Risk:** **high**
- **Likelihood of feature regression:** **high**

Practical interpretation:

- this is not a “deployment target” task
- it is an **architecture fork / platform rewrite**

## Recommended verdict

## Recommendation

### Do **not** target “Piclaw entirely on Azure Functions” as a primary deployment goal.

Instead, choose one of these:

### Option A — Azure Container Apps (best Azure-native fit)
Use Azure Container Apps for the main Piclaw runtime.

Why:

- still container-first
- better fit for Bun, long-lived runtime behavior, SSE, file handling, and background loops
- more realistic path for persistent volumes and adjunct services

### Option B — Azure VM / App Service / container host
If you want the least product churn, keep Piclaw on:

- Azure VM
- or a container-capable host on Azure

This aligns with the current documented Azure VM guidance already in the repo.

### Option C — Functions only for sidecar/control-plane roles
Use Azure Functions for:

- timers
- ingress hooks
- Durable workflow glue
- notifications

but keep the main Piclaw runtime elsewhere.

## Final answer

**Feasibility of running Piclaw entirely on Azure Functions:**

- **As-is:** **No**
- **With moderate adaptation:** **No**
- **With major replatforming/rewrite:** **Yes in theory, but not recommended**

The current architecture is much better suited to:

- Azure Container Apps
- App Service with containerization
- or a VM/container deployment on Azure

## Source notes used in this study

### Repo facts
- `README.md`
- `docs/storage.md`
- `docs/architecture.md`
- `docs/runtime-flows.md`
- `docs/azure/README.md`
- `workitems/00-inbox/cloudflare-suspendable-runtime-and-hosting.md`

### Azure docs checked
- Azure Functions scale/hosting docs
- Azure Functions HTTP trigger docs
- Azure Functions storage considerations docs
- Azure Functions Durable Functions overview
- Azure Functions custom handlers docs
- Azure Web PubSub Functions binding docs
