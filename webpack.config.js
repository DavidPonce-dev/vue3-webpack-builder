const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "/src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      title: "Development",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "public" + "js"),
    filename: "bundle.js",
  },
};
