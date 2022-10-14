<template>
  <div class="home">
    <HomeTabs :home-tabs="homeTabs" @tabClick="tabClick" />

    <div class="content">
      <component :is="renderContent"></component>
    </div>
  </div>
</template>

<script>
import HomeTabs from "./HomeTabs.vue";
import TabClothes from "./TabClothes.vue";
import TabShoes from "./TabShoes.vue";
import TabPants from "./TabPants.vue";

export default {
  name: "HomeView",
  data() {
    return {
      homeTabs: [
        {
          id: "001",
          name: "衣服",
        },
        {
          id: "002",
          name: "鞋子",
        },
        {
          id: "003",
          name: "裤子",
        },
        // {
        //   id: "004",
        //   name: "袜子",
        // },
      ],
      index: 0,
      contentList: ["TabClothes", "TabShoes", "TabPants"],
    };
  },
  methods: {
    tabClick(index) {
      this.index = index;
    },
  },
  computed: {
    renderContent() {
      return this.contentList[this.index];
    },
  },
  components: { HomeTabs, TabClothes, TabShoes, TabPants },
};
</script>

<style lang="less" scoped></style>
