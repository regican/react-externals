var path = require('path');

// webpack libraries
var webpack = require('webpack');
var validate = require('webpack-validator');

// build plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');


var config = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    libraryTarget: 'umd'
  },
  externals : {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root:'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd:'react-dom'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-0']
      },
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};

module.exports = validate(config);
