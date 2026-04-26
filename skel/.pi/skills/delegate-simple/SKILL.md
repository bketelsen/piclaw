# Skill: delegate-simple

Delegate a well-scoped implementation task directly to @coder. Use when the task is concrete enough to hand to an implementer without a design phase.

## When to use

- "add X to the codebase"
- "fix the bug where Y"
- "implement Z command/function/endpoint"
- Any task where the what is clear and the how is implied by the existing codebase

Do NOT use when the task requires design decisions, architecture choices, or when you're unsure how it fits the existing codebase. Use `delegate-plan-build` instead.

## Procedure

1. **Acknowledge immediately.** Tell Brian you're delegating and will surface the result. Do not make him wait.

2. **Synthesize context.** Before dispatching, compose a context briefing:
   - What the project/application is (name, language, stack, repo path)
   - What currently exists that's relevant (files, functions, patterns to match)
   - Build and test commands
   - Conventions: naming style, error handling, where new files go
   - Any constraints: no new dependencies, must be backwards-compatible, etc.

3. **Dispatch to @coder:**
   ```
   @coder <synthesized context>

   [Task]
   <specific, concrete task description>

   Run make test (or equivalent) before reporting done.
   ```

4. **Return to Brian.** Main chat is now free. When @coder returns, Pi summarizes the result and asks if Brian wants to review, merge, or iterate.

## Context template

```
[Context]
Project: <name> at <path>
Language/stack: <lang, key deps>
Build: <command>
Test: <command>
Relevant files:
  - <file>: <what it does>
  - <file>: <what it does>
Conventions: <key patterns to match>
Constraints: <anything the coder must not do>

[Task]
<concrete task>
```

## Example

Brian: "add a --verbose flag to the list command"

Pi: "On it — delegating to @coder. I'll surface the result here."

@coder context: project is wuphf-eval Go CLI at ~/projects/wuphf-eval. list command is in cmd/list.go using flag.NewFlagSet. Add --verbose flag that prints task IDs in full (currently truncated). Run make test before finishing.
