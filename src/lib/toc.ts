export type TocHeading = { id: string; text: string };

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Adds an id to every <h2> in the post's HTML (unless it already has one)
 *  and returns the matching list of {id, text} entries for a table of
 *  contents built from the same headings the reader actually sees. */
export function withHeadingIds(html: string): { html: string; headings: TocHeading[] } {
  const headings: TocHeading[] = [];
  const seen = new Map<string, number>();

  const out = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (match, attrs: string, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    if (!text) return match;

    // If the heading already carries an id (some posts have CMS-generated
    // ids baked in), reuse it verbatim so the TOC link and the actual
    // anchor never drift apart.
    const existingId = attrs.match(/\bid=["']([^"']+)["']/);
    if (existingId) {
      headings.push({ id: existingId[1], text });
      return match;
    }

    let slug = slugify(text) || "section";
    const count = seen.get(slug) ?? 0;
    seen.set(slug, count + 1);
    if (count > 0) slug = `${slug}-${count}`;

    headings.push({ id: slug, text });
    return `<h2${attrs} id="${slug}">${inner}</h2>`;
  });

  return { html: out, headings };
}
