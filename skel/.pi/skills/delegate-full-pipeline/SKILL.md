# Skill: delegate-full-pipeline

Four-stage quality pipeline: architect designs → adversarial reviewer challenges → coder implements → reviewer verifies. Use for production-quality work where correctness, security, and design integrity matter.

## When to use

- Features touching security, auth, data integrity, or money
- Public APIs or interfaces that will be hard to change later
- Any work where "good enough" isn't good enough
- When Brian says "do this properly" or "production quality"

## Stages

```
@architect  →  @reviewer (adversarial)  →  @coder  →  @reviewer (final)
  design         challenge the design       implement    verify the impl
```

## Procedure

1. **Acknowledge immediately.** "Running the full pipeline — design, review, implement, verify. This will take longer."

2. **Stage 1 — @architect**
   Dispatch with full context + feature request. Ask for: design, task breakdown, risks.

3. **Stage 2 — @reviewer (adversarial)**
   Dispatch the architect's plan for adversarial review:
   ```
   [Context]
   <project context>

   [Design to review — from @architect]
   <architect's output>

   [Task]
   Review this design adversarially. Find:
   - Security holes
   - Logic errors or missing edge cases
   - Abstraction problems that will hurt later
   - Anything the coder will get wrong when implementing this
   Do NOT find style issues. Do NOT praise what's correct. Verdict: PASS / FAIL.
   ```
   - **PASS**: proceed to Stage 3 with original plan.
   - **FAIL**: Pi reviews findings. For P0 issues, loop @architect with the reviewer's findings before proceeding. For P1/P2, note them and continue — @coder gets the findings as implementation guidance.

4. **Stage 3 — @coder**
   Dispatch with: project context + architect's plan + reviewer's findings (as "watch out for these").
   ```
   [Reviewer findings — address these during implementation]
   <reviewer P1/P2 findings if any>
   ```

5. **Stage 4 — @reviewer (final)**
   Dispatch the implementation for verification:
   ```
   [Context]
   <project context>

   [Original design]
   <architect's plan>

   [Implementation to review]
   <coder's output — files changed, tests run>

   [Task]
   Verify the implementation against the design. Find correctness bugs,
   missing error handling, security issues. Verdict: PASS / PASS WITH CONCERNS / FAIL.
   ```
   - **PASS / PASS WITH CONCERNS**: Pi delivers to Brian with summary.
   - **FAIL**: Pi loops @coder with the final reviewer's specific findings.

6. **Deliver to Brian.** Summary: what was built, reviewer verdict, any open concerns.

## When to short-circuit

If @reviewer (adversarial) finds only P2/P3 issues and the design is structurally sound, Pi may proceed directly to @coder rather than looping @architect. Use judgment — a P2 finding in an auth flow is not the same as a P2 in a CLI formatter.

## Notes on concurrency

Stages 1 and 2 are sequential (reviewer needs architect's output).
Stage 3 and 4 are sequential (reviewer needs coder's output).
Stages 1-2 and 3-4 cannot be parallelized within a single pipeline.
Multiple independent pipelines for different features can run concurrently.
