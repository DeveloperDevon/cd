import Vuex from 'vuex'
import Vue from 'vue'

import auth from './auth'
import groceries from './groceries'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    groceries
  }
})
