import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Asegura que Next.js genere una salida optimizada para entornos de servidor como Vercel
  trailingSlash: true, // Asegura que las rutas siempre terminen con una barra, puede resolver problemas de enrutamiento
  images: {
    domains: ["localhost"], // Permite cargar imágenes desde localhost durante el desarrollo
    formats: ["image/webp", "image/avif"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Elimina console.log en producción
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;


