<template>
  <div class="home">
    <h1>This is an home page</h1>

    <div class="container">
      {{ count }}
    </div>

    <HomeMessage @minus="minus" @add="add" @addN="addN" />
  </div>
</template>

<script>
import HomeMessage from "./HomeMessage.vue";
export default {
  name: "HomeView",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    minus() {
      this.count--;
    },
    add() {
      this.count++;
    },
    addN(n) {
      this.count += n;
    },
  },
  components: { HomeMessage },
};
</script>

<style lang="less" scoped>
.home {
  .container {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  }
}
</style>
