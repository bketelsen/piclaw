# COG Memory

COG (Cognitive Object Graph) is PiClaw's persistent memory system. It gives Miles context across sessions without relying on chat history — facts, patterns, priorities, and project state survive restarts and model switches.

**Jump to:**
[Overview](#overview) ·
[Memory structure](#memory-structure) ·
[Standard domain files](#standard-domain-files) ·
[Built-in domains](#built-in-domains) ·
[COG-meta files](#cog-meta-files) ·
[Project journals](#project-journals) ·
[Scheduled tasks](#scheduled-tasks) ·
[Adding a domain](#adding-a-domain) ·
[Memory rules](#memory-rules)

---

## Overview

COG memory is layered. Each layer has a distinct purpose and edit pattern:

| Layer | Files | Loaded | Edit pattern |
|-------|-------|--------|-------------|
| **L0 — Hot memory** | `hot-memory.md` in every domain, plus all `cog-meta/` files | Every session, injected into context | Rewrite freely; keep ≤50 lines |
| **L1 — Canonical domain files** | `observations.md`, `action-items.md`, `entities.md`, domain-specific files | On demand / by skill | Edit in place; one fact, one file |
| **L2 — Append-only history** | `observations.md` | By cog-reflect; never on demand | Append only — never rewrite existing entries |

The root is `~/.piclaw/cog/memory/`. All paths below are relative to that root.

```
~/.piclaw/cog/memory/
├── domains.yml          # Domain manifest — single source of truth
├── hot-memory.md        # Global L0: identity + cross-domain priorities
├── link-index.md        # Auto-generated backlink index (cog-housekeeping)
├── cog-meta/            # Universal rules and running logs
│   ├── patterns.md
│   ├── self-observations.md
│   ├── reflect-cursor.md
│   ├── foresight-nudge.md
│   └── improvements.md
├── glacier/             # Archived observation blocks (cog-housekeeping)
│   └── index.md
├── personal/
├── microsoft/
├── piclaw/
├── projects/
├── snosi/
└── <custom-domain>/
```

---

## Memory structure

### domains.yml

`domains.yml` is the authoritative list of all memory domains. Miles reads it to discover which domains exist and which files belong to each one.

```yaml
domains:
  - id: personal
    path: memory/personal          # relative to ~/.piclaw/cog/
    type: life                     # life | work | side-project | meta
    triggers: [personal, family, health, calendar, home, habits, philosophy]
    description: Day-to-day personal life — family, health, calendar, habits.
    files:
      - hot-memory.md
      - observations.md
      - action-items.md
      - entities.md
      - calendar.md
```

**Fields:**

| Field | Purpose |
|-------|---------|
| `id` | Unique slug; used in file paths and wiki-links |
| `path` | Directory under `~/.piclaw/cog/`, relative to the cog root |
| `type` | Semantic category (`life`, `work`, `side-project`, `meta`) |
| `triggers` | Keywords that indicate this domain is relevant to a conversation |
| `description` | One-line summary shown in skill UIs and discovery |
| `files` | Canonical files expected in the domain directory |

`domains.yml` is managed by the `cog-setup` skill. Edit it manually only when adding or removing a whole domain; use in-place edits for anything else.

### How domains are injected

At the start of every session, PiClaw injects L0 content into the system prompt:

1. `hot-memory.md` (global, at the memory root)
2. Every domain's `hot-memory.md`
3. All `cog-meta/` files

L1 files (`observations.md`, `action-items.md`, etc.) are read on demand — by skills, by Miles when a relevant topic comes up, or by `search_workspace`.

---

## Standard domain files

Every domain has a minimum set of files. Not all domains require every file; declare only what you'll actually maintain in `domains.yml`.

### `hot-memory.md`

**Layer:** L0  
**Edit pattern:** Rewrite freely; ≤50 lines  

The live summary of what matters right now in this domain. Injected into every session. Write it as you would brief a new version of yourself: current state, active priorities, key facts. Prune aggressively — stale lines cost context budget.

```markdown
<!-- L0: <domain> — keep under 50 lines -->
# <Domain> Hot Memory

## Current State
<1–3 high-signal facts>

## Active Priorities
1. <most urgent item>
```

### `observations.md`

**Layer:** L2  
**Edit pattern:** Append only  

Dated log of notable events, decisions, and behavioral observations. Never rewrite or delete entries. `cog-reflect` mines this file to distill durable patterns into `cog-meta/patterns.md`. `cog-housekeeping` moves older blocks into glacier archives.

Entry format:
```
- YYYY-MM-DD [tags]: <observation>
```

Example:
```
- 2026-04-25 [deployment, milestone]: Production deploy via make deploy confirmed working. systemd user unit active.
```

### `action-items.md`

**Edit pattern:** Append new items; check off completed ones  

A checklist of open obligations in this domain. When a task completes, mark it `[x]` — do not delete it. Periodically archive completed items.

```markdown
## Open
- [ ] YYYY-MM-DD: <task>

## Done
- [x] YYYY-MM-DD: <completed task>
```

### `entities.md`

**Edit pattern:** Edit in place; keep entries compact  

Named things that matter in this domain: people, systems, projects, relationships. One entry per entity; no duplication across domains. Cross-reference with `[[domain/entities]]` wiki-links.

### Domain-specific files

Some domains carry additional canonical files beyond the defaults. Declare them in `domains.yml` under `files`. Common examples:

| File | Domain | Purpose |
|------|--------|---------|
| `calendar.md` | personal | Upcoming dates and deadlines |
| `architecture.md` | piclaw, snosi | System design reference |
| `dev-log.md` | piclaw, snosi | Development decision log |
| `index.md` | projects | Index of active project journals |

---

## Built-in domains

### `personal`

Tracks day-to-day life: family, health, habits, calendar, home. The `personal` COG skill manages this domain with strict SSOT rules — one canonical file per fact category.

Files: `hot-memory.md`, `observations.md`, `action-items.md`, `entities.md`, `calendar.md`

### `microsoft`

Work context: role, team, current priorities, OKRs, management actions.

Files: `hot-memory.md`, `observations.md`, `action-items.md`, `entities.md`

### `piclaw`

PiClaw source, deployment, delegation system, skills, and agents. Tracks architecture decisions, production state, and development log.

Files: `hot-memory.md`, `observations.md`, `action-items.md`, `architecture.md`, `dev-log.md`

### `snosi`

Bootable container image build system — mkosi, Debian, sysexts. Tracks active frostyard/snosi work.

Files: `hot-memory.md`, `observations.md`, `action-items.md`

### `projects`

Meta-domain for the project journal system. The `hot-memory.md` is a live one-line table of every active project and its current status. The `index.md` describes the journal system itself.

Files: `hot-memory.md`, `index.md`

See [Project journals](#project-journals) below.

### `cog-meta`

Universal rules and running logs that apply across all domains. Not listed in `domains.yml` as a regular domain — it is managed directly by the scheduled maintenance skills.

See [COG-meta files](#cog-meta-files) below.

---

## COG-meta files

`cog-meta/` holds files that span all domains. They are loaded as L0 context every session.

### `patterns.md`

Universal behavior rules distilled from recurring observations. Maintained by `cog-reflect`. Edit it in place — keep it at or under 70 lines. Only promote a behavior here when it recurs across multiple sessions; one-off events belong in `self-observations.md`.

Current sections: COG Skill Invocation, Interactive Setup Patterns, Multi-Interface Support, User Profile, Agent Delegation, Turn Management, Status Validation, Action-Item Hygiene, Skill Count Awareness.

### `self-observations.md`

Append-only log of notable agent-level events: migrations, milestones, incidents, model switches, system changes. Written by `cog-reflect` after each run, and by Miles when a significant event happens mid-session.

Format: same as domain `observations.md` — `- YYYY-MM-DD [tags]: <observation>`

### `reflect-cursor.md`

Tracks the last conversation message id and timestamp consumed by `cog-reflect`. Miles reads this to know where to start the next mining pass. Never edit manually unless recovering from a failed reflect run.

```yaml
last_turn_id: 230
last_run: 2026-04-26T00:12:00.000Z
source: session_store (SQL)
```

### `foresight-nudge.md`

The most recent strategic nudge, written by `cog-foresight`. Contains Signal, Insight, Suggested Action, and Sources sections. Overwritten on every foresight run — only one nudge is live at a time.

### `improvements.md`

Free-form wishlist and repair notes for the COG system itself. Written by Miles or the `cog-evolve` skill. Not auto-generated; edit freely.

---

## Project journals

Project journals capture active, multi-session task state. They live outside the domain memory files so that permanent facts and transient task state stay separate.

```
~/.piclaw/projects/<name>.md       # one file per named project
~/.piclaw/projects/plans/          # full plan files from @architect
```

The active project index (`projects/hot-memory.md`) is a one-line-per-project table. Read it to see what's in flight without opening individual journals.

### When to use a journal

Create a journal for any project that:
- spans more than one session, or
- involves more than a few sequential steps.

Single-turn tasks do not need journals.

### Journal sections

| Section | Purpose |
|---------|---------|
| `## Goal` | What we're building and why |
| `## Current Position` | Exact state right now — the resume point |
| `## Decisions Made` | Key choices with date and rationale |
| `## Done` | Completed work, dated |
| `## In Progress` | Active work items |
| `## Next` | What follows the current work |
| `## Open Questions` | Unresolved items |
| `## Blockers` | Things actively preventing progress |
| `## Active Plan` | Checkbox-tracked multi-step plan (see below) |

### Resuming a project

When the user says "let's work on X" or "continue X", Miles reads the journal before doing anything else and surfaces `## Current Position` as a 2–4 sentence summary. The journal is ground truth — if it disagrees with session memory, trust the journal.

### Active Plan tracking

When @architect or another delegate returns a numbered implementation plan:

1. Save the full plan text to `~/.piclaw/projects/plans/<project>-<feature>-<YYYY-MM-DD>.md`.
2. Write a checkbox list into `## Active Plan` in the journal with a link to the plan file.
3. Mark the current step bold with `← IN PROGRESS`.
4. As each delegate completes a step, check it off `[x]` and advance the marker.

```markdown
## Active Plan — auth refactor (2026-04-25)
Plan: [plans/piclaw-auth-refactor-2026-04-25.md](~/.piclaw/projects/plans/piclaw-auth-refactor-2026-04-25.md)
Total steps: 5

- [x] 1. Audit existing session handling
- [x] 2. Write TOTP middleware
- [ ] **3. Wire TOTP into WebChannel** ← IN PROGRESS
- [ ] 4. Add passkey fallback
- [ ] 5. Update docs

Status: stopped at step 3 — delegate dispatched, awaiting result
Resume: complete step 3, then wire passkey fallback in step 4
```

> [!NOTE]
> Never dispatch implementation before writing the plan to the journal. If the session ends mid-plan, the `Status:` line must record why work stopped. The resume cue is always the first unchecked step.

For the full skill procedures (CREATE, READ, UPDATE, LIST, CLOSE, PLAN), see the `project-journal` skill at `~/.piclaw/.pi/skills/project-journal/SKILL.md`. For delegation context, see [docs/delegation.md](delegation.md) (if present — see Assumptions).

### Journal lifecycle

- **Create** when starting a multi-step project.
- **Update** at meaningful checkpoints only — not after every message.
- **Abandon mid-flight**: write `ABANDONED YYYY-MM-DD — <reason>` into `## Current Position`.
- **Archive**: move stale `## Done` items into a `## Archive — YYYY-MM` section at the bottom when they pile up. Keep journals under 150 lines.
- **Close**: set `## Current Position` to `COMPLETE YYYY-MM-DD` and remove the project from `projects/hot-memory.md`. Do not delete the journal file.

---

## Scheduled tasks

Three skills run on a schedule to keep COG memory current without manual intervention. They are registered as systemd-style cron tasks in PiClaw's task scheduler.

| Task | Schedule | What it does |
|------|----------|-------------|
| `cog-reflect` | Nightly — `0 2 * * *` | Mines recent conversations, distills recurring patterns, updates `patterns.md`, appends to `self-observations.md`, advances `reflect-cursor.md` |
| `cog-housekeeping` | Weekly — `0 3 * * 0` | Prunes oversized `hot-memory.md` files, moves older observations into `glacier/`, rebuilds `link-index.md` and `glacier/index.md` |
| `cog-foresight` | Daily — `0 7 * * *` | Reads all domain `hot-memory.md` and `action-items.md`, synthesizes one cross-domain nudge, overwrites `foresight-nudge.md` |

### cog-reflect in detail

1. Reads `reflect-cursor.md` to find the last processed message id.
2. Queries recent messages via the `messages` tool or `introspect_sql`.
3. Reads domain `observations.md` files to correlate message themes with domain behavior.
4. Edits `patterns.md` in place — only promotes patterns that recur across multiple days.
5. Appends one dated entry to `self-observations.md`.
6. Writes the new cursor last (after all writes succeed).

### cog-housekeeping in detail

1. Reads each `hot-memory.md`; prunes to ≤50 lines of active, high-signal content.
2. Reads each `observations.md`; moves older low-value blocks to glacier archives under `glacier/<domain>-<date-range>.md` with YAML frontmatter identifying source file and covered span.
3. Rebuilds `link-index.md` by scanning all `[[wiki-links]]` across the memory tree.
4. Regenerates `glacier/index.md` with links to current archive files and their date ranges.

### cog-foresight in detail

1. Reads all domain `hot-memory.md` files for active pressures.
2. Reads all `action-items.md` to find accumulating or drifting obligations.
3. Synthesizes exactly one nudge — not a brainstorming dump.
4. Writes `foresight-nudge.md` (Signal → Insight → Suggested Action → Sources).

Trigger any of these manually by saying "reflect", "housekeeping", or "foresight". They can also be invoked with `/skill:cog-reflect` etc. in the web UI.

---

## Adding a domain

### Step 1 — Use the cog-setup skill

The `cog-setup` skill handles discovery, `domains.yml` editing, and file creation. Trigger it with:

> "Add a domain for `<topic>`" or "Setup COG for `<topic>`"

Miles will ask 3–4 questions (domain name, scope, activity level, any custom files), then create everything.

### Step 2 — Manual procedure (if you prefer)

**Edit `domains.yml`** — add an entry following the existing format:

```yaml
- id: homelab
  path: memory/homelab
  type: side-project
  triggers: [homelab, proxmox, nas, network, dns]
  description: Home infrastructure — Proxmox, NAS, networking.
  files:
    - hot-memory.md
    - observations.md
    - action-items.md
```

**Create the directory and files:**

```bash
mkdir -p ~/.piclaw/cog/memory/homelab
```

**Seed `hot-memory.md`:**

```markdown
<!-- L0: homelab — keep under 50 lines -->
# Homelab Hot Memory

## Current State
- Proxmox cluster: 3 nodes (pve1, pve2, pve3)
- NAS: TrueNAS Scale at 192.168.1.10

## Active Priorities
1. Migrate old VMs to new storage pool
```

**Seed `observations.md`:**

```markdown
# Homelab Observations

_Append-only. Format: `- YYYY-MM-DD [tags]: <observation>`_
```

**Seed `action-items.md`:**

```markdown
## Open

## Done
```

### Step 3 — Verify injection

On the next session start, the new domain's `hot-memory.md` will be injected automatically. Run `/context` in the web UI to confirm the memory is present in the system prompt.

---

## Memory rules

### Single source of truth (SSOT)

Every fact lives in exactly one canonical file. If the same fact appears in multiple places, one copy is stale. Use `[[domain/filename]]` wiki-links to reference facts from other files rather than duplicating them.

```markdown
Sierra's birthday is May 8 — see [[personal/calendar]]
```

### File edit patterns

| File | Rule |
|------|------|
| `hot-memory.md` | Rewrite freely; prune aggressively; ≤50 lines |
| Canonical domain files | Edit in place; preserve existing content |
| `observations.md` | Append only — never rewrite or delete entries |
| `action-items.md` | Append new; check off done with `[x]`; do not delete |
| `entities.md` | Edit in place; keep entries compact and stable |

### Write immediately

When the user shares something worth remembering — a deadline, a decision, a correction — write it to memory before the session ends. Stale memory is worse than no memory: Miles will report it as current fact.

### Ground-truth verification

Never infer system status from memory files alone. Before reporting that something is running, deployed, or complete — verify against reality (process state, file contents, logs). Memory records intent and history; it does not guarantee current state.

### Glacier preservation

`observations.md` entries moved to glacier by `cog-housekeeping` are never modified — only relocated. Every glacier archive file records its source path and covered date range so content is always traceable back to its origin.

### Wiki-links

Reference facts across domains with `[[domain/filename]]` syntax. The `link-index.md` (rebuilt by `cog-housekeeping`) tracks all backlinks so you can see which files reference any given fact.

```markdown
See [[personal/habits]] for the hyperfocus pattern.
See [[piclaw/architecture]] for the delegation system.
```
