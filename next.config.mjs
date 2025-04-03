/** @type {import('next').NextConfig} */

// const withPWA = require("@ducanh2912/next-pwa").default({
//   dest: "public",
// });

const nextConfig = {
  output: "export",
  distDir: "docs",
  images: {
    unoptimized: true,
    domains: ["images.pexels.com"],
  },
};

export default nextConfig;
