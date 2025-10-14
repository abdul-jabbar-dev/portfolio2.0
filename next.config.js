/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    runtime: 'nodejs',
  },
  images: {
    domains: ["avatars.githubusercontent.com", "img.icons8.com","abduljabbar.netlify.app","*","www.smartaddons.com","res.cloudinary.com"],
  },
};

module.exports = nextConfig;
