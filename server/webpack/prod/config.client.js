"use strict";

const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const common = require('../common/config.client.js');

module.exports = merge(common, {
  name: 'prod:client',
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      })
    ],
  },
});
