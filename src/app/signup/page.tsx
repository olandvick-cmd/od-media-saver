import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { signInWithGoogle, signUpWithPassword } from "@/app/auth/actions";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf9fc] px-5 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-bold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7048e8] text-white">OD</span>
          OD Media Saver
        </Link>
        <section className="rounded-3xl border border-[#eceaf1] bg-white p-7 shadow-[0_18px_60px_rgba(37,25,75,0.06)] sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7048e8]">Get started</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight">Create your account</h1>
          <p className="mt-2 text-sm leading-6 text-[#716d7e]">
            Save your account preferences and access your history across devices. An account is optional.
          </p>
          <div className="mt-6">
            <AuthForm mode="signup" emailAction={signUpWithPassword} googleAction={signInWithGoogle} />
          </div>
          <p className="mt-6 text-center text-sm text-[#716d7e]">
            Already registered? <Link href="/login" className="font-semibold text-[#7048e8] hover:underline">Sign in</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
