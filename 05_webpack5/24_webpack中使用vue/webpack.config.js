const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { DefinePlugin } = require("webpack");

function getAbsolutePath(filepath = "/build") {
  return path.resolve(__dirname) + filepath;
}

console.log("11", getAbsolutePath());

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    // path: "D:coding\vue3-ts-note\05_webpack\05_webpack的基础配置", // 需要写绝对路径，windows下命令行输入pwd可获取。这里报错可能是因为有中文路径

    path: getAbsolutePath(),
    filename: "js/bundle.js",
    // assetModuleFilename: "img/[name]_[hash:6][ext]",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ttf|woff2?)$/i,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]",
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: ["@babel/preset-env"],
          // },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "哈哈哈",
    }),
    new DefinePlugin({
      BASE_URL: "'./'", // 以模板所在的路径（即public文件夹里面的index.html）为相对路径。这里要注意值应该是"'./'"
    }),
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
};
