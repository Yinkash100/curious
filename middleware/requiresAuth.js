export default ({ app, next, meta, route, redirect }) => {
  // if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
  const loggedIn = app.$cookies.get('user')
  if (route.meta.requiresAuth && loggedIn) {
    next()
  }

  return redirect('/index')
}
