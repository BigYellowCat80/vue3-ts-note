<template>
  <div class="home-tabs">
    <div
      class="tab-item"
      :style="{ width }"
      :class="{ active: currentIndex === index }"
      v-for="(tab, index) in homeTabs"
      :key="tab.id"
      @click="tabClick(index)"
    >
      {{ tab.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeTabs",
  emits: ["tabClick"],
  props: {
    homeTabs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    width() {
      if (this.homeTabs.length === 0) return " 100%";
      return 100 / this.homeTabs.length + "%";
    },
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style lang="less" scoped>
.home-tabs {
  display: flex;
  height: 40px;
  justify-content: space-around;

  .tab-item {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .active {
    color: red;
    position: relative;
    font-weight: bold;

    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 4px;
      background-color: red;
    }
  }
}
</style>
