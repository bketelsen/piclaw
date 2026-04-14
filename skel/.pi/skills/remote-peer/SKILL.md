---
name: remote-peer
description: Send prompts to paired remote piclaw peers, list peers, and manage incoming proposals (pending/accept/reject). Uses IPC-compatible signing to talk to peers over HTTP. Use when asked to message, query, or manage remote agents.
---

# Remote Peer

Send signed prompts to paired remote piclaw peers and manage incoming proposals.

## Helper script

All operations go through `scripts/peer.mjs` (auto-resolved relative to this skill directory).

```bash
SKILL_DIR="$(dirname "$(realpath "$0")")"
SCRIPT="$SKILL_DIR/../scripts/peer.mjs"
```

Or use the absolute path directly:

```bash
bun /workspace/.pi/skills/remote-peer/scripts/peer.mjs <command> [args]
```

---

## Commands

### List all peers

```bash
bun /workspace/.pi/skills/remote-peer/scripts/peer.mjs list
```

Output: `<name> | <fingerprint> | <status>/<mode>/<profile> | <base_url>`

---

### Send a prompt to a peer

```bash
bun /workspace/.pi/skills/remote-peer/scripts/peer.mjs send <peer> "<prompt>"
```

`<peer>` can be:
- fingerprint: `cad6It-SMYlIb-mIdw8c`
- display name: `product-manager`
- instance_id prefix

**Routing is automatic:**
- `full / short-circuit` peers → `/api/remote/execute` (synchronous, returns result)
- all others → `/api/remote/proposal` (queued, requires human approval on their side)

Examples:
```bash
bun /workspace/.pi/skills/remote-peer/scripts/peer.mjs send product-manager "What is your current task?"
bun /workspace/.pi/skills/remote-peer/scripts/peer.mjs send cad6It-SMYlIb-mIdw8c "Summarise the agenda-inovar repo"
```

---

### Show pending incoming proposals

```bash
bun /workspace/.pi/skills/remote-peer/scripts/peer.mjs pending
```

---

### Decide on a single proposal

```bash
bun /workspace/.pi/skills/remote-peer/scripts/peer.mjs decide <request-id> accept
bun /workspace/.pi/skills/remote-peer/scripts/peer.mjs decide <request-id> reject
```

---

### Bulk-decide all pending proposals

```bash
bun /workspace/.pi/skills/remote-peer/scripts/peer.mjs decide-all accept
bun /workspace/.pi/skills/remote-peer/scripts/peer.mjs decide-all reject
```

---

## Environment

The script reads these env vars (all have sensible defaults):

| Var | Default | Purpose |
|-----|---------|---------|
| `PICLAW_DATA`  | `/workspace/.piclaw/data`  | Identity key location |
| `PICLAW_STORE` | `/workspace/.piclaw/store` | SQLite DB location |

piclaw's bash tool injects these automatically when available.

---

## How it works

1. Loads identity from `$PICLAW_DATA/interop/identity.json`
2. Looks up the peer's `base_url`, `mode`, `profile`, and `trust_epoch` from the SQLite DB
3. Builds a canonical request string and signs it with the local Ed25519 private key
4. POSTs to `/api/remote/execute` (short-circuit peers) or `/api/remote/proposal` (mediated peers)
5. Returns the peer's response inline

This mirrors exactly what piclaw's `/ask` slash command does internally.
