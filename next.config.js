/** @type {import('next').NextConfig} */
const { withNetlify } = require('@netlify/next');

module.exports = withNetlify({
  reactStrictMode: true,
  images: { unoptimized: true },
});


module.exports = nextConfig;
