// @ts-nocheck
import { useState, useCallback } from '../vendor/preact-htm.js';

const MAX_COMPLETED = 30;

export function useDelegateState() {
  const [activeDelegates, setActiveDelegates] = useState([]);
  const [completedDelegates, setCompletedDelegates] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);

  const openSidebar = useCallback(() => { setSidebarOpen(true); setHasUnread(false); }, []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => { if (!prev) setHasUnread(false); return !prev; });
  }, []);

  const applyDelegateStarted = useCallback((payload) => {
    const d = {
      agentName: String(payload?.agent_name ?? ''),
      task: String(payload?.task ?? ''),
      startedAt: String(payload?.started_at ?? new Date().toISOString()),
      delegateJid: String(payload?.delegate_jid ?? ''),
    };
    setActiveDelegates(prev => [...prev.filter(x => x.delegateJid !== d.delegateJid), d]);
  }, []);

  const applyDelegateDone = useCallback((payload) => {
    const agentName = String(payload?.agent_name ?? '');
    const delegateJid = String(payload?.delegate_jid ?? '');
    const status = payload?.status === 'error' ? 'error' : 'success';
    const completed = {
      agentName,
      task: String(payload?.task ?? ''),
      startedAt: String(payload?.started_at ?? ''),
      completedAt: String(payload?.completed_at ?? new Date().toISOString()),
      elapsedSec: Number(payload?.elapsed_sec ?? 0),
      status,
      delegateJid,
      rowId: typeof payload?.row_id === 'number' ? payload.row_id : null,
    };
    setActiveDelegates(prev => prev.filter(d => d.delegateJid !== delegateJid));
    setCompletedDelegates(prev => [completed, ...prev].slice(0, MAX_COMPLETED));
    // Only auto-unread on success; errors show badge but don't force sidebar open
    setHasUnread(true);
    // Auto-open only on success
    if (status === 'success') setSidebarOpen(prev => { return prev; }); // caller handles auto-open
  }, []);

  const resyncActive = useCallback((delegates) => { setActiveDelegates(delegates ?? []); }, []);
  const markRead = useCallback(() => setHasUnread(false), []);

  return {
    activeDelegates,
    completedDelegates,
    sidebarOpen,
    hasUnread,
    openSidebar,
    closeSidebar,
    toggleSidebar,
    applyDelegateStarted,
    applyDelegateDone,
    resyncActive,
    markRead,
  };
}
