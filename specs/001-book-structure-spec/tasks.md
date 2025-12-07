# Tasks: Book Structure and Content

**Input**: Design documents from `specs/001-book-structure-spec/`
**Prerequisites**: plan.md, spec.md

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the Docusaurus project repository.

- [ ] T001 Initialize Node.js project with `npm init` in the root directory.
- [ ] T002 Create a new Docusaurus site with `npx create-docusaurus@latest . classic`.
- [ ] T003 Install project dependencies with `npm install`.
- [ ] T004 [P] Create initial directory structure for book content in `docs/` (`docs/part-1`, `docs/part-2`, `docs/part-3`).

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Configure the core Docusaurus site functionality.

- [ ] T005 Configure project title, tagline, URL, and organization name in `docusaurus.config.js`.
- [ ] T006 [P] Configure the website theme (colors, fonts, CSS variables) in `src/css/custom.css`.
- [ ] T007 Configure the top navigation bar with links to docs and community resources in `docusaurus.config.js` (themeConfig.navbar).
- [ ] T008 Configure the site footer with copyright and relevant links in `docusaurus.config.js` (themeConfig.footer).
- [ ] T009 [P] Set up Algolia DocSearch credentials and enable search in `docusaurus.config.js` (themeConfig.algolia).
- [ ] T010 [P] Configure default SEO settings, including image and metadata, in `docusaurus.config.js`.
- [ ] T011 Create the content structure for the documentation sidebar in `sidebars.js`.
- [ ] T012 Set up ESLint and Prettier to enforce code style for `.js` and `.mdx` files.

---

## Phase 3: User Story 1 - Create Sample Chapter (Priority: P1) 🎯 MVP

**Goal**: A reader can follow the "Sensors and Perception" chapter from beginning to end.
**Independent Test**: A user can start at Lesson 3.1, follow all instructions, and have a working outcome by the end of Lesson 3.3.

### Implementation for User Story 1

- [ ] T013 [US1] Create the file for Chapter 3 in `docs/part-2/chapter-3.mdx`.
- [ ] T014 [US1] Write the front-matter for `chapter-3.mdx` including title, slug, and description.
- [ ] T015 [US1] Write the content for Lesson 3.1 ("Understanding Digital Sensors") in `docs/part-2/chapter-3.mdx`.
- [ ] T016 [US1] [P] Create and add a diagram illustrating sensor principles for Lesson 3.1 in `static/img/ch3/`.
- [ ] T017 [US1] Write the content for Lesson 3.2 ("Collecting and Interpreting Sensor Data") in `docs/part-2/chapter-3.mdx`.
- [ ] T018 [US1] [P] Add code block examples for reading sensor data in Lesson 3.2.
- [ ] T019 [US1] [P] Create and add a photo of the sensor wiring for Lesson 3.2 in `static/img/ch3/`.
- [ ] T020 [US1] Write the content for Lesson 3.3 ("Introduction to Computer Vision") in `docs/part-2/chapter-3.mdx`.
- [ ] T021 [US1] [P] Add a code block example for a simple image processing task in Lesson 3.3.
- [ ] T022 [US1] [P] Create and add a video demonstrating the computer vision example for Lesson 3.3 in `static/img/ch3/`.
- [ ] T023 [US1] Update `sidebars.js` to include Chapter 3 and its lessons.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Final review and quality assurance for the initial content.

- [ ] T024 [P] Review all content in Chapter 3 for technical accuracy, clarity, and grammatical errors.
- [ ] T025 Run `npm run build` to validate that there are no broken links in the chapter.
- [ ] T026 [P] Manually test all code examples from Chapter 3 on the target hardware to ensure they work as described.
- [ ] T027 Validate that all images and videos in Chapter 3 render correctly on the site.

---

## Dependencies & Execution Order

- **Phase 1 (Setup)** must be completed before any other phase.
- **Phase 2 (Foundational)** depends on Phase 1 and must be completed before Phase 3.
- **Phase 3 (User Story 1)** depends on Phase 2.
- **Phase 4 (Polish)** depends on the completion of Phase 3.

Within User Story 1, content writing tasks (T015, T017, T020) should be completed before their corresponding asset tasks (diagrams, code, videos).

## Implementation Strategy

### MVP First (User Story 1 Only)

1.  Complete Phase 1: Setup.
2.  Complete Phase 2: Foundational.
3.  Complete Phase 3: User Story 1.
4.  **STOP and VALIDATE**: Test Chapter 3 independently by following it from start to finish.
5.  This milestone provides the first complete, publishable piece of content and validates the entire content creation workflow.
