import type { NextConfig } from "next";

// Set only when building for GitHub Pages (see .github/workflows/deploy-pages.yml).
// Project pages are served from https://<user>.github.io/<repo>/, so every
// route and asset needs the repo name as a prefix. Local dev, Vercel, and a
// custom domain all leave this unset and serve from the root as before.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Fully static site — deployable to any static host (or Vercel as-is).
  output: "export",
  trailingSlash: false,
  images: {
    // Static export has no Image Optimization server; a custom loader (not
    // `unoptimized: true`) is used so basePath still gets applied to every
    // next/image src — see src/lib/image-loader.ts.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  outputFileTracingRoot: __dirname,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
