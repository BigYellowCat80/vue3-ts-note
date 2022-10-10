const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { DefinePlugin } = require("webpack");
const { VueLoaderPlugin } = require("vue-loader/dist/index");

function getAbsolutePath(filepath = "./build") {
  return path.resolve(__dirname, filepath);
}

console.log("11", getAbsolutePath());

module.exports = {
  target: "web",
  mode: "development",
  devtool: "source-map",
  // watch: true,
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
      {
        test: /\.vue$/i,
        use: ["vue-loader"],
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
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: false, // 默认true
      __VUE_PROD_DEVTOOLS__: true, // 默认false
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
    new VueLoaderPlugin(),
  ],
  devServer: {
    contentBase: "./public",
    hot: true,
  },
  resolve: {
    extensions: [
      ".js", // defalut
      ".json", // defalut
      ".mjs", // defalut
      ".wasm", // defalut
      ".vue",
      ".ts",
      ".jsx",
      ".jsx",
    ], // 这样配置了的文件引入时都不用加拓展名。注意原本默认的配置要加上，不然会覆盖
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
