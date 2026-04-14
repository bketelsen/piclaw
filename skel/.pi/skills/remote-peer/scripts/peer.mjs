#!/usr/bin/env bun
/**
 * remote-peer/scripts/peer.mjs
 *
 * CLI helper for piclaw remote-peer operations.
 *
 * Commands:
 *   list                          — list all paired peers
 *   send <fingerprint> <prompt>   — send a prompt to a peer
 *   pending                       — show pending incoming proposals
 *   decide <id> accept|reject     — accept or reject a pending proposal
 *   decide-all accept|reject      — bulk-decide all pending proposals
 *
 * Environment (auto-injected by piclaw bash tool):
 *   PICLAW_DATA      — piclaw data dir  (default: /workspace/.piclaw/data)
 *   PICLAW_STORE     — piclaw store dir (default: /workspace/.piclaw/store)
 */

import { readFileSync } from "fs";
import { createHash, createPrivateKey, sign } from "crypto";
import { Database } from "bun:sqlite";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const DATA_DIR  = process.env.PICLAW_DATA  || "/workspace/.piclaw/data";
const STORE_DIR = process.env.PICLAW_STORE || "/workspace/.piclaw/store";
const IDENTITY_PATH = `${DATA_DIR}/interop/identity.json`;
const DB_PATH       = `${STORE_DIR}/messages.db`;

// ---------------------------------------------------------------------------
// Crypto helpers (mirrors piclaw runtime)
// ---------------------------------------------------------------------------
function b64uEncode(buf) {
  return Buffer.from(buf).toString("base64")
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function b64uDecode(str) {
  return Buffer.from(str.replace(/-/g, "+").replace(/_/g, "/"), "base64");
}
function hashBody(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}
function buildCanonical({ method, path, contentType, bodyHash, timestamp, nonce, instanceId, trustEpoch }) {
  const lines = [method, path, contentType, bodyHash, timestamp, nonce, instanceId, "v1"];
  if (trustEpoch !== undefined) lines.push(String(trustEpoch));
  return lines.join("\n");
}
function signPayload(identity, payload) {
  const key = createPrivateKey({ key: b64uDecode(identity.private_key), format: "der", type: "pkcs8" });
  return b64uEncode(sign(null, Buffer.from(payload, "utf8"), key));
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function loadIdentity() {
  return JSON.parse(readFileSync(IDENTITY_PATH, "utf8"));
}

function openDb() {
  return new Database(DB_PATH);
}

function peerMap(db) {
  const rows = db.query("SELECT instance_id, display_name FROM remote_peers").all();
  return Object.fromEntries(rows.map(r => [r.instance_id, r.display_name]));
}

function resolvePeer(db, ref) {
  // ref can be fingerprint (xx-xx-xx), display_name, or instance_id prefix
  const all = db.query("SELECT * FROM remote_peers WHERE status = 'paired'").all();
  return all.find(p =>
    p.display_name === ref ||
    p.instance_id === ref ||
    p.instance_id.startsWith(ref) ||
    (`${p.instance_id.slice(0,6)}-${p.instance_id.slice(6,12)}-${p.instance_id.slice(12,18)}`) === ref
  );
}

async function sendToPeer(peer, prompt) {
  const identity = loadIdentity();
  const isShortCircuit = peer.mode === "short-circuit" && peer.profile === "full";
  const remotePath = isShortCircuit ? "/api/remote/execute" : "/api/remote/proposal";
  const targetUrl  = `${peer.base_url.replace(/\/$/, "")}${remotePath}`;

  const body      = JSON.stringify({ prompt });
  const bodyBytes = new TextEncoder().encode(body);
  const timestamp = new Date().toISOString();
  const nonce     = `nonce-${crypto.randomUUID().replace(/-/g, "")}`;

  const canonical = buildCanonical({
    method: "POST", path: remotePath, contentType: "application/json",
    bodyHash: hashBody(bodyBytes), timestamp, nonce,
    instanceId: identity.instance_id, trustEpoch: peer.trust_epoch,
  });
  const signature = signPayload(identity, canonical);

  const response = await fetch(targetUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Instance-Id": identity.instance_id,
      "X-Timestamp": timestamp,
      "X-Nonce": nonce,
      "X-Sig-Version": "v1",
      "X-Signature": signature,
      "X-Trust-Epoch": String(peer.trust_epoch),
      "X-Request-Hop": "1",
    },
    body,
  });

  const data = await response.json();
  return { status: response.status, isShortCircuit, remotePath, data };
}

// ---------------------------------------------------------------------------
// Commands
// ---------------------------------------------------------------------------

