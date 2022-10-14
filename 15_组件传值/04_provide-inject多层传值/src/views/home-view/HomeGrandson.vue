<template>
  <div class="home-grandson">
    <h3>This is HomeGrandson Component</h3>
    <h4>Data from Home:</h4>
    <h4>{{ message }}</h4>
    <!-- <h4>{{ length }}</h4> -->
    <h4>{{ length }}</h4>
  </div>
</template>

<script>
export default {
  name: "HomeGrandson",
  inject: ["message", "length"],
};
</script>

<style lang="less" scoped>
.home-grandson {
  padding: 20px;
  background-color: blue;
}
</style>
