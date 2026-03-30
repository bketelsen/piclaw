import { expect, test } from 'bun:test';

import { buildDrawioEditorUrl } from '../../web/src/panes/drawio-pane.js';

test('buildDrawioEditorUrl routes pane tabs through the shared wrapper page', () => {
  expect(buildDrawioEditorUrl('/workspace/test-documents/sample.drawio')).toBe('/drawio/edit.html?path=%2Fworkspace%2Ftest-documents%2Fsample.drawio');
  expect(buildDrawioEditorUrl('notes/diagram.drawio')).toBe('/drawio/edit.html?path=notes%2Fdiagram.drawio');
  expect(buildDrawioEditorUrl('/workspace/test-documents/sample.drawio')).toContain('/drawio/edit.html');
  expect(buildDrawioEditorUrl('/workspace/test-documents/sample.drawio')).not.toContain('noSaveBtn=1');
});
