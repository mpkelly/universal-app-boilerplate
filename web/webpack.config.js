var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: 'bundle.js',
    publicPath: "./public"
  },
  devtool: 'source-map',
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
      {
        test: /\.(woff2?$|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'base64-font-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader?sourceMap!autoprefixer-loader'})
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: "static-style.css", allChunks: false})
  ]
};
