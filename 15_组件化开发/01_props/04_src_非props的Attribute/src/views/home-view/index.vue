<template>
  <div class="home">
    <h1>This is an home page</h1>
    <HomeMessage message="message" class="first-message" />
    <HomeMessage />
    <HomeMessage />
  </div>
</template>

<script>
import HomeMessage from "./HomeMessage.vue";
export default {
  name: "HomeView",

  components: { HomeMessage },
};
</script>

<style lang="less" scoped></style>
