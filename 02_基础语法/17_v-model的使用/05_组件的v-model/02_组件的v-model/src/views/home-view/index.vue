<template>
  <div class="home-view">
    <h3>HomeView: {{ message }}</h3>
    <MyInput v-model="message" />
  </div>
</template>

<script>
import MyInput from "./MyInput.vue";

export default {
  name: "HomeView",
  data() {
    return {
      message: "",
    };
  },
  components: { MyInput },
};
</script>

<style lang="less" scoped>
.home-view {
  padding: 30px;
  background-color: red;
}
</style>
