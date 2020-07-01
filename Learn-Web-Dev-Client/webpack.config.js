const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = {
  entry: {
    bundle: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[chunkhash].js",
    publicPath: "build/",
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "build/",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.( jpe?g|png|gif|svg )$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 40000 },
          },
          "image-webpack-loader",
        ],
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
