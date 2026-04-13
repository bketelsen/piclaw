/**
 * agent-control/handlers/remote.ts – Cross-instance IPC slash commands.
 *
 * Commands:
 *   /ask <instance_id|fingerprint> <prompt>
 *     – Send a prompt to a paired remote instance via the mediated proposal
 *       endpoint. Requires PICLAW_REMOTE_INTEROP_ENABLED=1 and a paired peer
 *       record with a base_url.
 */

import type { AgentSession } from "@mariozechner/pi-coding-agent";
import type { AgentControlCommand, AgentControlResult } from "../agent-control-types.js";
import { getRemoteInteropConfig } from "../../core/config.js";
import { getRemotePeer, getRemotePeerByDisplayName, getRemotePeerByFingerprint } from "../../db/remote-interop.js";
import { loadOrCreateIdentity } from "../../remote/identity.js";
import { buildCanonicalRequest, hashBody, signRequest } from "../../remote/signature.js";
import { deriveFingerprint } from "../../remote/identity.js";
import { createUuid } from "../../utils/ids.js";

type AskCommand = Extract<AgentControlCommand, { type: "ask" }>;

/** Fingerprint pattern: three 6-char groups separated by dashes. */
const FINGERPRINT_RE = /^[A-Za-z0-9_-]{6}-[A-Za-z0-9_-]{6}-[A-Za-z0-9_-]{6}$/;

/** Handle `/ask <instance_id|fingerprint> <prompt>` for cross-instance IPC. */
export async function handleAsk(_session: AgentSession, command: AskCommand): Promise<AgentControlResult> {
  const config = getRemoteInteropConfig();
  if (!config.enabled) {
    return {
      status: "error",
      message: "Cross-instance IPC is disabled. Set PICLAW_REMOTE_INTEROP_ENABLED=1 to enable it.",
    };
  }

  const { instanceId, prompt } = command;

  if (!instanceId) {
    return {
      status: "error",
      message: "Usage: /ask <instance_id|fingerprint> <prompt>",
    };
  }

  if (!prompt) {
    return {
      status: "error",
      message: "Usage: /ask <instance_id|fingerprint> <prompt>\n\nNo prompt provided.",
    };
  }

  // Resolve peer by fingerprint, instance_id, or display_name.
  const peer = FINGERPRINT_RE.test(instanceId)
    ? getRemotePeerByFingerprint(instanceId)
    : (getRemotePeer(instanceId) ?? getRemotePeerByDisplayName(instanceId));

  if (!peer) {
    return {
      status: "error",
      message: `No paired peer found for "${instanceId}". Use /pair list to see paired instances.`,
    };
  }

  if (peer.status !== "paired") {
    return {
      status: "error",
      message: `Peer "${instanceId}" is not paired (status: ${peer.status}).`,
    };
  }

  if (!peer.base_url) {
    return {
      status: "error",
      message:
        `Peer "${peer.display_name ?? peer.instance_id}" has no base URL stored.\n\n` +
        `This usually means the peer was paired before the \`base_url\` field was introduced, ` +
        `or the pair request arrived without a resolvable callback URL.\n\n` +
        `Fix: re-run \`/pair request <url>\` targeting that instance to refresh its record, ` +
        `and make sure \`PICLAW_WEB_EXTERNAL_URL\` is set to this instance's reachable base URL ` +
        `before initiating pairing.`,
    };
  }

  const isShortCircuit = peer.mode === "short-circuit" && peer.profile === "full";
  const remotePath = isShortCircuit ? "/api/remote/execute" : "/api/remote/proposal";
  const targetUrl = `${peer.base_url.replace(/\/$/, "")}${remotePath}`;

  // Build signed outbound request.
  const identity = loadOrCreateIdentity();
  const body = JSON.stringify({ prompt });
  const bodyBytes = new TextEncoder().encode(body);
  const timestamp = new Date().toISOString();
  const nonce = createUuid("nonce");
  const pathWithQuery = remotePath;

  const canonical = buildCanonicalRequest({
    method: "POST",
    pathWithQuery,
    contentType: "application/json",
    bodyHash: hashBody(bodyBytes),
    timestamp,
    nonce,
    instanceId: identity.instance_id,
    sigVersion: "v1",
    trustEpoch: String(peer.trust_epoch),
  });

  const signature = signRequest(identity, canonical);

  let response: Response;
  try {
    response = await fetch(targetUrl, {
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
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return { status: "error", message: `Failed to reach peer: ${msg}` };
  }

  let data: unknown;
  try {
    data = await response.json();
  } catch {
    return { status: "error", message: `Peer returned non-JSON response (HTTP ${response.status}).` };
  }

  if (!response.ok) {
    const errMsg = (data && typeof data === "object" && "error" in data)
      ? String((data as Record<string, unknown>).error)
      : `HTTP ${response.status}`;
    return { status: "error", message: `Remote peer rejected request: ${errMsg}` };
  }

  const peerLabel = peer.display_name ?? peer.instance_id;
  const d = (data && typeof data === "object") ? (data as Record<string, unknown>) : {};
  const decision = d.decision ? String(d.decision) : "unknown";
  const fingerprint = deriveFingerprint(peer.instance_id);
  const lines = [`**Sent to ${peerLabel}** (${fingerprint})`, `Decision: \`${decision}\``];

  if (isShortCircuit) {
    const result = d.result ? String(d.result) : "";
    if (result) lines.push("", result);
  } else {
    const reason = d.reason ? String(d.reason) : "";
    const negotiationId = d.negotiation_id ? String(d.negotiation_id) : "";
    if (reason) lines.push(`Reason: ${reason}`);
    if (negotiationId) lines.push(`Negotiation ID: \`${negotiationId}\``);
  }

  return { status: "success", message: lines.join("\n") };
}
