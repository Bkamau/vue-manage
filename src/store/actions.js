export default {

    authenticate({ commit }, data) {
        localStorage.setItem('vm_username', data);
        commit('setAuthentic')

    },
    nullenticate({ commit }) {
        localStorage.removeItem('vm_username')
        commit('setNullThentic')


    }

}