import { writeFileSync } from "fs";
import { join } from "path";

export function writeAgentLog(
  logsDir: string,
  chatJid: string,
  duration: number,
  timedOut: boolean,
  result: string | null,
  error: string | null
): void {
  try {
    const ts = new Date().toISOString().replace(/[:.]/g, "-");
    const content = [
      `Chat: ${chatJid}`,
      `Duration: ${duration}ms`,
      `TimedOut: ${timedOut}`,
      error ? `Error: ${error}` : null,
      "",
      "=== result ===",
      result?.slice(0, 50000) ?? "(none)",
    ]
      .filter((line) => line !== null)
      .join("\n");
    writeFileSync(join(logsDir, `agent-${ts}.log`), content);
  } catch {
    // ignore log failures
  }
}
