const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common.config");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 8088,
    contentBase: "./public",
    hot: true,
  },
});
