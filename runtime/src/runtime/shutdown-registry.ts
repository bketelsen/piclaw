/**
 * runtime/shutdown-registry.ts – Global shutdown handle for agent-initiated exits.
 *
 * bootstrapRuntime() registers the graceful shutdown handler here after
 * startup. The exit_process tool and /exit slash command call
 * requestGracefulShutdown() to trigger the same orderly teardown
 * (queue drain → session dispose → web stop → process.exit) that SIGINT uses.
 *
 * If no handler has been registered yet (e.g. during tests), the fallback
 * is a simple delayed process.exit(0).
 */

type ShutdownFn = (signal: string) => Promise<void>;

let registeredShutdown: ShutdownFn | null = null;

/**
 * Register the graceful shutdown handler.
 * Called once by bootstrapRuntime() after all services are wired.
 */
export function registerShutdownHandler(handler: ShutdownFn): void {
  registeredShutdown = handler;
}

/**
 * Request a graceful shutdown of the entire runtime.
 *
 * If the runtime registered a handler via registerShutdownHandler(), it is
 * invoked (same path as SIGINT). Otherwise falls back to a simple
 * process.exit(0) after a short delay.
 *
 * @param reason Human-readable reason (logged).
 * @param delayMs Delay before fallback exit (only used when no handler is registered).
 */
export function requestGracefulShutdown(reason: string, delayMs = 800): void {
  // Allow tests to intercept without touching process.exit
  const testScheduler = (globalThis as { __PICLAW_EXIT_SCHEDULER__?: () => void }).__PICLAW_EXIT_SCHEDULER__;
  if (typeof testScheduler === "function") {
    testScheduler();
    return;
  }

  if (registeredShutdown) {
    console.log(`[shutdown] Graceful shutdown requested: ${reason}`);
    void registeredShutdown(`exit_process: ${reason}`);
    return;
  }

  // Fallback: no runtime handler registered (standalone / test).
  console.log(`[shutdown] No runtime handler registered; scheduling process.exit in ${delayMs}ms — ${reason}`);
  setTimeout(() => process.exit(0), delayMs);
}
