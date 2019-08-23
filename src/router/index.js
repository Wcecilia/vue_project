import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../views/Home/home')
//const Index = () => import('./views/Index.vue')

Vue.use(Router)

const route =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    //   meta:{
    //     title: "关于"
    //   }
    // }
  ]
})

export default route
