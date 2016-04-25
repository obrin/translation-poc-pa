import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  entry: {
    bundle: './index.js'
  },
  output: {
    path: path.resolve(__dirname, './build/app'),
    filename: '[name].js',
    publicPath: '/app/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'iFlix CMS',
      template: path.resolve(__dirname, 'index.html')
    }),
    new ExtractTextPlugin('styles.css')
  ],
  devServer: {
    contentBase: path.join(__dirname, '/build/app'),
    historyApiFallback: {
      index: '/app/index.html'
    },
    port: 8080
  }
};
