import Vuex from 'vuex'
import Vue from 'vue'

import ui from './ui'
import auth from './auth'
import groceries from './groceries'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ui,
    auth,
    groceries
  }
})
