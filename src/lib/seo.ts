import type { Metadata } from "next";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  ORG_LOGO,
  PHONE_SCHEMA,
  EMAIL,
  ADDRESS,
  SOCIAL,
  RATING,
  PRICE_RANGE,
} from "./site";

type PageSeo = {
  title: string;
  description: string;
  path: string; // "/about-us"
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string; // local or absolute
  ogType?: "website" | "article";
  keywords?: string[];
};

export function pageMetadata(seo: PageSeo): Metadata {
  const url = `${SITE_URL}${seo.path === "/" ? "/" : seo.path}`;
  const image = seo.ogImage
    ? seo.ogImage.startsWith("http")
      ? seo.ogImage
      : `${SITE_URL}${seo.ogImage}`
    : `${SITE_URL}${DEFAULT_OG_IMAGE}`;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      url,
      siteName: SITE_NAME,
      type: seo.ogType ?? "website",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      images: [image],
    },
  };
}

/* ------------------------- JSON-LD builders ------------------------- */

// Organization carries the real, disclosed rating (see ReviewsSection) so
// pages that are correctly typed as Organization instead of LocalBusiness
// (i.e. every page that isn't a genuine physical-service-area page) don't
// lose the rating from their graph. See localBusinessLd below for why
// LocalBusiness itself is now reserved for genuine local/service-area pages.
export const organizationLd = () => ({
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}${ORG_LOGO}`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  telephone: PHONE_SCHEMA,
  email: EMAIL,
  address: { "@type": "PostalAddress", ...ADDRESS },
  sameAs: [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.linkedin, SOCIAL.youtube],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: RATING.value,
    reviewCount: RATING.count,
  },
});

// Reserved for pages that make a genuine, geographically bounded
// local-service claim (Phoenix-metro city pages). Google scopes
// LocalBusiness to businesses with a physical service area customers are
// actually in — a nationwide SaaS page should use organizationLd instead.
// Pass the specific cities/areas the page actually serves.
export const localBusinessLd = (opts?: { areaServed?: string[] }) => ({
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  url: `${SITE_URL}/`,
  telephone: PHONE_SCHEMA,
  priceRange: PRICE_RANGE,
  address: { "@type": "PostalAddress", ...ADDRESS },
  ...(opts?.areaServed?.length
    ? { areaServed: opts.areaServed.map((name) => ({ "@type": "City", name })) }
    : {}),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: RATING.value,
    reviewCount: RATING.count,
  },
});

export const webPageLd = (opts: {
  path: string;
  name: string;
  description: string;
  image?: string;
}) => ({
  "@type": "WebPage",
  "@id": `${SITE_URL}${opts.path}#webpage`,
  url: `${SITE_URL}${opts.path}`,
  name: opts.name,
  description: opts.description,
  isPartOf: { "@id": `${SITE_URL}/#organization` },
  ...(opts.image
    ? { primaryImageOfPage: opts.image.startsWith("http") ? opts.image : `${SITE_URL}${opts.image}` }
    : {}),
});

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE_URL}${it.path}`,
  })),
});

export const faqLd = (faqs: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const howToLd = (opts: {
  name: string;
  description: string;
  totalTime?: string;
  steps: { name: string; text: string }[];
}) => ({
  "@type": "HowTo",
  name: opts.name,
  description: opts.description,
  ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
  step: opts.steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.text,
  })),
});

export const serviceLd = (opts: {
  name: string;
  description: string;
  path: string;
  areaServed?: string[];
}) => ({
  "@type": "Service",
  name: opts.name,
  description: opts.description,
  url: `${SITE_URL}${opts.path}`,
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: opts.areaServed?.length
    ? opts.areaServed.map((name) => ({ "@type": "City", name }))
    : { "@type": "Country", name: "United States" },
});

/** ItemList linking a hub page (e.g. /industries, /locations) to each of its
 *  child Service/WebPage entries, so the hub-to-spoke relationship is
 *  machine-readable rather than only a set of on-page <a> links. */
export const itemListLd = (opts: { name: string; items: { name: string; path: string }[] }) => ({
  "@type": "ItemList",
  name: opts.name,
  itemListElement: opts.items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE_URL}${it.path}`,
    name: it.name,
  })),
});

export const softwareApplicationLd = (opts: {
  name: string;
  description: string;
  path: string;
}) => ({
  "@type": "SoftwareApplication",
  name: opts.name,
  description: opts.description,
  url: `${SITE_URL}${opts.path}`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "297",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "297",
      priceCurrency: "USD",
      billingIncrement: 1,
      unitText: "MONTH",
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: RATING.value,
    reviewCount: RATING.count,
  },
});

export const personLd = () => ({
  "@type": "Person",
  "@id": `${SITE_URL}/#charles-defelice`,
  name: "Charles DeFelice",
  jobTitle: "Founder",
  worksFor: { "@id": `${SITE_URL}/#organization` },
  url: `${SITE_URL}/about-us`,
});

/** Wrap graph nodes into a single JSON-LD payload string. */
export function jsonLdGraph(nodes: object[]) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes });
}
