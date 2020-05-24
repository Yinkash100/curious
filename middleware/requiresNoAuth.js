export default function ({ store, redirect }) {
  console.log('In the middleware', store.getters['users/loggedIn'])
  // If the user is authenticated
  if (store.getters['users/loggedIn']) {
    return redirect('/dashboard')
  }
}
