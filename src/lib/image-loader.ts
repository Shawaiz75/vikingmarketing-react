/**
 * Custom next/image loader for static export (`output: "export"`).
 *
 * Static export has no Image Optimization server, so images are served as-is
 * — this loader's only job is prefixing `basePath` (set via
 * NEXT_PUBLIC_BASE_PATH, see next.config.ts) so images resolve correctly when
 * the site is deployed under a subpath, e.g. GitHub Pages project pages at
 * https://<user>.github.io/<repo>/. Local dev, Vercel, and a custom domain
 * all leave the env var unset, so this is a no-op passthrough for them.
 */
export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  // Only root-relative local assets need the prefix; leave absolute URLs
  // (e.g. a future remote image) untouched.
  return src.startsWith("/") ? `${basePath}${src}` : src;
}
