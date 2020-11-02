export const namespaced = true

export const state = () => ({
  user: null,
  loggedIn: null,
})

export const mutations = {
  SET_USER_DATA(state, user) {
    state.user = user
    state.loggedIn = true
  },
  CLEAR_USER_DATA(state) {
    state.user = null
    state.loggedIn = null
    this.$cookies.removeAll()
  },
}

export const actions = {
  registerUser({ commit }, user) {
    commit('SET_USER_DATA', user)
  },

  loginUser({ commit }, res) {
    this.$cookies.set('token', res.token)
    this.$cookies.set('user', res.user)
    this.$cookies.set('loggedIn', true)
    this.$axios.setHeader('Authorization', res.token)
    commit('SET_USER_DATA', res.user)
  },
  logout({ commit }) {
    commit('CLEAR_USER_DATA')
  },
}

export const getters = {
  loggedIn(state) {
    return state.loggedIn
  },
}
