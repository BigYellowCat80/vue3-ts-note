const path = require("path");

function getAbsolutePath(filepath = "/build") {
  return path.resolve(__dirname) + filepath;
}

console.log("11", getAbsolutePath());

module.exports = {
  entry: "./src/index.js",
  output: {
    // path: "D:coding\vue3-ts-note\05_webpack\05_webpack的基础配置", // 需要写绝对路径，windows下命令行输入pwd可获取。这里报错可能是因为有中文路径

    path: getAbsolutePath(),
    filename: "bundle.js",
    // assetModuleFilename: "img/[name]_[hash:6][ext]",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        // type: "asset/resource",

        // 最常用
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]", // 这里跟webpack4的url-loader有点不同，url-loader是.[ext]
          // img/[name]_[hash:6][ext]不写在generator也行，可以写在output的assetModuleFilename属性里，值是一样的
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
    ],
  },
};
