<template>
  <div class="home">
    <h3>HomeView</h3>
    <button @click="sendData">mitt</button>
  </div>
</template>

<script>
import emitter from "@/plugins/eventbus";

export default {
  name: "HomeView",
  data() {
    return {
      message: "hello from HomeView",
    };
  },
  methods: {
    sendData() {
      emitter.emit("MESSAGE", this.message);
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  background-color: green;
  padding: 20px;
}
</style>
