/**
 * keychain-tools – registers a keychain tool for listing and retrieving entries.
 */
import { Type } from "@sinclair/typebox";
import type { ExtensionAPI, ExtensionFactory } from "@mariozechner/pi-coding-agent";

import {
  deleteKeychainEntry,
  getKeychainEntry,
  listInjectableKeychainEnvNames,
  listKeychainEntries,
  setKeychainEntry,
} from "../secure/keychain.js";
import { createKeychainOutputRedactor } from "../secure/shell-secrets.js";

const KeychainToolSchema = Type.Object({
  action: Type.Union([Type.Literal("list"), Type.Literal("get"), Type.Literal("set"), Type.Literal("delete")], {
    description: "Operation to perform: list entries, get a value, store/update an entry, or delete an entry.",
  }),
  name: Type.Optional(Type.String({ description: "Keychain entry name (required for action=get/set/delete)." })),
  field: Type.Optional(
    Type.Union([Type.Literal("secret"), Type.Literal("username")], {
      description: "Field to return for action=get (default: secret).",
    }),
  ),
  type: Type.Optional(
    Type.Union([Type.Literal("token"), Type.Literal("password"), Type.Literal("basic"), Type.Literal("secret")], {
      description: "Entry type for action=set (default: secret).",
    }),
  ),
  secret: Type.Optional(Type.String({ description: "Plaintext secret for action=set." })),
  username: Type.Optional(Type.String({ description: "Optional username for action=set." })),
  limit: Type.Optional(Type.Integer({ description: "Max entries for action=list (1-200).", minimum: 1, maximum: 200 })),
});

function clampLimit(value: number | undefined, fallback = 100): number {
  if (!Number.isFinite(value)) return fallback;
  const num = Number(value);
  if (Number.isNaN(num)) return fallback;
  return Math.min(Math.max(num, 1), 200);
}

const KEYCHAIN_HINT = [
  "## Keychain",
  "Use keychain for listing available key names and retrieving entry secrets/usernames.",
  "You can also store/update entries and delete obsolete ones.",
  "Only reveal secrets to the user when explicitly requested.",
  "Tool outputs are automatically redacted for known keychain secret values except for direct keychain tool reads.",
].join("\n");

function listPrefixedEntries(prefix: string, options: { excludeSuffixes?: string[] } = {}): string[] {
  return listKeychainEntries()
    .map((entry) => entry.name)
    .filter((name) => name.startsWith(prefix))
    .filter((name) => !(options.excludeSuffixes || []).some((suffix) => name.endsWith(suffix)))
    .sort();
}

function buildProfileHint(title: string, entries: string[], guidance: string): string {
  if (entries.length === 0) {
    return [title, `No matching profiles discovered. ${guidance}`].join("\n");
  }
  const preview = entries.slice(0, 10).map((name) => `- ${name}`).join("\n");
  const more = entries.length > 10 ? `\n- … ${entries.length - 10} more` : "";
  return [title, preview + more, guidance].join("\n");
}

function buildIntegrationProfileHints(): string {
  const sshProfiles = listPrefixedEntries("ssh/", { excludeSuffixes: [".known_hosts", ".pub"] });
  const proxmoxProfiles = listPrefixedEntries("proxmox/");
  const portainerProfiles = listPrefixedEntries("portainer/");
  return [
    "## Integration profiles",
    buildProfileHint("### SSH keychain profiles", sshProfiles, "Use the ssh tool with private_key_keychain/known_hosts_keychain references instead of fetching key material."),
    buildProfileHint("### Proxmox token profiles", proxmoxProfiles, "Use the proxmox tool with api_token_keychain references instead of fetching token material."),
    buildProfileHint("### Portainer token profiles", portainerProfiles, "Use the portainer tool with api_token_keychain references instead of fetching token material."),
  ].join("\n\n");
}

function buildInjectedBashEnvHint(): string {
  const names = listInjectableKeychainEnvNames();
  if (names.length === 0) {
    return [
      "## Bash secret env",
      "Keychain entries whose names are valid shell env vars are auto-injected into local bash and SSH bash environments when present.",
    ].join("\n");
  }

  const preview = names.slice(0, 20).map((name) => `- $${name}`).join("\n");
  const more = names.length > 20 ? `\n- … ${names.length - 20} more` : "";
  return [
    "## Bash secret env",
    "The following keychain entries are auto-injected into local bash and SSH bash environments:",
    `${preview}${more}`,
    "Use the env var names directly in bash commands; the values stay in keychain storage.",
  ].join("\n");
}

