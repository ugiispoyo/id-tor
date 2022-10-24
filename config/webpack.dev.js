const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const devConfig = {
    mode: "development",
    devtool: "cheap-module-source-map",
    output: {
        filename: "[name].js",
        library: "idTor",
        libraryTarget: "umd",
        path: path.resolve(__dirname, "dist"),
    },
};

module.exports = (env, argv) => { 
    return {
        ...merge(commonConfig, {
            ...devConfig,
            entry: {
                index: "./src/index.ts",
            },
            plugins: [
                new HtmlWebpackPlugin(
                    { 
                        template: "./example/index.html",
                        scriptLoading: 'blocking',
                        inject: 'body',
                    }
                )
                /* webpack template documentation https://github.com/jantimon/html-webpack-plugin#options */
            ],
        }),
    };
};
