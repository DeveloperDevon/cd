import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'

import * as firebase from 'firebase/app'
import 'firebase/auth'
import vuetify from './plugins/vuetify';

Vue.prototype.$axios = axios

Vue.config.productionTip = false

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) app = new Vue({
    router,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})

