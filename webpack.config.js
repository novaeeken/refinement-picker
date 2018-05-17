require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  mode: 'development',
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
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: process.env.PORT || 8080,
    host: '0.0.0.0',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.FIREBASE_URL': JSON.stringify(process.env.FIREBASE_URL),
    }),
  ],
};
