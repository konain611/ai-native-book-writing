<!--
---
Sync Impact Report
---
Version: 0.0.0 → 1.0.0
Modified Principles:
  - PRINCIPLE_1_NAME → Simplicity
  - PRINCIPLE_2_NAME → Professionalism
  - PRINCIPLE_3_NAME → Accuracy
  - PRINCIPLE_4_NAME → User-Centricity
  - PRINCIPLE_5_NAME → Key Standards
  - PRINCIPLE_6_NAME → Constraints
Added Sections:
  - Key Standards
  - Constraints
  - Success Criteria
Removed Sections:
  - SECTION_2_NAME
  - SECTION_3_NAME
Templates requiring updates:
  - ✅ .specify/templates/plan-template.md
  - ✅ .specify/templates/spec-template.md
  - ✅ .specify/templates/tasks-template.md
Follow-up TODOs:
  - None
-->
# Retrieval-Augmented Generation (RAG) Chatbot Constitution

## Core Principles

### I. Simplicity
Simplicity in design and implementation to ensure quick development and easy maintenance.

### II. Professionalism
Professionalism through clean, modular code and secure API handling.

### III. Accuracy
Accuracy in responses by strictly relying on book content or selected text via RAG.

### IV. User-Centricity
User-centric functionality focusing on seamless integration and intuitive query handling.

## Key Standards
- All RAG components must use Cohere API key for embeddings and generation; no other LLMs.
- Code structure: Modular with clear separation (e.g., ingestion script, FastAPI app, DB utils).
- Documentation: Inline comments and a README.md explaining setup, deployment, and usage.
- Testing: Unit tests for RAG retrieval accuracy and integration tests for selected-text queries.
- Security: Environment variables for API keys; no hardcoding sensitive data.
- Performance: Optimize for Qdrant free tier limits (e.g., <1GB vectors); chunk book content efficiently.

## Constraints
- Tools: Build using SpecifAI Kit Plus or Gemini CLI for prototyping; integrate with FastAPI, Neon Postgres, Qdrant.
- Scale: Designed for a single book (assume <500 pages); no multi-book support.
- Deployment: Host on free/low-cost platforms (e.g., Render or Vercel for FastAPI).
- Timeline: MVP ready in 1-2 weeks assuming part-time development.
- Budget: Zero-cost beyond free tiers; use provided Cohere API key.

## Success Criteria
- Chatbot accurately answers 90%+ of book-related queries in tests.
- Handles selected-text queries without external context leakage.
- Successfully embeds and functions within a sample book format (e.g., web demo).
- Code runs error-free on setup; passes basic security audit (no exposed keys).
- User feedback simulation: Responses are clear, concise, and professional.

## Governance
This Constitution is the single source of truth for project principles and standards. All development, tooling, and architectural decisions must align with it. Amendments require a documented proposal, review by the core team, and a clear migration plan for any affected components. All pull requests and code reviews must verify compliance with these principles.

**Version**: 1.0.0 | **Ratified**: 2025-12-21 | **Last Amended**: 2025-12-21