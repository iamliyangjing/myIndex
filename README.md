<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Java Backend Engineer Portfolio

A professional, responsive personal portfolio website for a Senior Java Backend Engineer. Built with React, TypeScript, Tailwind CSS (v4) and Vite.

## Features

- **Bilingual (EN/CN)**: Language toggle with localStorage persistence and system-language detection
- **Dark / Light theme**: Follows system preference, overridable, persisted
- **Sections**: Hero, Skills, Experience, Learning, Books (3D), Blog, Travel Map (Leaflet)
- **Print-optimized**: The page doubles as a printable resume

## Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

The dev server starts at `http://localhost:3000`.

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking (`tsc --noEmit`) |
| `npm test` | Run Vitest unit tests |

## Customize

All site content (profile, skills, experience, books, blog posts, contact info) lives in [constants.ts](constants.ts). Replace the placeholder contact details there with your own.
