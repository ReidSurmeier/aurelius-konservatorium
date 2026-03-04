import type { NextConfig } from "next";

const BASE = "/aurelius-konservatorium";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? BASE : "",
  assetPrefix: process.env.NODE_ENV === "production" ? BASE : "",
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH:
      process.env.NODE_ENV === "production" ? BASE : "",
  },
};

export default nextConfig;
