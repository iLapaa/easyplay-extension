/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const { merge } = require("webpack-merge");
const entry = require("./webpack.entries");
const path = require("path");

module.exports = merge(entry, {
  output: {
    path: path.join(__dirname, "../../public/scripts/"),
    filename: "[name].script.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  mode: "production",
});
