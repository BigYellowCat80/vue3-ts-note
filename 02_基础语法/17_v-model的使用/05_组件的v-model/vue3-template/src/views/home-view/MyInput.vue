<template>
  <div class="my-input">
    <h4>message: {{ message }}</h4>
    <h4>title: {{ title }}</h4>
    <input type="text" v-model="_message" />
    <input type="text" v-model="_title" />
  </div>
</template>

<script>
export default {
  name: "MyInput",
  emits: ["update:message", "update:title"],
  props: {
    message: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    _message: {
      get() {
        return this.message;
      },
      set(message) {
        this.$emit("update:message", message);
      },
    },
    _title: {
      get() {
        return this.title;
      },
      set(title) {
        this.$emit("update:title", title);
      },
    },
  },
};
</script>

<style lang="less" scoped>
.my-input {
  padding: 30px;
  background-color: green;
}
</style>
