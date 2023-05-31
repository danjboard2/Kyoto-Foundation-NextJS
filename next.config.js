/** @type {import('next').NextConfig} */
var webpack = require('webpack');
const nextConfig = {
  reactStrictMode: true,
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
     new webpack.ProvidePlugin({
     $: "jquery",
     jQuery: "jquery",
     "window.jQuery": "jquery",
  }));
  return config;
},
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
      {
        protocol: 'https',
        hostname: 'placehold.co',
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
