import { useCallback, useEffect, useMemo, useRef, useState } from '../vendor/preact-htm.js';
import {
  consumeEditorPopoutState,
  consumePanePopoutTransferToken,
  createEditorPopoutTransferPayload,
  type EditorPopoutTransferState,
} from '../panes/editor-popout-transfer.js';
import {
  createPaneDetachTransferParams,
  generatePaneDetachId,
  hasPaneDetachTransferState,
  readPaneDetachTransferState,
  type PaneDetachTransferState,
} from '../panes/pane-detach-transfer.js';
import {
  createPendingPaneOwnershipState,
  finalizePendingPaneOwnership,
  matchesPaneDetachClaim,
  type PendingPaneOwnershipState,
} from '../panes/pane-detach-state.js';
import {
  consumePaneHostTransferFromLocation,
  consumePaneHostTransferState,
  createPaneHostTransferPayload,
  type PaneHostTransferEnvelope,
} from '../panes/pane-host-transfer.js';
import { claimPaneLiveTransfer, clearPaneLiveTransferForPath } from '../panes/pane-live-transfer.js';
import { paneRegistry, tabStore } from '../panes/index.js';
import {
  getPanePopoutTitle,
  hasPanePopoutMenuActions,
  isVncPanePopoutPath,
  resolveActivePaneOverrideId,
  resolveActivePaneTab,
  shouldHidePanePopoutControls,
  shouldShowEditorPaneContainer,
} from './app-pane-state.js';

interface UsePaneRuntimeOrchestrationOptions {
  panePopoutMode: boolean;
  panePopoutPath: string;
  panePopoutLabel: string;
  chatOnlyMode: boolean;
  editorOpen: boolean;
  tabStripTabs: any[];
  tabStripActiveId: string | null;
  previewTabs: Set<string>;
  tabPaneOverrides: Map<string, string> | Record<string, string>;
  terminalTabPath: string;
  vncTabPrefix: string;
  openEditor: (path: string, options?: Record<string, unknown>) => void;
  closeEditor: () => void;
  getWorkspaceFile: (path: string, maxBytes: number, mode: string) => Promise<any>;
}

export function shouldRetainPaneDetachState(options: {
  panePath: string;
  openTabIds: Set<string>;
  pendingDetachedTabPaths?: Set<string>;
  detachedTabPaths?: Set<string>;
  terminalTabPath: string;
  hasPendingDetachedDockPane?: boolean;
  hasDetachedDockPane?: boolean;
}): boolean {
  const panePath = typeof options?.panePath === 'string' ? options.panePath.trim() : '';
  if (!panePath) return false;
  if (options.openTabIds?.has(panePath)) return true;
  if (options.pendingDetachedTabPaths?.has?.(panePath)) return true;
  if (options.detachedTabPaths?.has?.(panePath)) return true;
  if (panePath === options.terminalTabPath) {
    return Boolean(options.hasPendingDetachedDockPane || options.hasDetachedDockPane);
  }
  return false;
}

export function removeSourcePaneAfterDetachClaim(options: {
  panePath: string;
  terminalTabPath: string;
  closeTab?: (panePath: string) => void;
  setDockVisible?: (visible: boolean) => void;
}): void {
  const panePath = typeof options?.panePath === 'string' ? options.panePath.trim() : '';
  if (!panePath) return;
  if (panePath === options.terminalTabPath) {
    options.setDockVisible?.(false);
    return;
  }
  options.closeTab?.(panePath);
}

interface DetachedPaneState {
  panePath: string;
  paneInstanceId: string;
  ownerWindowId: string;
  detachedAt: string;
  label?: string | null;
}

interface ReattachPaneOptions {
  closeDetachedWindow?: boolean;
}

function normalizeChangedPaths(update: any): string[] {
  const changedPaths = Array.isArray(update?.changed_paths)
    ? update.changed_paths
      .map((value: unknown) => (typeof value === 'string' ? value.trim() : ''))
      .filter(Boolean)
    : [];

  if (changedPaths.length > 0) {
    return changedPaths;
  }

  const fallbackPath = typeof update?.path === 'string' ? update.path.trim() : '';
  return fallbackPath ? [fallbackPath] : ['.'];
}

export function isWorkspaceUpdateRelevantForPath(activePath: string, updates: unknown): boolean {
  if (!activePath) return false;
  if (!Array.isArray(updates) || updates.length === 0) return true;

  return updates.some((update) => {
    const changedPaths = normalizeChangedPaths(update);
    return changedPaths.some((changedPath) => changedPath === '.' || changedPath === activePath);
  });
}

