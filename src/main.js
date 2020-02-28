import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'
import { firestorePlugin } from 'vuefire'
import { fb } from './db'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import vuetify from './plugins/vuetify';

Vue.prototype.$axios = axios
Vue.use(firestorePlugin)
Vue.config.productionTip = false

fb

let app

firebase.auth().onAuthStateChanged(user => {
  console.log(user)
  if(!app) app = new Vue({
    router,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})

