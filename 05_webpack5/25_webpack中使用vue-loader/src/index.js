import { sum } from "./js/math";
const { formatNumber } = require("./js/formatNumber");
// import { createApp } from "vue";
import { createApp } from "vue/dist/vue.esm-bundler.js";
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
