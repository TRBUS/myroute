<template>
  <div>
    <p>图书ID：{{ book.id }}</p>
    <p>书名：{{ book.title }}</p>
    <p>说明：{{ book.desc }}</p>
  </div>
</template>

<script>
import Books from '@/assets/books'
export default {
  data() {
    return {
      book: {}
    }
  },
  // created() {
  //   this.book = Books.find((item) => item.id === this.$route.params.id)
  // },
  // watch: {
  //   $route(to) {
  //     this.book = Books.find((item) => item.id === to.params.id)
  //   }
  // },
  methods: {
    setBook(book) {
      this.book = book
    }
  },
  beforeRouteEnter(to, from, next) { // Vue路由守卫beforeRouteEnter操作data数据 https://blog.csdn.net/weixin_44646763/article/details/118502215
    const book = Books.find((item) => item.id === to.params.id)
    next((vm) => vm.setBook(book))
  }
  // beforeRouteUpdate(to, from, next) { // 只用这个并不能把数据传进去
  //   console.log('执行么？')
  //   console.log('执行了。')
  //   this.book = null
  //   this.book = Books.find((item) => item.id === to.params.id)
  //   next()
  // }
}
</script>

<style>
</style>
