/** @type {import('next').NextConfig} */
import withPWA from "@ducanh2912/next-pwa";

const nextConfig = {
  output: "export",
  distDir: "docs",
  images: {
    unoptimized: true,
    domains: ["images.pexels.com"],
  },
};

const config = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
})(nextConfig);

export default config;