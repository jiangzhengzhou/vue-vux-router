// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('./assets/css/reset.css')
require('./assets/css/common.css')
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store.js'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
