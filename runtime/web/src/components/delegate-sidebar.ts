// @ts-nocheck
import { html, useState, useEffect } from '../vendor/preact-htm.js';

// ── Sub-components ────────────────────────────────────────────────────────────

function ActiveDelegateCard({ delegate, nowMs }) {
    const elapsedSec = Math.floor((nowMs - new Date(delegate.startedAt).getTime()) / 1000);
    return html`
        <div class="delegate-card delegate-card-active">
            <div class="delegate-card-header">
                <span class="delegate-spinner" aria-hidden="true"></span>
                <span class="delegate-card-agent">${delegate.agentName}</span>
                <span class="delegate-card-elapsed">${elapsedSec}s</span>
            </div>
            <div class="delegate-card-task">${delegate.task}</div>
        </div>
    `;
}

function CompletedDelegateCard({ delegate, onScrollToPost }) {
    const dotClass = delegate.status === 'error'
        ? 'delegate-status-dot delegate-status-dot-error'
        : 'delegate-status-dot delegate-status-dot-success';

    const handleView = () => {
        if (typeof onScrollToPost === 'function' && delegate.rowId != null) {
            onScrollToPost(delegate.rowId);
        }
    };

    return html`
        <div class="delegate-card delegate-card-completed">
            <div class="delegate-card-header">
                <span class=${dotClass} aria-hidden="true"></span>
                <span class="delegate-card-agent">${delegate.agentName}</span>
                <span class="delegate-card-elapsed">${delegate.elapsedSec}s</span>
            </div>
            <div class="delegate-card-task">${delegate.task}</div>
            ${delegate.rowId != null && html`
                <button
                    class="delegate-view-btn"
                    onClick=${handleView}
                    type="button"
                >
                    View result
                </button>
            `}
        </div>
    `;
}

// ── DelegateBadge ─────────────────────────────────────────────────────────────

export function DelegateBadge({ activeCount, completedCount, hasUnread, onToggle }) {
    if (activeCount + completedCount === 0) return null;

    return html`
        <button
            class=${`delegate-tab has-delegates${hasUnread ? ' has-unread' : ''}`}
            onClick=${onToggle}
            type="button"
            aria-label="Toggle agent delegates sidebar"
            title="Agent delegates"
        >
            ${activeCount > 0 && html`
                <span class="delegate-tab-dot active" aria-hidden="true"></span>
            `}
            ${hasUnread && html`
                <span class="delegate-tab-badge" aria-label="${activeCount + completedCount} agents">${activeCount + completedCount}</span>
            `}
        </button>
    `;
}

// ── DelegateSidebar ───────────────────────────────────────────────────────────

export function DelegateSidebar({ open, activeDelegates, completedDelegates, onClose, onScrollToPost }) {
    const [nowMs, setNowMs] = useState(() => Date.now());

    // Tick elapsed time while delegates are active
    useEffect(() => {
        if (!activeDelegates || activeDelegates.length === 0) return undefined;
        const interval = setInterval(() => setNowMs(Date.now()), 1000);
        return () => clearInterval(interval);
    }, [activeDelegates.length]);

    const hasActive = activeDelegates && activeDelegates.length > 0;
    const hasCompleted = completedDelegates && completedDelegates.length > 0;
    const isEmpty = !hasActive && !hasCompleted;

    return html`
        ${open && html`
            <div
                class="delegate-sidebar-backdrop"
                onClick=${onClose}
                aria-hidden="true"
            ></div>
        `}
        <aside
            class="delegate-sidebar"
            aria-label="Agent delegates"
            aria-hidden=${!open}
        >
            <div class="delegate-sidebar-header">
                <span class="delegate-sidebar-title">Agents</span>
                <button
                    class="delegate-sidebar-close"
                    onClick=${onClose}
                    type="button"
                    aria-label="Close"
                >×</button>
            </div>

            <div class="delegate-sidebar-body">
                ${hasActive && html`
                    <section class="delegate-section">
                        <div class="delegate-section-label">Running (${activeDelegates.length})</div>
                        ${activeDelegates.map(d => html`
                            <${ActiveDelegateCard}
                                key=${d.delegateJid}
                                delegate=${d}
                                nowMs=${nowMs}
                            />
                        `)}
                    </section>
                `}

                ${hasCompleted && html`
                    <section class="delegate-section">
                        <div class="delegate-section-label">Completed</div>
                        ${completedDelegates.map(d => html`
                            <${CompletedDelegateCard}
                                key=${d.delegateJid}
                                delegate=${d}
                                onScrollToPost=${onScrollToPost}
                            />
                        `)}
                    </section>
                `}

                ${isEmpty && html`
                    <div class="delegate-empty-state">No agents running</div>
                `}
            </div>
        </aside>
    `;
}
