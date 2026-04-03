import { describe, expect, test } from 'bun:test';

import {
  buildComposeStatusDotClass,
  buildTurnDotClass,
  resolveRunningStatusIndicator,
  shouldShowRunningStatusDot,
} from '../../web/src/ui/status-dot.js';

describe('status dot helpers', () => {
  test('builds turn-dot classes with optional queued and pulsing modifiers', () => {
    expect(buildTurnDotClass()).toBe('turn-dot');
    expect(buildTurnDotClass({ steerQueued: true })).toBe('turn-dot turn-dot-queued');
    expect(buildTurnDotClass({ pulsing: true })).toBe('turn-dot turn-dot-pulsing');
    expect(buildTurnDotClass({ steerQueued: true, pulsing: true })).toBe('turn-dot turn-dot-queued turn-dot-pulsing');
  });

  test('builds compose status-dot classes with optional pulsing modifier', () => {
    expect(buildComposeStatusDotClass()).toBe('compose-inline-status-dot');
    expect(buildComposeStatusDotClass({ pulsing: true })).toBe('compose-inline-status-dot compose-inline-status-dot-pulsing');
  });

  test('resolves exactly one running indicator mode for status rows', () => {
    expect(resolveRunningStatusIndicator({ type: 'thinking' })).toBe('spinner');
    expect(resolveRunningStatusIndicator({ type: 'waiting' })).toBe('spinner');
    expect(resolveRunningStatusIndicator({ type: 'tool_call' })).toBe('spinner');
    expect(resolveRunningStatusIndicator({ type: 'tool_status' })).toBe('spinner');
    expect(resolveRunningStatusIndicator({ type: 'waiting', tool_name: 'bash' })).toBe('spinner');
    expect(resolveRunningStatusIndicator({ type: 'intent' })).toBe('dot');
    expect(resolveRunningStatusIndicator({ type: 'plan' })).toBe('dot');
    expect(resolveRunningStatusIndicator({ type: 'error' })).toBe('none');
    expect(resolveRunningStatusIndicator({ type: 'waiting' }, { isLastActivity: true })).toBe('none');
    expect(resolveRunningStatusIndicator(null, { pendingRequest: true })).toBe('dot');
  });

  test('hides running status dots for spinner/error/last-activity rows', () => {
    expect(shouldShowRunningStatusDot({ type: 'tool_call' })).toBe(false);
    expect(shouldShowRunningStatusDot({ type: 'tool_status' })).toBe(false);
    expect(shouldShowRunningStatusDot({ type: 'thinking' })).toBe(false);
    expect(shouldShowRunningStatusDot({ type: 'waiting', tool_name: 'bash' })).toBe(false);
    expect(shouldShowRunningStatusDot({ type: 'waiting', tool_args: { command: 'pwd' } })).toBe(false);
    expect(shouldShowRunningStatusDot({ type: 'tool_call' }, { isLastActivity: true })).toBe(false);
    expect(shouldShowRunningStatusDot({ type: 'error' })).toBe(false);
    expect(shouldShowRunningStatusDot({ type: 'plan' })).toBe(true);
    expect(shouldShowRunningStatusDot({ type: 'waiting' }, { isLastActivity: true })).toBe(false);
  });
});
