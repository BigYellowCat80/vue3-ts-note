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
    // webpack的官网可以找到
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // 执行顺序，从数组最后一项开始执行
      },
    ],
  },
};
