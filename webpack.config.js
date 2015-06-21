var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var sassLoaders = [
  "css-loader",
  "autoprefixer-loader",
  "sass-loader"
];
var frameConfig = {
    entry: './src/js/frame.js',
    module: {
        loaders: [
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!"))
        },
        { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, loader: "file" }
        ]
    },
    output: {
        path: "./build",
        filename: "frame.js"
    },
    plugins: [
new ExtractTextPlugin('frame.css')
]
};

module.exports = frameConfig;
