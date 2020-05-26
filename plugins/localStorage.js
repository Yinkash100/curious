import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      storage: window.sessionStorage,
      key: 'loggedIn',
      paths: ['users/loggedIn'],
      getState: (key) => Cookies.getJSON(key),
      setState: (key, state) =>
        Cookies.set(key, state, { expires: 3, secure: true }),
    })(store)
  })
}
