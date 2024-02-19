/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
    turbo: {
      rules: {
        "*.svg": {
          loaders: [
            {
              loader: "@svgr/webpack",
              options: { icon: true, typescript: true },
            },
          ],
          as: "*.js",
        },
      },
    },
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: [
          {
            loader: "@svgr/webpack",
            options: { icon: true, typescript: true },
          },
        ],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
