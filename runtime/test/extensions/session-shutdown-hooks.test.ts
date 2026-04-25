import { describe, expect, test } from "bun:test";
import "../helpers.js";
import { createFakeExtensionApi } from "./fake-extension-api.js";
import {
  withTempWorkspaceEnv,
} from "../helpers.js";

type FakeHandler = { event: string; handler: (...args: any[]) => any };

function getHandler(handlers: FakeHandler[], event: string): FakeHandler {
  const found = handlers.find((entry) => entry.event === event);
  expect(found).toBeDefined();
  return found!;
}

describe("session_shutdown upgrade regressions", () => {
  test("chat SSH core unregisters the live SSH session on session shutdown", async () => {
    const chatJid = `web:test-${Date.now()}`;
    const mod = await import("../../src/extensions/ssh-core.ts");
    await mod.unregisterLiveChatSshSession(chatJid);

    const fake = createFakeExtensionApi({ allTools: [] });
    mod.createChatSshCoreExtension(chatJid, null)(fake.api);

    const start = getHandler(fake.handlers as FakeHandler[], "session_start");
    const shutdown = getHandler(fake.handlers as FakeHandler[], "session_shutdown");

    await start.handler({}, { hasUI: false });
    expect(mod.hasLiveChatSshSession(chatJid)).toBe(true);

    await shutdown.handler();
    expect(mod.hasLiveChatSshSession(chatJid)).toBe(false);
  });

});
