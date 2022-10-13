const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const config = {
  mode: 'development',
  devServer: {
    open: true,
    host: 'localhost',
    historyApiFallback: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
};

module.exports = merge(common, config);
