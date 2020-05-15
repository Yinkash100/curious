export default ({ app, next, meta, route, redirect }) => {
  const loggedIn = app.$cookies.get('user')
  console.log(loggedIn)
  if (route.meta.requiresAuth && loggedIn) {
    next()
  }
  next('/')
}
