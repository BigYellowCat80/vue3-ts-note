<template>
  <div class="home">
    <HomeList :list="list">
      <template v-slot="{ item, index }">
        <button @click="btnClick(index)">{{ item.name }}</button>
      </template>
    </HomeList>

    <HomeList :list="list">
      <template v-slot="{ item, index }">
        <b @click="btnClick(index)">{{ item.name }}</b>
      </template>
    </HomeList>
  </div>
</template>

<script>
import HomeList from "./HomeList.vue";

export default {
  name: "HomeView",
  data() {
    return {
      list: [
        {
          id: "001",
          name: "cat",
        },
        {
          id: "002",
          name: "dog",
        },
        {
          id: "003",
          name: "monkey",
        },
      ],
    };
  },
  methods: {
    btnClick(index) {
      console.log("index", index);
    },
  },
  components: {
    HomeList,
  },
};
</script>

<style lang="less" scoped></style>
