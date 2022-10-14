<template>
  <ul class="list">
    <li class="list-item" v-for="(item, index) in list" :key="index">
      <slot :item="item" :index="index"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "HomeList",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.list {
  .list-item {
    margin-bottom: 8px;
  }
}
</style>
