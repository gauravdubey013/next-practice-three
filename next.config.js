/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
    serverActions: true,
  },
  images: {
    domains: ["occ-0-3933-116.1.nflxso.net"],
  },

  webpack(config) {
    // config.infrastructureLogging = { debug: /PackFileCache/ };
    return config;
  },
};

module.exports = nextConfig;
