import "../css/index.css";

// 背景使用图片
const imgBG = document.createElement("div");
imgBG.className = "img-bg";
document.body.append(imgBG);

// img标签的src使用图片
import IMGSRC from "../img/56kb.jpg";
const imgSRC = document.createElement("img");
imgSRC.className = "img-src";
imgSRC.src = IMGSRC;
document.body.append(imgSRC);
