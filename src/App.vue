<template>
  <div id="app">
    <p>
      <router-link to="/news">新闻</router-link>
      <router-link to="/books">图书</router-link>
      <router-link to="/videos">视频</router-link>
    </p>
    <router-view></router-view>
    <router-view name="bookDetail"></router-view>
  </div>
</template>

<style>
</style>
