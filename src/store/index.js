import Vuex from 'vuex'
import Vue from 'vue'

import ui from './ui'
import auth from './auth'
import groceries from './groceries'
import calendar from './calendar'
import recipes from './recipes'
import gallery from './gallery'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ui,
    auth,
    groceries,
    calendar,
    recipes,
    gallery
  }
})
