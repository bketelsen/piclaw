import { afterEach, expect, test } from 'bun:test';

import { paneRegistry, terminalPaneExtension, terminalTabPaneExtension } from '../panes/index.js';
import { registerAppPaneExtensions } from './app-shell-bootstrap.js';

function resetPaneRegistry(): void {
  for (const extension of paneRegistry.list()) {
    paneRegistry.unregister(extension.id);
  }
}

afterEach(() => {
  resetPaneRegistry();
});

test('registerAppPaneExtensions keeps only terminal panes registered', () => {
  resetPaneRegistry();

  registerAppPaneExtensions();

  expect(paneRegistry.list().map((extension) => extension.id)).toEqual([
    terminalPaneExtension.id,
    terminalTabPaneExtension.id,
  ]);
});
