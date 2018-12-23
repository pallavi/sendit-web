const HtmlWebpackPlugin = require('html-webpack-plugin');
const Path              = require('path');
const Webpack           = require('webpack');

const PLUGINS = [
  new Webpack.ProvidePlugin({
    React: 'react'
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
  })
];

module.exports = {
	entry: './src/index.jsx',
  mode: process.env.NODE_ENV || 'development',
	output: {
		path: Path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    disableHostCheck: true
  },
	module: {
		rules: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}]
  },
  plugins: PLUGINS
};
