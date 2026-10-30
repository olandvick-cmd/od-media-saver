"use client";

import { FormEvent, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ClipboardPaste,
  Link2,
  LoaderCircle,
  X,
} from "lucide-react";
import { detectPlatformUrl } from "@/lib/validation/platform-url";
import type { SupportedPlatform } from "@/providers/types";

const PLATFORM_LABELS: Record<SupportedPlatform, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  tiktok: "TikTok",
};

type LinkState =
  | { kind: "idle" }
  | { kind: "invalid"; message: string }
  | { kind: "recognized"; platform: SupportedPlatform };

export function MediaLinkForm() {
  const [url, setUrl] = useState("");
  const [state, setState] = useState<LinkState>({ kind: "idle" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!url.trim()) {
      setState({ kind: "invalid", message: "Paste a link to get started." });
      return;
    }

    const result = detectPlatformUrl(url);

    if (!result.supported) {
      setState({
        kind: "invalid",
        message:
          result.reason === "invalid_url"
            ? "That link doesn't look valid. Check it and try again."
            : "That platform isn't supported yet. Try a Facebook, Instagram, or TikTok link.",
      });
      return;
    }

    setState({ kind: "recognized", platform: result.platform });
  }

  async function handlePaste() {
    try {
      const pasted = await navigator.clipboard.readText();
      if (pasted) {
        setUrl(pasted);
        setState({ kind: "idle" });
      }
    } catch {
      setState({
        kind: "invalid",
        message: "Clipboard access isn't available. Paste your link into the field.",
      });
    }
  }

  function handleClear() {
    setUrl("");
    setState({ kind: "idle" });
  }

  return (
    <div className="w-full max-w-2xl">
      <form
        onSubmit={handleSubmit}
        className="rounded-[1.35rem] border border-[#eae7f0] bg-white p-2.5 shadow-[0_20px_70px_rgba(37,25,75,0.09)]"
      >
        <label htmlFor="media-url" className="sr-only">
          Social media link
        </label>
        <div className="flex min-h-14 items-center gap-3 rounded-xl bg-[#f8f7fb] px-4">
          <Link2 size={19} className="shrink-0 text-[#8a8498]" aria-hidden="true" />
          <input
            id="media-url"
            type="url"
            inputMode="url"
            autoComplete="url"
            placeholder="Paste a Facebook, Instagram or TikTok link"
            value={url}
            onChange={(event) => {
              setUrl(event.target.value);
              if (state.kind !== "idle") setState({ kind: "idle" });
            }}
            className="h-12 min-w-0 flex-1 bg-transparent text-sm text-[#171522] outline-none placeholder:text-[#9a95a5]"
          />
          {url ? (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear link"
              className="rounded-lg p-2 text-[#8a8498] transition hover:bg-[#eeebf5] hover:text-[#171522]"
            >
              <X size={17} />
            </button>
          ) : (
            <button
              type="button"
              onClick={handlePaste}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-2 text-xs font-semibold text-[#7048e8] transition hover:bg-[#eee9ff]"
            >
              <ClipboardPaste size={15} />
              <span className="hidden sm:inline">Paste</span>
            </button>
          )}
        </div>
        <button
          type="submit"
          className="mt-2.5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#7048e8] px-5 text-sm font-semibold text-white transition hover:bg-[#5b35cf] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7048e8]"
        >
          Check link
          <ArrowRight size={17} />
        </button>
      </form>

      {state.kind === "invalid" && (
        <div
          role="alert"
          className="mt-4 flex items-start gap-2.5 rounded-xl border border-[#f3d9d9] bg-[#fff8f8] px-4 py-3 text-left text-sm text-[#a33b3b]"
        >
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          <p>{state.message}</p>
        </div>
      )}

      {state.kind === "recognized" && (
        <div
          role="status"
          className="mt-4 rounded-xl border border-[#e5defb] bg-[#faf8ff] p-4 text-left"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#7048e8]" />
            <div>
              <p className="text-sm font-semibold text-[#292238]">
                {PLATFORM_LABELS[state.platform]} link recognized
              </p>
              <p className="mt-1 text-sm leading-6 text-[#716d7e]">
                The link format is supported. Media processing for this platform
                is not enabled yet, so no download is available at this time.
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs text-[#8a8498]">
            <LoaderCircle size={14} />
            <span>Provider integration pending</span>
          </div>
        </div>
      )}

      <p className="mt-3 px-2 text-center text-xs leading-5 text-[#9691a0]">
        Only use links to content you own or have permission to save. Private
        content and platform restrictions are never bypassed.
      </p>
    </div>
  );
}
