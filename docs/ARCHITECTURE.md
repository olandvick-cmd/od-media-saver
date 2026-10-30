# Architecture

## Application layers

1. **App Router UI** — responsive public pages, authentication pages, and account history.
2. **API boundary** — validates requests, applies rate limits, verifies identity, and returns typed outcomes.
3. **Provider adapters** — one adapter per supported platform, implementing the shared provider contract in `src/providers/types.ts`.
4. **Media delivery** — only returns a download response when the provider confirms the user is authorized and a valid downloadable asset is available.
5. **Supporting services** — Supabase, analytics, advertising, and monitoring.

## Provider contract

A provider implements:

- `platform`: stable platform identifier.
- `detect(url)`: identifies URLs belonging to its platform.
- `getMedia(url, context)`: retrieves permitted media information and returns a typed availability result.

The registry is intentionally empty until a provider has a real, tested implementation. Do not register mock providers or return fabricated download URLs.

## Availability states

- `downloadable`
- `preview_only`
- `authorization_required`
- `unsupported`
- `failed`

Metadata access, video embedding, and downloadable-file access are separate capabilities. A successful metadata response must never be treated as proof that a file can be downloaded.

## Request security

- Accept only known platform hostnames.
- Re-validate resolved destinations after every redirect.
- Block private, loopback, link-local, multicast, and reserved IP ranges for server-side fetches.
- Enforce content-type, maximum size, and timeout constraints.
- Never proxy arbitrary user-provided URLs.
- Keep OAuth credentials and access tokens on the server.
- Apply rate limits to guest and authenticated requests.

## Media retention

Do not persist media by default. Temporary processing records should have an explicit expiry. Download history should store only the minimum metadata needed by the user and must follow the application's retention policy.
