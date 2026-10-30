import type { SupportedPlatform } from "@/providers/types";

const HOSTS: Record<SupportedPlatform, readonly string[]> = {
  facebook: ["facebook.com", "www.facebook.com", "m.facebook.com", "fb.watch"],
  instagram: ["instagram.com", "www.instagram.com"],
  tiktok: ["tiktok.com", "www.tiktok.com", "vm.tiktok.com", "vt.tiktok.com"],
};

export type PlatformDetection =
  | { supported: true; platform: SupportedPlatform; url: URL }
  | { supported: false; reason: "invalid_url" | "unsupported_host" };

export function detectPlatformUrl(input: string): PlatformDetection {
  let url: URL;

  try {
    url = new URL(input.trim());
  } catch {
    return { supported: false, reason: "invalid_url" };
  }

  if (url.protocol !== "https:" && url.protocol !== "http:") {
    return { supported: false, reason: "invalid_url" };
  }

  if (url.username || url.password || url.port) {
    return { supported: false, reason: "invalid_url" };
  }

  const hostname = url.hostname.toLowerCase().replace(/\.$/, "");

  for (const [platform, hosts] of Object.entries(HOSTS) as [SupportedPlatform, readonly string[]][]) {
    if (hosts.includes(hostname)) {
      return { supported: true, platform, url };
    }
  }

  return { supported: false, reason: "unsupported_host" };
}
