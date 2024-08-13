/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    basePath: '/demo',
  },
  basePath: '/demo',
  output: 'export',
  distDir: 'docs',
  images: { unoptimized: true }
};

export default nextConfig;
