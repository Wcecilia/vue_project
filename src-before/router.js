import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
//import Index from './views/Index.vue'
import Classify from './views/Classify.vue'
import ShopCar from './views/ShopCar.vue'

const Index = () => import('./views/Index.vue')

Vue.use(Router)

const route =  new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/index",
      component: Index,
      name: "index",
      meta:{
        title: "首页"
      }
    },
    {
      path: "/classify",
      component: Classify,
      name: "classify",
      meta:{
        title: "分类"
      },
      children: [
        {
          path: "/classify/news",
          component: () => import(/* webpackChunkName: "about" */ './views/News.vue')
        },
        {
          path: "/classify/message",
          component: () => import(/* webpackChunkName: "about" */ './views/Message.vue')
        }
      ]
    },
    {
      path: "/shopCar",
      component: ShopCar,
      name: "shopCar",
      meta:{
        title: "购物车"
      }
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta:{
        title: "档案"
      }
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

route.beforeEach((to,from,next) => {
  document.title = to.meta.title;
  next();
})

export default route
