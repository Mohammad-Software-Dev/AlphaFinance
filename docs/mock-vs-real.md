# Mocked vs Real Matrix

| Area | Current State | Notes for Production |
|---|---|---|
| Authentication | Mocked / removed | Add auth provider + RBAC + session hardening |
| Market/portfolio data | Mocked via MSW and static JSON | Replace with typed backend APIs + caching strategy |
| Wallet transfers | Deterministic UI simulation | Add transaction orchestration, idempotency, and reconciliation |
| Notifications feed | Local UI state simulation | Back by persisted notifications API and read-state sync |
| Settings updates | Client-side save/cancel stubs | Persist via profile/settings API with validation and audit logging |
| Blog content | Mock dataset routed by ID | CMS/API-backed content pipeline |
| Error handling | UI-level and static checks | Add API error taxonomy and telemetry |
| E2E coverage | Smoke journeys only | Expand to regression suite and cross-browser matrix |

