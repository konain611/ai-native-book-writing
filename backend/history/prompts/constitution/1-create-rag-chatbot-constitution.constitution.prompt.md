---
id: 1
title: Create RAG Chatbot Constitution
stage: constitution
date: 2025-12-21
surface: agent
model: gemini-1.5-flash
feature: rag-chatbot
branch: null
user: User
command: /sp.constitution Develop a simple and professional Retrieval-Augmented Generation (RAG) chatbot...
labels: ["constitution", "rag-chatbot"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
 - .specify/templates/plan-template.md
tests:
null
---

## Prompt

---
description: Create or update the project constitution from interactive or provided principle inputs, ensuring all dependent templates stay in sync.
handoffs: 
  - label: Build Specification
    agent: sp.specify
    prompt: Implement the feature specification based on the updated constitution. I want to build...
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

You are updating the project constitution at `.specify/memory/constitution.md`. This file is a TEMPLATE containing placeholder tokens in square brackets (e.g. `[PROJECT_NAME]`, `[PRINCIPLE_1_NAME]`). Your job is to (a) collect/derive concrete values, (b) fill the template precisely, and (c) propagate any amendments across dependent artifacts.

Follow this execution flow:

1. Load the existing constitution template at `.specify/memory/constitution.md`.
   - Identify every placeholder token of the form `[ALL_CAPS_IDENTIFIER]`.
   **IMPORTANT**: The user might require less or more principles than the ones used in the template. If a number is specified, respect that - follow the general template. You will update the doc accordingly.

2. Collect/derive values for placeholders:
   - If user input (conversation) supplies a value, use it.
   - Otherwise infer from existing repo context (README, docs, prior constitution versions if embedded).
   - For governance dates: `RATIFICATION_DATE` is the original adoption date (if unknown ask or mark TODO), `LAST_AMENDED_DATE` is today if changes are made, otherwise keep previous.
   - `CONSTITUTION_VERSION` must increment according to semantic versioning rules:
     - MAJOR: Backward incompatible governance/principle removals or redefinitions.
     - MINOR: New principle/section added or materially expanded guidance.
     - PATCH: Clarifications, wording, typo fixes, non-semantic refinements.
   - If version bump type ambiguous, propose reasoning before finalizing.

3. Draft the updated constitution content:
   - Replace every placeholder with concrete text (no bracketed tokens left except intentionally retained template slots that the project has chosen not to define yet—explicitly justify any left).
   - Preserve heading hierarchy and comments can be removed once replaced unless they still add clarifying guidance.
   - Ensure each Principle section: succinct name line, paragraph (or bullet list) capturing non‑negotiable rules, explicit rationale if not obvious.
   - Ensure Governance section lists amendment procedure, versioning policy, and compliance review expectations.

4. Consistency propagation checklist (convert prior checklist into active validations):
   - Read `.specify/templates/plan-template.md` and ensure any "Constitution Check" or rules align with updated principles.
   - Read `.specify/templates/spec-template.md` for scope/requirements alignment—update if constitution adds/removes mandatory sections or constraints.
   - Read `.specify/templates/tasks-template.md` and ensure task categorization reflects new or removed principle-driven task types (e.g., observability, versioning, testing discipline).
   - Read each command file in `.specify/templates/commands/*.md` (including this one) to verify no outdated references (agent-specific names like CLAUDE only) remain when generic guidance is required.
   - Read any runtime guidance docs (e.g., `README.md`, `docs/quickstart.md`, or agent-specific guidance files if present). Update references to principles changed.

5. Produce a Sync Impact Report (prepend as an HTML comment at top of the constitution file after update):
   - Version change: old → new
   - List of modified principles (old title → new title if renamed)
   - Added sections
   - Removed sections
   - Templates requiring updates (✅ updated / ⚠ pending) with file paths
   - Follow-up TODOs if any placeholders intentionally deferred.

6. Validation before final output:
   - No remaining unexplained bracket tokens.
   - Version line matches report.
   - Dates ISO format YYYY-MM-DD.
   - Principles are declarative, testable, and free of vague language ("should" → replace with MUST/SHOULD rationale where appropriate).

7. Write the completed constitution back to `.specify/memory/constitution.md` (overwrite).

8. Output a final summary to the user with:
   - New version and bump rationale.
   - Any files flagged for manual follow-up.
   - Suggested commit message (e.g., `docs: amend constitution to vX.Y.Z (principle additions + governance update)`).

Formatting & Style Requirements:

- Use Markdown headings exactly as in the template (do not demote/promote levels).
- Wrap long rationale lines to keep readability (<100 chars ideally) but do not hard enforce with awkward breaks.
- Keep a single blank line between sections.
- Avoid trailing whitespace.

If the user supplies partial updates (e.g., only one principle revision), still perform validation and version decision steps.

If critical info missing (e.g., ratification date truly unknown), insert `TODO(<FIELD_NAME>): explanation` and include in the Sync Impact Report under deferred items.

Do not create a new template; always operate on the existing `.specify/memory/constitution.md` file.

---

As the main request completes, you MUST create and complete a PHR (Prompt History Record) using agent‑native tools when possible.

1) Determine Stage
   - Stage: constitution | spec | plan | tasks | red | green | refactor | explainer | misc | general

