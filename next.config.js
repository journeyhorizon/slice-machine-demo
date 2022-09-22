const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'screens'),
      path.join(__dirname, 'components'),
    ],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: ['images.prismic.io', 'lh3.googleusercontent.com', 'wexerimages.azureedge.net', 'd1tnmh39vlmgh.cloudfront.net', 'dwybw5237mk3a.cloudfront.net'],
  },
  trailingSlash: true,
});