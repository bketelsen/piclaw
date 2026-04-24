/**
 * handlers/autoresearch-card-action.ts – Card-action handler for autoresearch stop button.
 *
 * Imported dynamically from web.ts when the user clicks "Stop Experiment"
 * on an autoresearch status card. Autoresearch is stripped from this runtime,
 * so the handler returns an explicit unavailable message.
 */

/**
 * Stop the currently running autoresearch experiment via card action.
 * @returns A human-readable status message suitable for timeline display.
 */
export async function stopAutoresearchFromCard(): Promise<string> {
  return "Autoresearch is not available in this runtime.";
}
