"use strict";

const { join } = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    server: './src/bin/www',
  },
  output: {
    path: join(__dirname, '..', '..', 'dist'),
    publicPath: '/',
    filename: '[name].js',
    clean: { keep: /public\// },
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ]
  },
  experiments: {
    topLevelAwait: true,
  }
}