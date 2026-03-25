import { describe, expect, test } from 'bun:test';

import {
  SOURCE_EDITABLE_PANE_IDS,
  canTabEditSource,
  resolveEffectiveTabPaneId,
} from '../../web/src/ui/tab-source-editor.js';

describe('tab source editor helpers', () => {
  test('only the specialized kanban and mindmap panes are source-editable', () => {
    expect(Array.from(SOURCE_EDITABLE_PANE_IDS).sort()).toEqual(['kanban-editor', 'mindmap-editor']);
  });

  test('uses the pane override when present', () => {
    const resolved = resolveEffectiveTabPaneId('boards/team.kanban.md', 'editor', () => ({ id: 'kanban-editor' }));
    expect(resolved).toBe('editor');
  });

  test('falls back to pane resolution when no override exists', () => {
    const resolved = resolveEffectiveTabPaneId('maps/plan.mindmap.yaml', null, ({ path }: any) =>
      String(path).endsWith('.mindmap.yaml') ? { id: 'mindmap-editor' } : { id: 'editor' }
    );
    expect(resolved).toBe('mindmap-editor');
  });

  test('shows Edit Source only for kanban and mindmap tabs while they are in specialized mode', () => {
    const resolvePane = ({ path }: any) => {
      if (String(path).endsWith('.kanban.md')) return { id: 'kanban-editor' };
      if (String(path).endsWith('.mindmap.yaml')) return { id: 'mindmap-editor' };
      return { id: 'editor' };
    };

    expect(canTabEditSource('boards/team.kanban.md', null, resolvePane)).toBe(true);
    expect(canTabEditSource('maps/plan.mindmap.yaml', null, resolvePane)).toBe(true);
    expect(canTabEditSource('boards/team.kanban.md', 'editor', resolvePane)).toBe(false);
    expect(canTabEditSource('notes/todo.md', null, resolvePane)).toBe(false);
  });
});
