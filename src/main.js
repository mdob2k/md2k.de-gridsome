// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import main stylesheet
import '~/assets/style/styles.scss'

import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css?family=Fira+Code:400,700&display=swap'
  })
  router.options.linkActiveClass = 'is-active'
  if (process.isClient && process.env.NODE_ENV === 'production') {
    const { default: VueMatomo } = require('vue-matomo')

    Vue.use(VueMatomo, {
      // Configure your matomo server and site by providing
      host: 'https://piwik.md2k.de',
      siteId: 1,
      router: router
    })
  }
}
