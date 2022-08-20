"use strict";

const { join } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: ['./src/resources/js/index.js'],
  },
  output: {
    path: join(__dirname, '..', '..', 'dist', 'public'),
    publicPath: '/',
    filename: 'js/[name].js',
    // TODO: Cache Busting したいが、ejs をバンドルしてないから、
    // html-webpack-plugin の inject 使って差し込めない。
    // filename: 'js/[name].[contenthash].js',
    clean: { keep: /server.js/ },
  },
  target: 'web',
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        exclude: /node_modules/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: { url: false },
            },
            {
                loader: 'sass-loader',
                options: { sourceMap: true }
            },
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'css/main.css',
        // TODO: Cache Busting したいが、ejs をバンドルしてないから、
        // html-webpack-plugin の inject 使って差し込めない。
        // filename: 'css/main.[contenthash].css',
    }),
  ],
  experiments: {
    topLevelAwait: true,
  }
}