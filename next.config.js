/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
    domains: ['s3.us-west-2.amazonaws.com']
  }
}

module.exports = nextConfig
