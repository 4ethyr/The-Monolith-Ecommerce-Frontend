import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Descomente apenas quando fazer build para produção
  // basePath: "/The-Monolith-Ecommerce-Frontend", // Para GitHub Pages ou subdiretório
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
