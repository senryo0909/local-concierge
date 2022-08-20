"use strict";

const { join } = require('path');
const { merge } = require('webpack-merge');
const NodemonPlugin = require('nodemon-webpack-plugin');
const common = require('../common/config.server.js');

module.exports = merge(common, {
  name: 'dev:server',
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new NodemonPlugin({
      script: join(__dirname, '..', '..', 'dist', 'server.js'),
      watch: join(__dirname, '..', '..', 'dist'),
    }),
  ],
});
