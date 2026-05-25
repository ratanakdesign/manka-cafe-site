

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/gallery',          destination: '/inside-manka', permanent: true },
      { source: '/private-bookings', destination: '/gatherings',   permanent: true },
    ]
  },
}

export default nextConfig
