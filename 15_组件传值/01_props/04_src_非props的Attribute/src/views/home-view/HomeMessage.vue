<template>
  <div class="home-message">
    <h4>This is HomeMessage Component</h4>
    <h4 :class="$attrs.class">This is second line in HomeMessage Component</h4>
  </div>
</template>

<script>
export default {
  name: "HomeMessage",
  inheritAttrs: false,
  props: {
    message: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="less" scoped>
.home-message {
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  width: 500px;
  margin-bottom: 8px;
  padding: 8px;
}

.first-message {
  color: red;
}
</style>
