# Differences from the original site

The rebuild reproduces the source site's content, URLs, metadata, and design. The deliberate differences below fall into four groups: platform swaps, fidelity trade-offs, SEO corrections (additions only), and source quirks preserved on purpose.

## Platform / integration differences

- **GoHighLevel page engine → Next.js static site.** All GHL runtime markup replaced with clean React components; content is data-driven (`src/data`, `src/content`).
- **Reviews carousel** ("What Real Businesses Say About Viking"): the source embeds a LeadConnector reviews widget iframe. The rebuild embeds the same widget via `NEXT_PUBLIC_REVIEWS_WIDGET_URL`; when unset it renders a "Rated 5.0 from 21 Google reviews" placeholder card. No review content is hardcoded.
- **Booking calendar** on `/book-a-call`: the source renders a GHL calendar inside the page engine (no public embed URL in the HTML). The rebuild embeds a GHL calendar permalink via `NEXT_PUBLIC_BOOKING_WIDGET_URL`; when unset it shows call/email actions instead.
- **Chat widget bubble**: loaded on the source via Google Tag Manager. Wire up `NEXT_PUBLIC_GTM_ID` and it returns identically. No tracking IDs are hardcoded (the source's GTM container ID was deliberately not copied).
- **Fonts**: headings use Satoshi served from Fontshare's official free CDN instead of the site's privately re-hosted OTF files (same typeface, licensed channel). Poppins and Playfair Display are self-hosted via `next/font`.
- **Pricing "Get Started with …" buttons**: plain `<button>`s with GHL click actions on the source; here they link to `/book-a-call` (the same conversion path every other CTA uses).

## Visual / functional trade-offs

- **Scroll animations**: the source's GHL animation library is replaced with a lightweight IntersectionObserver fade/slide (`Reveal`), honoring `prefers-reduced-motion`. Timing differs slightly.
- **Hero sparkles / handwritten annotation**: recreated with the original SVG sparkle asset and the Playfair italic note; positioning is approximated.
- **Blog pagination**: client-side 4-per-page with Previous/1…5/Next, matching source behavior; deep-linkable `?page=` URLs were not reproduced (the source's aren't indexed).
- **Blog post "Related posts"**: the rebuild shows same-category related cards after each article; the source shows a recent-posts module. Comparable but not identical.
- **Section spacing/sizing**: matched to the reference screenshots by eye; minor px-level differences remain, most visibly fluid-type wrap points at intermediate viewports.
- **The `compare` table component is 3-column**: `/sms-payment-link`'s source table is 5-column; two column pairs were merged with a "·" joiner (all cell text verbatim). See docs/REPORT-agent-b.md.
- **"More Than a Booking Tool" sections** render paragraphs → bullets → bold close → link; on two pages the source interleaves one paragraph after the bullets (noted in docs/REPORT-agent-d.md).

## SEO corrections (additions only — nothing was removed or rewritten)

- **Blog index (`/blog`)**: the source ships it with an empty title, no description, and no canonical (a GHL blog-shell limitation). The rebuild gives it a proper title/description/canonical.
- **`/post/...maximize-your-business-reviews...`**: the source post has no meta description; one was written for it.
- **Categories `ai` and `ai-appointment-setter`**: no meta descriptions on the source; faithful ones added. The other two categories and the author page use the source descriptions verbatim.
- **Blog posts** ship real `BlogPosting` + `BreadcrumbList` JSON-LD; the source posts expose none in their HTML.
- **Canonicals** exist on every page (several source blog-taxonomy pages lacked them).
- Root canonical renders as `https://vikingmarketing.ai` (no trailing slash) vs the source's with-slash — semantically identical.

## Source quirks preserved verbatim (flag for the site owner)

- Typos and oddities kept for fidelity: "Term of Conditions" footer label, "We ensure a quick responses.", the `/sms-payment-link` H1 missing a space ("Link:Get"), "Ai Tools" category name, the `sales-and-follow-up` category description beginning with a stray "description: " prefix, the author-page description beginning "Author description: …", assorted in-copy typos noted in the agent reports.
- Two legacy posts (`do-old-leads…`, `is-database-reactivation…`) contain a second H1 inside the article body — the source pages do too.
- The FAQ side-card image alt on some pages reuses another page's alt text (source quirk, kept).
- Footer/nav placeholder links that are dead (`href=""`) on the source — Case Studies, Comparisons, Help Center, Integrations, API Docs, and the non-Phoenix city links — now point to the nearest sensible internal page (`/blog`, `/book-a-call`, `/locations`) instead of reloading the current page. This is the one intentional link-behavior improvement.
- Privacy-policy links that exist as link-styled text on the source but captured no `href` (Stripe policy "here", CCPA "this link", "Ads Settings", "www.aboutads.info") are plain text pending real URLs — see docs/REPORT-agent-f.md.

## Assets to replace / verify

All imagery was downloaded from the site's own CDN into `public/images/` (243 files). Flags:

1. **Press/media logos** (`press-*.webp`: Associated Press, USA Today, StreetInsider, Barchart, International Business Times, Business Insurance, Wedbush, Minyanville, openPR) are third-party trademarks used as "As Featured In" badges. They were carried over as-is from the site's own media library; confirm your press-usage rights cover the rebuilt site, or swap in licensed versions.
2. **CloseBot case-study video poster** on `/about-us` hotlinks YouTube's thumbnail (`img.youtube.com`) for the embedded video — standard for YouTube embeds; replace with a local poster if you prefer zero external requests.
3. **Google Map snapshot** (`map-chandler.jpg`) is the static map tile the source page served (Google imagery). For strict licensing hygiene, consider replacing it with a live Google Maps embed iframe.
4. **Custom Satoshi OTFs** were not copied; Fontshare delivery is used instead (see above).
5. Everything else (product screenshots, icons, illustrations, blog images, logo) is first-party brand material carried over unchanged.
