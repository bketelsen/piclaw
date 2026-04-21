import { buildInjectedShellEnv, resolveKeychainPlaceholders, } from "./keychain.js";
function shellQuote(value) {
    return `'${value.replace(/'/g, `'"'"'`)}'`;
}
function powerShellQuote(value) {
    return `'${value.replace(/'/g, "''")}'`;
}
const NOOP_REDACTOR = {
    redact: (text) => text,
    maxNeedleLength: 0,
    hasReplacements: false,
    needles: [],
};
const NOOP_STREAMING_REDACTOR = {
    push: (text) => text,
    flush: () => "",
};
/** @deprecated Redaction has been removed. Returns a no-op redactor. */
export async function createKeychainOutputRedactor() {
    return NOOP_REDACTOR;
}
/** @deprecated Redaction has been removed. Returns a no-op streaming passthrough. */
export function createStreamingTextRedactor(_redactor) {
    return NOOP_STREAMING_REDACTOR;
}
/** @deprecated Redaction has been removed. Returns the input text unchanged. */
export async function redactKeychainSecretsInText(text) {
    return text;
}
/** @deprecated Redaction has been removed. Returns the input value unchanged. */
export async function redactKeychainSecretsInValue(value) {
    return value;
}
async function resolveInjectedExecParts(command, args) {
    const resolvedCommand = await resolveKeychainPlaceholders(command);
    const resolvedArgs = await Promise.all(args.map((value) => resolveKeychainPlaceholders(value)));
    const injectedEnv = await buildInjectedShellEnv({
        includeProcessEnv: false,
        referencedTexts: [command, ...args],
    });
    return { resolvedCommand, resolvedArgs, injectedEnv };
}
export async function buildInjectedExecCommand(shellFamily, command, args = []) {
    const { resolvedCommand, resolvedArgs, injectedEnv } = await resolveInjectedExecParts(command, args);
    if (shellFamily === "powershell") {
        const lines = [
            "$ErrorActionPreference = 'Stop'",
            `& ${[resolvedCommand, ...resolvedArgs].map(powerShellQuote).join(" ")}`,
            "if ($null -ne $LASTEXITCODE) { exit $LASTEXITCODE }",
        ];
        return {
            command: "powershell",
            commandArgs: ["-NoProfile", "-Command", lines.join("; ")],
            env: injectedEnv,
        };
    }
    const execCommand = `exec ${[resolvedCommand, ...resolvedArgs].map(shellQuote).join(" ")}`;
    return {
        command: "sh",
        commandArgs: ["-lc", execCommand],
        env: injectedEnv,
    };
}
export async function buildInjectedPosixCommand(command, args = []) {
    return buildInjectedExecCommand("posix", command, args);
}
export async function buildInjectedPowerShellCommand(command, args = []) {
    return buildInjectedExecCommand("powershell", command, args);
}
