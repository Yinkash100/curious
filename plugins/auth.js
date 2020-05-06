export default ({ app, record }) => {
  app.router.beforeEach((to, from, next) => {
    const loggedIn = app.$cookies.get('user')
    console.log('loggedIn', loggedIn)
    console.log('meta:', record.meta.requiresAuth)
    if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
      next('/')
    }
    next()
  })
}
