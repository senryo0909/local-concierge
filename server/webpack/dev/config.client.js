"use strict";

const {
  NoEmitOnErrorsPlugin,
  HotModuleReplacementPlugin
} = require('webpack');
const { merge } = require('webpack-merge');
const common = require('../common/config.client.js');

module.exports = merge(common, {
  name: 'dev:client',
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    main: ['webpack-hot-middleware/client?reload=true'],
  },
  plugins: [
    new NoEmitOnErrorsPlugin(),
    new HotModuleReplacementPlugin(),
  ],
});
