import { expect, test } from "bun:test";
import { createDashboardWidgetBlock, postDashboardWidget } from "../../../src/channels/web/dashboard-widget.ts";

test("createDashboardWidgetBlock returns an interactive generated widget block", () => {
  const block = createDashboardWidgetBlock("widget-test-1");

  expect(block.type).toBe("generated_widget");
  expect(block.widget_id).toBe("widget-test-1");
  expect(block.capabilities).toEqual(["interactive"]);
  expect(block.open_label).toBe("Open staged dashboard");
  expect(block.artifact.kind).toBe("html");
  expect(block.artifact.html).toContain("Build dashboard live");
  expect(block.artifact.html).toContain("requestRefresh({ buildDashboard:true");
  expect(block.artifact.html).toContain("staged-stable-dashboard-action");
});

test("postDashboardWidget sends a timeline message with the dashboard block", async () => {
  const calls: Array<{ chatJid: string; text: string; options: any }> = [];
  const sender = {
    async sendMessage(chatJid: string, text: string, options?: any) {
      calls.push({ chatJid, text, options });
    },
  };

  await postDashboardWidget(sender, {
    chatJid: "web:test",
    threadId: 42,
    text: "Dashboard is ready.",
    widgetId: "widget-test-2",
  });

  expect(calls).toHaveLength(1);
  expect(calls[0].chatJid).toBe("web:test");
  expect(calls[0].text).toBe("Dashboard is ready.");
  expect(calls[0].options.threadId).toBe(42);
  expect(Array.isArray(calls[0].options.contentBlocks)).toBe(true);
  expect(calls[0].options.contentBlocks).toHaveLength(1);
  expect(calls[0].options.contentBlocks[0].widget_id).toBe("widget-test-2");
  expect(calls[0].options.contentBlocks[0].artifact.html).toContain("Staged stable live widget runtime");
});
