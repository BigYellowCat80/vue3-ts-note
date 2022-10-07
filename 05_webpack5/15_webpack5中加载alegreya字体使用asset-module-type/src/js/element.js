import "../css/index.css";
import "../font/alegreya.css";

const fontResource = document.createElement("div");
// fontResource.className = "alegreya big-size";
fontResource.className = "big-size";
fontResource.innerHTML =
  "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.body.append(fontResource);
