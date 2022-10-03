const app = Vue.createApp({
  template: `#template`,
  data() {
    return {
      books: [
        {
          id: "001",
          bookName: "算法导论",
          publishDate: "2008-09",
          price: 80,
          count: 1
        },
        {
          id: "002",
          bookName: "UNIX编程艺术",
          publishDate: "2006-02",
          price: 100,
          count: 1
        },
        {
          id: "003",
          bookName: "编程珠玑",
          publishDate: "2008-10",
          price: 50,
          count: 1
        },
        {
          id: "004",
          bookName: "代码大全",
          publishDate: "2006-02",
          price: 150,
          count: 1
        }
      ]
    }
  },
  computed: {
    totalPrice() {
      return this.books.reduce((pre, next) => {
        return pre + next.price * next.count
      }, 0)
    }
  },
  methods: {
    changeCount(index, n) {
      this.books[index].count += n
    },
    remove(index) {
      this.books.splice(index, 1)
    }
  }
})
app.mount("#app")
