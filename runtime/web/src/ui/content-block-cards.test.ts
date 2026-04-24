import { expect, test } from 'bun:test';

import {
  buildAdaptiveCardSubmissionFallbackText,
  describeAdaptiveCardSubmission,
  extractAdaptiveCardBlocks,
  extractAdaptiveCardSubmissionBlocks,
} from './content-block-cards.js';

test('extracts adaptive card and submission blocks from mixed content', () => {
  const blocks = [
    { type: 'text', text: 'hello' },
    {
      type: 'adaptive_card',
      card_id: 'card-1',
      schema_version: '1.5',
      state: 'active',
      payload: { type: 'AdaptiveCard', version: '1.5', body: [] },
      fallback_text: 'Card fallback',
    },
    {
      type: 'adaptive_card_submission',
      card_id: 'card-1',
      source_post_id: 42,
      submitted_at: '2026-03-15T12:00:00.000Z',
      action_type: 'Action.Submit',
      title: 'Review',
      data: { approved: true },
    },
  ];

  expect(extractAdaptiveCardBlocks(blocks)).toHaveLength(1);
  expect(extractAdaptiveCardSubmissionBlocks(blocks)).toHaveLength(1);
});

test('builds adaptive card submission fallback text without internal fields', () => {
  expect(buildAdaptiveCardSubmissionFallbackText({
    type: 'adaptive_card_submission',
    card_id: 'card-7',
    source_post_id: 47,
    submitted_at: '2026-03-15T12:05:00.000Z',
    action_type: 'Action.Submit',
    title: 'Triage',
    data: {
      owner: 'ops',
      approved: true,
      __internal: 'ignore-me',
    },
  })).toBe('Card submission: Triage — owner: ops, approved: yes');
});

test('describes adaptive card submissions with visible fields only', () => {
  expect(describeAdaptiveCardSubmission({
    type: 'adaptive_card_submission',
    card_id: 'card-3',
    source_post_id: 44,
    submitted_at: '2026-03-15T12:02:00.000Z',
    action_type: 'Action.Submit',
    title: 'Launch checklist',
    data: {
      region: 'iad',
      approved: false,
      __secret: 'hidden',
    },
  })).toEqual({
    title: 'Launch checklist',
    summary: 'region: iad, approved: no',
    fields: [
      { key: 'region', value: 'iad' },
      { key: 'approved', value: 'no' },
    ],
    fieldCount: 2,
    submittedAt: '2026-03-15T12:02:00.000Z',
  });
});
