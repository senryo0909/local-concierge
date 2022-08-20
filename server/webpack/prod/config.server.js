"use strict";

const { merge } = require('webpack-merge');
const common = require('../common/config.server.js');

module.exports = merge(common, {
  name: 'prod:server',
  mode: 'production',
  devtool: 'source-map',
});
