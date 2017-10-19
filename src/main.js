// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import commonnav from './template/commonnav'
import soului from './soului'
import router from './router'
import App from './App'
import './soului/styles/soul.css'
import './static/css/style.css'

Vue.config.productionTip = false
Vue.use(soului)
Vue.component('commonnav', commonnav)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
