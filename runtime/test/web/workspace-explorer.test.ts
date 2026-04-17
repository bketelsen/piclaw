import { expect, test } from 'bun:test';

import { getWorkspaceTouchStartIntent } from '../../web/src/components/workspace-explorer.ts';

function createRowTarget(options: { path?: string; type?: string; isDragHandle?: boolean } = {}) {
  const row = {
    dataset: {
      path: options.path ?? '/workspace/demo.md',
      type: options.type ?? 'file',
    },
  };
  return {
    closest(selector: string) {
      if (selector === '.workspace-node-icon, .workspace-label-text') {
        return options.isDragHandle ? this : null;
      }
      return selector === '.workspace-row' ? row : null;
    },
    classList: {
      contains(token: string) {
        return token === 'workspace-drag-handle' ? Boolean(options.isDragHandle) : false;
      },
    },
  };
}

test('workspace touch start only prepares drag state and does not arm file deletion', () => {
  const intent = getWorkspaceTouchStartIntent({
    target: createRowTarget({ path: '/workspace/demo.md', type: 'file' }),
    touches: [{ clientX: 24, clientY: 36 }],
  });

  expect(intent).toEqual({
    type: 'file',
    path: '/workspace/demo.md',
    dragPath: null,
    startX: 24,
    startY: 36,
  });
});

test('workspace touch start still enables drag mode from explicit drag handles', () => {
  const intent = getWorkspaceTouchStartIntent({
    target: createRowTarget({ path: '/workspace/demo.md', type: 'file', isDragHandle: true }),
    touches: [{ clientX: 10, clientY: 15 }],
  });

  expect(intent?.dragPath).toBe('/workspace/demo.md');
});

test('workspace touch start ignores rows that are being renamed', () => {
  const intent = getWorkspaceTouchStartIntent({
    target: createRowTarget({ path: '/workspace/demo.md', type: 'file' }),
    touches: [{ clientX: 1, clientY: 2 }],
  }, '/workspace/demo.md');

  expect(intent).toBeNull();
});
