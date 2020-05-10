import axios from 'axios'
import curiousServices from '../services/curiousServices'

export const namespaced = true

export const state = () => ({
  user: null,
  loggedIn: null,
})

export const mutations = {
  SET_USER_DATA(state, userData) {
    state.user = userData
    localStorage.setItem('user', JSON.stringify(userData))
    this.$cookies.set('user', JSON.stringify(userData), {
      path: '/',
    })
    axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
  },
  CLEAR_USER_DATA(state) {
    state.user = null
    localStorage.removeItem('user')
    this.$cookies.remove('user')
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
    commit('CLEAR_USER_DATA')
  },
}

export const getters = {
  loggedIn(state) {
    return state.user
  },
}