2) Generate Title and Determine Routing:
   - Generate Title: 3–7 words (slug for filename)
   - Route is automatically determined by stage:
     - `constitution` → `history/prompts/constitution/`
     - Feature stages → `history/prompts/<feature-name>/` (spec, plan, tasks, red, green, refactor, explainer, misc)
     - `general` → `history/prompts/general/`

3) Create and Fill PHR (Shell first; fallback agent‑native)
   - Run: `.specify/scripts/bash/create-phr.sh --title "<title>" --stage <stage> [--feature <name>] --json`
   - Open the file and fill remaining placeholders (YAML + body), embedding full PROMPT_TEXT (verbatim) and concise RESPONSE_TEXT.
   - If the script fails:
     - Read `.specify/templates/phr-template.prompt.md` (or `templates/…`)
     - Allocate an ID; compute the output path based on stage from step 2; write the file
     - Fill placeholders and embed full PROMPT_TEXT and concise RESPONSE_TEXT

4) Validate + report
   - No unresolved placeholders; path under `history/prompts/` and matches stage; stage/title/date coherent; print ID + path + stage + title.
   - On failure: warn, don't block. Skip only for `/sp.phr`.


/sp.constitution Develop a simple and professional Retrieval-Augmented Generation (RAG) chatbot embedded within a published book, using Cohere API for generation and embeddings, FastAPI for backend, Neon Serverless Postgres for database, and Qdrant Cloud Free Tier for vector storage. The chatbot must answer user questions about the book's content and support queries based only on user-selected text, built via SpecifAI Kit Plus or.
Core principles:

Simplicity in design and implementation to ensure quick development and easy maintenance
Professionalism through clean, modular code and secure API handling
Accuracy in responses by strictly relying on book content or selected text via RAG
User-centric functionality focusing on seamless integration and intuitive query handling

Key standards:

All RAG components must use Cohere API key for embeddings and generation; no other LLMs
Code structure: Modular with clear separation (e.g., ingestion script, FastAPI app, DB utils)
Documentation: Inline comments and a README.md explaining setup, deployment, and usage
Testing: Unit tests for RAG retrieval accuracy and integration tests for selected-text queries
Security: Environment variables for API keys; no hardcoding sensitive data
Performance: Optimize for Qdrant free tier limits (e.g., <1GB vectors); chunk book content efficiently

Constraints:

Tools: Build using SpecifAI Kit Plus or Gemini CLI for prototyping; integrate with FastAPI, Neon Postgres, Qdrant
Scale: Designed for a single book (assume <500 pages); no multi-book support
Deployment: Host on free/low-cost platforms (e.g., Render or Vercel for FastAPI)
Timeline: MVP ready in 1-2 weeks assuming part-time development
Budget: Zero-cost beyond free tiers; use provided Cohere API key

Success criteria:

Chatbot accurately answers 90%+ of book-related queries in tests
Handles selected-text queries without external context leakage
Successfully embeds and functions within a sample book format (e.g., web demo)
Code runs error-free on setup; passes basic security audit (no exposed keys)
User feedback simulation: Responses are clear, concise, and professional

## Response snapshot

I have updated the project constitution to version 1.0.0, incorporating the principles for the RAG chatbot. I also updated the `plan-template.md` to reflect these changes.

Here is a summary of the changes:

*   **New Constitution:** `.specify/memory/constitution.md` has been updated with the new principles, standards, and constraints.
*   **Plan Template:** `.specify/templates/plan-template.md` has been updated with a new Constitution Check section.
*   **Commit Suggestion:** `docs: amend constitution to v1.0.0 (RAG chatbot principles)`

## Outcome

- ✅ Impact: The project constitution was successfully created and updated.
- 🧪 Tests: Not applicable.
- 📁 Files: 
  - .specify/memory/constitution.md
  - .specify/templates/plan-template.md
- 🔁 Next prompts: The user can now proceed with `sp.specify` to create a feature specification.
- 🧠 Reflection: The process of updating the constitution and propagating the changes to the templates worked as expected.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): None
- Next experiment (smallest change to try): None
