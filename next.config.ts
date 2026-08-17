import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    // Placeholder portraits for the landing page. Swap these for real
    // generated headshots once the pipeline exists.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
}

export default nextConfig
