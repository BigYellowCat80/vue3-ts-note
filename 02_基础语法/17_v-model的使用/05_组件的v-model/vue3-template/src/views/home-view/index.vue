<template>
  <div class="home-view">
    <h3>message: {{ message }}</h3>
    <h3>title: {{ title }}</h3>
    <MyInput v-model:message="message" v-model:title="title" />
  </div>
</template>

<script>
import MyInput from "./MyInput.vue";

export default {
  name: "HomeView",
  data() {
    return {
      message: "",
      title: "",
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
