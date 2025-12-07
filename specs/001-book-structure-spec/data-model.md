# Data Model: Book Content Structure

**Date**: 2025-12-07
**Feature**: [Book Structure and Content](spec.md)
**Input**: The entity definitions from the feature specification.

This document outlines the conceptual data model for the book's content. As the project is a static site, this model is not implemented in a database but is enforced through the folder structure and front-matter of the MDX files.

## 1. Core Entities

### Book
The top-level entity that represents the entire "Physical AI: A Hands-On Guide" project.
-   **Attributes**:
    -   `title`: The main title of the book.
    -   `tagline`: A short, descriptive tagline.
-   **Relationships**:
    -   Has many `Parts`.

### Part
A logical grouping of chapters that represents a major section of the book.
-   **Attributes**:
    -   `title`: The title of the part (e.g., "Part 1: Foundations of Physical AI").
    -   `order`: A number indicating the sequence of the part.
-   **Relationships**:
    -   Belongs to one `Book`.
    -   Has many `Chapters`.
-   **Implementation**: A subdirectory within the `/docs` folder (e.g., `/docs/part-1/`).

### Chapter
A single document that contains a series of related lessons focused on a specific topic or project.
-   **Attributes**:
    -   `title`: The title of the chapter (e.g., "Chapter 1: Introduction to Physical AI").
    -   `order`: A number indicating the sequence of the chapter within a `Part`.
    -   `slug`: The URL-friendly identifier for the chapter.
-   **Relationships**:
    -   Belongs to one `Part`.
    -   Has many `Lessons`.
-   **Implementation**: An MDX file within a `Part` subdirectory (e.g., `/docs/part-1/chapter-1.mdx`). The `slug` and `title` are defined in the front-matter.

### Lesson
A section within a chapter that teaches a single, focused topic. It is the smallest unit of instruction.
-   **Attributes**:
    -   `title`: The title of the lesson (e.g., "Lesson 1.1: What is Physical AI?").
    -   `objective`: A one-sentence description of the learning goal.
-   **Relationships**:
    -   Belongs to one `Chapter`.
-   **Implementation**: An H2 heading (`##`) within a `Chapter`'s MDX file.

## 2. State Transitions

Not applicable. The content model is static and defined by the file structure and content.

## 3. Validation Rules

-   A `Part` cannot exist without at least one `Chapter`.
-   A `Chapter` cannot exist without at least one `Lesson`.
-   All `order` attributes must be unique within their parent entity to ensure correct sequencing.
-   All `slug` attributes must be unique across all chapters.
