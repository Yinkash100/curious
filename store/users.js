import axios from 'axios'
import curiousServices from '../services/curiousServices'

export const namespaced = true

export const state = () => ({
  user: null,
})

export const mutations = {
  SET_USER_DATA(state, userData) {
    userData = JSON.stringify(userData)
    state.user = userData
    this.$auth.setUser(userData)
    // this.$auth.setToken(userData.accessToken)
    this.$cookies.set('user', userData, {
      path: '/',
    })
    axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
  },
  CLEAR_USER_DATA(state) {
    this.$cookies.remove('user')
    state.user = null
    location.reload()
  },
}

export const actions = {
  createUser({ commit, dispatch }, user) {
    return curiousServices
      .createUser(user)
      .then(({ data }) => {
        commit('SET_USER_DATA', data)
        dispatch(
          'notification/add',
          {
            type: 'success',
            message: 'User created successfully /nLogin to access your account',
          },
          { root: true }
        )
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
    return curiousServices
      .loginUser(credentials)
      .then(({ data }) => {
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
    this.$auth.logout()
    commit('CLEAR_USER_DATA')
  },
}

export const getters = {
  loggedIn(state) {
    return state.user
  },
}
