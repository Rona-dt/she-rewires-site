/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/events", destination: "/stories", permanent: false },
      { source: "/events/:path*", destination: "/stories", permanent: false },
      { source: "/media", destination: "/stories", permanent: false },
      { source: "/contact", destination: "/join-us", permanent: false },
      { source: "/get-involved", destination: "/join-us", permanent: false },
      { source: "/team", destination: "/community", permanent: false },
      { source: "/team-portrait", destination: "/community", permanent: false },
    ]
  },
}

export default nextConfig
