import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // Bundle Shiki (docs code highlighting): as an external package its hashed
  // module id can't be resolved under the Bun runtime.
  transpilePackages: ["shiki"],
  // The docs are the home page; old playground URLs keep working.
  async redirects() {
    return [
      { source: "/", destination: "/docs", permanent: false },
      ...["actions", "forms", "forms/more", "navigation", "overlays", "display"].map((path) => ({
        source: `/${path}`,
        destination: `/docs/playground/${path}`,
        permanent: true,
      })),
    ]
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
