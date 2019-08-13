const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = Promise.resolve(
  merge(
    baseConfig, {
      mode: 'development',
      devtool: 'source-map',
      devServer: {
        overlay: {
          warnings: true,
          errors: true,
        },
        port: 3000,
        open: true,
        watchContentBase: true,
        stats: 'errors-only',
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
      ],
    },
  ),
);
