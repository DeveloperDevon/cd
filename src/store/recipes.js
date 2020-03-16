import { db } from '../db'
import { transformRecipes } from '../helpers'

const state = {
  recipes: [],
  selectedRecipe: {}
}

const getters = {
  recipes: state => state.recipes,
  selectedRecipe: state => state.selectedRecipe
}

const actions = {
  async fetchRecipes({ commit }) {
    const recipes = await db.collection('recipes')
    .get()
    .then((queryData) => queryData.docs.map((doc) => transformRecipes(doc)))
    commit('setRecipes', recipes)
  },
  async addRecipe({ commit }, recipe) {
    await db.collection('recipes').add(recipe).then((a) => commit('newRecipe', { id: a.id,  ...recipe }))
  },
  async selectRecipe({ commit }, id) {
    db.collection('recipes').doc(id).get().then(doc => {
      commit('selectRecipe', doc.data())
    })
  }
}

const mutations = {
  setRecipes: (state, recipes) => state.recipes = recipes,
  newRecipe: (state, recipe) => state.recipes.unshift(recipe),
  selectRecipe: (state, recipe) => state.selectedRecipe = recipe
}

export default { state, getters, actions, mutations }