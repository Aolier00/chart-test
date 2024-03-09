/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  // start aplication in a subdomain before localhost
  // subdomain: 'app',
};

module.exports = nextConfig