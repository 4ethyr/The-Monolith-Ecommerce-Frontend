import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/The-Monolith-Ecommerce-Frontend",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
