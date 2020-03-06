const state = {
    user: {},
    loggedIn: false
}

const getters = {}

const actions = {}

const mutations = {
    setUser (state, user) {
        if (user) {
            state.user = user
            state.loggedIn = true
        } else {
            state.user = {}
            state.loggedIn = false
        }
    }
}

export default { namespaced: true, state, getters, actions, mutations }