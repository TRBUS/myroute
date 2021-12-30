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
  /*
  created() {
    console.log(this.$route.params)
    console.log(Books)
    this.book = Books.find((item) => item.id === this.$route.params.id)
    console.log(this.book)
  },
  */
  watch: {
    /*
    '$route' (to) {
      this.book = Books.find((item) => item.id === to.params.id)
      console.log('watch：————————————————↓')
      console.log(this.book)
      console.log('watch：————————————————↑')
    }
    */
    $route: {
      handler: function(to) {
        this.book = Books.find((item) => item.id === to.params.id)
      },
      immediate: true
    }
  }
}
</script>

<style>
</style>
