/**
 * URLs for store badges. Set in .env.local when the app is published:
 * NEXT_PUBLIC_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=...
 * NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/.../id...
 */
export const GOOGLE_PLAY_URL =
  process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ??
  "https://play.google.com/store?hl=vi";

export const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL ??
  "https://apps.apple.com/vn/iphone/today";
