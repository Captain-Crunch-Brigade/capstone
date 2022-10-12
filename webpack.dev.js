const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const config = {
  mode: 'development',
  devServer: {
    open: true,
    host: 'localhost',
    historyApiFallback: true,
  },
};

module.exports = merge(common, config);
