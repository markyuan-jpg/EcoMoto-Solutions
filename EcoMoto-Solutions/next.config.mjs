/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Force Tailwind processing
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'postcss-loader',
      ],
    });
    return config;
  },
};

export default nextConfig;