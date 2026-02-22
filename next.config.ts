import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Le damos permiso a Next.js de cargar imágenes desde Sanity */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;