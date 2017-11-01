var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var basePath = __dirname;

module.exports = {
    context: basePath,
    entry: {
        bundle: [
            './src/app.js'
        ]
    },
    output: {
        path: path.join(basePath,'dist'),
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devtool: 'inline-source-map',
    devServer: {
        hot:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Name of template in ./src
            hash: true,
            cache: false
          }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}