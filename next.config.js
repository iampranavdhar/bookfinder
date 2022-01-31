const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/bookfinder/" : "",
  images: {
    loader: 'akamai',
    path: '',
    domains: ["placeimg.com"],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
};
