import Vue from 'vue'
import VueRouter from 'vue-router'
import News from '../components/News'
import Books from '../components/Books'
import Videos from '../components/Videos'
import Book from '../components/Book'

Vue.use(VueRouter)

const routes = [
  {
    path: '/news',
    component: News
  },
  {
    path: '/books',
    component: Books
  },
  {
    path: '/videos',
    component: Videos
  },
  {
    path: '/book/:id',
    component: Book
  }
]

const router = new VueRouter({
  routes
})

export default router
