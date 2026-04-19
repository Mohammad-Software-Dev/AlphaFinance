# AlphaFinance Frontend (Demo Mode)

React + TypeScript + Vite demo application for the AlphaFinance product UI.

## Demo Mode

This repository is configured as a **public demo frontend**:
- No authentication or token/session flows
- No protected routes
- All pages are intentionally accessible
- Sign-in page is a demo entry point that redirects to the dashboard

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- TanStack Query
- Zod
- MSW (development API mocking)
- Tailwind CSS + MUI components

## Getting Started

### Prerequisites

- Node.js 22+
- npm

### Install

```bash
npm ci
```

### Run in development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Demo smoke checks

```bash
npm test
```

`npm test` runs:
- `scripts/demo-smoke-check.mjs`
- `scripts/route-integrity-check.mjs`
- `scripts/demo-journey-check.mjs`

## Routes

Primary routes:
- `/dashboard`
- `/real-estate-assets`
- `/real-estate/:assetId`
- `/wallet`
- `/profile`
- `/blog`
- `/blog/:blogId`
- `/signin`
- `/signup`
- `/notifications` (placeholder)
- `/settings` (placeholder)

Fallback:
- `*` -> not-built-yet page

## Data and API Behavior

- Feature APIs use `/api/*` endpoints in frontend code.
- In development, MSW serves mock data from `src/mocks/data`.
- Blog detail page resolves content by `:blogId` from the loaded blog dataset.

## Deployment Notes

Azure Pipeline (`azure-pipelines.yaml`) installs dependencies with `npm ci` and builds with `npm run build`.
