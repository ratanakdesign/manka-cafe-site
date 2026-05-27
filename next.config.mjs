

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/gallery',          destination: '/inside-manka', permanent: true },
      { source: '/private-bookings', destination: '/gatherings',   permanent: true },
    ]
  },
}

export default nextConfig
