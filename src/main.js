import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'
import store from './store'

import * as firebase from 'firebase/app'
import 'firebase/auth'
import vuetify from './plugins/vuetify';

const ignoreWarnMessage = 'The .native modifier for v-on is only valid on components but it was used on <div>.';
Vue.config.warnHandler = function (msg) {
  // `trace` is the component hierarchy trace
  if (msg === ignoreWarnMessage) {
    msg = null;
  }
}

Vue.prototype.$axios = axios

Vue.config.productionTip = false

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) app = new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})

