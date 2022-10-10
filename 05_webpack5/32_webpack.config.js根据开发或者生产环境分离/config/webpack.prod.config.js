const { merge } = require("webpack-merge");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const commonConfig = require("./webpack.common.config");

module.exports = merge(commonConfig, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: "./",
          globOptions: {
            ignore: ["**/index.html"], // 忽略public文件夹下所有的index.html文件
          },
        },
      ],
    }),
  ],
});
