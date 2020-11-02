import { promised } from 'q'

export default function ({ $axios, redirect, app }) {
  $axios.interceptors.request.use(
    (config) => {
      const token = app.$cookies.get('token')
      config.headers.Authorization = token || null
      return config
    },
    (error) => Promise.reject(error)
  )
  $axios.onError((error) => {
    console.log('An Error Occured', error)
    if (error.response.status === 401) {
      redirect('/login')
    }
  })
}
