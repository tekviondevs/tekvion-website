/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Every page is statically generated and the site must run on any static host,
  // so Next's image optimisation server is switched off.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
