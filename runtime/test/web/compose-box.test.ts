import { expect, test } from 'bun:test';

import { getComposeHistoryStorageKey } from '../../web/src/components/compose-box.ts';

test('getComposeHistoryStorageKey keeps the legacy default key for the default chat', () => {
  expect(getComposeHistoryStorageKey()).toBe('piclaw_compose_history');
  expect(getComposeHistoryStorageKey('web:default')).toBe('piclaw_compose_history');
  expect(getComposeHistoryStorageKey('')).toBe('piclaw_compose_history');
});

test('getComposeHistoryStorageKey namespaces compose history by chat/agent', () => {
  expect(getComposeHistoryStorageKey('web:agent-alpha')).toBe('piclaw_compose_history:web%3Aagent-alpha');
  expect(getComposeHistoryStorageKey('whatsapp:+12345')).toBe('piclaw_compose_history:whatsapp%3A%2B12345');
});
