/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/header',
        headers: [
          {
            key: 'host',
            value: 'shop.middleware-header-replay.vercel.app',
          },
        ],
      },
    ]
  },
}
module.exports = nextConfig
