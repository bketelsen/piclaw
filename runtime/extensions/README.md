# runtime/extensions

This directory contains filesystem-backed packaged runtime extensions.

It is intentionally separate from `runtime/src/extensions/`, which contains
code-registered built-in extension factories wired directly into the runtime.

## Current grouping

- `browser/` — packaged browser automation extensions
- `platform/windows/` — packaged Windows-specific platform extensions
- `viewers/` — packaged viewer/editor web-surface extensions
- `integrations/` — packaged runtime integration/helper extensions
- `experimental/` — packaged experimental or harness-only extension entries
  - `experimental/m365/` — Microsoft 365 tool bundle (env-gated; browser/CDP-assisted, primarily validated on Windows, with cross-platform Edge → Chrome → Chromium lookup; Graph-backed consumer-account support now exists, while Teams chat flows still require a work/school tenant)

## Guardrail

Do not confuse this tree with workspace/project-local `.pi/extensions/` or
agent-local `.pi/agent/extensions/` convention paths. Those are compatibility-
sensitive user-facing surfaces and are not the same as packaged runtime
extension layout.

Some packaged extensions also contribute colocated skills via the Pi
`resources_discover` hook. Keep those skill assets beside the extension when the
skill is tightly coupled to that integration's native tool contract.

Related:
- `runtime/src/extensions/`
- `docs/stage4-extension-skill-namespacing-inventory-2026-03-28.md`
- `docs/repo-runtime-boundaries-2026-03-28.md`
