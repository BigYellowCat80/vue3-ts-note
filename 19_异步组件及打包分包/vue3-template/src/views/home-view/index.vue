<template>
  <div class="home">
    <suspense>
      <template v-slot>
        <HomeTabs :home-tabs="homeTabs" @tabClick="tabClick" />
      </template>
      <template v-slot:fallback>
        <HomeLoading />
      </template>
    </suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import HomeLoading from "./HomeLoading.vue";
const HomeTabs = defineAsyncComponent(() =>
  import(/* webpackChunkName: "HomeTabs" */ "./HomeTabs.vue")
);

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
    };
  },
  methods: {
    tabClick(index) {
      this.index = index;
    },
  },
  components: { HomeTabs, HomeLoading },
};
</script>

<style lang="less" scoped></style>