function cmdList() {
  const db   = openDb();
  const rows = db.query("SELECT * FROM remote_peers ORDER BY updated_at DESC").all();
  if (!rows.length) { console.log("No remote peers found."); return; }
  for (const p of rows) {
    const fp = `${p.instance_id.slice(0,6)}-${p.instance_id.slice(6,12)}-${p.instance_id.slice(12,18)}`;
    console.log(`${p.display_name ?? "(unnamed)"} | ${fp} | ${p.status} / ${p.mode} / ${p.profile} | ${p.base_url ?? "no url"}`);
  }
}

async function cmdSend(ref, prompt) {
  if (!ref || !prompt) {
    console.error("Usage: peer.mjs send <fingerprint|name> <prompt>");
    process.exit(1);
  }
  const db   = openDb();
  const peer = resolvePeer(db, ref);
  if (!peer) { console.error(`No paired peer found for "${ref}".`); process.exit(1); }

  const fp = `${peer.instance_id.slice(0,6)}-${peer.instance_id.slice(6,12)}-${peer.instance_id.slice(12,18)}`;
  console.log(`Sending to ${peer.display_name ?? fp} (${fp}) via ${peer.mode}/${peer.profile} ...`);

  let res;
  try {
    res = await sendToPeer(peer, prompt);
  } catch (err) {
    console.error(`Failed to reach peer: ${err.message}`);
    process.exit(1);
  }
  const { status, isShortCircuit, remotePath, data } = res;
  console.log(`HTTP ${status}  →  ${remotePath}`);

  if (!isShortCircuit) {
    // mediated / proposal
    console.log(`Decision : ${data.decision ?? "unknown"}`);
    if (data.reason)         console.log(`Reason   : ${data.reason}`);
    if (data.negotiation_id) console.log(`Neg ID   : ${data.negotiation_id}`);
  } else {
    // short-circuit / execute
    console.log(`Decision : ${data.decision ?? "unknown"}`);
    if (data.result) {
      console.log("\n--- Peer response ---");
      console.log(data.result);
    }
    if (data.error)  console.log(`Error    : ${data.error}`);
  }
}

function cmdPending() {
  const db   = openDb();
  const names = peerMap(db);
  const rows = db.query("SELECT * FROM remote_requests WHERE status = 'pending' ORDER BY created_at ASC").all();
  if (!rows.length) { console.log("No pending requests."); return; }
  console.log(`${rows.length} pending request(s):\n`);
  for (const r of rows) {
    const name   = names[r.peer_instance_id] ?? r.peer_instance_id.slice(0, 16) + "...";
    const prompt = (r.prompt ?? "").replace(/^"|"$/g, "").trim();
    console.log(`ID      : ${r.id}`);
    console.log(`From    : ${name}`);
    console.log(`Type    : ${r.request_type}  |  mode: ${r.remote_mode}`);
    console.log(`Created : ${r.created_at}`);
    console.log(`Prompt  : ${prompt}`);
    console.log();
  }
}

function cmdDecide(id, verdict) {
  if (!id || !["accept", "reject"].includes(verdict)) {
    console.error("Usage: peer.mjs decide <request-id> accept|reject");
    process.exit(1);
  }
  const db     = openDb();
  const status = verdict === "accept" ? "accepted" : "rejected";
  const result = db.run(
    "UPDATE remote_requests SET status = ?, decision = ? WHERE id = ? AND status = 'pending'",
    [status, status, id]
  );
  if (result.changes === 0) {
    console.log(`No pending request found with id "${id}".`);
  } else {
    console.log(`Request ${id} → ${status}.`);
  }
}

function cmdDecideAll(verdict) {
  if (!["accept", "reject"].includes(verdict)) {
    console.error("Usage: peer.mjs decide-all accept|reject");
    process.exit(1);
  }
  const db     = openDb();
  const status = verdict === "accept" ? "accepted" : "rejected";
  const result = db.run(
    "UPDATE remote_requests SET status = ?, decision = ? WHERE status = 'pending'",
    [status, status]
  );
  console.log(`${result.changes} request(s) → ${status}.`);
}

// ---------------------------------------------------------------------------
// Entry
// ---------------------------------------------------------------------------
const [,, cmd, ...args] = process.argv;

switch (cmd) {
  case "list":        cmdList();                          break;
  case "send":        await cmdSend(args[0], args.slice(1).join(" ")); break;
  case "pending":     cmdPending();                       break;
  case "decide":      cmdDecide(args[0], args[1]);        break;
  case "decide-all":  cmdDecideAll(args[0]);              break;
  default:
    console.log("Commands: list | send <peer> <prompt> | pending | decide <id> accept|reject | decide-all accept|reject");
    process.exit(1);
}
