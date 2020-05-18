export default {
  mode: 'universal',
  /*
   ** Self defined for routers
   */
  router: {
    middleware: ['auth'],
  },
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
  css: [
    '@/assets/scss/main.scss',
  ],
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
    '@nuxtjs/auth',
    '@nuxtjs/style-resources',
    '@nuxtjs/fontawesome',
    // 'nuxt-fontawesome',
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
        'faChevronCircleLeft',
        'faChevronCircleRight',
      ],
      brands: ['faFacebook', 'faGoogle', 'faYoutube'],
      regular: ['faTimesCircle'],
    },
  },

  axios: {
    baseURL: 'http://localhost:3001',
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: false,
          user: false,
          logout: false,
        },
      },
    },
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
