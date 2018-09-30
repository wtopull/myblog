const NODE_ENV = process.env.NODE_ENV
const isDev = NODE_ENV === 'development'
const extend = require('./build/webpack.extend')
const router = require('./build/router')
module.exports = {
  head: {
    title: 'myblog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      { hid: 'description', name: 'description', content: 'Nathan Blog' },
      { name: 'google', value: 'notranslate'}
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    // script: [{ src: '/iconfont.js', body: true}]  全局iconfont
  },
  /* Customize the progress bar color 自定义进度条颜色 */
  loading: {
    //禁用加载进度条，默认是true
    // loading: false,
    //使用自定义加载组件
    // loading: '~components/loading.vue',
    color: '#F5F5F5',
    // failedColor: '页面加载失败时的颜色',
    // height: '进度条的高度',
    // duration: "进度条的最大显示时长，单位毫秒。Nuxt.js 假设页面在该时长内加载完毕。",
  },
  css:[
    {
      src: 'assets/css/reset.scss',
      lang: 'scss'
    }
  ],
  /* Build configuration 构建配置 */
  build: {
    /* Run ESLint on save */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    filenames: {
      vendor: 'vendor.[hash].js',
      app: 'app.[chunkhash].js'
    },
    loaders: [{
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: 'url-loader',
      query: {
        limit: 10000, // 10KO
        name: 'img/[name].[hash].[ext]'
      }
    }],
    presets: [['vue-app', { targets: isDev ? { chrome: 66} : { ie: 10} }]],
    vendor: ['axios'],
    cache: {max: 1000,maxAge: 1000 * 60 * 60},
    publicPath: '/.nuxt/dist/',
  }
}
