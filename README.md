# OD Media Saver

A minimal, ad-supported web application for processing social-media media links when the user is authorized to access and download the media.

**Product flow:** Paste. Process. Download — only when platform permissions and source authorization allow it.

## Project status

This repository is the V1 foundation. It does not yet implement working Facebook, Instagram, or TikTok downloads. Each integration must be validated against current official APIs, permissions, and platform terms before being described as supported. Metadata or previews do not imply downloadable file access.

## Initial platforms

- Facebook
- Instagram
- TikTok

## Planned stack

- Next.js App Router and TypeScript
- Tailwind CSS
- Supabase Auth and PostgreSQL
- Google OAuth and email/password authentication (Supabase Auth)
- Vercel
- Google Analytics 4 (consent-aware)
- Google AdSense (subject to approval and policy compliance)
- Vitest and Playwright

## Product principles

- Guest-first access; registration is optional.
- Google and email/password sign-in unlock cross-device history.
- Authorized access only. No bypassing private content, DRM, platform restrictions, or creator download settings.
- Clearly distinguish downloadable, preview-only, authorization-required, unsupported, and failed outcomes.
- Do not retain downloaded media by default; expire temporary job metadata.
- Enforce URL allowlists, SSRF defenses, rate limits, safe redirects, and server-only secrets.
- Never simulate a successful download.

## Development

Requirements: Node.js 20.9+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

The initial scaffold will contain no fake downloader implementation. Provider interfaces and UI foundations are not proof of working platform integrations.

## Environment variables

See `.env.example` and `docs/AUTH_SETUP.md`. Never commit real credentials, OAuth secrets, service-role keys, or access tokens.

Authentication pages and Supabase SSR clients are scaffolded. Add your Supabase project keys and configure the Google provider in the Supabase Dashboard before testing sign-in. Guest use remains available without configuration.

## Milestones

1. Foundation, design system, responsive homepage.
2. URL detection, validation, security controls, provider contracts.
3. Official platform integrations and authorization verification.
4. Optional authentication (Google and email/password) and download history.
5. Analytics and compliant advertising.
6. Security, accessibility, integration testing, production deployment.

## License

No license has been selected. Until a license is added, standard copyright applies; public visibility does not grant reuse rights.
