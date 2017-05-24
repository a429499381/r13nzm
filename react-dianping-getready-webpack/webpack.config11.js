var path = require('path')
var webpack = require('wepack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'app/index.jsx'),
    output: {
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
          { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
          { test: /\.less$/, exclude: /node_modules/, loader: 'style!css!postcss!less'},

        ]
    }
}