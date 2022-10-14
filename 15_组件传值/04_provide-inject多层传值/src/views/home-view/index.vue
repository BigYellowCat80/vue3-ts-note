<template>
  <div class="home">
    <button @click="push">push 4</button>
    <HomeSon />
  </div>
</template>

<script>
import HomeSon from "./HomeSon.vue";
import { computed } from "vue";

export default {
  name: "HomeView",
  // provide: {
  //   message: "hello world",
  // }, // 但是这样写不灵活，不能使用this
  // provide() {
  //   return {
  //     message: "hello world",
  //     length: this.list.length,
  //   };
  // }, // 这样写也还是有问题，list长度变化了，传给孙子的length没变
  provide() {
    return {
      message: "hello world",
      length: computed(() => this.list.length),
    };
  },
  data() {
    return {
      list: [1, 2, 3],
    };
  },
  methods: {
    push() {
      this.list.push(4);
    },
  },
  components: { HomeSon },
};
</script>

<style lang="less" scoped>
.home {
  padding: 20px;
  background-color: red;
}
</style>
