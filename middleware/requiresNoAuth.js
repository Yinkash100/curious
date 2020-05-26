export default function ({ store, redirect }) {
  console.log('logged in from this NO-auth', store.getters['users/loggedIn'])
  // If the user is authenticated
  if (store.getters['users/loggedIn']) {
    return redirect('/dashboard')
  }
}
