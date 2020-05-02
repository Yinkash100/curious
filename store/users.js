import curiousServices from '../services/curiousServices'

export const namespaced = true

export const state = {
  users: [],
}

export const mutations = {
  ADD_USER(state, user) {
    state.users.push(user)
  },
}

export const actions = {
  createUser({ commit, dispatch }, user) {
    return curiousServices
      .createUser(user)
      .then(() => {
        commit('ADD_USER', user)
        const notification = {
          type: 'success',
          message: 'Your event has been created',
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch((error) => {
        const notification = {
          type: 'error',
          message: 'There was a problem creating user ' + error.message,
        }
        dispatch('notification/add', notification, { root: true })
        throw error
      })
  },
}
