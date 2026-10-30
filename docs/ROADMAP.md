# V1 Roadmap

## M0 — Foundation

- [x] Public repository and project scaffold
- [x] Next.js, TypeScript, Tailwind configuration
- [x] Minimal responsive homepage foundation
- [x] Shared provider contract
- [x] Basic platform hostname detection
- [x] Environment template and security guidance
- [ ] Local install, lint, typecheck, test, and production-build verification

## M1 — Product UI

- [ ] Finalize responsive design system
- [ ] Build downloader input and result-state components
- [ ] Add accessible loading, empty, and error states
- [ ] Build about, privacy, and terms pages

## M2 — Secure request pipeline

- [ ] Server-side URL validation
- [ ] DNS/IP and redirect SSRF defenses
- [ ] Guest and account rate limits
- [ ] File size, type, and timeout enforcement
- [ ] Typed API responses

## M3 — Authorized platform integrations

- [ ] Review Facebook official API permissions and media-download capabilities
- [ ] Review Instagram official API permissions and media-download capabilities
- [ ] Review TikTok official API permissions and media-download capabilities
- [ ] Implement only supported, authorized flows
- [ ] Verify resulting files are actually downloadable and playable

## M4 — Accounts and history

- [ ] Supabase project configuration and migrations
- [ ] Email/password authentication
- [ ] Google OAuth
- [ ] Optional guest usage
- [ ] User download history and retention controls

## M5 — Analytics and monetization

- [ ] Consent-aware analytics
- [ ] AdSense readiness and policy review
- [ ] Clearly separated advertising placements
- [ ] Usage and failure metrics

## M6 — Launch readiness

- [ ] Unit and end-to-end tests
- [ ] Accessibility and responsive checks
- [ ] Security review
- [ ] Performance review
- [ ] Vercel production deployment
- [ ] Privacy, terms, and support information
