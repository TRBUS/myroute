<template>
  <div id="app">
    <p>
      <router-link to="/news">新闻</router-link>
      <router-link to="/books">图书</router-link>
      <router-link to="/videos">视频</router-link>
      <router-link to="/book/1">图书1</router-link>
      <router-link to="/book/2">图书2</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<style>
</style>
