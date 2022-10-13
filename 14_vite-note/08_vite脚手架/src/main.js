import { sum } from "./js/math";
import { clone } from "lodash";
import "./css/index.css";
import "./css/container.less";
import { mul } from "./ts";
import { createApp } from "vue";
import App from "./vue/App.vue";

console.log(sum(100, 200));
console.log(mul(2, 8));

const person = {
  name: "coderwhy",
  age: 18,
};
console.log("lodash", clone(person));

const div = document.createElement("div");
div.className = "container";
document.body.appendChild(div);

const app = createApp(App);
app.mount("#app");
