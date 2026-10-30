# Contributing

Thanks for your interest in OD Media Saver.

## Before contributing

- Discuss substantial changes in an issue first.
- Do not add a platform integration until its official API, permission model, and terms have been reviewed.
- Never introduce scraping or extraction behavior that bypasses access controls, DRM, creator settings, or platform restrictions.
- Never commit secrets or real user data.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Checks

Before opening a pull request, run:

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

## Pull requests

Keep changes focused, describe user-visible behavior, include tests for new logic, and document any new environment variables.
