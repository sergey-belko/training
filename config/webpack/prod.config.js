const merge = require('webpack-merge');
const baseWebpackConfig = require('./base.config');

module.exports = Promise.resolve(
  merge(
    baseWebpackConfig, {
      mode: 'production',
    },
  ),
);
