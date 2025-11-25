/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mocha-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'static.getmocha.com',
      },
    ],
  },
};

module.exports = nextConfig;

