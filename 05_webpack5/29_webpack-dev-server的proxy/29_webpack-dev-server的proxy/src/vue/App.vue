<template>
  <div class="message">
    {{ message }}
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "App",
  setup() {
    const message = ref("hello world");

    axios
      .get("/api/list", (res) => {
        console.log("res", res);
      })
      .catch((error) => {
        console.log("error", error);
      });

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
