# Tasks: Book Structure and Content

**Input**: Design documents from `specs/001-book-structure-spec/`
**Prerequisites**: plan.md, spec.md

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the Docusaurus project repository.

- [X] T001 Initialize Node.js project with `npm init` in the root directory.
- [X] T002 Create a new Docusaurus site with `npx create-docusaurus@latest . classic`.
- [X] T003 Install project dependencies with `npm install`.
- [X] T004 [P] Create initial directory structure for book content in `docs/` (`docs/part-1`, `docs/part-2`, `docs/part-3`).

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Configure the core Docusaurus site functionality.

- [X] T005 Configure project title, tagline, URL, and organization name in `docusaurus.config.js`.
- [X] T006 [P] Configure the website theme (colors, fonts, CSS variables) in `src/css/custom.css`.
- [X] T007 Configure the top navigation bar with links to docs and community resources in `docusaurus.config.js` (themeConfig.navbar).
- [X] T008 Configure the site footer with copyright and relevant links in `docusaurus.config.js` (themeConfig.footer).
- [X] T009 [P] Set up Algolia DocSearch credentials and enable search in `docusaurus.config.js` (themeConfig.algolia).
- [X] T010 [P] Configure default SEO settings, including image and metadata, in `docusaurus.config.js`.
- [X] T011 Create the content structure for the documentation sidebar in `sidebars.js`.
- [X] T012 Set up ESLint and Prettier to enforce code style for `.js` and `.mdx` files.

---

## Phase 3: User Story 1 - Create Sample Chapter (Priority: P1) 🎯 MVP

**Goal**: A reader can follow the "Sensors and Perception" chapter from beginning to end.
**Independent Test**: A user can start at Lesson 3.1, follow all instructions, and have a working outcome by the end of Lesson 3.3.

### Implementation for User Story 1

- [X] T013 [US1] Create the file for Chapter 3 in `docs/part-2/chapter-3.mdx`.
- [X] T014 [US1] Write the front-matter for `chapter-3.mdx` including title, slug, and description.
- [X] T015 [US1] Write the content for Lesson 3.1 ("Understanding Digital Sensors") in `docs/part-2/chapter-3.mdx`.
- [X] T016 [US1] [P] Create and add a diagram illustrating sensor principles for Lesson 3.1 in `static/img/ch3/`.
- [X] T017 [US1] Write the content for Lesson 3.2 ("Collecting and Interpreting Sensor Data") in `docs/part-2/chapter-3.mdx`.
- [X] T018 [US1] [P] Add code block examples for reading sensor data in Lesson 3.2.
- [X] T019 [US1] [P] Create and add a photo of the sensor wiring for Lesson 3.2 in `static/img/ch3/`.
- [X] T020 [US1] Write the content for Lesson 3.3 ("Introduction to Computer Vision") in `docs/part-2/chapter-3.mdx`.
- [X] T021 [US1] [P] Add a code block example for a simple image processing task in Lesson 3.3.
- [X] T022 [US1] [P] Create and add a video demonstrating the computer vision example for Lesson 3.3 in `static/img/ch3/`.
- [X] T023 [US1] Update `sidebars.js` to include Chapter 3 and its lessons.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Final review and quality assurance for the initial content.

- [X] T024 [P] Review all content in Chapter 3 for technical accuracy, clarity, and grammatical errors.
- [X] T025 Run `npm run build` to validate that there are no broken links in the chapter.
- [X] T026 [P] Manually test all code examples from Chapter 3 on the target hardware to ensure they work as described.
- [X] T027 Validate that all images and videos in Chapter 3 render correctly on the site.

---

## Phase 5: User Story 2 - Add New Chapters (Priority: P2)

**Goal**: Expand the book's content with 5 new chapters, each containing 3 lessons.

### Implementation for Chapter 1: Foundations of Physical AI (`part-1/chapter-1.mdx`)
- [X] T028 [US2] Create the file for Chapter 1 in `docs/part-1/chapter-1.mdx`.
- [X] T029 [US2] Write the front-matter for `chapter-1.mdx`.
- [X] T030 [US2] Write content for Lesson 1.1 ("What is Physical AI?") in `chapter-1.mdx`.
- [X] T031 [US2] Write content for Lesson 1.2 ("A Brief History of Robotics") in `chapter-1.mdx`.
- [X] T032 [US2] Write content for Lesson 1.3 ("Key Components of a Robot System") in `chapter-1.mdx`.

