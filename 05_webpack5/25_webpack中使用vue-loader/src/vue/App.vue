<template>
  <div class="message">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "hello world",
    };
  },
};
</script>

<style scoped>
.message {
  color: red;
}
</style>
