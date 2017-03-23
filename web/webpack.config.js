var webpack = require('webpack');
var path = require("path");

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: './public/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [ 'es2015', 'react']
        },
        include: path.resolve(__dirname, "..")
      },
    ]
  }
};
