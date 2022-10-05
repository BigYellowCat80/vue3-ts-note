import "../css/index.css";
import "../css/common.less";

const div = document.createElement("div");
div.className = "box";
div.innerHTML = "hello world";
div.style.height = "200px";
div.style.width = "200px";
document.body.append(div);
