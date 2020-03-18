import { db } from '../db'
import { transformRecipes } from '../helpers'
import axios from 'axios'
import { EDAMAM_APP_ID, EDAMAM_APP_KEY } from '../constants'

const state = {
  recipes: [],
  selectedRecipe: {},
  searchResults: [],
  searchResultDetails: {}
}

const getters = {
  recipes: state => state.recipes,
  selectedRecipe: state => state.selectedRecipe,
  searchResults: state => state.searchResults,
  searchResultDetails: state => state.searchResultDetails
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
    const recipe = state.recipes.find(a => a.id === id)
    if (!recipe) {
      db.collection('recipes').doc(id).get().then(doc => {
        commit('selectRecipe', doc.data())
      })
    } else {
      commit('selectRecipe', recipe)
    }
  },
  async searchRecipes({ commit }, searchInput) {
    await axios.get(
      `https://api.edamam.com/search?q=${searchInput}&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}`
    ).then(a => commit('setSearchResults', a.data.hits))
  },
  async saveRecipe({ commit }, recipe) {
    console.log('from store', recipe)
    // commit('saveRecipe', recipe)
    await db.collection('recipes').add(recipe).then(doc => {
      commit('saveRecipe', { id: doc.id, ...recipe})
    })
  },
  selectSearchResult({ commit }, searchResult) {
    commit('setSearchResultDetails', searchResult)
  }
}

const mutations = {
  setRecipes: (state, recipes) => state.recipes = recipes,
  newRecipe: (state, recipe) => state.recipes.unshift(recipe),
  selectRecipe: (state, recipe) => state.selectedRecipe = recipe,
  setSearchResults: (state, searchResults) => state.searchResults = searchResults,
  saveRecipe: (state, recipe) => state.recipes.push(recipe),
  setSearchResultDetails: (state, searchResult) => state.searchResultDetails = searchResult
}

export default { state, getters, actions, mutations }