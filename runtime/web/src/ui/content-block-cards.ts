export interface AdaptiveCardBlock {
  type: 'adaptive_card';
  card_id: string;
  schema_version: string;
  state: 'active' | 'completed' | 'cancelled' | 'failed';
  payload: Record<string, unknown>;
  fallback_text?: string;
}

export interface AdaptiveCardSubmissionBlock {
  type: 'adaptive_card_submission';
  card_id: string;
  source_post_id: number;
  submitted_at: string;
  action_type: 'Action.Submit';
  title?: string;
  data?: unknown;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function formatSubmissionValue(value: unknown): string {
  if (value == null) return '';
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number') return String(value);
  if (typeof value === 'boolean') return value ? 'yes' : 'no';
  if (Array.isArray(value)) {
    return value.map((item) => formatSubmissionValue(item)).filter(Boolean).join(', ');
  }
  if (isRecord(value)) {
    return Object.entries(value)
      .filter(([key]) => !key.startsWith('__'))
      .map(([key, inner]) => `${key}: ${formatSubmissionValue(inner)}`)
      .filter((entry) => !entry.endsWith(': '))
      .join(', ');
  }
  return String(value).trim();
}

function getSubmissionFields(data: unknown): Array<{ key: string; value: string }> {
  if (!isRecord(data)) return [];
  return Object.entries(data)
    .filter(([key]) => !key.startsWith('__'))
    .map(([key, value]) => ({ key, value: formatSubmissionValue(value) }))
    .filter((entry) => entry.value);
}

export function isAdaptiveCardBlock(block: unknown): block is AdaptiveCardBlock {
  if (!isRecord(block)) return false;
  return block.type === 'adaptive_card'
    && typeof block.card_id === 'string'
    && typeof block.schema_version === 'string'
    && typeof block.state === 'string'
    && isRecord(block.payload);
}

export function extractAdaptiveCardBlocks(contentBlocks: unknown): AdaptiveCardBlock[] {
  if (!Array.isArray(contentBlocks)) return [];
  return contentBlocks.filter(isAdaptiveCardBlock);
}

export function isAdaptiveCardSubmissionBlock(block: unknown): block is AdaptiveCardSubmissionBlock {
  if (!isRecord(block)) return false;
  return block.type === 'adaptive_card_submission'
    && typeof block.card_id === 'string'
    && typeof block.source_post_id === 'number'
    && typeof block.submitted_at === 'string';
}

export function extractAdaptiveCardSubmissionBlocks(contentBlocks: unknown): AdaptiveCardSubmissionBlock[] {
  if (!Array.isArray(contentBlocks)) return [];
  return contentBlocks.filter(isAdaptiveCardSubmissionBlock);
}

export function buildAdaptiveCardSubmissionFallbackText(block: AdaptiveCardSubmissionBlock): string {
  const label = String(block.title || block.card_id || 'card').trim() || 'card';
  const data = block.data;
  if (data == null) return `Card submission: ${label}`;
  if (typeof data === 'string' || typeof data === 'number' || typeof data === 'boolean') {
    const formatted = formatSubmissionValue(data);
    return formatted ? `Card submission: ${label} — ${formatted}` : `Card submission: ${label}`;
  }
  if (isRecord(data)) {
    const entries = getSubmissionFields(data).map(({ key, value }) => `${key}: ${value}`);
    return entries.length > 0
      ? `Card submission: ${label} — ${entries.join(', ')}`
      : `Card submission: ${label}`;
  }
  return `Card submission: ${label}`;
}

export function describeAdaptiveCardSubmission(block: AdaptiveCardSubmissionBlock): {
  title: string;
  summary: string | null;
  fields: Array<{ key: string; value: string }>;
  fieldCount: number;
  submittedAt: string;
} {
  const title = String(block.title || block.card_id || 'Card submission').trim() || 'Card submission';
  const allFields = getSubmissionFields(block.data);
  const summary = allFields.length > 0
    ? allFields.slice(0, 2).map(({ key, value }) => `${key}: ${value}`).join(', ')
    : formatSubmissionValue(block.data) || null;

  return {
    title,
    summary,
    fields: allFields,
    fieldCount: allFields.length,
    submittedAt: block.submitted_at,
  };
}
