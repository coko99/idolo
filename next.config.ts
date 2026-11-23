import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/jelovnik",
        destination: "/meni",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
