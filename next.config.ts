import { withContentCollections } from '@content-collections/next';
// import withBundleAnalyzer from '@next/bundle-analyzer';
import withPlaiceholder from '@plaiceholder/next';
import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    typedEnv: true,
    turbopackFileSystemCacheForDev: isDev,
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

//usage of withBundleAnalyzer
// const withAnalyzer = withBundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
//   openAnalyzer: isDev,
// });

// export default nextConfig;
export default withContentCollections(withPlaiceholder(nextConfig));
