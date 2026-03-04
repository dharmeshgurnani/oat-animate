# Oat Animate - Agent Context Guide (AGENTS.md)

This document is designed to provide AI agents with immediate context about the **Oat Animate** project architecture, scripts, and development conventions.

## 🎯 Project Overview
Oat Animate is a lightweight CSS and JavaScript animation extension for the [Oat](https://github.com/knadh/oat) framework. 
It enables declarative micro-interactions directly in HTML using the `ot-animate` attribute.

### Supported Triggers
- **On Load**: e.g., `fade-up`
- **On Hover**: e.g., `hover:pop`
- **In View**: e.g., `view:slide-left` (powered by Intersection Observer in JS)

## 📂 Project Structure

The repository is modularized into two distinct parts:

1. **`oat-animate/` (The Core Library)**
   - `oat-animate.css`: Contains all keyframe definitions and CSS animation classes.
   - `oat-animate.js`: Contains a small Vanilla JS snippet that uses `IntersectionObserver` to trigger animations when elements with `view:` prefixes scroll into sight.
   
2. **`website/` (The Demo & Docs)**
   - Built using **Astro**.
   - Contains documentation, API references, and live previews.
   - Website content is in `website/src/pages/`.

3. **`bin/` (Build Scripts)**
   - `build-lib.mjs`: Script to minify CSS/JS, gzip them, output to `/dist`, and copy the assets to `/website/static/assets/` so the Astro site can use the latest library code.

## 🛠️ Key Commands & Workflow

The user manages the project via standard NPM scripts defined in `package.json`.

- **`npm run dev`**: Starts the Astro dev site for documentation/demoing (`http://localhost:3000`).
- **`npm run build:lib`**: Compiles, minifies, and gzips the core library into `/dist` and synchronizes with the website's static public folder. 
   - ⚠️ **Critical Context**: If you edit files in `oat-animate/`, you **must** run this command for the changes to reflect in the website.
- **`npm run build:site`**: Builds the static Astro website for production.
- **`npm run build`**: Runs both the library and site builds sequentially.

## 🤖 AI Agent Workflow Guidelines

1. **If modifying Core Animations**:
   - Edit `oat-animate/oat-animate.css` (for keyframes/transitions) or `oat-animate.js` (for observer logic).
   - Run `npm run build:lib` to persist changes.
   - Test by running `npm run dev` and viewing the Astro site.

2. **If editing Documentation/Site**:
   - Navigate to `website/src/`.
   - Update the respective `.astro` or `.md` files.

3. **If learning more about usage**:
   - Refer to `./llms.txt` for standard LLM metadata and links.
   - Review `./README.md` for the quick start overview.

4. **Dependencies & Style**:
   - The core library has **no dependencies**. Write only Vanilla JS and standard CSS.
   - Keep the bundle footprint extremely small.
