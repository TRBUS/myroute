<template>
  <div>
    图书页面
    <h3>图书列表</h3>
    <ul>
      <li v-for="book in books" :key="book.id">
        <router-link :to="'/book/' + book.id">{{book.title}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import Books from '@/assets/books'

export default {
  data() {
    return {
      books: Books
    }
  }
}
</script>
