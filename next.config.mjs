/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const nextConfig = {
  output: "export",
  distDir: "docs",
  images: {
    unoptimized: true,
    domains: ["images.pexels.com"],
  },
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})(nextConfig);