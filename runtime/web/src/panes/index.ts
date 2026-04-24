// @ts-nocheck
/**
 * panes/index.ts — Pane system barrel export.
 *
 * Re-exports types, registry, and built-in pane extensions.
 * The editor extension is lazy-loaded (CodeMirror stays out of core bundle).
 */

export type { PanePlacement, PaneCapability, PaneContext, PaneHostAttachContext, PaneHostDetachContext, PaneInstance, WebPaneExtension } from './pane-types.js';
export { paneRegistry } from './pane-registry.js';
export { terminalPaneExtension, terminalTabPaneExtension, TERMINAL_TAB_PATH } from './terminal-pane.js';
export type { TabState, TabViewState } from './tab-store.js';
export { tabStore } from './tab-store.js';
