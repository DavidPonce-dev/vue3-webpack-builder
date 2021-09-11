const path = require("path");
const { DefinePlugin } = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const open = require("open");

module.exports = (env, argv) => {
  
  if (argv.mode === 'development') open("http://localhost:8080");

  return {
    entry: "/src/index.js",
    plugins: [
      new DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
      }),
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        title: "Vue 3 webpack",
        template: "public/index.html",
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
          loader: "babel-loader",
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
      ],
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "bundle.js",
    },
  };
};
