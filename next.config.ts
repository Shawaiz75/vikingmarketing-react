import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — deployable to any static host (or Vercel as-is).
  output: "export",
  trailingSlash: false,
  images: { unoptimized: true },
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
