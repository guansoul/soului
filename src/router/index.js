import Vue from 'vue'
import Router from 'vue-router'
import Index from '../template/index'
import IconDoc from '../template/icon'
import LayoutDoc from '../template/layout'

Vue.use(Router)

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = binding.value
  }
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/icon',
      name: 'icon',
      component: IconDoc
    },
    {
      path: '/layout',
      name: 'layout',
      component: LayoutDoc
    }
  ]
})
