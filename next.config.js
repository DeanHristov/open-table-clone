/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    API_MOCKING: process.env.NEXT_PUBLIC_API_MOCKING === "true"
},
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
