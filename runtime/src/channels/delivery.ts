/**
 * channels/delivery.ts – Shared outbound message payload helpers.
 */

import type { AttachmentInfo } from "../agent-pool/attachments.js";

export interface ChannelMessageOptions {
  forceRoot?: boolean;
  threadId?: number | null;
  source?: string;
  mediaIds?: number[];
  contentBlocks?: Array<Record<string, unknown>>;
}

export function buildAttachmentMessageOptions(attachments: AttachmentInfo[]): ChannelMessageOptions | undefined {
  if (!attachments.length) return undefined;
  return {
    mediaIds: attachments.map((attachment) => attachment.id),
    contentBlocks: attachments.map((attachment) => ({
      type: attachment.kind === "image" ? "image" : "file",
      media_id: attachment.id,
      name: attachment.name,
      filename: attachment.name,
      mime_type: attachment.contentType,
      size: attachment.size,
    })),
  };
}
