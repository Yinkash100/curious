export default function ({ store, error }) {
  console.log('inside the middleware /n/n/n')
  console.error('here')
  if (!store.state.auth.user) {
    error({
      message: 'You are not connected',
      statusCode: 403,
    })
  }
}
