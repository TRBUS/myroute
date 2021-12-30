import Vue from 'vue'
import VueRouter from 'vue-router'
import News from '../components/News'
import Books from '../components/Books'
import Videos from '../components/Videos'
import Book from '../components/Book'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'news'
    }
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/books',
    name: 'books',
    component: Books,
    children: [
      {
        path: '/book/:id',
        component: Book
      }
    ]
  },
  {
    path: '/videos',
    name: 'videos',
    component: Videos
  }
]

const router = new VueRouter({
  routes
})

export default router
