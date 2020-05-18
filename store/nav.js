export const namespaced = true

export const state = () => ({
  parentDefinedStyle: '',
})

export const mutations = {
  ADD_PARENT_DEFINED_STYLE(state, style) {
    state.parentDefinedStyle = style
  },
  REMOVE_PARENT_DEFINED_STYLE(state, style) {
    state.parentDefinedStyle = null
  },
}

export const actions = {
  addStyle({ commit }, style) {
    commit('ADD_PARENT_DEFINED_STYLE', style)
  },
  removeStyle({ commit }, style) {
    commit('REMOVE_ADD_PARENT_DEFINED_STYLE', style)
  },
}

export const getters = {
  parentDefinedStyle(state) {
    return state.parentDefinedStyle
  },
}
