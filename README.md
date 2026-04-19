# AlphaFinance Frontend (Demo-First FinTech Portfolio)

![Build](https://img.shields.io/badge/build-ci_ready-success)
![Tests](https://img.shields.io/badge/tests-smoke%20%2B%20journey%20%2B%20e2e-blue)
![Mode](https://img.shields.io/badge/mode-demo--first-6f7fe8)

AlphaFinance is a portfolio-grade fintech frontend demonstrating a tokenized real-estate investment experience.  
The app focuses on product-quality UX, realistic flows, and engineering rigor while using mocked APIs.

## Product Brief

- **Problem:** portfolio demos often look polished but lack realistic journey depth.
- **Target users:** retail investors exploring asset-backed opportunities and managing wallet activity.
- **Core value:** end-to-end frontend journeys (dashboard -> asset/blog discovery -> wallet actions -> profile/security controls) with deterministic behavior and guardrails.

## Demo Constraints

- Public demo frontend only (no backend auth/session implementation in this iteration)
- APIs are mocked via MSW and static JSON datasets
- Transaction and settings persistence is intentionally simulated in client state

See the full matrix: [Mocked vs Real](/Users/SkyLine/technophiles/aswebfrontend/docs/mock-vs-real.md)

## Tech Stack

- React 19 + TypeScript + Vite
- React Router
- TanStack Query
- Tailwind CSS + MUI
- MSW (mock API layer)
- Playwright (smoke e2e)

## Routes

- `/dashboard`
- `/real-estate-assets`
- `/real-estate/:assetId`
- `/wallet`
- `/profile`
- `/blog`
- `/blog/:blogId`
- `/notifications`
- `/settings`
- `/signin`
- `/signup`
- `*` fallback -> not-built-yet

## Quality & Testing

Run static + journey checks:

```bash
npm test
```

Run e2e smoke tests:

```bash
npm run test:e2e:smoke
```

Current quality gates include:
- route integrity checks
- dead-link prevention
- demo journey assertions (dashboard/blog, wallet actions, settings save/cancel)
- basic browser journey smoke tests

## Getting Started

### Prerequisites

- Node.js 22+
- npm

### Install

```bash
npm ci
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Deployment

Azure pipeline config is in [azure-pipelines.yaml](/Users/SkyLine/technophiles/aswebfrontend/azure-pipelines.yaml).  
Pipeline runs build, static checks, and Playwright smoke tests before deployment.

## Portfolio Assets

- Case study: [docs/case-study.md](/Users/SkyLine/technophiles/aswebfrontend/docs/case-study.md)
- Mocked-vs-real matrix: [docs/mock-vs-real.md](/Users/SkyLine/technophiles/aswebfrontend/docs/mock-vs-real.md)
- Showcase capture guide: [docs/portfolio-showcase.md](/Users/SkyLine/technophiles/aswebfrontend/docs/portfolio-showcase.md)
- Screenshot folder: `docs/screenshots/`

## Roadmap (Frontend Demo Scope)

1. Expand e2e coverage from smoke to regression.
2. Add richer portfolio analytics and scenario comparison.
3. Deepen notifications and reporting workflows with larger mock datasets.
4. Prepare productionization branch (backend/auth/compliance) separately from demo branch.

