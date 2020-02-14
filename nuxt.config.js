import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'
import path from 'path'
import PostService from './services/PostService'
const pkg = require('./package')

class TailwindExtractor {
  static extract (content) {
    return content.match(/[A-Za-z0-9-:/]+/g) || []
  }
}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#39b982' },
  /*
  ** Global CSS
  */
  css: [
    './assets/css/app.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/services'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve('./tailwind.config.js')
      },
      preset: { autoprefixer: { grid: true } }
    },
    /*
    ** Analyze the build process
    */
    analyze: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, { isDev }) {
      // if (!isDev) {
      //   config.plugins.push(
      //     new PurgecssPlugin({
      //       paths: glob.sync([
      //         path.join(__dirname, './pages/**/*.vue'),
      //         path.join(__dirname, './layouts/**/*.vue'),
      //         path.join(__dirname, './components/**/*.vue')
      //       ]),
      //       extractors: [
      //         {
      //           extractor: new TailwindExtractor,
      //           extensions: ['vue']
      //         }
      //       ],
      //       whitelist: ['html', 'body', 'nuxt-progress']
      //     })
      //   )
      // }
    }
  },
  generate: {
    routes: () => {
      return PostService.get().then(response => {
        return response.data.map(post => {
          return `/posts/${post.id}`
        })
      })
    }
  }
}
