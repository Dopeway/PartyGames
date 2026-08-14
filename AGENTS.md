# AGENTS.md

This document is the primary entry point for all AI agents working on the Party Games project.

## Before Any Modification

Every agent MUST follow these steps before making any changes to the codebase:

1. **Read `AGENTS.md`**: Understand the general rules and workflow.
2. **Read Relevant Documentation**: Consult the `docs/` folder for product vision, architecture, and technical specifications.
3. **Read `.ai/CURRENT_CONTEXT.md`**: Understand the current project status, phase, and immediate objectives.
4. **Inspect Existing Code**: Analyze the current implementation to ensure consistency.
5. **Identify Affected Files**: Map out all files that will be modified or created.
6. **Understand Impact**: Evaluate how the changes affect other parts of the system.
7. **Explain the Plan**: Briefly describe the intended changes to the user before proceeding.

**Validation Requirement**:
- For architectural decisions or significant modifications, the agent MUST ask for user validation.
- For small, local modifications with no architectural impact, the agent may proceed directly after explaining the plan.

## After Modification

After implementing changes, the agent MUST:

1. **Verify Changes**: Ensure the implementation matches the plan.
2. **Run Relevant Tests**: Execute unit or integration tests.
3. **Run Linting**: Ensure code quality and style consistency.
4. **Run Build**: Verify that the project still builds successfully.
5. **Report Issues**: Signal any unexpected problems or regressions.
6. **Update Documentation**: If a decision or architecture has changed, update the corresponding files in `docs/` and `.ai/DECISIONS.md`.

---

## General Rules for Agents

### 1. Never Invent
Do not invent features, business rules, APIs, dependencies, architecture, or UX behaviors. If information is missing, ask the user or propose a decision explicitly.

### 2. Do Not Over-Engineer
Avoid unnecessary abstractions. Verify that an abstraction is truly needed before creating it. **Simple over engineered.**

### 3. Minimize Modifications
A task should modify the minimum number of files necessary to achieve the goal.

### 4. Do Not Break Existing Functionality
Understand existing dependencies before making changes to avoid regressions.

### 5. Justify Dependencies
Do not add new external libraries without a clear and justified reason.

### 6. Separate Responsibilities
Game business logic must not be embedded within React components. Keep logic and presentation separate.

### 7. No Hardcoded Prompts
Prompts are content and must be treated as data, separated from the application logic.

### 8. High Contrast UI
Never use light colors on light backgrounds (e.g., light grey text on white/light blue backgrounds). 
**CRITICAL**: Avoid using `c="dimmed"` from Mantine on light backgrounds as it often fails accessibility standards. Use explicit high-contrast colors (e.g., `c="gray.7"` or `c="dark.3"`) to ensure all text is clearly legible regardless of the theme.

---

## Communication Guidelines

- **Greeting**: Start every task with a brief, professional greeting.
- **Intent**: Always explain the intention before any significant modification.
- **Conciseness**: Keep communications short and focused.
