<template>
  <div class="about">
    <h3>AboutView</h3>
    <h4>Data sent by mitt: {{ aboutViewData }}</h4>
  </div>
</template>

<script>
import emitter from "@/plugins/eventbus";

export default {
  name: "AboutView",
  data() {
    return {
      aboutViewData: "",
    };
  },
  mounted() {
    emitter.on("MESSAGE", (data) => {
      console.log("data", data);
      this.aboutViewData = data;
    });
  },
};
</script>

<style lang="less" scoped>
.about {
  background-color: blue;
  padding: 20px;
}
</style>
