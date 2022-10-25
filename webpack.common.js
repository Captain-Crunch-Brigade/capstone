const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'PRODUCTION';

module.exports = {
  entry: path.join(__dirname, 'client/src/index.jsx'),
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [new HtmlPlugin({
    template: './client/src/index.html',
    filename: './index.html',
    minify: isProduction ? {
      collapseWhitespace: true,
      useShortDoctype: true,
      removeScriptTypeAttributes: true,
    } : false,
  }),
  new CleanWebpackPlugin(),
  new webpack.DefinePlugin({
    IS_PRODUCTION: isProduction,
  }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
