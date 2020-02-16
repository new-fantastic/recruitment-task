import Vue from 'vue'
import VueRouter from 'vue-router'
import StartView from '../views/Start.vue'
import ChooseSizeView from '../views/ChooseSize.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: StartView,
    meta: { hideComponents: true }
  },
  {
    path: '/size',
    name: 'chooseSize',
    component: ChooseSizeView,
    meta: { hideComponents: false }
  }
]

const router = new VueRouter({
  routes
})

export default router
