// Typed content model driving the /viking-marketing-vs-* comparison pages.
// Mirrors the same "content as typed data + shared renderer" pattern used by
// TemplatePageData/TemplatePage for feature/industry pages.
import { SITE_URL } from "./site";

export type MatrixCell = "yes" | "no" | "partial";

export type ComparisonRow = {
  feature: string;
  vikingStatus: MatrixCell;
  vikingNote?: string;
  competitorStatus: MatrixCell;
  competitorNote?: string;
};

export type ComparisonPageData = {
  slug: string; // e.g. "viking-marketing-vs-settr"
  competitorName: string;
  competitorUrl: string;
  h1: string;
  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };
  /** Disclosure line: when competitor facts were checked, and the source. */
  disclosure: string;
  intro: string[];
  featureMatrix: ComparisonRow[];
  matrixSourceNote: string;
  overlapTitle: string;
  overlapBody: string;
  differencesTitle: string;
  differences: { title: string; body: string }[];
  pricingRows: { label: string; viking: string; competitor: string }[];
  pricingNote: string;
  pickViking: string;
  pickCompetitor: string;
  faqs: { q: string; a: string }[];
  lastUpdated: string; // ISO date, e.g. "2026-08-15"
  /** Competitor's published starting price, for SoftwareApplication schema.
   *  Omit if genuinely not published (matches the page's own disclosure). */
  competitorPrice?: { amount: string; note: string };
};

export const COMPARISON_PAGES: { slug: string; competitorName: string }[] = [
  { slug: "viking-marketing-vs-settr", competitorName: "Settr" },
  { slug: "viking-marketing-vs-bookr", competitorName: "Bookr" },
  { slug: "viking-marketing-vs-vendi", competitorName: "Vendi" },
  { slug: "viking-marketing-vs-quo", competitorName: "Quo (Sona)" },
];

/** Helper to build page metadata for a comparison page. */
export function comparisonMetadata(data: ComparisonPageData) {
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    alternates: { canonical: `${SITE_URL}/${data.slug}` },
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      url: `${SITE_URL}/${data.slug}`,
      siteName: "Viking Marketing",
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
    },
  };
}
