const pkg = require('./package')

const baseUrl = process.env.BASE_URL || 'http://localhost:3000'

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'れとるときゃりーの紹介',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'れとるときゃりーの自己紹介ページです。'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'れとるときゃりーの紹介'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: baseUrl },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'れとるときゃりーの紹介'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'れとるときゃりーの自己紹介ページです'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: baseUrl + '/img/ogp.png'
      },
      { property: 'article:publisher', content: 'FacebookURL' },
      { property: 'fb:app_id', content: 'FacebookAppID' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@retoruto_carry' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    'nuxt-fontawesome',
    'nuxt-buefy'
  ],

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },

  env: {
    baseUrl: baseUrl
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
