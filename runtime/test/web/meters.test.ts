import { afterEach, expect, test } from 'bun:test';
import {
  METERS_COLLAPSED_EVENT_NAME,
  METERS_COLLAPSED_STORAGE_KEY,
  applyMetersCollapsed,
  readStoredMetersCollapsed,
  toggleMetersCollapsed,
} from '../../web/src/ui/meters.ts';

const originalWindow = globalThis.window;

function makeWindow(initial = {}) {
  const store = new Map(Object.entries(initial));
  const events: Array<{ type: string; detail: any }> = [];
  return {
    localStorage: {
      getItem: (key: string) => (store.has(key) ? String(store.get(key)) : null),
      setItem: (key: string, value: string) => {
        store.set(key, value);
      },
    },
    dispatchEvent: (event: Event & { detail?: any }) => {
      events.push({ type: event.type, detail: (event as any).detail });
      return true;
    },
    __events: events,
  } as any;
}

afterEach(() => {
  globalThis.window = originalWindow;
});

test('applyMetersCollapsed persists state and dispatches a collapsed-change event', () => {
  const win = makeWindow();
  globalThis.window = win;

  const next = applyMetersCollapsed(true);

  expect(next).toBe(true);
  expect(win.localStorage.getItem(METERS_COLLAPSED_STORAGE_KEY)).toBe('true');
  expect(win.__events).toEqual([
    { type: METERS_COLLAPSED_EVENT_NAME, detail: { collapsed: true } },
  ]);
});

test('toggleMetersCollapsed flips the stored collapsed state', () => {
  const win = makeWindow({ [METERS_COLLAPSED_STORAGE_KEY]: 'true' });
  globalThis.window = win;

  expect(readStoredMetersCollapsed(false)).toBe(true);
  expect(toggleMetersCollapsed()).toBe(false);
  expect(readStoredMetersCollapsed(false)).toBe(false);
});
