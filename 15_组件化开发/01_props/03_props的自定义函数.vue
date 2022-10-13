<template>
  <div></div>
</template>

<script>
export default {
  props: {
    message: {
      validator(val) {
        return ["cat", "dog", "monkey"].includes(val);
        // 如果不是传这三个值其中之一，报警告：Invalid prop: custom validator check failed for prop "message".
      },
    },
  },
};
</script>

<style lang="less" scoped></style>
