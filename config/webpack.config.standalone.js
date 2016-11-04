
"use strict";

var path = require('path');
var webpack = require('webpack');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

var paths = {
  source: path.resolve('src'),
  output: path.resolve('dist'),
  pkg: path.resolve('package.json')
}

module.exports = {
  cache:    true,
  context: paths.source,
  entry: "./standalone.js",

  output: {
    path:     paths.output,
    filename: "formidable-charts-standalone.js",
    library:  "FormidableCharts",
    libraryTarget: "umd"
  },

  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    extensions: ["", ".js", ".jsx"]
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new LodashModuleReplacementPlugin({
      "currying":     true,
      "flattening":   true,
      "paths":        true,
      "placeholders": true,
      "shorthands":   true
    }),
    new webpack.SourceMapDevToolPlugin("[file].map"),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],

  module: {
    loaders: [
      {
        test:     /\.js?$/,
        exclude:  /node_modules/,
        loader:   'babel-loader'
      }
    ]
  }
}

