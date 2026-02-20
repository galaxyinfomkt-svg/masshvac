import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.cdn.filesafe.space",
        pathname: "/sZJvTMNScvm4zh9WxYtH/**",
      },
    ],
  },
};

export default nextConfig;
