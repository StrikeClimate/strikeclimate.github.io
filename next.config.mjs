/** @type {import('next').NextConfig} */
const nextConfig = { 
    output: "export", 
    distDir: "docs",
    images: {
        unoptimized: true,
        domains: ['images.pexels.com'],
    },
};

export default nextConfig;