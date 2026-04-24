import { afterEach, describe, expect, test } from "bun:test";

import { createWebChannelTestFixture } from "./helpers/web-channel-fixture.ts";

let cleanup: (() => void) | null = null;

afterEach(() => {
  cleanup?.();
  cleanup = null;
});

describe("WebChannel terminal HTTP delegation", () => {
  test("delegates terminal HTTP wrapper methods to the extracted service", async () => {
    const fixture = await createWebChannelTestFixture({ workspace: "temp" });
    cleanup = fixture.cleanup;

    const calls: string[] = [];
    (fixture.channel as any).terminalVncHttpService = {
      handleTerminalSession: (req: Request) => {
        calls.push(`terminal:${req.method}:${new URL(req.url).pathname}`);
        return new Response("terminal-session", { status: 201 });
      },
      handleTerminalHandoff: async (req: Request) => {
        calls.push(`terminal-handoff:${req.method}:${new URL(req.url).pathname}`);
        return new Response("terminal-handoff", { status: 204 });
      },
    };

    const terminalResponse = fixture.channel.handleTerminalSession(new Request("https://example.com/terminal/session"));
    expect(terminalResponse.status).toBe(201);
    expect(await terminalResponse.text()).toBe("terminal-session");

    const terminalHandoffResponse = await fixture.channel.handleTerminalHandoff(new Request("https://example.com/terminal/handoff", { method: "POST" }));
    expect(terminalHandoffResponse.status).toBe(204);
    expect(await terminalHandoffResponse.text()).toBe("terminal-handoff");

    expect(calls).toEqual([
      "terminal:GET:/terminal/session",
      "terminal-handoff:POST:/terminal/handoff",
    ]);
  });
});
