import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
//import Index from './views/Index.vue'
import Classify from './views/Classify.vue'
import ShopCar from './views/ShopCar.vue'

const Index = () => import('./views/Index.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: "/index",
      component: Index,
      name: "index"
    },
    {
      path: "/classify",
      component: Classify,
      name: "classify"
    },
    {
      path: "/shopCar",
      component: ShopCar,
      name: "shopCar"
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta:{
        title: "关于"
      }
    }
  ]
})
