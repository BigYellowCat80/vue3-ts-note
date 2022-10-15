<template>
  <div>
    <h3>TabClothes</h3>
    <input type="text" v-model="text" />
  </div>
</template>

<script>
export default {
  name: "TabClothes",
  mounted() {
    console.log("TabClothes mounted");
  },
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style lang="less" scoped></style>
