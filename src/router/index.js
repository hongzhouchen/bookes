import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/home/Index'
import Search from '@/views/search/Search'
import ShopCart from '@/views/shopcart/ShopCart'
import Me from '@/views/me/Me'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/ShopCart',
      name: 'ShopCart',
      component: ShopCart
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    }
  ]
})
