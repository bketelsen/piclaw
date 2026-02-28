import { readFileSync } from "fs";
import { join } from "path";
const HELP_TEXT = `piclaw - Pi Coding Agent Assistant

Usage:
  piclaw [options]

Options:
  -h, --help                 Show this help
  -v, --version              Show version
  -p, --port <number>        Web UI port (default: 8080)
      --host <addr>          Web UI host (default: 0.0.0.0)
      --idle-timeout <secs>  Web idle timeout in seconds (default: 0 = disabled)
`;
export function getVersion() {
    try {
        const packagePath = join(import.meta.dir, "..", "package.json");
        const data = JSON.parse(readFileSync(packagePath, "utf-8"));
        return data.version || "unknown";
    }
    catch {
        return "unknown";
    }
}
export function handleCliOptions(args = process.argv.slice(2)) {
    if (args.includes("-h") || args.includes("--help")) {
        console.log(HELP_TEXT.trim());
        process.exit(0);
    }
    if (args.includes("-v") || args.includes("--version")) {
        console.log(getVersion());
        process.exit(0);
    }
}
