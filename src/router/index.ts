import Vue from 'vue'
import VueRouter from 'vue-router'
import StartView from '../views/Start.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: StartView
  }
]

const router = new VueRouter({
  routes
})

export default router
