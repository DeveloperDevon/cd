import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import * as firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    // meta: {requiresAuth: true}
  },
  {
    path: '/groceries',
    name: 'groceries',
    component: () => import(/* webpackChunkName: "about" */ '../views/Groceries.vue'),
    // meta: {requiresAuth: true}
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  // },
  // {
  //   path: '/register',
  //   name: 'register',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  // },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  requiresAuth && !isAuthenticated ? next('/login') : next()
})

export default router
