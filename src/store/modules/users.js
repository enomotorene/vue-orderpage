const state = {
    currentUser: null
}

const mutations = {   
userStatus (state, user) {
    if(user) {
        state.currentUser = user.email //showing users email
    } else {
        state.currentUser = null
    }
}
}

const getters = {
currentUser: state => state.currentUser
}

const actions = {
    setUser ({ commit }, user) { //sigle method of commit
        commit('userStatus', user)
     }
}

export default {
    state,
    mutations,
    getters,
    actions
}