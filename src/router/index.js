import Vue from 'vue'
import VueRouter from 'vue-router'
import Spam from '../views/Spam.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Spam',
    component: Spam
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
