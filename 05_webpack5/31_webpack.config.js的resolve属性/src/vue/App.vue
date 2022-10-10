<template>
  <div class="message">
    {{ message }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    const message = ref("hello world");
    return {
      message,
    };
  },
};
</script>

<style scoped>
.message {
  color: red;
}
</style>
