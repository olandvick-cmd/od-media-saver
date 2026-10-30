import { ArrowDownToLine, CheckCircle2, Facebook, Instagram, Link2, ShieldCheck, Sparkles } from "lucide-react";

const platforms = [
  { name: "Facebook", Icon: Facebook },
  { name: "Instagram", Icon: Instagram },
  { name: "TikTok", Icon: Sparkles },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="/" className="flex items-center gap-2.5" aria-label="OD Media Saver home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7048e8] text-white">
            <ArrowDownToLine size={21} strokeWidth={2.5} />
          </span>
          <span className="text-lg font-bold tracking-tight">OD Media Saver</span>
        </a>
        <a href="#how-it-works" className="text-sm font-medium text-[#716d7e] transition hover:text-[#7048e8]">
          How it works
        </a>
      </header>

      <section className="mx-auto flex max-w-4xl flex-col items-center px-5 pb-20 pt-16 text-center sm:px-8 sm:pt-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e9e3ff] bg-[#f7f4ff] px-3.5 py-2 text-xs font-semibold text-[#6240ce]">
          <Sparkles size={14} />
          Simple. Clear. Permission-first.
        </div>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-[-0.045em] sm:text-6xl">
          Save the media you&apos;re <span className="text-[#7048e8]">authorized</span> to keep.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-[#716d7e] sm:text-lg">
          A straightforward place to process supported social-media links. Downloads will only be offered when the source and platform permissions allow them.
        </p>

        <div className="mt-10 w-full max-w-2xl rounded-2xl border border-[#eceaf1] bg-white p-3 shadow-[0_18px_60px_rgba(37,25,75,0.07)]">
          <div className="flex min-h-14 items-center gap-3 rounded-xl bg-[#f8f7fb] px-4 text-left">
            <Link2 size={19} className="shrink-0 text-[#8a8498]" />
            <span className="text-sm text-[#8a8498]">Platform processing is not enabled yet</span>
          </div>
          <button
            type="button"
            disabled
            className="mt-3 flex min-h-12 w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-[#7048e8] px-5 text-sm font-semibold text-white opacity-60"
            aria-disabled="true"
            title="Downloader integrations are not implemented yet"
          >
            Downloader coming during integration phase
          </button>
          <p className="px-2 pb-1 pt-3 text-xs leading-5 text-[#8a8498]">
            We won&apos;t claim a download is available until an authorized integration has been implemented and tested.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {platforms.map(({ name, Icon }) => (
            <span key={name} className="inline-flex items-center gap-2 rounded-full border border-[#eceaf1] px-4 py-2 text-sm font-medium text-[#716d7e]">
              <Icon size={16} />
              {name}
            </span>
          ))}
        </div>

        <div className="mt-16 grid w-full gap-4 text-left sm:grid-cols-3">
          <article className="rounded-2xl border border-[#eceaf1] p-5">
            <ShieldCheck className="text-[#7048e8]" size={22} />
            <h2 className="mt-4 font-semibold">Permission-first</h2>
            <p className="mt-2 text-sm leading-6 text-[#716d7e]">No bypassing private content, DRM, or platform restrictions.</p>
          </article>
          <article className="rounded-2xl border border-[#eceaf1] p-5">
            <CheckCircle2 className="text-[#7048e8]" size={22} />
            <h2 className="mt-4 font-semibold">Honest results</h2>
            <p className="mt-2 text-sm leading-6 text-[#716d7e]">Clear status messages instead of simulated download success.</p>
          </article>
          <article className="rounded-2xl border border-[#eceaf1] p-5">
            <ArrowDownToLine className="text-[#7048e8]" size={22} />
            <h2 className="mt-4 font-semibold">Simple by design</h2>
            <p className="mt-2 text-sm leading-6 text-[#716d7e]">A clean, mobile-friendly experience with optional accounts.</p>
          </article>
        </div>
      </section>

      <section id="how-it-works" className="border-t border-[#eceaf1] bg-[#faf9fc]">
        <div className="mx-auto max-w-6xl px-5 py-10 text-center sm:px-8">
          <p className="text-sm text-[#8a8498]">OD Media Saver · V1 foundation</p>
          <p className="mt-2 text-xs text-[#aaa5b4]">Platform integrations are under development. Availability depends on official APIs, permissions, and source authorization.</p>
        </div>
      </section>
    </main>
  );
}
