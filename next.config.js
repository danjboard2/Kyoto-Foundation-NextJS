/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  env: {
    UPSTASH_REDIS_REST_URL: 'https://fast-badger-34974.upstash.io',
    UPSTASH_REDIS_REST_TOKEN: 'c9b2923849884e2a92f841135f4b3256',
  },
}
module.exports = nextConfig
