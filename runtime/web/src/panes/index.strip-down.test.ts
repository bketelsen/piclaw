import { expect, test } from 'bun:test';

import * as panes from './index.js';

test('pane barrel exposes only terminal runtime values', () => {
  expect(Object.keys(panes).sort()).toEqual([
    'TERMINAL_TAB_PATH',
    'paneRegistry',
    'tabStore',
    'terminalPaneExtension',
    'terminalTabPaneExtension',
  ]);
});
