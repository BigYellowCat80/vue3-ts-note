<template>
  <div class="app">
    <HomeView />
    <AboutView />
  </div>
</template>

<script>
import HomeView from "./views/home-view";
import AboutView from "./views/about-view";

export default {
  name: "App",
  components: {
    HomeView,
    AboutView,
  },
};
</script>
<style lang="less">
.app {
  padding: 20px;
  background-color: red;
}
</style>
