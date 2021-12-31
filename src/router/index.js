import Vue from 'vue'
import VueRouter from 'vue-router'
import News from '../components/News'
import Books from '../components/Books'
import Videos from '../components/Videos'
import Book from '../components/Book'
import Login from '../components/Login'

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
        name: 'book',
        component: Book
      }
    ]
  },
  {
    path: '/videos',
    name: 'videos',
    component: Videos
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 判断目标路由是否是/login，如果是，直接调用next()方法
  if (to.path === '/login') {
    next()
  } else {
    // 否则判断用户是否已经登录，注意这里是字符串判断
    if (sessionStorage.isAuth === 'true') {
      next()
    } else {
      // 如果用户访问的是受保护的资源，且没有登录，则跳转到登录页面，
      // 并将当前路由的完整路径作为查询参数传给Login组件，以便登录成功后返回先前的页面
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
})

export default router
