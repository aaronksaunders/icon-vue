import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import truck from './modules/truck'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    truck
  },
})
