import bundleAnalyzer from '@next/bundle-analyzer'
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        port: '',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['prisma/generated/client', "framer-motion"],
  },
};

export default withBundleAnalyzer(nextConfig);
