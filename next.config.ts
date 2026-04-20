import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/The-Monolith-Ecommerce-Frontend" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
