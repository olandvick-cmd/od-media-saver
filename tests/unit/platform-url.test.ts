import { describe, expect, it } from "vitest";
import { detectPlatformUrl } from "@/lib/validation/platform-url";

describe("detectPlatformUrl", () => {
  it("recognizes Facebook URLs", () => {
    expect(detectPlatformUrl("https://www.facebook.com/watch/?v=123")).toMatchObject({
      supported: true,
      platform: "facebook",
    });
  });

  it("recognizes Instagram URLs", () => {
    expect(detectPlatformUrl("https://www.instagram.com/reel/example/")).toMatchObject({
      supported: true,
      platform: "instagram",
    });
  });

  it("recognizes TikTok short URLs", () => {
    expect(detectPlatformUrl("https://vm.tiktok.com/example")).toMatchObject({
      supported: true,
      platform: "tiktok",
    });
  });

  it("rejects unrelated hosts", () => {
    expect(detectPlatformUrl("https://example.com/video")).toMatchObject({
      supported: false,
      reason: "unsupported_host",
    });
  });

  it("rejects malformed URLs", () => {
    expect(detectPlatformUrl("not a URL")).toMatchObject({
      supported: false,
      reason: "invalid_url",
    });
  });

  it("rejects credentials embedded in a URL", () => {
    expect(detectPlatformUrl("https://user:pass@facebook.com/video")).toMatchObject({
      supported: false,
      reason: "invalid_url",
    });
  });
});
