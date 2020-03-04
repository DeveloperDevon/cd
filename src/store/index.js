import Vuex from 'vuex'
import Vue from 'vue'

import groceries from './groceries'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    groceries
  }
})