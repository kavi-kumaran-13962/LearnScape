const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = {
    entry: {
        bundle: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[hash].js",
    },
    module: {
        rules: [{
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"],
                    },
                },
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.( jpe?g|png|gif|svg )$/,
                use: [{
                        loader: "url-loader",
                        options: { limit: 40000 },
                    },
                    "image-webpack-loader",
                ],
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: "svg-url-loader",
                    options: {
                        limit: 10000,
                        name: "[name].[ext]",
                    },
                }, ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
    ],
};

module.exports = config;