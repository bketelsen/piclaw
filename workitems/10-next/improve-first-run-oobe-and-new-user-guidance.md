---
id: improve-first-run-oobe-and-new-user-guidance
title: Improve first-run OOBE and guidance for new users
status: next
priority: medium
created: 2026-04-04
updated: 2026-04-06
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - ux
  - onboarding
  - oobe
  - docs
  - web
owner: pi
---

# Improve first-run OOBE and guidance for new users

## Summary

Create a clearer first-run / new-user experience for piclaw so someone opening
it for the first time can understand:

- what piclaw is
- what they need to configure first
- the difference between web login, provider login, and workspace setup
- the next recommended actions after the first successful load

This should cover both product UX and guidance surfaces, not just
documentation. The goal is to reduce confusion, dead ends, and “what do I do
now?” moments for new users.

## Problem Statement

The current new-user journey is spread across multiple separate concepts and
surfaces:

- web authentication / access
- certificate trust / passkey setup on some devices
- model-provider authentication
- workspace/project exploration
- optional advanced capabilities and tools

Each of those areas may make sense in isolation, but the combined first-run
experience is not yet staged clearly for someone who does not already know the
system.

## Entry points to design around

The umbrella should explicitly cover these first-run paths:

1. **Fresh unauthenticated web visit**
   - user lands on the web UI without existing auth/session state
2. **New device onboarding**
   - user may need TLS trust and/or passkey setup before normal use
3. **First authenticated visit with no provider configured**
   - user can access the UI but cannot yet use the preferred model/provider path
4. **First successful provider login**
   - user needs confirmation plus “what next?” guidance
5. **First workspace/project interaction**
   - user needs to understand what the workspace is for and what actions are safe/useful

## Narrow MVP framing

For the first implementation wave, this umbrella should produce a staged MVP
rather than one monolithic wizard.

### MVP stages

#### Stage 1 — access and trust
Help the user get into the product successfully:
- explain access/login state clearly
- link or hand off to trust/passkey onboarding where required
- avoid mixing provider/model setup into this step

#### Stage 2 — provider readiness
Once the user can use the UI:
- explain whether a model provider is configured
- point to the right login flow
- explain the difference between web auth and provider auth

#### Stage 3 — first-use orientation
After successful access + provider readiness:
- explain what the workspace is
- suggest one or two safe starter actions
- show a clear “what next?” path

## Out of scope for this umbrella ticket

- implementing every onboarding sub-flow directly in one ticket
- replacing the narrower `web-onboarding-mkcert-passkey` ticket
- a full docs rewrite across the whole project
- advanced user education for power-user/operator-only features

## Desired Behavior

- A first-time user can tell what state they are in.
- The product distinguishes clearly between:
  - web/session login
  - provider/model login
  - workspace/project setup
- The user always has a visible next action.
- In-product guidance is the primary surface; docs support rather than replace it.
- The resulting work can be split into smaller implementation tickets without losing the overall journey.

## Acceptance Criteria

- [ ] The major first-run entry points are inventoried with concrete state descriptions.
- [ ] Current first-run confusion points are documented with examples.
- [ ] A proposed MVP OOBE flow exists with explicit stages and user-facing copy direction.
- [ ] The MVP clarifies the difference between:
  - [ ] web/session login
  - [ ] provider/model login
  - [ ] workspace/project setup
- [ ] The MVP includes a clear “next steps” path after first successful login.
- [ ] Guidance is available in-product where possible rather than relying only on README/docs.
- [ ] Follow-up implementation tickets are split by area if needed, at minimum covering:
  - [ ] access/trust onboarding
  - [ ] provider login guidance
  - [ ] post-login welcome / empty-state guidance
  - [ ] docs/supporting copy updates

## Implementation Paths

### Path A — documentation-first guidance pass
1. Audit the current first-run experience.
2. Improve README / install docs / inline help copy.
3. Add lightweight in-app pointers to those docs.

**Pros:**
- low implementation risk
- fastest way to reduce confusion

**Cons:**
- still requires users to leave the product flow
- does not fully solve poor empty-state UX

