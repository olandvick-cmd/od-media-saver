import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { signInWithGoogle, signInWithPassword } from "@/app/auth/actions";

type LoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf9fc] px-5 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-bold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7048e8] text-white">OD</span>
          OD Media Saver
        </Link>
        <section className="rounded-3xl border border-[#eceaf1] bg-white p-7 shadow-[0_18px_60px_rgba(37,25,75,0.06)] sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7048e8]">Welcome back</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight">Sign in to your account</h1>
          <p className="mt-2 text-sm leading-6 text-[#716d7e]">
            You can continue using OD Media Saver as a guest without signing in.
          </p>
          {params.error && (
            <p role="alert" className="mt-5 rounded-xl bg-[#fff5f5] px-4 py-3 text-sm text-[#a33b3b]">
              Sign-in couldn't be completed. Please try again.
            </p>
          )}
          <div className="mt-6">
            <AuthForm mode="login" emailAction={signInWithPassword} googleAction={signInWithGoogle} />
          </div>
          <p className="mt-6 text-center text-sm text-[#716d7e]">
            New here? <Link href="/signup" className="font-semibold text-[#7048e8] hover:underline">Create an account</Link>
          </p>
        </section>
      </div>
    </main>
  );
}
