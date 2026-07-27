import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The build was inferring the workspace root from a stray lockfile in the
  // home directory and warning about it on every run. Pin it to this project.
  turbopack: {
    root: __dirname,
  },
  images: {
    // AVIF first, WebP fallback. The default is WebP only; AVIF is typically
    // 20-30% smaller again for the photographic sources used here.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
