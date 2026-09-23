/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: { 
    domains: [
      "avatars.githubusercontent.com",
      "img.icons8.com",
      "abduljabbar.netlify.app",
      "pyoaowwarxwvraghsvpz.supabase.co",
      "*",
      "www.smartaddons.com",
      "res.cloudinary.com",
      "drive.google.com",
    ],
  },
};

module.exports = nextConfig;
