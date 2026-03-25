// @ts-nocheck

const SOURCE_EDITABLE_PANE_IDS = new Set(['kanban-editor', 'mindmap-editor']);

export function resolveEffectiveTabPaneId(path, paneOverrideId, resolvePane) {
    const normalized = String(path || '').trim();
    if (!normalized) return null;
    if (paneOverrideId) return paneOverrideId;
    if (typeof resolvePane !== 'function') return null;
    const resolved = resolvePane({ path: normalized, mode: 'edit' });
    return resolved?.id || null;
}

export function canTabEditSource(path, paneOverrideId, resolvePane) {
    const paneId = resolveEffectiveTabPaneId(path, paneOverrideId, resolvePane);
    return SOURCE_EDITABLE_PANE_IDS.has(paneId);
}

export { SOURCE_EDITABLE_PANE_IDS };
