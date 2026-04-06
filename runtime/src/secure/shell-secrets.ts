import {
  buildInjectedShellEnv,
  getKeychainEntry,
  listKeychainEntries,
  resolveKeychainPlaceholders,
} from "./keychain.js";

export interface TextRedactor {
  redact(text: string): string;
  maxNeedleLength: number;
  hasReplacements: boolean;
}

export interface StreamingTextRedactor {
  push(text: string): string;
  flush(): string;
}

export type InjectedShellFamily = "posix" | "powershell";

function isImplicitKeychainUnavailableError(error: unknown): boolean {
  if (error instanceof Error) {
    return error.message.includes("Keychain is disabled")
      || error.message.includes("Cannot use a closed database")
      || error.message.includes("no such table: keychain_entries")
      || error.message.includes("operation-specific reason");
  }
  return typeof error === "object" && error !== null && String((error as { name?: unknown }).name || "") === "OperationError";
}

function shellQuote(value: string): string {
  return `'${value.replace(/'/g, `"'"'`)}'`;
}

function powerShellQuote(value: string): string {
  return `'${value.replace(/'/g, "''")}'`;
}

function shouldRedactSecret(secret: string): boolean {
  return secret.length >= 4 || secret.includes("\n");
}

export async function createKeychainOutputRedactor(): Promise<TextRedactor> {
  try {
    const values = new Map<string, string>();
    for (const { name } of listKeychainEntries()) {
      try {
        const entry = await getKeychainEntry(name);
        const secret = entry.secret;
        if (!secret || !shouldRedactSecret(secret) || values.has(secret)) continue;
        values.set(secret, name);
      } catch (error) {
        if (isImplicitKeychainUnavailableError(error)) continue;
        continue;
      }
    }

    const replacements = [...values.entries()]
      .map(([secret, name]) => ({ secret, label: name }))
      .sort((a, b) => b.secret.length - a.secret.length);

    if (replacements.length === 0) {
      return {
        redact: (text) => text,
        maxNeedleLength: 0,
        hasReplacements: false,
      };
    }

    return {
      redact: (text) => {
        let next = text;
        for (const replacement of replacements) {
          next = next.replaceAll(replacement.secret, `[REDACTED:${replacement.label}]`);
        }
        return next;
      },
      maxNeedleLength: replacements[0]?.secret.length ?? 0,
      hasReplacements: true,
    };
  } catch {
    return {
      redact: (text) => text,
      maxNeedleLength: 0,
      hasReplacements: false,
    };
  }
}

export function createStreamingTextRedactor(redactor: TextRedactor): StreamingTextRedactor {
  if (!redactor.hasReplacements || redactor.maxNeedleLength <= 1) {
    return {
      push: (text) => redactor.redact(text),
      flush: () => "",
    };
  }

  const tailKeep = redactor.maxNeedleLength - 1;
  let tail = "";
  return {
    push(text) {
      const raw = `${tail}${text}`;
      if (raw.length <= tailKeep) {
        tail = raw;
        return "";
      }
      const emitRaw = raw.slice(0, raw.length - tailKeep);
      tail = raw.slice(raw.length - tailKeep);
      return redactor.redact(emitRaw);
    },
    flush() {
      if (!tail) return "";
      const next = redactor.redact(tail);
      tail = "";
      return next;
    },
  };
}

export async function redactKeychainSecretsInText(text: string): Promise<string> {
  const redactor = await createKeychainOutputRedactor();
  return redactor.redact(text);
}

export async function redactKeychainSecretsInValue(value: unknown): Promise<unknown> {
  const redactor = await createKeychainOutputRedactor();
  const visit = (input: unknown): unknown => {
    if (typeof input === "string") return redactor.redact(input);
    if (Array.isArray(input)) return input.map((entry) => visit(entry));
    if (!input || typeof input !== "object") return input;
    return Object.fromEntries(Object.entries(input as Record<string, unknown>).map(([key, entry]) => [key, visit(entry)]));
  };
  return visit(value);
}

async function resolveInjectedExecParts(command: string, args: string[]): Promise<{ resolvedCommand: string; resolvedArgs: string[]; injectedEnv: Record<string, string> }> {
  const resolvedCommand = await resolveKeychainPlaceholders(command);
  const resolvedArgs = await Promise.all(args.map((value) => resolveKeychainPlaceholders(value)));
  const injectedEnv = await buildInjectedShellEnv({ includeProcessEnv: false });
  return { resolvedCommand, resolvedArgs, injectedEnv };
}

export async function buildInjectedExecCommand(shellFamily: InjectedShellFamily, command: string, args: string[] = []): Promise<{ command: string; commandArgs: string[] }> {
  const { resolvedCommand, resolvedArgs, injectedEnv } = await resolveInjectedExecParts(command, args);
  const envEntries = Object.entries(injectedEnv);

  if (shellFamily === "powershell") {
    const lines = [
      "$ErrorActionPreference = 'Stop'",
      ...envEntries.map(([key, value]) => `$env:${key} = ${powerShellQuote(value)}`),
      `& ${[resolvedCommand, ...resolvedArgs].map(powerShellQuote).join(" ")}`,
      "if ($null -ne $LASTEXITCODE) { exit $LASTEXITCODE }",
    ];
    return {
      command: "powershell",
      commandArgs: ["-NoProfile", "-Command", lines.join("; ")],
    };
  }

  const execCommand = `exec ${[resolvedCommand, ...resolvedArgs].map(shellQuote).join(" ")}`;
  const shellCommand = envEntries.length > 0
    ? `env ${envEntries.map(([key, value]) => `${key}=${shellQuote(value)}`).join(" ")} ${execCommand}`
    : execCommand;
  return {
    command: "sh",
    commandArgs: ["-lc", shellCommand],
  };
}

export async function buildInjectedPosixCommand(command: string, args: string[] = []): Promise<{ command: string; commandArgs: string[] }> {
  return buildInjectedExecCommand("posix", command, args);
}

export async function buildInjectedPowerShellCommand(command: string, args: string[] = []): Promise<{ command: string; commandArgs: string[] }> {
  return buildInjectedExecCommand("powershell", command, args);
}
