var webpack = require('webpack');

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: './public/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react']}},
    ]
  }
};