export async function invokePaneAfterAttachToHost(
  instance: { afterAttachToHost?: (context: { path?: string; hostMode: 'main' | 'popout'; transferState?: Record<string, unknown> | null }) => Promise<void> | void } | null | undefined,
  context: { path?: string; hostMode: 'main' | 'popout'; transferState?: Record<string, unknown> | null },
): Promise<void> {
  if (typeof instance?.afterAttachToHost !== 'function') return;
  await instance.afterAttachToHost(context);
}

export interface PanePopoutReattachRequestMessage {
  type: 'piclaw-pane-reattach-request';
  panePath: string;
  paneInstanceId?: string;
  editorPopoutToken?: string;
  paneTransferToken?: string;
}

export function buildPanePopoutReattachRequestMessage(options: {
  panePath: string;
  paneInstanceId?: string | null;
  paneOverrideId?: string | null;
  terminalTabPath: string;
  viewState?: Record<string, unknown> | null;
  instance?: {
    exportHostTransferState?: () => Record<string, unknown> | null;
    getContent?: () => string | undefined;
    isDirty?: () => boolean;
  } | null;
  runtime?: any;
  nowMs?: number;
}): PanePopoutReattachRequestMessage | null {
  const panePath = typeof options?.panePath === 'string' ? options.panePath.trim() : '';
  if (!panePath) return null;

  const runtime = options?.runtime ?? globalThis;
  const nowMs = typeof options?.nowMs === 'number' ? options.nowMs : Date.now();
  const paneInstanceId = typeof options?.paneInstanceId === 'string' ? options.paneInstanceId.trim() : '';
  const paneOverrideId = typeof options?.paneOverrideId === 'string' ? options.paneOverrideId.trim() : '';
  const terminalTabPath = typeof options?.terminalTabPath === 'string' ? options.terminalTabPath : 'piclaw://terminal';
  const instance = options?.instance || null;
  const exportedHostTransfer = typeof instance?.exportHostTransferState === 'function'
    ? instance.exportHostTransferState()
    : null;
  const paneTransfer = exportedHostTransfer
    ? createPaneHostTransferPayload({
      path: panePath,
      payload: exportedHostTransfer,
    }, runtime, nowMs)
    : null;

  let editorTransfer: Record<string, string> | null = null;
  if (panePath !== terminalTabPath) {
    const exportedMtime = exportedHostTransfer && typeof exportedHostTransfer === 'object'
      ? (typeof (exportedHostTransfer as Record<string, unknown>).mtime === 'string'
        ? (exportedHostTransfer as Record<string, unknown>).mtime as string
        : ((exportedHostTransfer as Record<string, unknown>).mtime === null ? null : undefined))
      : undefined;
    const isDirty = typeof instance?.isDirty === 'function' ? instance.isDirty() : false;
    const content = typeof instance?.getContent === 'function' ? instance.getContent() : undefined;
    editorTransfer = createEditorPopoutTransferPayload({
      path: panePath,
      content: isDirty ? content : undefined,
      mtime: exportedMtime,
      paneOverrideId: paneOverrideId || null,
      viewState: options?.viewState || null,
    }, runtime, nowMs);
  }

  return {
    type: 'piclaw-pane-reattach-request',
    panePath,
    ...(paneInstanceId ? { paneInstanceId } : {}),
    ...(editorTransfer?.editor_popout ? { editorPopoutToken: editorTransfer.editor_popout } : {}),
    ...(paneTransfer?.pane_transfer ? { paneTransferToken: paneTransfer.pane_transfer } : {}),
  };
}

export function consumePanePopoutReattachRequestMessage(options: {
  payload: any;
  runtime?: any;
  nowMs?: number;
}): {
  panePath: string;
  paneInstanceId: string | null;
  editorTransfer: EditorPopoutTransferState | null;
  hostTransfer: PaneHostTransferEnvelope | null;
} | null {
  const panePath = typeof options?.payload?.panePath === 'string' ? options.payload.panePath.trim() : '';
  if (!panePath) return null;
  const runtime = options?.runtime ?? globalThis;
  const nowMs = typeof options?.nowMs === 'number' ? options.nowMs : Date.now();
  const paneInstanceId = typeof options?.payload?.paneInstanceId === 'string' && options.payload.paneInstanceId.trim()
    ? options.payload.paneInstanceId.trim()
    : null;
  const editorPopoutToken = typeof options?.payload?.editorPopoutToken === 'string' ? options.payload.editorPopoutToken.trim() : '';
  const paneTransferToken = typeof options?.payload?.paneTransferToken === 'string' ? options.payload.paneTransferToken.trim() : '';

  const editorTransfer = editorPopoutToken
    ? consumeEditorPopoutState(editorPopoutToken, runtime, nowMs)
    : null;
  const hostTransfer = paneTransferToken
    ? consumePaneHostTransferState(paneTransferToken, runtime, nowMs)
    : null;

  return {
    panePath,
    paneInstanceId,
    editorTransfer: editorTransfer?.path === panePath ? editorTransfer : null,
    hostTransfer: hostTransfer?.path === panePath ? hostTransfer : null,
  };
}