/** Extension factory that registers keychain. */
export const keychainTools: ExtensionFactory = (pi: ExtensionAPI) => {
  pi.on("before_agent_start", async (event) => ({
    systemPrompt: `${event.systemPrompt}\n\n${KEYCHAIN_HINT}\n\n${buildInjectedBashEnvHint()}\n\n${buildIntegrationProfileHints()}`,
  }));

  pi.on("tool_result", async (event) => {
    if (event.toolName === "keychain") return;
    const redactor = await createKeychainOutputRedactor();
    const redactValue = (value: unknown): unknown => {
      if (typeof value === "string") return redactor.redact(value);
      if (Array.isArray(value)) return value.map((entry) => redactValue(entry));
      if (!value || typeof value !== "object") return value;
      return Object.fromEntries(Object.entries(value as Record<string, unknown>).map(([key, entry]) => [key, redactValue(entry)]));
    };
    return {
      content: event.content.map((block) => block.type === "text" ? { ...block, text: redactor.redact(block.text) } : block),
      details: redactValue(event.details),
    };
  });

  pi.registerTool({
    name: "keychain",
    label: "keychain",
    description: "List keychain entries, retrieve values, store/update entries, or delete entries.",
    promptSnippet: "keychain: list/get/set/delete secure keychain entries by name.",
    parameters: KeychainToolSchema,
    async execute(_toolCallId, params) {
      if (params.action === "list") {
        const limit = clampLimit(params.limit, 100);
        const entries = listKeychainEntries().slice(0, limit);
        if (entries.length === 0) {
          return {
            content: [{ type: "text", text: "No keychain entries found." }],
            details: { count: 0, entries: [], name: "", field: "", type: "" },
          };
        }

        const lines = entries.map((entry) => `• ${entry.name} (${entry.type})`);
        return {
          content: [{ type: "text", text: `Keychain entries (${entries.length}):\n${lines.join("\n")}` }],
          details: { count: entries.length, entries, name: "", field: "", type: "" },
        };
      }

      const name = params.name?.trim();
      if (!name) {
        return {
          content: [{ type: "text", text: `Provide name for action=${params.action}.` }],
          details: { count: 0, entries: [], name: "", field: "", type: "" },
        };
      }

      if (params.action === "set") {
        const secret = String(params.secret ?? "");
        if (!secret) {
          return {
            content: [{ type: "text", text: "Provide secret for action=set." }],
            details: { count: 0, entries: [], name, field: "", type: "" },
          };
        }

        const type =
          params.type === "token" ||
          params.type === "password" ||
          params.type === "basic" ||
          params.type === "secret"
            ? params.type
            : "secret";

        try {
          await setKeychainEntry({
            name,
            type,
            secret,
            username: params.username ? String(params.username) : undefined,
          });
          return {
            content: [{ type: "text", text: `Stored keychain entry ${name} (${type}).` }],
            details: { count: 1, entries: [], name, field: "", type },
          };
        } catch (error) {
          return {
            content: [{ type: "text", text: (error as Error).message || "Failed to store keychain entry." }],
            details: { count: 0, entries: [], name, field: "", type: "" },
          };
        }
      }

      if (params.action === "delete") {
        try {
          const removed = deleteKeychainEntry(name);
          return {
            content: [{ type: "text", text: removed ? `Deleted keychain entry ${name}.` : `Keychain entry not found: ${name}` }],
            details: { count: removed ? 1 : 0, entries: [], name, field: "", type: "" },
          };
        } catch (error) {
          return {
            content: [{ type: "text", text: (error as Error).message || "Failed to delete keychain entry." }],
            details: { count: 0, entries: [], name, field: "", type: "" },
          };
        }
      }

      const field = params.field === "username" ? "username" : "secret";
      try {
        const entry = await getKeychainEntry(name);
        if (field === "username") {
          if (!entry.username) {
            return {
              content: [{ type: "text", text: `Entry ${name} has no username.` }],
              details: { count: 0, entries: [], name, field, type: entry.type },
            };
          }
          return {
            content: [{ type: "text", text: entry.username }],
            details: { count: 1, entries: [], name, field, type: entry.type },
          };
        }

        return {
          content: [{ type: "text", text: entry.secret }],
          details: { count: 1, entries: [], name, field, type: entry.type },
        };
      } catch (error) {
        return {
          content: [{ type: "text", text: (error as Error).message || "Failed to read keychain entry." }],
          details: { count: 0, entries: [], name, field, type: "" },
        };
      }
    },
  });
};
