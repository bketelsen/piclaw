# Skill: delegate-plan-build

Two-phase delegation: @architect designs, @coder implements. Use when the task has meaningful design decisions or when the right approach isn't obvious from the existing code.

## When to use

- "add feature X" (non-trivial — touches multiple files or requires new abstractions)
- "design and implement Y"
- "how should we structure Z" + implementation
- Any task where you'd need to think about architecture before writing code

## When NOT to use

- Simple, well-scoped tasks → use `delegate-simple`
- Tasks that need external validation before implementation → use `delegate-full-pipeline`

## Procedure

1. **Acknowledge immediately.** "Designing first, then building. I'll surface the result."

2. **Dispatch @architect** with full context:
   - Project, stack, repo path
   - Relevant existing code and patterns
   - The feature request and any constraints
   - Explicit ask: produce a task breakdown ordered for implementation

3. **Wait for @architect result.** When it arrives, Pi reads the plan.
   - If the plan looks sound: proceed to step 4.
   - If the plan has problems: Pi notes them and either adjusts inline or asks Brian before proceeding.

4. **Dispatch @coder** with:
   - Full project context (same as architect received)
   - The architect's plan verbatim as the implementation spec
   - Explicit instruction: implement the plan as specified, run tests before reporting done

5. **Summarize for Brian.** When @coder returns, Pi delivers: what was built, whether tests passed, and any deviations from the plan.

## Dispatch templates

**@architect dispatch:**
```
[Context]
Project: <name> at <path>
Stack: <language, key deps>
Build: <command> | Test: <command>
Relevant files:
  - <file>: <role>
Conventions: <key patterns>
Constraints: <limits>

[Task]
Design the implementation for: <feature request>

Produce:
1. The design — interfaces, file structure, key decisions
2. An ordered task breakdown concrete enough to hand to a coder
3. Risks or open questions
```

**@coder dispatch (after architect returns):**
```
[Context]
<same project context as architect>

[Implementation Plan — from @architect]
<architect's output verbatim>

[Task]
Implement the plan above. Follow the architect's design. If you find a problem
with the plan, note it in your completion report — don't improvise a different
approach without flagging it.

Run <test command> before reporting done.
```
