"use client";

import { useActionState } from "react";
import type { AuthActionState } from "@/app/auth/actions";

type EmailAction = (
  previousState: AuthActionState,
  formData: FormData,
) => Promise<AuthActionState>;

type AuthFormProps = {
  mode: "login" | "signup";
  emailAction: EmailAction;
  googleAction: () => Promise<void>;
};

export function AuthForm({
  mode,
  emailAction,
  googleAction,
}: AuthFormProps) {
  const [state, formAction, isPending] = useActionState(emailAction, {});
  const isSignup = mode === "signup";

  return (
    <div>
      <form action={googleAction}>
        <button
          type="submit"
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#e7e4ec] px-4 text-sm font-semibold transition hover:bg-[#faf9fc]"
        >
          <GoogleMark />
          Continue with Google
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-[#eceaf1]" />
        <span className="text-xs font-medium text-[#9691a0]">OR WITH EMAIL</span>
        <span className="h-px flex-1 bg-[#eceaf1]" />
      </div>

      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor={`${mode}-email`} className="mb-1.5 block text-sm font-medium">
            Email address
          </label>
          <input
            id={`${mode}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="min-h-12 w-full rounded-xl border border-[#e7e4ec] bg-white px-3.5 text-sm outline-none transition placeholder:text-[#aaa5b4] focus:border-[#9c83ed] focus:ring-3 focus:ring-[#7048e8]/10"
          />
        </div>

        <div>
          <label htmlFor={`${mode}-password`} className="mb-1.5 block text-sm font-medium">
            Password
          </label>
          <input
            id={`${mode}-password`}
            name="password"
            type="password"
            autoComplete={isSignup ? "new-password" : "current-password"}
            minLength={8}
            required
            placeholder={isSignup ? "At least 8 characters" : "Your password"}
            className="min-h-12 w-full rounded-xl border border-[#e7e4ec] bg-white px-3.5 text-sm outline-none transition placeholder:text-[#aaa5b4] focus:border-[#9c83ed] focus:ring-3 focus:ring-[#7048e8]/10"
          />
        </div>

        {state.error && (
          <p role="alert" className="rounded-xl bg-[#fff5f5] px-3.5 py-3 text-sm text-[#a33b3b]">
            {state.error}
          </p>
        )}

        {state.message && (
          <p role="status" className="rounded-xl bg-[#f3fbf6] px-3.5 py-3 text-sm leading-6 text-[#247448]">
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="flex min-h-12 w-full items-center justify-center rounded-xl bg-[#7048e8] px-5 text-sm font-semibold text-white transition hover:bg-[#5b35cf] disabled:cursor-wait disabled:opacity-65"
        >
          {isPending
            ? "Please wait…"
            : isSignup
              ? "Create account"
              : "Sign in"}
        </button>
      </form>
    </div>
  );
}

function GoogleMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-[18px] w-[18px]">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.9c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.38 38.02 46.98 31.92 46.98 24.55Z" />
      <path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19Z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.73-6c-2.14 1.45-4.89 2.3-8.17 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" />
    </svg>
  );
}
