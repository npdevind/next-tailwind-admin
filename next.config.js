/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["avatar.iran.liara.run"],
  },
};
