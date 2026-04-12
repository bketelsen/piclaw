import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const sourcePath = join(process.cwd(), "extensions", "experimental", "m365", "shared.ts");
const source = readFileSync(sourcePath, "utf8");

test("m365 consumer auth only shows consent when YOLO is off", () => {
  expect(source).toContain('const M365_YOLO = /^(1|true|yes|on)$/i.test((process.env["PICLAW_M365_YOLO"] ?? "").trim());');
  expect(source).toContain('if (!M365_YOLO) {');
  expect(source).toContain('const consentOk = await showConsumerConsentAndWait();');
});

test("m365 business auth uses the shared YOLO gate via prepareFreshAuthBrowserSession", () => {
  expect(source).toContain('async function prepareFreshAuthBrowserSession(');
  expect(source).toContain('if (M365_YOLO) {');
  expect(source).toContain('const launched = await launchEdge(targetUrl, { forceNewInstance: options.forceNewInstance });');
  expect(source).toContain('const { proc, port, ws: preparedWs } = await prepareFreshAuthBrowserSession(');
  expect(source).toContain('const oauth = await prepareFreshAuthBrowserSession(');
});

test("m365 graph auth still preserves business-first recovery paths", () => {
  expect(source).toContain('// ── Method 0: Extract Graph token from Teams v2 (teams.cloud.microsoft) localStorage ──');
  expect(source).toContain('const refreshed = await redeemTeamsRefreshToken("https://graph.microsoft.com");');
  expect(source).toContain('const consumerKnown = _tenantId === CONSUMER_TENANT_ID || _isConsumer;');
  expect(source).toContain('const consumerSessionVisible = !consumerKnown && await hasOutlookLiveSession();');
  expect(source).toContain('// Inferred consumer session failed — try enterprise paths below.');
});
