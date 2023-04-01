/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://res.cloudinary.com/'],
    unoptimized: true
  }
}

module.exports = nextConfig
