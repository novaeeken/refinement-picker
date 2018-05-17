require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js',
  ],
  optimization: {
    minimize: true,
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.FIREBASE_URL': JSON.stringify(process.env.FIREBASE_URL),
    }),
  ],
};
