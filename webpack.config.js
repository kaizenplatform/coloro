var webpack = require('webpack');

module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  target: 'atom'
};
