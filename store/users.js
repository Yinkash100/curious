export const namespaced = true

export const state = () => ({
  user: null,
  loggedIn: null,
})

export const mutations = {
  SET_USER_DATA(state, userData) {
    userData = JSON.stringify(userData)
    state.loggedIn = true
    state.user = userData
    this.$cookies.set('user', userData, {
      path: '/',
    })
  },
  CLEAR_USER_DATA(state) {
    state.user = null
    state.loggedIn = null
    this.$cookies.remove('user')
    console.log(state.loggedIn)
  },
}

export const actions = {
  createUser({ commit, dispatch }, user) {
    return this.$axios
      .$post('/users', user)
      .then((data) => {
        commit('SET_USER_DATA', data)
      })
      .catch((error) => {
        dispatch(
          'notification/add',
          {
            type: 'error',
            message: 'There was a problem creating user ' + error.message,
          },
          { root: true }
        )
        throw error
      })
  },
  loginUser({ commit, dispatch }, credentials) {
    return this.$axios
      .$post('/login', credentials)
      .then((data) => {
        commit('SET_USER_DATA', data)
      })
      .catch((error) => {
        console.log('error', error)
        dispatch(
          'notification/add',
          {
            type: 'error',
            message: 'Incorrect username or password',
          },
          { root: true }
        )
      })
  },
  logout({ commit }) {
    commit('CLEAR_USER_DATA')
    console.log('we don clear am')
  },
}

export const getters = {
  loggedIn(state) {
    return state.loggedIn
  },
}
