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
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              // outputPath: "img", // 这么写的意思是打包后的图片放在这个文件夹内
              // name: "[name]_[hash:6].[ext]",
              name: "img/[name]_[hash:6].[ext]",
            }, // 这是outputPath和name的合并写法
          },
        ],
      },
    ],
  },
};