### Implementation for Chapter 2: Robot Kinematics and Dynamics (`part-1/chapter-2.mdx`)
- [X] T033 [US2] Create the file for Chapter 2 in `docs/part-1/chapter-2.mdx`.
- [X] T034 [US2] Write the front-matter for `chapter-2.mdx`.
- [X] T035 [US2] Write content for Lesson 2.1 ("Understanding Robot Movement (Forward Kinematics)") in `chapter-2.mdx`.
- [X] T036 [US2] Write content for Lesson 2.2 ("Controlling Robot Position (Inverse Kinematics)") in `chapter-2.mdx`.
- [X] T037 [US2] Write content for Lesson 2.3 ("Forces and Motion in Robotics (Dynamics)") in `chapter-2.mdx`.

### Implementation for Chapter 4: Actuators and Motion Control (`part-2/chapter-4.mdx`)
- [X] T038 [US2] Create the file for Chapter 4 in `docs/part-2/chapter-4.mdx`.
- [X] T039 [US2] Write the front-matter for `chapter-4.mdx`.
- [X] T040 [US2] Write content for Lesson 4.1 ("Types of Robot Actuators") in `chapter-4.mdx`.
- [X] T041 [US2] Write content for Lesson 4.2 ("Motor Control Algorithms") in `chapter-4.mdx`.
- [X] T042 [US2] Write content for Lesson 4.3 ("Designing for Smooth and Precise Movement") in `chapter-4.mdx`.

### Implementation for Chapter 5: Robot Navigation and Path Planning (`part-3/chapter-5.mdx`)
- [X] T043 [US2] Create the file for Chapter 5 in `docs/part-3/chapter-5.mdx`.
- [X] T044 [US2] Write the front-matter for `chapter-5.mdx`.
- [X] T045 [US2] Write content for Lesson 5.1 ("Localization Techniques (Where Am I?)") in `chapter-5.mdx`.
- [X] T046 [US2] Write content for Lesson 5.2 ("Mapping the Environment (What's Around Me?)") in `chapter-5.mdx`.
- [X] T047 [US2] Write content for Lesson 5.3 ("Finding the Way (Path Planning Algorithms)") in `chapter-5.mdx`.

### Implementation for Chapter 6: Human-Robot Interaction (HRI) (`part-3/chapter-6.mdx`)
- [X] T048 [US2] Create the file for Chapter 6 in `docs/part-3/chapter-6.mdx`.
- [X] T049 [US2] Write the front-matter for `chapter-6.mdx`.
- [X] T050 [US2] Write content for Lesson 6.1 ("Principles of Safe HRI") in `chapter-6.mdx`.
- [ ] T051 [US2] Write content for Lesson 6.2 ("Communication and Collaboration with Robots") in `chapter-6.mdx`.
- [ ] T052 [US2] Write content for Lesson 6.3 ("Ethical Considerations in Humanoid Robotics") in `chapter-6.mdx`.

---

## Phase 6: Website Updates

**Purpose**: Integrate new content and improve overall website presentation.

- [ ] T053 [US2] Update `sidebars.js` to include all new chapters and lessons.
- [ ] T054 [US2] Update `docusaurus.config.js` to include new content where appropriate (e.g. `navbar.items`).
- [ ] T055 [US2] Update `src/pages/index.js` or similar introductory pages with book-specific content.

---

## Dependencies & Execution Order

- **Phase 1 (Setup)** must be completed before any other phase.
- **Phase 2 (Foundational)** depends on Phase 1 and must be completed before Phase 3.
- **Phase 3 (User Story 1)** depends on Phase 2.
- **Phase 4 (Polish)** depends on the completion of Phase 3.
- **Phase 5 (User Story 2)** depends on Phase 4.
- **Phase 6 (Website Updates)** depends on Phase 5.

Within User Story 1, content writing tasks (T015, T017, T020) should be completed before their corresponding asset tasks (diagrams, code, videos).
Within User Story 2, content writing tasks for each chapter should be completed before their corresponding asset tasks (if any).

## Implementation Strategy

### MVP First (User Story 1 Only)

1.  Complete Phase 1: Setup.
2.  Complete Phase 2: Foundational.
3.  Complete Phase 3: User Story 1.
4.  **STOP and VALIDATE**: Test Chapter 3 independently by following it from start to finish.
5.  This milestone provides the first complete, publishable piece of content and validates the entire content creation workflow.
