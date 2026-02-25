import type { NewMessage } from "./types.js";

export type ChatChannel = "web" | "whatsapp" | "unknown";

export function detectChannel(chatJid: string | null | undefined): ChatChannel {
  if (!chatJid) return "unknown";
  if (chatJid.startsWith("web:")) return "web";
  return "whatsapp";
}

export function escapeXml(s: string): string {
  if (!s) return "";
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function formatMessages(messages: NewMessage[], channel?: ChatChannel): string {
  const lines = messages.map(
    (m) => `<message sender="${escapeXml(m.sender_name)}" time="${m.timestamp}">${escapeXml(m.content)}</message>`
  );
  const channelAttr = channel ? ` channel="${channel}"` : "";
  return `<messages${channelAttr}>\n${lines.join("\n")}\n</messages>`;
}

export function stripInternalTags(text: string): string {
  return text.replace(/<internal>[\s\S]*?<\/internal>/g, "").trim();
}

export function formatOutbound(rawText: string, _channel?: ChatChannel): string {
  const text = stripInternalTags(rawText);
  if (!text) return "";
  return text;
}
