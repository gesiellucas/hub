import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'studious-space-journey-54g4g4vjj5r3pvw9-3000.app.github.dev']
    }, // or other relevant flags
  },
};

export default nextConfig;
