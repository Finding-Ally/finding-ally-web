/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
// }

// module.exports = nextConfig
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      loader: 'file-loader',
      options: {
        publicPath: '/_next',
        name: 'static/media/[name].[hash].[ext]',
      },
    });

    return config;
  },
};

module.exports = nextConfig;
