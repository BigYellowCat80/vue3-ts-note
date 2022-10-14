<template>
  <div class="home-message">
    <button @click="minus">-</button>
    <button @click="add">+</button>
    <button @click="addN(5)">+5</button>
  </div>
</template>

<script>
export default {
  name: "HomeMessage",
  // emits: ["minus", "add"],
  emits: {
    minus: null,
    add: null,
    addN: (payload) => {
      console.log(payload > 10);
      return payload > 10; // 还是会传过去，但是会报警告
    },
  },
  methods: {
    minus() {
      this.$emit("minus");
    },
    add() {
      this.$emit("add");
    },
    addN(n) {
      this.$emit("addN", n);
    },
  },
};
</script>

<style lang="less" scoped></style>
