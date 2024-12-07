/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io'], // Allow Next.js to optimize images from Sanity's CDN
  },
}

module.exports = nextConfig