export function usePaneRuntimeOrchestration(options: UsePaneRuntimeOrchestrationOptions) {
  const {
    panePopoutMode,
    panePopoutPath,
    panePopoutLabel,
    chatOnlyMode,
    editorOpen,
    tabStripTabs,
    tabStripActiveId,
    previewTabs,
    tabPaneOverrides,
    terminalTabPath,
    vncTabPrefix,
    openEditor,
    closeEditor,
    getWorkspaceFile,
  } = options;

  const editorContainerRef = useRef<any>(null);
  const editorInstanceRef = useRef<any>(null);
  const dockContainerRef = useRef<any>(null);
  const dockInstanceRef = useRef<any>(null);

  const pendingEditorPopoutTransferRef = useRef<EditorPopoutTransferState | null>((() => {
    if (!panePopoutMode) return null;
    const token = consumePanePopoutTransferToken('editor_popout');
    return consumeEditorPopoutState(token);
  })());
  const pendingPaneHostTransferRef = useRef<PaneHostTransferEnvelope | null>((() => {
    if (!panePopoutMode) return null;
    return consumePaneHostTransferFromLocation();
  })());
  const paneDetachTransferRef = useRef<PaneDetachTransferState>(readPaneDetachTransferState({
    search: typeof window !== 'undefined' ? window.location.search : '',
    panePath: panePopoutPath,
    paneLabel: panePopoutLabel,
  }));
  const currentWindowIdRef = useRef<string>(paneDetachTransferRef.current.paneWindowId || generatePaneDetachId('pane-window'));
  const pendingReattachEditorTransfersRef = useRef<Map<string, EditorPopoutTransferState>>(new Map());
  const pendingReattachPaneHostTransfersRef = useRef<Map<string, PaneHostTransferEnvelope>>(new Map());
  const panePopoutReattachSentRef = useRef(false);
  const tabPaneInstanceIdsRef = useRef<Map<string, string>>(new Map());
  const dockPaneInstanceIdRef = useRef<string>(generatePaneDetachId('pane-instance'));
  const detachedWindowHandlesRef = useRef<Map<string, any>>(new Map());
  const [pendingDetachedTabs, setPendingDetachedTabs] = useState<Map<string, PendingPaneOwnershipState>>(() => new Map());
  const pendingDetachedTabsRef = useRef(pendingDetachedTabs);
  pendingDetachedTabsRef.current = pendingDetachedTabs;
  const [detachedTabs, setDetachedTabs] = useState<Map<string, DetachedPaneState>>(() => new Map());
  const detachedTabsRef = useRef(detachedTabs);
  detachedTabsRef.current = detachedTabs;
  const [pendingDetachedDockPane, setPendingDetachedDockPane] = useState<PendingPaneOwnershipState | null>(null);
  const pendingDetachedDockPaneRef = useRef<PendingPaneOwnershipState | null>(pendingDetachedDockPane);
  pendingDetachedDockPaneRef.current = pendingDetachedDockPane;
  const [detachedDockPane, setDetachedDockPane] = useState<DetachedPaneState | null>(null);
  const detachedDockPaneRef = useRef<DetachedPaneState | null>(detachedDockPane);
  detachedDockPaneRef.current = detachedDockPane;

  const hasDockPanes = paneRegistry.getDockPanes().length > 0;
  const [dockVisible, setDockVisible] = useState(false);
  const toggleDock = useCallback(() => setDockVisible((visible) => !visible), []);

  const openTerminalTab = useCallback(() => {
    openEditor(terminalTabPath, { label: 'Terminal' });
  }, [openEditor, terminalTabPath]);

  const openVncTab = useCallback(() => {
    openEditor(vncTabPrefix, { label: 'VNC' });
  }, [openEditor, vncTabPrefix]);

  const ensurePaneInstanceId = useCallback((panePath: string) => {
    const normalizedPath = typeof panePath === 'string' ? panePath.trim() : '';
    if (!normalizedPath) return generatePaneDetachId('pane-instance');
    if (normalizedPath === terminalTabPath) {
      if (!dockPaneInstanceIdRef.current) {
        dockPaneInstanceIdRef.current = generatePaneDetachId('pane-instance');
      }
      return dockPaneInstanceIdRef.current;
    }
    const existing = tabPaneInstanceIdsRef.current.get(normalizedPath);
    if (existing) return existing;
    const next = generatePaneDetachId('pane-instance');
    tabPaneInstanceIdsRef.current.set(normalizedPath, next);
    return next;
  }, [terminalTabPath]);

  const activeDetachedTab = useMemo(
    () => (!panePopoutMode && tabStripActiveId ? detachedTabs.get(tabStripActiveId) || null : null),
    [detachedTabs, panePopoutMode, tabStripActiveId],
  );
  const dockPaneDetached = !panePopoutMode ? detachedDockPane : null;

  const clearPendingDetachedPane = useCallback((panePath: string) => {
    if (!panePath) return;
    clearPaneLiveTransferForPath(panePath);
    if (panePath === terminalTabPath) {
      setPendingDetachedDockPane((current) => (current?.panePath === panePath ? null : current));
      return;
    }
    setPendingDetachedTabs((current) => {
      if (!current.has(panePath)) return current;
      const next = new Map(current);
      next.delete(panePath);
      return next;
    });
  }, [terminalTabPath]);

  const clearDetachedPane = useCallback((panePath: string) => {
    if (!panePath) return;
    detachedWindowHandlesRef.current.delete(panePath);
    clearPendingDetachedPane(panePath);
    if (panePath === terminalTabPath) {
      setDetachedDockPane((current) => (current?.panePath === panePath ? null : current));
      return;
    }
    setDetachedTabs((current) => {
      if (!current.has(panePath)) return current;
      const next = new Map(current);
      next.delete(panePath);
      return next;
    });
  }, [clearPendingDetachedPane, terminalTabPath]);

  const reattachPane = useCallback((panePath: string, options: ReattachPaneOptions = {}) => {
    const normalizedPath = typeof panePath === 'string' ? panePath.trim() : '';
    if (!normalizedPath) return false;

    const handle = detachedWindowHandlesRef.current.get(normalizedPath);
    clearDetachedPane(normalizedPath);

    if (normalizedPath === terminalTabPath) {
      setDockVisible(true);
    } else {
      const activeTab = tabStore.get(normalizedPath);
      if (activeTab) {
        tabStore.activate(normalizedPath);
      } else {
        openEditor(normalizedPath);
      }
    }

    if (options.closeDetachedWindow !== false && handle && typeof handle.close === 'function') {
      try {
        handle.close();
      } catch {
        /* expected: detached window may already be closing or gone. */
      }
    }

    return true;
  }, [clearDetachedPane, openEditor, terminalTabPath]);

  const buildPaneDetachTransfer = useCallback((panePath: string) => {
    const normalizedPath = typeof panePath === 'string' ? panePath.trim() : '';
    if (!normalizedPath) return null;
    const paneInstanceId = ensurePaneInstanceId(normalizedPath);
    const paneWindowId = generatePaneDetachId('pane-window');
    return {
      paneInstanceId,
      paneWindowId,
      params: createPaneDetachTransferParams({
        paneInstanceId,
        paneWindowId,
        paneSourceWindowId: currentWindowIdRef.current,
      }),
    };
  }, [ensurePaneInstanceId]);

  const registerDetachedPaneWindow = useCallback((panePath: string, label?: string | null, openedWindow?: any, detachParams?: Record<string, string> | null) => {
    const normalizedPath = typeof panePath === 'string' ? panePath.trim() : '';
    if (!normalizedPath || !detachParams) return;
    const pendingState = createPendingPaneOwnershipState({
      panePath: normalizedPath,
      paneInstanceId: detachParams.pane_instance_id,
      ownerWindowId: detachParams.pane_window_id,
      sourceWindowId: detachParams.pane_source_window_id,
      label,
    });
    if (!pendingState) return;

    detachedWindowHandlesRef.current.set(normalizedPath, openedWindow || null);
    if (normalizedPath === terminalTabPath) {
      setPendingDetachedDockPane(pendingState);
      return;
    }

    setPendingDetachedTabs((current) => {
      const next = new Map(current);
      next.set(normalizedPath, pendingState);
      return next;
    });
  }, [terminalTabPath]);

  const claimDetachedPaneWindow = useCallback((claim: { panePath?: string | null; paneInstanceId?: string | null; paneWindowId?: string | null }, sourceWindow?: any) => {
    const panePath = typeof claim?.panePath === 'string' ? claim.panePath.trim() : '';
    if (!panePath) return false;

    if (panePath === terminalTabPath) {
      const pending = pendingDetachedDockPaneRef.current;
      if (!matchesPaneDetachClaim(pending, claim)) return false;
      const expectedHandle = detachedWindowHandlesRef.current.get(panePath);
      if (expectedHandle && sourceWindow && expectedHandle !== sourceWindow) return false;
      const nextState = finalizePendingPaneOwnership(pending);
      if (!nextState) return false;
      setPendingDetachedDockPane(null);
      setDetachedDockPane(nextState);
      removeSourcePaneAfterDetachClaim({
        panePath,
        terminalTabPath,
        setDockVisible,
      });
      return true;
    }

    const pending = pendingDetachedTabsRef.current.get(panePath) || null;
    if (!matchesPaneDetachClaim(pending, claim)) return false;
    const expectedHandle = detachedWindowHandlesRef.current.get(panePath);
    if (expectedHandle && sourceWindow && expectedHandle !== sourceWindow) return false;
    const nextState = finalizePendingPaneOwnership(pending);
    if (!nextState) return false;
    setPendingDetachedTabs((current) => {
      if (!current.has(panePath)) return current;
      const next = new Map(current);
      next.delete(panePath);
      return next;
    });
    setDetachedTabs((current) => {
      const next = new Map(current);
      next.set(panePath, nextState);
      return next;
    });
    removeSourcePaneAfterDetachClaim({
      panePath,
      terminalTabPath,
      closeTab: (path) => tabStore.close(path),
    });
    return true;
  }, [setDockVisible, terminalTabPath]);

  const sendPanePopoutReattachRequest = useCallback((closeWindow = false) => {
    if (!panePopoutMode) return false;
    const detachState = paneDetachTransferRef.current;
    if (!hasPaneDetachTransferState(detachState)) return false;
    if (typeof window === 'undefined' || !window.opener || window.opener.closed) return false;
    if (panePopoutReattachSentRef.current) {
      if (closeWindow) {
        try {
          window.close();
        } catch {
          /* expected: some browsers ignore scripted close attempts. */
        }
      }
      return true;
    }

    const panePath = detachState.panePath || panePopoutPath;
    const instance = panePath === terminalTabPath ? dockInstanceRef.current : editorInstanceRef.current;
    const payload = buildPanePopoutReattachRequestMessage({
      panePath,
      paneInstanceId: detachState.paneInstanceId,
      paneOverrideId: panePath === terminalTabPath
        ? null
        : (typeof (tabPaneOverrides as any)?.get === 'function' ? ((tabPaneOverrides as any).get(panePath) || null) : null),
      terminalTabPath,
      viewState: panePath === terminalTabPath ? null : (tabStore.getViewState(panePath) || null),
      instance,
    });
    if (!payload) return false;

    try {
      window.opener.postMessage(payload, window.location.origin);
      panePopoutReattachSentRef.current = true;
    } catch {
      return false;
    }

    if (closeWindow) {
      try {
        window.close();
      } catch {
        /* expected: some browsers ignore scripted close attempts. */
      }
    }
    return true;
  }, [panePopoutMode, panePopoutPath, tabPaneOverrides, terminalTabPath]);

  const requestPanePopoutReattach = useCallback(() => sendPanePopoutReattachRequest(true), [sendPanePopoutReattachRequest]);

  useEffect(() => {
    if (!panePopoutMode || typeof window === 'undefined') return undefined;

    const flushReattachState = () => {
      sendPanePopoutReattachRequest(false);
    };

    window.addEventListener('pagehide', flushReattachState);
    window.addEventListener('beforeunload', flushReattachState);
    return () => {
      window.removeEventListener('pagehide', flushReattachState);
      window.removeEventListener('beforeunload', flushReattachState);
    };
  }, [panePopoutMode, sendPanePopoutReattachRequest]);

  const activePaneTab = useMemo(
    () => resolveActivePaneTab(tabStripTabs, tabStripActiveId),
    [tabStripActiveId, tabStripTabs],
  );

  const activePaneOverrideId = useMemo(
    () => resolveActivePaneOverrideId(tabPaneOverrides, tabStripActiveId),
    [tabPaneOverrides, tabStripActiveId],
  );

  const panePopoutTitle = useMemo(
    () => getPanePopoutTitle(panePopoutLabel, activePaneTab, panePopoutPath),
    [activePaneTab, panePopoutLabel, panePopoutPath],
  );

  const panePopoutHasMenuActions = useMemo(
    () => hasPanePopoutMenuActions(tabStripTabs, previewTabs, tabStripActiveId),
    [previewTabs, tabStripActiveId, tabStripTabs],
  );

  const isVncPanePopout = useMemo(
    () => isVncPanePopoutPath(panePopoutPath, vncTabPrefix),
    [panePopoutPath, vncTabPrefix],
  );

  const hidePanePopoutControls = useMemo(
    () => shouldHidePanePopoutControls(panePopoutPath, terminalTabPath, panePopoutHasMenuActions, isVncPanePopout),
    [isVncPanePopout, panePopoutHasMenuActions, panePopoutPath, terminalTabPath],
  );

  const showEditorPaneContainer = shouldShowEditorPaneContainer(
    panePopoutMode,
    chatOnlyMode,
    editorOpen,
    hasDockPanes,
    dockVisible,
  );

  const [zenMode, setZenMode] = useState(false);
  const zenDockWasVisibleRef = useRef(false);

  const enterZenMode = useCallback(() => {
    if (!editorOpen || chatOnlyMode) return;
    zenDockWasVisibleRef.current = dockVisible;
    if (dockVisible) setDockVisible(false);
    setZenMode(true);
  }, [chatOnlyMode, dockVisible, editorOpen]);

  const exitZenMode = useCallback(() => {
    if (!zenMode) return;
    setZenMode(false);
    if (zenDockWasVisibleRef.current) {
      setDockVisible(true);
      zenDockWasVisibleRef.current = false;
    }
  }, [zenMode]);

  const toggleZenMode = useCallback(() => {
    if (zenMode) {
      exitZenMode();
      return;
    }
    enterZenMode();
  }, [enterZenMode, exitZenMode, zenMode]);

  useEffect(() => {
    if (zenMode && !editorOpen) {
      exitZenMode();
    }
  }, [editorOpen, exitZenMode, zenMode]);

  useEffect(() => {
    const openTabIds = new Set(tabStripTabs.map((tab) => tab.id));
    const pendingDetachedTabPaths = new Set(pendingDetachedTabsRef.current.keys());
    const detachedTabPaths = new Set(detachedTabsRef.current.keys());
    for (const path of Array.from(tabPaneInstanceIdsRef.current.keys())) {
      if (!shouldRetainPaneDetachState({
        panePath: path,
        openTabIds,
        pendingDetachedTabPaths,
        detachedTabPaths,
        terminalTabPath,
        hasPendingDetachedDockPane: Boolean(pendingDetachedDockPaneRef.current),
        hasDetachedDockPane: Boolean(detachedDockPaneRef.current),
      })) {
        tabPaneInstanceIdsRef.current.delete(path);
      }
    }
  }, [tabStripTabs, terminalTabPath]);

  useEffect(() => {
    if (panePopoutMode || typeof window === 'undefined') return undefined;

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      const payload = event.data;
      if (!payload || typeof payload !== 'object') return;
      if (payload.type === 'piclaw-pane-detach-claim') {
        claimDetachedPaneWindow({
          panePath: payload.panePath,
          paneInstanceId: payload.paneInstanceId,
          paneWindowId: payload.paneWindowId,
        }, event.source);
        return;
      }
      if (payload.type !== 'piclaw-pane-reattach-request') return;
      const transfer = consumePanePopoutReattachRequestMessage({ payload });
      const panePath = transfer?.panePath || '';
      if (!panePath) return;
      if (transfer?.editorTransfer) {
        pendingReattachEditorTransfersRef.current.set(panePath, transfer.editorTransfer);
      }
      if (transfer?.hostTransfer) {
        pendingReattachPaneHostTransfersRef.current.set(panePath, transfer.hostTransfer);
      }
      if (panePath === terminalTabPath) {
        const detached = detachedDockPaneRef.current;
        if (!detached) return;
        if (transfer?.paneInstanceId && transfer.paneInstanceId !== detached.paneInstanceId) return;
        reattachPane(panePath, { closeDetachedWindow: false });
        return;
      }
      const detached = detachedTabsRef.current.get(panePath);
      if (!detached) return;
      if (transfer?.paneInstanceId && transfer.paneInstanceId !== detached.paneInstanceId) return;
      reattachPane(panePath, { closeDetachedWindow: false });
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [claimDetachedPaneWindow, panePopoutMode, reattachPane, terminalTabPath]);

  useEffect(() => {
    if (panePopoutMode) return undefined;
    const timer = setInterval(() => {
      for (const [panePath, handle] of detachedWindowHandlesRef.current.entries()) {
        if (!handle || !handle.closed) continue;
        const isPending = panePath === terminalTabPath
          ? Boolean(pendingDetachedDockPaneRef.current)
          : pendingDetachedTabsRef.current.has(panePath);
        if (isPending) {
          detachedWindowHandlesRef.current.delete(panePath);
          clearPendingDetachedPane(panePath);
          continue;
        }
        reattachPane(panePath, { closeDetachedWindow: false });
      }
    }, 750);
    return () => clearInterval(timer);
  }, [clearPendingDetachedPane, panePopoutMode, reattachPane, terminalTabPath]);

  useEffect(() => {
    if (!panePopoutMode || !panePopoutPath) return;
    const activeId = tabStore.getActiveId();
    if (activeId === panePopoutPath) return;
    const transfer = pendingEditorPopoutTransferRef.current?.path === panePopoutPath
      ? pendingEditorPopoutTransferRef.current
      : null;
    openEditor(panePopoutPath, {
      ...(panePopoutLabel ? { label: panePopoutLabel } : {}),
      ...(transfer?.paneOverrideId ? { paneOverrideId: transfer.paneOverrideId } : {}),
      ...(transfer?.viewState ? { viewState: transfer.viewState } : {}),
    });
  }, [openEditor, panePopoutLabel, panePopoutMode, panePopoutPath]);

  useEffect(() => {
    if (!panePopoutMode) return;
    const detachState = paneDetachTransferRef.current;
    if (!hasPaneDetachTransferState(detachState)) return;
    if (typeof window === 'undefined' || !window.opener || window.opener.closed) return;
    try {
      window.opener.postMessage({
        type: 'piclaw-pane-detach-claim',
        panePath: detachState.panePath,
        paneInstanceId: detachState.paneInstanceId,
        paneWindowId: detachState.paneWindowId,
      }, window.location.origin);
    } catch {
      /* expected: opener can disappear before the popout completes boot. */
    }
  }, [panePopoutMode]);

  useEffect(() => {
    const container = editorContainerRef.current;
    if (!container) return;

    if (editorInstanceRef.current) {
      editorInstanceRef.current.dispose();
      editorInstanceRef.current = null;
    }

    const activeId = tabStripActiveId;
    if (!activeId) return;
    if (!panePopoutMode && activeDetachedTab?.panePath === activeId) {
      container.innerHTML = '';
      return;
    }

    const pendingPopoutTransfer = pendingEditorPopoutTransferRef.current?.path === activeId
      ? pendingEditorPopoutTransferRef.current
      : null;
    const pendingReattachTransfer = pendingReattachEditorTransfersRef.current.get(activeId) || null;
    const pendingTransfer = pendingPopoutTransfer || pendingReattachTransfer;
    const pendingPopoutHostTransfer = pendingPaneHostTransferRef.current?.path === activeId
      ? pendingPaneHostTransferRef.current
      : null;
    const pendingReattachHostTransfer = pendingReattachPaneHostTransfersRef.current.get(activeId) || null;
    const pendingHostTransfer = pendingPopoutHostTransfer || pendingReattachHostTransfer;
    const effectivePaneOverrideId = activePaneOverrideId || pendingTransfer?.paneOverrideId || null;
    const context = {
      path: activeId,
      mode: 'edit',
      ...(pendingTransfer?.content !== undefined ? { content: pendingTransfer.content } : {}),
      ...(pendingTransfer?.mtime !== undefined ? { mtime: pendingTransfer.mtime } : {}),
      ...(pendingHostTransfer?.payload ? { transferState: pendingHostTransfer.payload } : {}),
    };
    const ext = (effectivePaneOverrideId ? paneRegistry.get(effectivePaneOverrideId) : null)
      || paneRegistry.resolve(context)
      || paneRegistry.get('editor');

    if (!ext) {
      container.innerHTML = '<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';
      return;
    }

    let instance: any = null;
    let disposed = false;

    const bindInstance = (nextInstance: any) => {
      instance = nextInstance;
      editorInstanceRef.current = nextInstance;

      nextInstance.onDirtyChange?.((dirty: boolean) => {
        tabStore.setDirty(activeId, dirty);
      });

      nextInstance.onSaveRequest?.(() => {
        // Save is handled internally by pane extensions.
      });

      nextInstance.onClose?.(() => {
        closeEditor();
      });

      const viewState = tabStore.getViewState(activeId);
      if (viewState && typeof nextInstance.restoreViewState === 'function') {
        requestAnimationFrame(() => nextInstance.restoreViewState(viewState));
      }

      if (typeof nextInstance.onViewStateChange === 'function') {
        nextInstance.onViewStateChange((state: unknown) => {
          tabStore.saveViewState(activeId, state);
        });
      }

      void invokePaneAfterAttachToHost(nextInstance, {
        path: activeId,
        hostMode: panePopoutMode ? 'popout' : 'main',
        transferState: pendingHostTransfer?.payload || null,
      }).catch((error) => {
        console.warn('[pane-attach] afterAttachToHost failed:', error);
      });

      requestAnimationFrame(() => nextInstance.focus?.());
    };

    void (async () => {
      const detachState = paneDetachTransferRef.current;
      if (panePopoutMode
        && pendingHostTransfer
        && hasPaneDetachTransferState(detachState)
        && detachState.panePath === activeId
        && typeof window !== 'undefined'
        && window.opener
        && !window.opener.closed) {
        try {
          const claimedInstance = await claimPaneLiveTransfer(window.opener, {
            panePath: activeId,
            paneInstanceId: detachState.paneInstanceId || '',
            paneWindowId: detachState.paneWindowId || '',
          }, container, {
            path: activeId,
            hostMode: 'popout',
            transferState: pendingHostTransfer.payload || null,
          });
          if (!disposed && claimedInstance) {
            bindInstance(claimedInstance);
            if (pendingPopoutTransfer) {
              pendingEditorPopoutTransferRef.current = null;
            }
            if (pendingReattachTransfer) {
              pendingReattachEditorTransfersRef.current.delete(activeId);
            }
            if (pendingPopoutHostTransfer) {
              pendingPaneHostTransferRef.current = null;
            }
            if (pendingReattachHostTransfer) {
              pendingReattachPaneHostTransfersRef.current.delete(activeId);
            }
            return;
          }
        } catch (error) {
          console.warn('[pane-live-transfer] Failed to claim live pane instance:', error);
        }
      }

      if (disposed) return;
      bindInstance(ext.mount(container, context));
      if (pendingPopoutTransfer) {
        pendingEditorPopoutTransferRef.current = null;
      }
      if (pendingReattachTransfer) {
        pendingReattachEditorTransfersRef.current.delete(activeId);
      }
      if (pendingPopoutHostTransfer) {
        pendingPaneHostTransferRef.current = null;
      }
      if (pendingReattachHostTransfer) {
        pendingReattachPaneHostTransfersRef.current.delete(activeId);
      }
    })();

    return () => {
      disposed = true;
      if (editorInstanceRef.current === instance) {
        instance.dispose();
        editorInstanceRef.current = null;
      }
    };
  }, [activeDetachedTab, activePaneOverrideId, closeEditor, panePopoutMode, tabStripActiveId]);

  const refreshActiveEditorFromWorkspace = useCallback(async (updates: unknown) => {
    const activePath = typeof tabStripActiveId === 'string' ? tabStripActiveId.trim() : '';
    const instance = editorInstanceRef.current;
    if (!activePath || !instance?.setContent) return;
    if (typeof instance.isDirty === 'function' && instance.isDirty()) return;
    if (!isWorkspaceUpdateRelevantForPath(activePath, updates)) return;

    try {
      const payload = await getWorkspaceFile(activePath, 1_000_000, 'edit');
      const nextText = typeof payload?.text === 'string' ? payload.text : '';
      const nextMtime = typeof payload?.mtime === 'string' && payload.mtime.trim()
        ? payload.mtime.trim()
        : new Date().toISOString();
      instance.setContent(nextText, nextMtime);
    } catch (error) {
      console.warn('[workspace_update] Failed to refresh active pane:', error);
    }
  }, [getWorkspaceFile, tabStripActiveId]);

  useEffect(() => {
    const container = dockContainerRef.current;

    if (dockInstanceRef.current) {
      dockInstanceRef.current.dispose();
      dockInstanceRef.current = null;
    }

    if (!container || !hasDockPanes || !dockVisible) return;
    if (!panePopoutMode && dockPaneDetached?.panePath === terminalTabPath) {
      container.innerHTML = '';
      return;
    }

    const ext = paneRegistry.getDockPanes()[0];
    if (!ext) {
      container.innerHTML = '<div class="terminal-placeholder">No dock pane available.</div>';
      return;
    }

    const instance = ext.mount(container, { mode: 'view' });
    dockInstanceRef.current = instance;
    void invokePaneAfterAttachToHost(instance, {
      path: terminalTabPath,
      hostMode: panePopoutMode ? 'popout' : 'main',
      transferState: pendingPaneHostTransferRef.current?.path === terminalTabPath
        ? (pendingPaneHostTransferRef.current.payload || null)
        : null,
    }).catch((error) => {
      console.warn('[pane-attach] afterAttachToHost failed:', error);
    });
    if (pendingPaneHostTransferRef.current?.path === terminalTabPath) {
      pendingPaneHostTransferRef.current = null;
    }
    requestAnimationFrame(() => instance.focus?.());

    return () => {
      if (dockInstanceRef.current === instance) {
        instance.dispose();
        dockInstanceRef.current = null;
      }
    };
  }, [dockPaneDetached, dockVisible, hasDockPanes, panePopoutMode, terminalTabPath]);

  return {
    editorContainerRef,
    editorInstanceRef,
    dockContainerRef,
    dockInstanceRef,
    hasDockPanes,
    dockVisible,
    setDockVisible,
    toggleDock,
    openTerminalTab,
    openVncTab,
    panePopoutTitle,
    panePopoutHasMenuActions,
    hidePanePopoutControls,
    showEditorPaneContainer,
    zenMode,
    exitZenMode,
    toggleZenMode,
    refreshActiveEditorFromWorkspace,
    detachedTabs,
    activeDetachedTab,
    detachedDockPane: dockPaneDetached,
    buildPaneDetachTransfer,
    registerDetachedPaneWindow,
    reattachPane,
    requestPanePopoutReattach,
    canReattachPanePopout: panePopoutMode && hasPaneDetachTransferState(paneDetachTransferRef.current),
  };
}
