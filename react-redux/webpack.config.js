var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var basePath = __dirname;

module.exports = {
  context: basePath,
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },

  entry: [
    'react-hot-loader/patch',
    './react-source/src/main.tsx',
    './node_modules/bootstrap/dist/css/bootstrap.css'
  ],
  output: {
    path: path.join(basePath, 'js'),
    filename: 'app.js'
  },

  devtool: 'source-map',

  devServer: {
    contentBase: './js', // Content base
    inline: true, // Enable watch and live reload
    host: 'localhost',
    port: 8080,
    stats: 'errors-only',
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true,
        }
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'css-loader'
          }
        })
      },
      // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
      // Using here url-loader and file-loader
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './react-source/index.html', // Name of template in ./src
      hash: true
    }),
    new ExtractTextPlugin({
      filename: '[chunkhash].[name].css',
      disable: false,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
