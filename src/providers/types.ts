export type SupportedPlatform = "facebook" | "instagram" | "tiktok";

export type MediaAvailability =
  | "downloadable"
  | "preview_only"
  | "authorization_required"
  | "unsupported"
  | "failed";

export interface MediaRequestContext {
  userId?: string;
  accessToken?: string;
}

export interface MediaMetadata {
  title?: string;
  thumbnailUrl?: string;
  durationSeconds?: number;
  creatorName?: string;
}

export interface MediaResult {
  platform: SupportedPlatform;
  availability: MediaAvailability;
  metadata?: MediaMetadata;
  downloadUrl?: string;
  message: string;
}

export interface MediaProvider {
  readonly platform: SupportedPlatform;
  detect(url: URL): boolean;
  getMedia(url: URL, context: MediaRequestContext): Promise<MediaResult>;
}
