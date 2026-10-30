import {
  ArrowDownToLine,
  CheckCircle2,
  CircleHelp,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { MediaLinkForm } from "@/components/media-link-form";

const platforms = ["Facebook", "Instagram", "TikTok"];

const features = [
  {
    Icon: ShieldCheck,
    title: "Permission comes first",
    description:
      "No bypassing private content, DRM, creator settings, or platform restrictions.",
  },
  {
    Icon: CheckCircle2,
    title: "Honest status updates",
    description:
      "Know when a link is recognized, unsupported, or not yet available for processing.",
  },
  {
    Icon: Zap,
    title: "Simple by design",
    description:
      "A clean experience built to work smoothly on phones, tablets, and desktops.",
  },
];

const steps = [
  {
    number: "01",
    title: "Paste a link",
    description: "Copy a supported public post link and add it to the link field.",
  },
  {
    number: "02",
    title: "Check the source",
    description: "We identify the platform and validate the link format.",
  },
  {
    number: "03",
    title: "See what's available",
    description:
      "When an authorized provider is ready, we'll show the options the source permits.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="/" className="flex items-center gap-2.5" aria-label="OD Media Saver home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7048e8] text-white shadow-sm">
            <ArrowDownToLine size={21} strokeWidth={2.5} />
          </span>
          <span className="text-lg font-bold tracking-tight">OD Media Saver</span>
        </a>
        <nav className="flex items-center gap-2">
          <a
            href="#how-it-works"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-[#716d7e] transition hover:bg-[#f5f2fc] hover:text-[#7048e8] sm:inline-flex"
          >
            How it works
          </a>
          <a
            href="/login"
            className="rounded-full border border-[#eceaf1] px-4 py-2 text-sm font-semibold text-[#6240ce] transition hover:bg-[#f5f2fc]"
          >
            Sign in
          </a>
        </nav>
      </header>

      <section className="relative mx-auto flex max-w-5xl flex-col items-center px-5 pb-20 pt-14 text-center sm:px-8 sm:pt-24">
        <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#f0eaff] blur-3xl sm:h-96 sm:w-96" />

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e9e3ff] bg-white/80 px-3.5 py-2 text-xs font-semibold text-[#6240ce] shadow-sm">
          <Sparkles size={14} />
          Simple. Clear. Permission-first.
        </div>

        <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.05em] sm:text-6xl">
          Your media links,
          <br className="hidden sm:block" /> made <span className="text-[#7048e8]">simpler.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-[#716d7e] sm:text-lg">
          Check supported social-media links in one clean place. Downloads will
          only be offered when the platform and content permissions allow them.
        </p>

        <div className="mt-10 w-full">
          <MediaLinkForm />
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
          <span className="mr-1 text-xs font-medium text-[#9691a0]">Link support planned for</span>
          {platforms.map((platform) => (
            <span
              key={platform}
              className="rounded-full border border-[#eceaf1] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#716d7e]"
            >
              {platform}
            </span>
          ))}
        </div>

        <div className="mt-16 grid w-full gap-4 text-left sm:grid-cols-3">
          {features.map(({ Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-[#eceaf1] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(37,25,75,0.06)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3efff] text-[#7048e8]">
                <Icon size={21} />
              </span>
              <h2 className="mt-4 font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#716d7e]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="border-y border-[#eceaf1] bg-[#faf9fc]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7048e8]">
              Three simple steps
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              How OD Media Saver works
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#716d7e]">
              The experience is designed to stay clear about what is and isn't
              available.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {steps.map((step) => (
              <article key={step.number} className="rounded-2xl bg-white p-6">
                <p className="text-sm font-bold tracking-wide text-[#7048e8]">
                  {step.number}
                </p>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#716d7e]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-left">
        <p className="text-sm font-semibold text-[#716d7e]">OD Media Saver</p>
        <p className="flex items-center justify-center gap-1.5 text-xs text-[#9691a0]">
          <CircleHelp size={14} />
          Provider integrations are still in development.
        </p>
      </footer>
    </main>
  );
}
