import { db } from '../db'
import { transformGroceries } from '../helpers'
import * as firebase from 'firebase'

const timestamp = firebase.firestore.FieldValue.serverTimestamp()

const state = {
  groceries: []
}

const getters = {
  groceries: state => state.groceries
}

const actions = {
  async fetchGroceries({ commit }) {
    const data = await db.collection('groceries')
    .orderBy('timestamp', 'desc')
    .get()
    .then((queryData) => queryData.docs.map((doc) => transformGroceries(doc)))
    commit('setGroceries', data)
  },
  async addGrocery({ commit }, grocery) {
    console.log({timestamp, grocery})
    await db.collection('groceries').add({timestamp, ...grocery}).then((a) => commit('newGrocery', { id: a.id,  ...grocery }))
  },
  async addIngredients({ commit }, ingredients) {
    await ingredients.forEach(ingredient => {
      const record = { timestamp, item_name: ingredient, checked: false }
      db.collection('groceries').add(record)
      .then(doc => commit('setIngredientsToList', {id: doc.id, ...record}))
      })
    
  },
  async removeGrocery({ commit }, id) {
    await db.collection('groceries').doc(id).delete().then(commit('deleteGrocery', id))
  },
  async removeCheckedGroceries({commit}) {
    await db.collection('groceries').where('checked', '==', true).get().then((qs) => {
      const batch = db.batch();
      qs.forEach((doc) => batch.delete(doc.ref))
      return batch.commit()
      }).then(() => commit('deleteChecked')) 
  },
  async modifyGrocery({ commit }, grocery) {
    await db.collection('groceries').doc(grocery.id).set({ timestamp, ...grocery}).then(commit('modifyGrocery', grocery))
  },
  async toggleChecked({commit}, grocery) {
    await db.collection('groceries').doc(grocery.id)
    .update({checked: !grocery.checked})
    .then(commit('updateChecked', grocery))
  },
  async sortBy({ commit }, sortByField) {
    const dir = sortByField === 'timestamp' ? 'desc' : 'asc'
    const data = await db.collection('groceries')
    .orderBy(sortByField, dir)
    .get()
    .then((queryData) => queryData.docs.map((doc) => transformGroceries(doc)))
    commit('sortGroceries', data)
  }
}

const mutations = {
  setGroceries: (state, groceries) => state.groceries = groceries,
  setIngredientsToList: (state, ingredient) => state.groceries.unshift(ingredient),
  newGrocery: (state, grocery) => state.groceries.unshift(grocery),
  deleteGrocery: (state, id) =>  state.groceries = state.groceries.filter(grocery => grocery.id !== id),
  deleteChecked: (state) => state.groceries = state.groceries.filter(grocery => grocery.checked !== true),
  modifyGrocery: (state, grocery) => {
    const index = state.groceries.findIndex(g => g.id === grocery.id)
    if(index !== -1) state.groceries.splice(index, 1, grocery)
  },
  updateChecked: (state, grocery) => {
    state.groceries.find(a => a.id === grocery.id).checked = !grocery.checked
  },
  sortGroceries: (state, groceries) => state.groceries = groceries
}

export default { state, getters, actions, mutations }