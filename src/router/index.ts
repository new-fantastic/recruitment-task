import Vue from 'vue'
import VueRouter from 'vue-router'
import StartView from '../views/Start.vue'
import ChooseSizeView from '../views/ChooseSize.vue'
import IngredientsView from '../views/Ingredients.vue'
import CheckoutView from '../views/Checkout.vue'

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
  },
  {
    path: '/ingredients',
    name: 'ingredients',
    component: IngredientsView,
    meta: { hideComponents: false }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView,
    meta: { hideComponents: false }
  }
]

const router = new VueRouter({
  routes
})

export default router
