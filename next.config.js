const withImages = require('next-images');

module.exports = {
  basePath: '/share',
};

/*
  assetPrefix: '/share',

  publicRuntimeConfig: {
    basePath: '/share',
  },


withImages({
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
})

*/
