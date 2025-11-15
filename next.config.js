/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  experimental: {
    runtime: "nodejs",
  },
  images: {
    unoptimized: true,
    domains: [
      "avatars.githubusercontent.com",
      "img.icons8.com",
      "abduljabbar.netlify.app",
      "*",
      "www.smartaddons.com",
      "res.cloudinary.com",
      "drive.google.com",
    ],
  },
};

module.exports = nextConfig;
