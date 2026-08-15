import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/PartyGames',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
