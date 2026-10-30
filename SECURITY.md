# Security Policy

## Supported versions

Security fixes are applied to the current development branch.

## Reporting a vulnerability

Please do not disclose vulnerabilities in public issues. Use GitHub's private vulnerability reporting feature if enabled for this repository. Include reproduction steps and the potential impact.

## Security requirements

- Never commit secrets, OAuth tokens, service-role keys, or production credentials.
- Treat user-submitted URLs as untrusted input.
- Use strict platform hostname allowlists.
- Prevent server-side request forgery (SSRF), including redirects to private, loopback, link-local, and metadata-service addresses.
- Apply request and download rate limits.
- Enforce file-size, content-type, and timeout limits.
- Do not bypass authentication, DRM, privacy settings, or platform restrictions.
- Avoid retaining media files; expire temporary processing metadata.
- Keep authorization tokens server-side and encrypt them at rest.
