const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    hot: true,
    inline: true,
  },
  output: {
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "./locales", to: "dest" },
        { from: "./locales", to: "public" },
      ],
    }),
  ],
};
