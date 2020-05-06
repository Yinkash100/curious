export const namespaced = true

export const state = () => ({
  notifications: [],
})

let nextId = 1

export const mutations = {
  ADD_NOTIFICATION(state, notification) {
    state.notifications.push({
      ...notification,
      id: nextId++,
    })
  },
  DELETE_NOTIFICATION(state, notificationToRemove) {
    state.notifications = state.notifications.filter(
      (notification) => notification.id !== notificationToRemove.id
    )
  },
}

export const actions = {
  add({ commit }, notification) {
    commit('ADD_NOTIFICATION', notification)
  },
  remove({ commit }, notification) {
    commit('DELETE_NOTIFICATION', notification)
  },
}
