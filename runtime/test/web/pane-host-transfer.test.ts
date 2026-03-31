import { expect, test } from 'bun:test';

import {
  consumePaneHostTransferFromLocation,
  consumePaneHostTransferState,
  createPaneHostTransferPayload,
} from '../../web/src/panes/pane-host-transfer.js';

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

test('createPaneHostTransferPayload stores generic pane host transfer state', () => {
  const localStorage = createStorage();
  const runtime = { localStorage } as any;

  const payload = createPaneHostTransferPayload({
    path: '/workspace/notes.md',
    payload: {
      kind: 'editor',
      content: '# Draft',
      dirty: true,
      viewState: { cursorLine: 3, cursorCol: 5, scrollTop: 42 },
    },
  }, runtime, 1_000);

  expect(payload).toEqual({ pane_transfer: expect.any(String) });
  expect(localStorage.size()).toBe(1);

  const restored = consumePaneHostTransferState(payload?.pane_transfer, runtime, 1_500);
  expect(restored).toEqual({
    path: '/workspace/notes.md',
    payload: {
      kind: 'editor',
      content: '# Draft',
      dirty: true,
      viewState: { cursorLine: 3, cursorCol: 5, scrollTop: 42 },
    },
    capturedAt: 1_000,
  });
  expect(localStorage.size()).toBe(0);
});

test('consumePaneHostTransferFromLocation reads and clears pane_transfer query params', () => {
  const localStorage = createStorage();
  localStorage.setItem('piclaw:pane-host-transfer:tok-1', JSON.stringify({
    path: 'piclaw://terminal',
    payload: { kind: 'terminal', live: true },
    capturedAt: 1_000,
  }));
  const calls: string[] = [];
  const runtime = {
    localStorage,
    window: {
      location: { href: 'https://example.test/?chat_jid=web%3Adefault&pane_transfer=tok-1' },
      history: {
        state: { from: 'test' },
        replaceState: (_state: unknown, _title: string, url: string) => calls.push(url),
      },
      document: { title: 'PiClaw' },
    },
  } as any;

  expect(consumePaneHostTransferFromLocation(runtime, 1_100)).toEqual({
    path: 'piclaw://terminal',
    payload: { kind: 'terminal', live: true },
    capturedAt: 1_000,
  });
  expect(calls).toHaveLength(1);
  expect(calls[0]).not.toContain('pane_transfer=');
});
