import { basename, resolve, relative } from "path";
import { Type, type Static } from "@sinclair/typebox";
import type {
  AgentToolResult,
  AgentToolUpdateCallback,
  ExtensionContext,
  ToolDefinition,
} from "@mariozechner/pi-coding-agent";

import { createMedia } from "../db.js";
import { WORKSPACE_DIR } from "../config.js";

export type AttachmentKind = "image" | "file";

export interface AttachmentInfo {
  id: number;
  name: string;
  contentType: string;
  size: number;
  kind: AttachmentKind;
  sourcePath: string;
}

export class AttachmentRegistry {
  private pending = new Map<string, AttachmentInfo[]>();

  register(chatJid: string, info: AttachmentInfo): void {
    const list = this.pending.get(chatJid) ?? [];
    list.push(info);
    this.pending.set(chatJid, list);
  }

  take(chatJid: string): AttachmentInfo[] {
    const list = this.pending.get(chatJid) ?? [];
    this.pending.delete(chatJid);
    return list;
  }

  clear(chatJid: string): void {
    this.pending.delete(chatJid);
  }
}

const AttachmentSchema = Type.Object({
  path: Type.String({ description: "Path to a file inside the workspace." }),
  name: Type.Optional(Type.String({ description: "Optional display name for the attachment." })),
  content_type: Type.Optional(Type.String({ description: "Optional MIME type override." })),
  kind: Type.Optional(Type.Union([Type.Literal("image"), Type.Literal("file")], { description: "Force attachment kind." })),
});

type AttachmentParams = Static<typeof AttachmentSchema>;

function resolveWorkspacePath(inputPath: string): string | null {
  if (!inputPath) return null;
  const resolved = resolve(WORKSPACE_DIR, inputPath);
  const rel = relative(WORKSPACE_DIR, resolved);
  if (rel.startsWith("..") || rel.startsWith("/")) return null;
  return resolved;
}

function detectContentType(path: string, fallback?: string): string {
  if (fallback) return fallback;
  try {
    const file = Bun.file(path);
    if (file.type) return file.type;
  } catch {
    // ignore
  }
  return "application/octet-stream";
}

export function createAttachmentTool(
  chatJid: string,
  registry: AttachmentRegistry
): ToolDefinition<typeof AttachmentSchema, Record<string, unknown>> {
  return {
    name: "attach_file",
    label: "attach_file",
    description:
      "Attach a file from the workspace so the user can download it in the web UI. Returns an attachment handle.",
    parameters: AttachmentSchema,
    execute: async (
      _toolCallId: string,
      params: AttachmentParams,
      _signal?: AbortSignal,
      _onUpdate?: AgentToolUpdateCallback<Record<string, unknown>>,
      _ctx?: ExtensionContext
    ): Promise<AgentToolResult<Record<string, unknown>>> => {
      const resolved = resolveWorkspacePath(params.path);
      if (!resolved) {
        return {
          content: [{ type: "text", text: "Attachment path must be inside the workspace." }],
          details: {},
        };
      }

      const file = Bun.file(resolved);
      if (!(await file.exists())) {
        return {
          content: [{ type: "text", text: `File not found: ${params.path}` }],
          details: {},
        };
      }

      const data = new Uint8Array(await file.arrayBuffer());
      const filename = params.name || basename(resolved);
      const contentType = detectContentType(resolved, params.content_type);
      const size = file.size;
      const kind: AttachmentKind = params.kind || (contentType.startsWith("image/") ? "image" : "file");

      const mediaId = createMedia(filename, contentType, data, null, {
        size,
        source_path: resolved,
        kind,
      });

      const info: AttachmentInfo = {
        id: mediaId,
        name: filename,
        contentType,
        size,
        kind,
        sourcePath: resolved,
      };
      registry.register(chatJid, info);

      return {
        content: [
          {
            type: "text",
            text: `Attached ${filename} (${Math.round(size / 1024)} KB). You can reference it as attachment:${filename}.`,
          },
        ],
        details: {
          media_id: mediaId,
          filename,
          content_type: contentType,
          size,
          kind,
        },
      };
    },
  };
}
