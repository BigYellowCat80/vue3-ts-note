import { sum } from "./js/math";
const { formatNumber } = require("./js/formatNumber");
import { createApp } from "vue"; // 如果使用.vue文件可以直接这样使用了，因为默认会使用vue/dist/vue.runtime.esm-bundler.js
// import { createApp } from "vue/dist/vue.esm-bundler.js";
import App from "./vue/App.vue";

console.log(sum(100, 200));
console.log(formatNumber(18.88));

import "./js/element";

const message = "hello world";
const names = ["cat", "dog", "monkey"];
names.forEach((item) => console.log(item));

// const App = {
//   template: "<h3>hello world</h3>",
// };
const app = createApp(App);
app.mount("#app");
