// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

  Vue.use(Vuetify, {

      theme: {

          primary: '#48c793',
          accent: '#f77e12',
          error: '#FF5252',
          warning: '#FFC107',
          success: '#1a7e2a',
          grey: '#a4a4a4',
          smooth: '#f5f5f5'

      }

  })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
})
