const path = require("path");
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "/src/index.js",
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "Vue 3 webpack",
      template: 'public/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
};
