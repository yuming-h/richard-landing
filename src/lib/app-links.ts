export const iosUrl =
  "https://apps.apple.com/us/app/richard-ai-notes-and-study/id6752790082";
export const androidUrl =
  "https://play.google.com/store/apps/details?id=com.yuming.richard";
export const webAppUrl = "https://app.richardapp.xyz";

type DeviceHints = {
  userAgent?: string;
  platform?: string;
  maxTouchPoints?: number;
  userAgentDataPlatform?: string;
};

export function getStartedUrl(hints: DeviceHints = {}): string {
  const userAgent = hints.userAgent ?? "";
  const platform = hints.platform ?? "";
  const maxTouchPoints = hints.maxTouchPoints ?? 0;
  const uaPlatform = hints.userAgentDataPlatform ?? "";

  const isIos =
    /iPad|iPhone|iPod/i.test(userAgent) ||
    uaPlatform === "iOS" ||
    (platform === "MacIntel" && maxTouchPoints > 1);

  if (isIos) return iosUrl;

  const isAndroid = /Android/i.test(userAgent) || uaPlatform === "Android";
  if (isAndroid) return androidUrl;

  return webAppUrl;
}

export function getStartedUrlFromNavigator(
  nav: Pick<Navigator, "userAgent" | "platform" | "maxTouchPoints"> & {
    userAgentData?: { platform?: string };
  } = navigator,
): string {
  return getStartedUrl({
    userAgent: nav.userAgent,
    platform: nav.platform,
    maxTouchPoints: nav.maxTouchPoints,
    userAgentDataPlatform: nav.userAgentData?.platform,
  });
}
