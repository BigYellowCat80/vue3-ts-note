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
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "img/[name]_[hash:6].[ext]",
              limit: 100 * 1024,
            }, // 这样配置的话，小于100kb的图片就使用base64编码，那么在这个案例中最后只打包了大于100kb的图片。如果不写limit属性，默认对所有图片都进行base64编码，这样buldle.js文件就太大了
          },
        ],
      },
    ],
  },
};
