import Link from "next/link";
import { redirect } from "next/navigation";
import { signOut } from "@/app/auth/actions";
import { createClient } from "@/lib/supabase/server";

export default async function AccountPage() {
  const supabase = await createClient();
  const { data: claimsData, error: claimsError } = await supabase.auth.getClaims();

  if (claimsError || !claimsData?.claims?.sub) {
    redirect("/login");
  }

  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError || !userData.user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-[#faf9fc] px-5 py-12">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="text-sm font-bold text-[#7048e8] hover:underline">← OD Media Saver</Link>
        <section className="mt-8 rounded-3xl border border-[#eceaf1] bg-white p-7 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7048e8]">Your account</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight">You're signed in</h1>
          <p className="mt-3 text-sm text-[#716d7e]">Signed in as {userData.user.email}</p>
          <p className="mt-6 rounded-xl bg-[#f8f7fb] p-4 text-sm leading-6 text-[#716d7e]">
            Your account area is ready. Download history and saved preferences will be added when those features are implemented.
          </p>
          <form action={signOut} className="mt-6">
            <button type="submit" className="rounded-xl border border-[#eceaf1] px-4 py-2.5 text-sm font-semibold transition hover:bg-[#f8f7fb]">
              Sign out
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
