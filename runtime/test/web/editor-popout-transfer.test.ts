import { expect, test } from 'bun:test';

import {
  consumeEditorPopoutState,
  consumePanePopoutTransferToken,
  createEditorPopoutTransferPayload,
} from '../../web/src/panes/pane-popout-transfer.js';

function createStorage() {
  const map = new Map<string, string>();
  return {
    getItem: (key: string) => map.get(key) ?? null,
    setItem: (key: string, value: string) => {
      map.set(key, value);
    },
    removeItem: (key: string) => {
      map.delete(key);
    },
    size: () => map.size,
  };
}

test('createEditorPopoutTransferPayload stores transferable editor state and consumeEditorPopoutState reads it once', () => {
  const localStorage = createStorage();
  const runtime = { localStorage } as any;

  const payload = createEditorPopoutTransferPayload({
    path: '/workspace/notes.md',
    content: '# Draft',
    paneOverrideId: 'editor',
    viewState: { cursorLine: 3, cursorCol: 5, scrollTop: 42 },
  }, runtime, 1_000);

  expect(payload).toEqual({ editor_popout: expect.any(String) });
  expect(localStorage.size()).toBe(1);

  const restored = consumeEditorPopoutState(payload?.editor_popout, runtime, 1_500);
  expect(restored).toEqual({
    path: '/workspace/notes.md',
    content: '# Draft',
    mtime: undefined,
    paneOverrideId: 'editor',
    viewState: { cursorLine: 3, cursorCol: 5, scrollTop: 42 },
    capturedAt: 1_000,
  });
  expect(localStorage.size()).toBe(0);
  expect(consumeEditorPopoutState(payload?.editor_popout, runtime, 1_500)).toBeNull();
});

test('consumeEditorPopoutState expires stale transfer payloads', () => {
  const localStorage = createStorage();
  const runtime = { localStorage } as any;

  const payload = createEditorPopoutTransferPayload({
    path: '/workspace/notes.md',
    paneOverrideId: 'editor',
  }, runtime, 1_000);

  expect(consumeEditorPopoutState(payload?.editor_popout, runtime, 1_000 + (5 * 60 * 1000) + 1)).toBeNull();
});

test('consumeEditorPopoutState tolerates cleanup failures after reading state', () => {
  const localStorage = createStorage();
  const token = 'tok-throwing-remove';
  localStorage.setItem(`piclaw:editor-popout:${token}`, JSON.stringify({
    path: '/workspace/notes.md',
    content: '# Draft',
    capturedAt: 1_000,
  }));
  const runtime = {
    localStorage: {
      getItem: localStorage.getItem,
      setItem: localStorage.setItem,
      removeItem: () => {
        throw new Error('blocked');
      },
    },
  } as any;

  expect(consumeEditorPopoutState(token, runtime, 1_100)).toEqual({
    path: '/workspace/notes.md',
    content: '# Draft',
    mtime: undefined,
    paneOverrideId: null,
    viewState: null,
    capturedAt: 1_000,
  });
});

test('consumePanePopoutTransferToken removes the query parameter after reading it', () => {
  const calls: string[] = [];
  const runtime = {
    window: {
      location: { href: 'https://example.test/?chat_jid=web%3Adefault&editor_popout=tok-123' },
      history: {
        state: { from: 'test' },
        replaceState: (_state: unknown, _title: string, url: string) => calls.push(url),
      },
      document: { title: 'PiClaw' },
    },
  } as any;

  expect(consumePanePopoutTransferToken('editor_popout', runtime)).toBe('tok-123');
  expect(calls).toHaveLength(1);
  expect(calls[0]).not.toContain('editor_popout=');
  expect(calls[0]).toContain('chat_jid=web%3Adefault');
});
