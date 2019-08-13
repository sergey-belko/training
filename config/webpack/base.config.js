const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const outputDir = path.resolve(appDirectory, 'dist');

module.exports = {
  entry: path.resolve(appDirectory, 'index.html'),
  output: {
    path: outputDir,
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'ts-loader',
      }],
    },
    {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader',
    },
    {
      test: /\.(html)$/,
      use: {
        loader: 'html-loader',
      },
    },
    ],
  },
  plugins: [],
};
