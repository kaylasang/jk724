import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import goodsDetail from '@/pages/GoodsDetail'
import Login from '@/pages/Login'
import User from '@/pages/User'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/goodsDetail/:id',
      name: 'goodsDetail',
      component: goodsDetail
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
