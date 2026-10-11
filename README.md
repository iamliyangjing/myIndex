<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Yangjing Li | Java Backend Engineer Portfolio

A responsive bilingual portfolio for a Java backend engineer with experience in insurance SaaS, performance optimization, and AI engineering workflows. Built with React, TypeScript, Tailwind CSS (v4), and Vite.

## Features

- **Bilingual (EN/CN)**: Language toggle with localStorage persistence and system-language detection
- **Dark / Light theme**: Follows system preference, overridable, persisted
- **Sections**: Profile, Skills, Engineering Principles, Experience & Projects, Learning, Books, Engineering Notes, Travel Map
- **Resume download**: The PDF in `public/resume.pdf` is served as `/resume.pdf` and linked from the profile section.
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

Most site content (profile, skills, experience, books, engineering notes, and contact info) lives in [constants.ts](constants.ts). Replace the PDF at `public/resume.pdf` when updating the downloadable resume.
