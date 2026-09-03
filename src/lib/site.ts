// Central site constants. Public business facts mirrored from the live site.
export const SITE_URL = "https://vikingmarketing.ai";
export const SITE_NAME = "Viking Marketing";
export const PHONE_DISPLAY = "(480) 360-4644";
export const PHONE_TEL = "+14803604644";
export const PHONE_SCHEMA = "+1-480-360-4644";
export const EMAIL = "team@vikingmarketing.ai";
export const ADDRESS = {
  streetAddress: "4240 S Arizona Ave #1063",
  addressLocality: "Chandler",
  addressRegion: "AZ",
  postalCode: "85248",
  addressCountry: "US",
};
export const SOCIAL = {
  facebook: "https://www.facebook.com/VikingMarketingAI",
  instagram: "https://www.instagram.com/vikingmarketing.ai/",
  linkedin: "https://www.linkedin.com/company/vikingmarketing/",
  youtube: "https://www.youtube.com/@VikingMarketingAI",
};
export const APP_LOGIN_URL = "https://app.vikingmarketing.ai/";
export const RATING = { value: "5.0", count: "21" };
export const PRICE_RANGE = "$297-$997";

// Integrations — set these in .env.local (see .env.example). Never hardcode IDs.
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
// Defaults to the site's own public GHL reviews widget (same embed the live page uses).
export const REVIEWS_WIDGET_URL =
  process.env.NEXT_PUBLIC_REVIEWS_WIDGET_URL ||
  "https://backend.leadconnectorhq.com/appengine/reviews/get_widget/3gMLUPh02dyQOTzRywWd";
export const BOOKING_WIDGET_URL = process.env.NEXT_PUBLIC_BOOKING_WIDGET_URL || "";
export const CHAT_WIDGET_SRC = process.env.NEXT_PUBLIC_CHAT_WIDGET_SRC || "";

export const ORG_LOGO = "/images/logo.svg";
export const DEFAULT_OG_IMAGE = "/images/og-home.webp";
