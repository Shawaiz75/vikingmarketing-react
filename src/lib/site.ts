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
// Google Business Profile — source of truth for the testimonials section
// and the "read more reviews" links out to the real listing.
export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Viking+Marketing/@33.2449236,-111.8440962,17z/data=!3m1!4b1!4m6!3m5!1s0x872b01e23f3f0feb:0x55e9f746330e73f4!8m2!3d33.2449236!4d-111.8440962!16s%2Fg%2F11ksqzcphw";

// Integrations — set these in .env.local (see .env.example). Never hardcode IDs.
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
export const BOOKING_WIDGET_URL = process.env.NEXT_PUBLIC_BOOKING_WIDGET_URL || "";
export const CHAT_WIDGET_SRC = process.env.NEXT_PUBLIC_CHAT_WIDGET_SRC || "";

export const ORG_LOGO = "/images/logo.svg";
export const DEFAULT_OG_IMAGE = "/images/og-home.webp";
