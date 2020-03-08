import { auth } from '@/db'

const state = {
    user: {},
    loggedIn: false,
    authError: ''
}

const getters = {
    user: state => state.user,
    loggedIn: state => state.loggedIn,
    authError: state => state.authError
}

const actions = {
    async login({commit}, creds) {
        await auth.signInWithEmailAndPassword(creds.email, creds.password)
        .then((a) => {
            console.log('from store')
            commit('setUser', a.user.email)
            commit('setAuthenticated', true)
        })
        .catch(e => commit('setAuthError', e))
    },
    async logout({commit}) {
        await auth.signOut()
        .then(a => {
            commit('setAuthenticated', !!a)
            commit('setUser', null)
        })
        .catch(e => console.error(e))
    }
}

const mutations = {
    setUser(state, user) {
        if (user) {
            state.user = user
            state.loggedIn = true
        } else {
            state.user = {}
            state.loggedIn = false
        }
    },
    setAuthenticated(state, authenticated) {
        state.loggedIn = authenticated
    },
    setAuthError(state, error) {
        state.authError = error
    }
}

export default { state, getters, actions, mutations }