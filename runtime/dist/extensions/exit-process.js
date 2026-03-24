/**
 * exit-process – agent-callable tool that gracefully terminates the piclaw process.
 *
 * When the agent needs to restart (e.g. after deploying a new build), it calls
 * this tool as the **last tool call in its turn**. The tool invokes the same
 * graceful shutdown path used by SIGINT/SIGTERM: drain the task queue, dispose
 * all agent sessions (persisting session files), stop the web server and
 * terminal/VNC bridges, then process.exit(0). Supervisor then restarts piclaw
 * with the new code.
 *
 * This replaces the old pattern of scheduling an external `supervisorctl
 * restart` from the deploy script, which could kill the process mid-turn and
 * lose the agent's response.
 */
import { Type } from "@sinclair/typebox";
import { killTrackedProcesses } from "../utils/process-tracker.js";
import { requestGracefulShutdown } from "../runtime/shutdown-registry.js";
const ExitProcessSchema = Type.Object({
    reason: Type.Optional(Type.String({ description: "Human-readable reason for the exit (logged, not required)." })),
});
const HINT = [
    "## Process exit",
    "Use exit_process to gracefully terminate the running piclaw process after your current turn completes.",
    "Supervisor will restart it automatically. Call this as the LAST tool in a turn after deploying new code.",
    "Do NOT call exit_process in the middle of a multi-step turn — only when you are done and ready to restart.",
].join("\n");
export const exitProcess = (pi) => {
    pi.on("before_agent_start", async (event) => ({
        systemPrompt: `${event.systemPrompt}\n\n${HINT}`,
    }));
    pi.registerTool({
        name: "exit_process",
        label: "exit_process",
        description: "Gracefully terminate piclaw (drain queue, persist sessions, stop services) so Supervisor restarts it. Call as the LAST tool in a turn after deploying new code.",
        promptSnippet: "exit_process: gracefully terminate piclaw so supervisor restarts it with new code. Call LAST in a turn.",
        parameters: ExitProcessSchema,
        async execute(_toolCallId, params) {
            const reason = params.reason?.trim() || "Agent-initiated restart";
            console.log(`[exit-process] Killing tracked subprocesses and requesting graceful shutdown — reason: ${reason}`);
            const killed = killTrackedProcesses();
            // Schedule the shutdown slightly in the future so the tool result can
            // propagate back through the agent turn and get persisted to the DB.
            setTimeout(() => {
                requestGracefulShutdown(reason);
            }, 500);
            return {
                content: [{ type: "text", text: `Graceful shutdown scheduled. ${killed} subprocess${killed === 1 ? "" : 'es'} killed. Supervisor will restart piclaw. Reason: ${reason}` }],
                details: {
                    tool: "exit_process",
                    scheduled: true,
                    killed_subprocesses: killed,
                    reason,
                },
            };
        },
    });
};
