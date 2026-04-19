/**
 * channels/web/agent/agent-commands.ts — GET /agent/commands endpoint.
 *
 * Returns the current session's registered command set as JSON for the
 * compose-box autocomplete. Combines core control commands, extension
 * commands, prompt templates, and skills.
 *
 * Consumers:
 *   - compose-box.ts fetches this on mount to populate autocomplete.
 */
import { CONTROL_COMMAND_DEFINITIONS } from "../../../agent-control/command-registry.js";
import { appendServerTiming, measureAsync } from "../http/server-timing.js";
/**
 * Build the full command list from a session.
 */
function buildCommandList(session) {
    const entries = [];
    const seen = new Set();
    const add = (name, description, source) => {
        const key = name.toLowerCase();
        if (seen.has(key))
            return;
        seen.add(key);
        entries.push({ name, description, source });
    };
    // Core control commands
    for (const cmd of CONTROL_COMMAND_DEFINITIONS) {
        add(cmd.name, cmd.description, "core");
        for (const alias of cmd.aliases ?? []) {
            add(alias, cmd.description, "core");
        }
    }
    // Extension commands
    if (session.extensionRunner) {
        const isPiBuiltin = (path) => !!path && path.includes("node_modules/@mariozechner/pi-");
        const extCommands = session.extensionRunner.getRegisteredCommands();
        for (const entry of extCommands) {
            const name = entry.invocationName || entry.name;
            if (!name)
                continue;
            const entryPath = entry.sourceInfo?.path;
            const description = entry.description || "extension command";
            const source = isPiBuiltin(entryPath) ? "pi-extension" : "extension";
            add(`/${name}`, description, source);
        }
    }
    // Prompt templates
    for (const template of session.promptTemplates ?? []) {
        add(`/${template.name}`, template.description || "prompt template", "template");
    }
    // Skills
    if (session.resourceLoader) {
        const skills = session.resourceLoader.getSkills().skills;
        for (const skill of skills) {
            add(`/skill:${skill.name}`, skill.description || "skill", "skill");
        }
    }
    return entries.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
}
/**
 * Handle GET /agent/commands — return the command registry as JSON.
 */
export async function handleAgentCommandsRequest(req, options) {
    const url = new URL(req.url);
    const chatJid = url.searchParams.get("chat_jid")?.trim() || options.defaultChatJid;
    const { result, durationMs } = await measureAsync(async () => {
        try {
            const session = await options.agentPool.getSessionForIntrospection(chatJid);
            const commands = buildCommandList(session);
            return options.json({ commands }, 200);
        }
        catch {
            // Fallback to core commands only if session is unavailable
            const commands = CONTROL_COMMAND_DEFINITIONS.map(cmd => ({
                name: cmd.name,
                description: cmd.description,
                source: "core",
            }));
            return options.json({ commands }, 200);
        }
    });
    return appendServerTiming(result, { name: "agent_commands", durationMs });
}
