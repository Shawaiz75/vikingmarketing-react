// Typed content model driving the feature / industry / location page templates.

export type FaqItem = { q: string; a: string };

export type IconStep = { icon: string; alt?: string; title?: string; body: string };

export type TplSection =
  | { type: "definition"; title: string; paragraphs: string[] }
  | {
      type: "split";
      title: string;
      paragraphs: string[];
      bullets?: string[];
      image: string;
      imageAlt: string;
      side: "left" | "right";
      linkLabel?: string;
      linkHref?: string;
      bold?: string;
    }
  | {
      type: "iconSteps";
      title: string;
      intro?: string;
      steps: IconStep[];
      outro?: string;
      ctaLabel?: string;
    }
  | {
      type: "iconBullets";
      title: string;
      intro?: string;
      items: { icon: string; alt?: string; text: string }[];
    }
  | {
      type: "compare";
      title: string;
      intro?: string;
      headers: [string, string, string];
      rows: [string, string, string][];
      footnote?: string;
      outro?: string;
    }
  | {
      type: "industryCards";
      title: string;
      intro?: string;
      cards: { icon: string; alt?: string; title: string; body: string }[];
      ctaLabel?: string;
      note?: string;
    }
  | { type: "industryLinks" }
  | { type: "local"; title: string; paragraphs: string[]; note?: string }
  | {
      type: "setupSteps";
      title: string;
      intro?: string;
      image?: string;
      imageAlt?: string;
      steps: IconStep[];
      outro?: string;
      ctaLabel?: string;
    }
  | { type: "reviews" }
  | {
      type: "stats";
      title: string;
      intro?: string;
      stats: { value: string; label: string }[];
    };

export type TemplatePageData = {
  slug: string; // e.g. "missed-call-text-back" (no leading slash)
  breadcrumbName: string;
  seo: {
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage: string; // local /images path
    keywords?: string[];
  };
  schema: {
    kinds: ("organization" | "localBusiness" | "person" | "service" | "softwareApplication" | "breadcrumb" | "webPage" | "howTo" | "faq")[];
    serviceName?: string;
    serviceDescription?: string;
    howTo?: { name: string; description: string };
  };
  hero: {
    badge?: string;
    h1: string;
    reviewedBy?: string;
    lede: string;
    ctaLabel: string;
    image?: string;
    imageAlt?: string;
    checkLines?: string[]; // rendered as ✓ separated lines
  };
  sections: TplSection[];
  faqTitle: string;
  faqs: FaqItem[];
  faqContextLabel?: string;
  finalCta: { title: string; body: string; ctaLabel: string; phoneNote?: string };
};
