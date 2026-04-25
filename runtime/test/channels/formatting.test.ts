import { expect, test } from "bun:test";
import { buildChannelSystemPromptAppendix, getChannelFormattingInstructions } from "../../src/channels/formatting.js";

test("getChannelFormattingInstructions returns known channel hints", () => {
  expect(getChannelFormattingInstructions("web")).toContain("Use Markdown formatting");
  expect(getChannelFormattingInstructions("whatsapp")).toContain("Use WhatsApp formatting only");
  expect(getChannelFormattingInstructions("telegram")).toContain("Telegram-compatible Markdown");
  expect(getChannelFormattingInstructions("unknown")).toBeNull();
});

test("buildChannelSystemPromptAppendix builds persistent session guidance", () => {
  const appendix = buildChannelSystemPromptAppendix("web");
  expect(appendix).toContain("## Active delivery channel");
  expect(appendix).toContain("Current channel: web");
  expect(appendix).toContain("Use Markdown formatting");
  expect(buildChannelSystemPromptAppendix("telegram")).toContain("Current channel: telegram");
  expect(buildChannelSystemPromptAppendix("unknown")).toBeNull();
});
