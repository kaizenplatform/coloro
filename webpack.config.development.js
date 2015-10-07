'use strict';

var webpack = require('webpack');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');
var baseConfig = require('./webpack.config.base');

var config = Object.create(baseConfig);

config.debug = true

config.entry = [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  './app/app'
];

config.output.publicPath = 'http://localhost:3000/dist/';

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    '__DEV__': true,
    'process.env': JSON.stringify('development')
  })
);

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
