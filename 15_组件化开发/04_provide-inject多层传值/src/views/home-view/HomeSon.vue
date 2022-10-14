<template>
  <div class="home-son">
    <HomeGrandson />
  </div>
</template>

<script>
import HomeGrandson from "./HomeGrandson.vue";

export default {
  name: "HomeSon",
  components: { HomeGrandson },
};
</script>

<style lang="less" scoped>
.home-son {
  padding: 20px;
  background-color: green;
}
</style>
