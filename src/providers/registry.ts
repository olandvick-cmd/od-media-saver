import type { MediaProvider, SupportedPlatform } from "./types";

// Providers are registered only after their official authorization and retrieval
// flows have been implemented and integration-tested. No placeholder downloader
// is registered here.
const providers: Partial<Record<SupportedPlatform, MediaProvider>> = {};

export function getProvider(platform: SupportedPlatform): MediaProvider | undefined {
  return providers[platform];
}

export function registerProvider(provider: MediaProvider): void {
  providers[provider.platform] = provider;
}
