import { db } from '../db'
import { transform } from '../helpers'

const state = {
  groceries: []
}

const getters = {
  groceries: state => state.groceries
}

const actions = {
  async fetchGroceries({ commit }) {
    const data = await db.collection('groceries').get().then((queryData) => queryData.docs.map((doc) => transform(doc)))
    commit('setGroceries', data)
  },
  async addGrocery({ commit }, grocery) {
    await db.collection('groceries').add(grocery).then((a) => commit('newGrocery', { id: a.id, ...grocery }))
  },
  async removeGrocery({ commit }, id) {
    await db.collection('groceries').doc(id).delete().then(commit('deleteGrocery', id))
  },
  async modifyGrocery({ commit }, grocery) {
    await db.collection('groceries').doc(grocery.id).set(grocery).then(commit('modifyGrocery', grocery))
  },
  async toggleChecked({commit}, grocery) {
    await db.collection('groceries').doc(grocery.id).update({checked: !grocery.checked}).then(commit('updateChecked', grocery))
  }
}

const mutations = {
  setGroceries: (state, groceries) => state.groceries = groceries,
  newGrocery: (state, grocery) => state.groceries.push(grocery),
  deleteGrocery: (state, id) =>  state.groceries = state.groceries.filter(grocery => grocery.id !== id),
  modifyGrocery: (state, grocery) => {
    const index = state.groceries.findIndex(g => g.id === grocery.id)
    if(index !== -1) state.groceries.splice(index, 1, grocery)
  },
  updateChecked: (state, grocery) => state.groceries.find(a => a.id === grocery.id).checked = !grocery.checked
}

export default { state, getters, actions, mutations }