### Path B — staged productized onboarding plus supporting docs (recommended)
1. Audit first-run entry points and confusing branches.
2. Define a compact staged OOBE surface:
   - welcome / status messaging
   - provider readiness guidance
   - workspace first-step guidance
3. Keep the narrower TLS/passkey onboarding as a linked sub-flow where relevant.
4. Use docs as supporting detail rather than the primary first-run surface.

**Pros:**
- addresses confusion where it happens
- preserves the difference between access setup and actual product onboarding
- naturally splits into smaller implementation tickets

**Cons:**
- touches product UX, content design, and docs together
- needs disciplined scoping to avoid becoming too broad

## Recommended Path

Path B — stage the journey explicitly, keep access/trust, provider readiness,
and first-use orientation separate, and split implementation by stage.

## Follow-up tickets this umbrella likely needs

The expected split should look roughly like:

1. **Access / trust onboarding**
   - likely continues or extends `web-onboarding-mkcert-passkey`
2. **Provider readiness guidance**
   - first-run guidance when no provider is configured
   - likely linked to `/login` / provider auth outcomes
3. **Post-login welcome / empty-state guidance**
   - first authenticated session with “what next?” guidance
4. **Docs/supporting copy cleanup**
   - README / install docs / inline help alignment

## Test Plan

- [ ] Validate the current first-run paths end to end and record confusion/failure points.
- [ ] Review the proposed OOBE flow against at least these scenarios:
  - [ ] first unauthenticated web visit
  - [ ] new device trust/passkey onboarding
  - [ ] first authenticated visit with no provider configured
  - [ ] first successful provider login
  - [ ] first workspace/project interaction
- [ ] Confirm the user can identify the next recommended action at each stage.
- [ ] Confirm new guidance does not obscure normal returning-user flows.

## Definition of Done

- [ ] First-run journey is documented as a concrete staged flow.
- [ ] MVP user-facing surfaces and copy are defined.
- [ ] Related setup/auth/doc gaps are split into implementation tickets where needed.
- [ ] Update history includes audit findings and recommended next actions.
- [ ] Ticket is either refined into `10-next/` or split into smaller ready tickets.

## Updates

### 2026-04-06
- Lane change: `00-inbox` → `10-next`.
- Promoted after refinement because the problem statement, staged MVP, and follow-up split are now explicit enough for prioritization against other ready work.
- Immediate next step: choose the first implementation slice and split the umbrella into concrete execution tickets for access/trust, provider readiness, and post-login orientation.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-04-06
- Refinement pass completed to turn this from a broad idea into a staged OOBE umbrella.
- Locked the design around five explicit entry points:
  - fresh unauthenticated visit
  - new-device onboarding
  - first authenticated visit with no provider configured
  - first successful provider login
  - first workspace/project interaction
- Split the intended MVP into three stages:
  - access and trust
  - provider readiness
  - first-use orientation
- Clarified that the narrower mkcert/passkey onboarding work remains a linked sub-flow rather than the whole OOBE story.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)
- Gap: the remaining step is to turn the umbrella into 2–4 concrete implementation tickets and decide which stage should ship first.

### 2026-04-04
- Created from direct request to track a broader first-run / new-user experience pass.
- Initial scope is intentionally broader than certificate/passkey onboarding alone: it should also cover login guidance, empty states, and “what next?” direction after first launch.
- Related existing onboarding ticket already covers the narrower mkcert + passkey flow; this ticket should act as the umbrella for the broader OOBE/guidance problem.
- Quality: ★★★☆☆ 5/10 (problem: 2, scope: 1, test: 1, deps: 0, risk: 1)

## Notes

- This is broader than `web-onboarding-mkcert-passkey`.
- Likely needs to unify several currently separate concepts that are easy for new users to confuse:
  - web authentication
  - AI provider authentication
  - workspace/project readiness
  - optional features and advanced tooling
- A good outcome may be a welcome/checklist pattern plus contextual hints rather than one monolithic wizard.

## Links

- `workitems/00-inbox/web-onboarding-mkcert-passkey.md`
- `workitems/40-review/login-command-passthrough.md`
- `README.md`
- `docs/install-from-repo.md`
