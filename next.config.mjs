/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "emojicdn.elk.sh",
      },
    ],
  },
};

export default nextConfig;
