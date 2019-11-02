export const setUser = ({ commit }, user) => { //sigle method of commit
    commit('userStatus', user)
 }