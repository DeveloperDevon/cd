import { db } from '../db'
import { transformEvents } from '../helpers'

const state = {
  events: []
}

const getters = {
  events: state => state.events
}

const actions = {
  async fetchEvents({ commit }) {
    const data =  await db.collection('calEvent')
    .get().then((d) => d.docs.map(doc => transformEvents(doc)))
    commit('setEvents', data)
  },
  async addEvent({ commit }, event) {
    await db.collection("calEvent").add(event)
    .then((a) => commit('newEvent', { id: a.id,  ...event }))
  },
  async updateEvent({ commit }, event) {
    await db.collection('calEvent').doc(event.id).set(event).then(commit('setEvent', event))
  },
  async removeGrocery({ commit }, id) {
    await db.collection('calEvent').doc(id).delete().then(commit('deleteEvent', id))
  },
}

const mutations = {
  setEvents: (state, events) => state.events = events,
  newEvent: (state, event) => state.events.push(event),
  deleteEvent: (state, id) =>  state.events = state.events.filter(event => event.id !== id),
  setEvent: (state, event) => {
    const index = state.events.findIndex(e => e.id === event.id)
    if(index !== -1) state.events.splice(index, 1, event)
  },
}

export default { state, getters, actions, mutations }