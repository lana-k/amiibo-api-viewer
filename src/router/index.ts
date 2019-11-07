import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Categories from '../views/Categories.vue'
import Random from '../views/Random.vue'
import Details from '../views/Details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/categories',
    component: Categories
  },
  {
    path: '/random',
    component: Random
  },
  {
    path: '/details',
    component: Details
  }
]

const router = new VueRouter({
  routes
})

export default router
