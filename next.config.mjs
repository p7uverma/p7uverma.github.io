/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev-to-uploads.s3.amazonaws.com",
        pathname: "/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "media.dev.to",
        pathname: "/**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
