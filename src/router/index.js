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
    meta: {requiresAuth: true}
  },
  {
    path: '/groceries',
    name: 'groceries',
    component: () => import(/* webpackChunkName: "about" */ '../views/Groceries.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Calendar.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import(/* webpackChunkName: "about" */ '../views/Gallery.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/recipes/',
    name: 'recipes',
    component: () => import('../views/Recipes.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'list',
        name: 'recipesList',
        component: () => import('../components/Recipes/RecipeList.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'details/:id',
        name: 'recipeDetails',
        component: () => import('../components/Recipes/RecipeDetails.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'search',
        name: 'searchRecipes',
        component: () => import('../components/Recipes/SearchRecipes.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'search/:label',
        name: 'searchDetails',
        component: () => import('../components/Recipes/SearchDetails.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth/Unauthorized.vue')
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Auth/Login.vue')
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
  requiresAuth && !isAuthenticated ? next('/unauthorized') : next()
})

export default router
