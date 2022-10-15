<template>
  <div class="my-input">
    <h4>MyInput: {{ value }}</h4>
    <input type="text" v-model="value" />
  </div>
</template>

<script>
export default {
  name: "MyInput",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
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
