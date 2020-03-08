const state = {
    drawerVisible: false,
}

const getters = {
    drawerVisible: state => state.drawerVisible
}

const actions = {}

const mutations = {
    setDrawer(state, data) {
        state.drawerVisible = data
    }
}

export default { 
    state, 
    getters, 
    actions, 
    mutations 
}