import path from 'path'
import fs from 'fs'
export default {
  /*
   ** Make changes to the server to allow
   ** for using https in localhost
   */
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.crt')),
    },
  },
  /*
   ** Self defined for routers
   */
  router: {},
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        name: 'google-signin-client_id',
        content: `${process.env.GOOGLE_OAUTH_CLIENT_ID}`,
      },
    ],
    script: [
      {
        src: 'https://apis.google.com/js/platform.js',
        async: true,
        defer: true,
      },
      {
        name: 'google-signin-scope',
        content: 'profile email',
      },
      // {
      //   async: true,
      //   defer: true,
      //   crossorigin: 'anonymous',
      //   src: 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v8.0',
      //   nonce: '63f7fdAt',
      // },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/Vuelidate', mode: 'client', ssr: false },
    '@/plugins/GlobalComponents',
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',
  ],
  styleResources: {
    scss: ['@/assets/scss/main.scss'],
  },
  fontawesome: {
    icons: {
      solid: [
        'faUserCircle',
        'faEye',
        'faEyeSlash',
        'faEyeDropper',
        'faAngleRight',
        'faAngleLeft',
        'faSearch',
        'faWindowClose',
        'faCheckCircle',
        'faStar',
        'faStarHalf',
        'faCertificate',
        'faAngleDown',
        'faChevronRight',
        'faChevronCircleLeft',
        'faChevronCircleRight',
        'faUserAlt',
        'faBell',
        'faUserFriends',
        'faCommentAlt',
        'faUniversalAccess',
        'faSignOutAlt',
        'faEdit',
        'faTools',
        'faBook',
        'faClock',
      ],
      brands: ['faFacebook', 'faGoogle', 'faYoutube'],
      regular: ['faTimesCircle'],
    },
  },

  axios: {
    baseURL: 'https://curious-apis.herokuapp.com',
    // baseURL: 'http://127.0.0.1:3002',
    withCredentials: false, // This is the default
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
