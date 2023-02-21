/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "three",
    "@react-three/drei",
    "@react-three/fiber",
    "@three-ts/orbit-controls",
  ],
};

module.exports = nextConfig;

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
