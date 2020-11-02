import Vue from 'vue'

const vue_fb = {}
vue_fb.install = function install(Vue, options) {
  ;(function (d, s, id) {
    const fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) {
      return
    }
    const js = d.createElement(s)
    js.id = id
    js.src = '//connect.facebook.net/en_US/sdk.js'
    fjs.parentNode.insertBefore(js, fjs)
    console.log('setting fb sdk')
  })(document, 'script', 'facebook-jssdk')

  window.fbAsyncInit = function onSDKInit() {
    // eslint-disable-next-line no-undef
    FB.init(options)
    // eslint-disable-next-line no-undef
    FB.AppEvents.logPageView()
    // eslint-disable-next-line no-undef
    Vue.FB = FB
    window.dispatchEvent(new Event('fb-sdk-ready'))
  }
  Vue.FB = undefined
}

Vue.use(vue_fb, {
  appId: process.env.FACEBOOK_APP_ID,
  autoLogAppEvents: true,
  xfbml: true,
  version: 'v8.0',
})
