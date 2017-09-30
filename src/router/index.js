import Vue from 'vue'
import Router from 'vue-router'
import Index from '../template/index'

Vue.use(Router)

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = binding.value
  }
})

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
