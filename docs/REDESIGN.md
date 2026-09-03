# Viking Marketing v2 — design rationale & system

Preview route: **`/v2`** (noindexed, excluded from the sitemap until approved). Promoting it to `/` later means moving `src/app/v2/page.tsx`'s content into the `(site)` home route — or simply pointing `(site)/page.tsx` at the v2 components — and lifting the `robots: noindex`.

## 1. Design rationale

**Concept — "One lead, one night."** The page is structured as the timeline of a single Saturday-night lead: the 9:47 PM missed call → the AI's reply eight seconds later → the booked Tuesday job → the morning after. Mono-spaced timestamp chips act as section eyebrows, so the page's *structure* encodes the product's core value (response speed) instead of decorating it. The signature element is the hero's **working conversation demo** — a coded SMS thread in which a missed call becomes a booked appointment, looping live beside the headline "Your next customer just called. *Viking already answered.*"

**Why this direction.** Research into current high-performing SaaS sites (see sources in the project summary) converged on a few load-bearing patterns: the hero *is* the product (live UI doing real work in the first seconds, not a static screenshot), trust signals before the first scroll, a single conversion objective, outcome-driven copy at a plain reading level, bento grids for capability sets, and restrained purposeful motion. Those patterns were used as inspiration only; the execution — the night-timeline narrative, the semantic lead-state color system, the dispatch-log mono type — is specific to Viking's world of missed calls, after-hours leads, and honest local-business math.

**Brand continuity, evolved.** Same logo, same deep-navy base, same violet→orchid gradient, same Satoshi/Poppins pairing, and the same Playfair-italic accent that is Viking's typographic signature. The evolution is discipline: the gradient is reserved for AI actions and the primary CTA; color otherwise carries **meaning** tied to lead states (blue = inbound/live, violet gradient = AI action, green = booked, amber = missed/at-risk — the same semantics inside the demo, the stat tiles, the bento dots, and the timeline chips). IBM Plex Mono joins as a utility face for timestamps and data — the call-log vernacular of the subject.

**Conversion flow** (single objective: book a demo): hero + demo → press strip → problem (cost of missed calls, count-up stats) → capabilities bento → how-it-works (48-hour timeline) → workflow proof (real dashboard) → industry tabs → results (rating, case study, reviews embed) → channels → pricing teaser → FAQ → final CTA that returns to the opening beat ("Tonight · 9:47 PM · someone will call"). Two actions repeat throughout — *Book a free demo* and *Call (480) 360-4644* — and nothing else competes.

## 2. Design tokens

Defined in [`src/app/v2/v2.css`](../src/app/v2/v2.css) under `.v2`; components consume tokens only.

| Group | Tokens |
|---|---|
| Surfaces | `--v2-ink #020114` · `--v2-surface-1 #0A0722` · `--v2-surface-2 #110C2E` · `--v2-surface-3 #191342` · lines at 8% / 16% white |
| Text | `--v2-text` (white) · `--v2-text-2` (72%) · `--v2-text-3` (50%) |
| Brand / semantics | `--v2-violet #3D05DD` (AI) · `--v2-orchid #EFA4F2` (AI accent) · `--v2-signal #188BF6` (inbound/live) · `--v2-booked #37CA37` · `--v2-missed #F6AD55` · gradients `--v2-grad-ai`, `--v2-grad-text` |
| Type roles | display: Satoshi · body: Poppins · accent: Playfair Display italic · mono/data: IBM Plex Mono |
| Space | 8-pt scale `--v2-s1…s8` (8→128px); sections `clamp(72px, 10vw, 128px)` |
| Radii | 10 / 16 / 24 / pill |
| Elevation | `--v2-shadow-card`, `--v2-shadow-cta`, `--v2-shadow-glow` |
| Motion | `--v2-ease cubic-bezier(0.22,1,0.36,1)` · 180ms fast · 320ms base |

## 3. Component system

`src/components/v2/` — all reusable, token-driven:

- **`V2Chrome`** — floating glass pill nav (anchor links + demo CTA, mobile menu) and the compact footer.
- **`ConvoDemo`** — the hero demo. Server-renders the *finished* conversation (works with JS off, for crawlers, and under reduced motion); client JS rewinds and plays the loop.
- **`motion.tsx`** — `Rise` / `Stagger` / `StaggerItem` (CSS-class scroll reveals driven by IntersectionObserver; content is visible by default and only hides when a `js` class is present, with a 2.2s CSS auto-show safety net) and `CountUp` (Framer Motion; SSR renders the final value).
- **`IndustryTabs`** — accessible tabs (roving `aria-selected`, animated panel swap).
- **`FaqV2`** — keyboard-native accordion with animated height.
- Section styling primitives: `.v2-card`, `.v2-chip`, `.v2-stamp`, `.v2-btn-*`, `.v2-marquee`, `.v2-phone`.

## 4. Animations and their purpose

| Animation | Where | Purpose | Reduced-motion behavior |
|---|---|---|---|
| Conversation loop | Hero | Demonstrates the actual product outcome (missed call → booked job) in ~15 s | Full finished thread shown statically |
| Scroll reveals (`Rise`) | Section headers | Establish reading order on entry | Content static & visible |
| Staggered cards (`Stagger`) | Stats, bento, steps, pricing | Guide the eye across sets one item at a time | Static |
| Count-ups | Problem stats, pricing | Make the cost-of-missed-calls numbers land; draw the eye to verified figures | Final values rendered |
| Press marquee | Press strip | Fit 9 badges in one calm band | Static row |
| Tab panel swap | Industries | Reinforce that scenarios are alternatives, not a sequence | Instant swap |
| FAQ height | FAQ | Preserve context while answers open | Instant open |
| Hover lift / button press | Cards, CTAs | Affordance feedback | Effectively instant |
| Typing dots | Demo | Signal "the AI is replying" beat | Not shown (static thread) |

Guardrails: no video backgrounds, no parallax, no scroll-jacking; entrances are one-shot with terminal states; `prefers-reduced-motion` collapses everything to static content; all content is complete without JavaScript (verified by capturing the page with scripts stripped).

## 5. Content & assets requiring approval before launch

1. **Press badges** (AP, USA Today, StreetInsider, Barchart, IBT, Business Insurance, Wedbush, Minyanville, openPR) — third-party trademarks reused from your own media library; confirm press-usage rights (same flag as the v1 rebuild).
2. **The demo conversation** — original fictional copy for a sample HVAC business ("Summit Air & Heat", fictional tech name "M. Rivera", fictional caller number), labeled "Simulated conversation" on-page. Approve the scenario, business name, and wording.
3. **Stats** (27% / 78% in 5 min / 85% / $75B; 27–62% home-services miss rate; after-hours dental share) — all taken from your current site's published pages; re-verify sources before promoting, since the redesign gives them more prominence.
4. **CloseBot case study card** ("over 2,000 people a day", early-access beta partner) — phrased from your About page; confirm CloseBot is comfortable being named this prominently.
5. **"Live by Wednesday" headline** — a rhetorical framing of your published 48-hour claim; approve the phrasing.
6. **Channel list** (SMS, web chat, Instagram DM, Facebook Messenger, Google Business messages, Email) — matches the channels your site claims today; confirm completeness.
7. **Pricing summaries** — condensed from your published plans; approve the one-line descriptions.
8. **Rating claim** ("5.0 from 21 Google reviews") — update the count at launch time.
