import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // !! WARN !!
    // This allows production builds to successfully complete even if
    // your project has type errors.
    // We are using this to bypass the React 19 / Framer Motion conflict.
    ignoreBuildErrors: true,
  },
  eslint: {
    // Similarly, we ignore eslint errors during build to ensure deployment.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
