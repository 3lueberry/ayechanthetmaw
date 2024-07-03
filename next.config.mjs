/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/experience",
        destination: "/experience/works",
        permanent: true,
      },
      {
        source: "/experience/details",
        destination: "/experience/works",
        permanent: true,
      },
      // {
      //   source: "/experience/works/:PATH",
      //   destination: "/experience/details/:PATH",
      //   permanent: false,
      // },
      // {
      //   source: "/experience/schools/:PATH",
      //   destination: "/experience/details/:PATH",
      //   permanent: false,
      // },
    ];
  },
};

export default nextConfig;
