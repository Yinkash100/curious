export default function ({ store, app }) {
  const isLoggedIn = app.$cookies.get('loggedIn')
  const user = app.$cookies.get('user')
  const token = app.$cookies.get('token')

  if (isLoggedIn && user && token) {
    store.dispatch('users/registerUser', user)
  }
}
