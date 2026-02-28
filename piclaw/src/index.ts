#!/usr/bin/env bun
import { handleCliOptions } from "./cli.js";
import { main } from "./runtime.js";

handleCliOptions();

main().catch((err) => {
  console.error("[piclaw] Fatal:", err);
  process.exit(1);
});
