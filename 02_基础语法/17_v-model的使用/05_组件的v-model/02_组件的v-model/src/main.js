import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import(/* webpackChunkName: "math" */ "@/utils/math").then(({ sum }) => {
  console.log(sum(100, 200));
});

createApp(App).use(store).use(router).mount("#app");
