import Vue from 'vue'
import Vuex from 'vuex'
import endpoints from './modules/endpoints'
import orders from './modules/orders'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    namespaced: true,
    endpoints,
    orders
  }
})
