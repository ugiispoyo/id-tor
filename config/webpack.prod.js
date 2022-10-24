const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const WrapperPlugin = require('wrapper-webpack-plugin');
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const prodConfig = {
    entry: {
        "index": "./src/index.ts",
    },
    mode: "production",
    output: {
        filename: '[name].js',
        library: "IdTor",
        libraryTarget: "umd",
        libraryExport: 'default',
        // filename: "bundle.js",
        path: path.resolve(__dirname, "../dist"),
    },
    plugins: [
        new WrapperPlugin({
            test: /\.js$/,
            header: (
                "(function umdWrapper(root, factory) {" +
                '  if(typeof exports === "object" && typeof module === "object")' +
                "    module.exports = factory().default;" +
                '  else if(typeof define === "function" && define.amd)' +
                '    define("NAME", [], function() { return factory().default; });' +
                '  else if(typeof exports === "object")' +
                '    exports["NAME"] = factory().default;' +
                "  else" +
                '    root["NAME"] = factory().default;' +
                "})(this, function() {" +
                "return "
            ).replace(/NAME/g, "IdTor"), // this is the name of the lib
            footer: "\n})",
        }),
    ],
};


module.exports = merge(commonConfig, prodConfig);