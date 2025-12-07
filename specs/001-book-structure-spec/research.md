# Research: Testing Strategy for Content and Code

**Date**: 2025-12-07
**Feature**: [Book Structure and Content](spec.md)
**Input**: The `plan.md` identified a need to clarify the testing strategy.

## 1. Decision: Adopt a Hybrid Testing Strategy

For the "Physical AI" book, we will adopt a hybrid testing strategy that combines automated checks for the website's integrity with a structured manual verification process for the code examples and hardware-specific content.

## 2. Rationale

A purely automated strategy is not feasible due to the hands-on, hardware-focused nature of the projects. However, we can automate critical aspects of the site's quality, such as link validity and code formatting, to reduce manual effort and prevent common errors.

### For Content Links:
-   **Decision**: Utilize Docusaurus's built-in broken link checker.
-   **Rationale**: The `npx docusaurus build` command automatically detects and fails the build if any internal links are broken. This is a highly reliable, zero-cost way to ensure the site's navigation remains intact. No external tools are needed.

### For Code Examples:
-   **Decision**: Implement a two-level approach: automated linting for style and a formal manual review checklist for functionality.
-   **Rationale**:
    -   **Automated Linting**: Tools like ESLint and Prettier can be configured to automatically check all code blocks within Markdown/MDX files for syntax errors and style consistency. This catches simple mistakes early.
    -   **Manual Review Checklist**: For hardware interaction, functional correctness can only be verified by running the code on the actual hardware. A standardized checklist will be created for each chapter. The reviewer must execute each step and verify the output against a known-good result. This ensures a high level of quality and accuracy for the reader.

## 3. Alternatives Considered

-   **Fully Automated Hardware-in-the-Loop (HIL) Testing**: This would involve creating a complex testing rig to automatically run code on physical hardware.
    -   **Rejected because**: The cost and complexity of setting up and maintaining such a system are too high for a book project. It would also be inflexible to minor hardware variations.
-   **Purely Manual Testing**: Relying only on authors and editors to manually check everything.
    -   **Rejected because**: This is error-prone and time-consuming. Automating what we can (links, linting) frees up human reviewers to focus on what they do best: verifying the learning experience and functional correctness.
