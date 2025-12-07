# Quickstart: Running the Book Locally

**Date**: 2025-12-07
**Feature**: [Book Structure and Content](spec.md)

This guide provides the steps to set up the development environment and run the Docusaurus-based book project on your local machine.

## Prerequisites

-   **Node.js**: Version 20.x or higher. You can download it from [nodejs.org](https://nodejs.org/).
-   **npm** (or **yarn**): A Node.js package manager. npm is included with Node.js.

## 1. Initial Project Setup

These commands initialize the Docusaurus project. They only need to be run once at the very beginning of the project.

```bash
# 1. Create a new Docusaurus site using the classic template
npx create-docusaurus@latest . classic

# 2. The command above creates a 'my-website' directory.
#    Move the contents to the root and remove the directory.
#    (This step might vary based on the create-docusaurus version)
mv my-website/* .
mv my-website/.* .
rmdir my-website

# 3. Install dependencies
npm install
```

## 2. Running the Development Server

Once the project is set up, you can start the local development server.

```bash
# Start the Docusaurus development server
npm run start
```

This command will start a local development server and open up a browser window. By default, the site will be available at `http://localhost:3000`.

The server will automatically reload the site whenever you make changes to the content in the `/docs` directory or any of the configuration files.

## 3. Building the Static Site

To generate a production-ready static version of the site, run the build command.

```bash
# Build the static site
npm run build
```

The build process will check for broken links and other potential errors. If the build is successful, the static files will be placed in the `/build` directory. These files can be deployed to any static web hosting service.
