# Authentication setup

OD Media Saver uses Supabase Auth for optional accounts. The public downloader experience is intended to remain available to guests.

## 1. Create or open a Supabase project

In the Supabase Dashboard, open your project and go to **Project Settings → API** (or the project's Connect dialog).

Copy:
- Project URL
- Publishable key

Add them to your local `.env.local` file:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY
```

The legacy `NEXT_PUBLIC_SUPABASE_ANON_KEY` is accepted as a fallback. Do not put a service-role key in a `NEXT_PUBLIC_` variable or commit it to Git.

## 2. Configure authentication URLs

In **Authentication → URL Configuration** set:

- Site URL: `http://localhost:3000`
- Redirect URL: `http://localhost:3000/auth/callback`

When deploying, add the exact production callback URL too, for example:

- `https://YOUR_DOMAIN/auth/callback`

Set `NEXT_PUBLIC_APP_URL` to the matching site origin in Vercel's environment variables. Configure Preview URLs only if you intend to test OAuth on preview deployments.

## 3. Enable email and password

In **Authentication → Sign In / Providers**, enable the Email provider.

For the initial release, leave email confirmation enabled. Supabase will send the confirmation link; the callback route exchanges its one-time code for a session.

Customize the confirmation email template and sender settings in Supabase before public launch.

## 4. Enable Google OAuth

In **Authentication → Sign In / Providers → Google**:

1. Create a Google OAuth client in Google Cloud Console.
2. Add the Supabase callback URL shown in the Supabase provider setup panel to the Google OAuth client's authorized redirect URIs.
3. Add the Google client ID and client secret to the Supabase Google provider configuration.
4. Enable the provider and save.
5. Add your production domain to the authorized JavaScript origins / redirect settings required by Google.

Google OAuth credentials belong in the Supabase Dashboard provider configuration, not in the Next.js browser bundle. The application redirects to Supabase Auth and handles the return at `/auth/callback`.

## 5. Run locally

```bash
npm install
npm run dev
```

Test:
- Open `/signup` and create an account with an email address.
- Confirm the email using the link Supabase sends.
- Sign in at `/login`.
- Test Google sign-in after the Google provider is configured.
- Open `/account` directly while signed out; it should redirect to `/login`.
- Sign out and confirm public homepage access still works.

## Security notes

- The root Next.js 16 `proxy.ts` refreshes the cookie session and verifies claims using `auth.getClaims()`.
- Protected server pages verify claims. Do not use `getSession()` alone to authorize server-side access.
- The account page also requests the current user from Supabase before displaying the email address.
- Never expose the Supabase service-role key, Google client secret, or future platform access tokens.
- Guest access is not blocked if Supabase environment variables are absent; authentication routes require configuration.
