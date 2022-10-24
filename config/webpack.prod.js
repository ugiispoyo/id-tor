const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const prodConfig = {
    entry: {
        "index": "./src/index.ts",
    },
    mode: "production",
    output: {
        filename: '[name].js',
        library: "idTor",
        libraryTarget: "umd",
        // filename: "bundle.js",
        path: path.resolve(__dirname, "../dist"),
    },
};


module.exports = merge(commonConfig, prodConfig);