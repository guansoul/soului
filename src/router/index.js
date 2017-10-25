import Vue from 'vue'
import Router from 'vue-router'
import Index from '../template/index'
import IconDoc from '../template/icon'
import LayoutDoc from '../template/layout'
import ButtonDoc from '../template/button'
import SwitchDoc from '../template/switch'
import SelectDoc from '../template/select'
import MessageDoc from '../template/message'

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
      path: '/layout',
      name: 'layout',
      component: LayoutDoc
    },
    {
      path: '/icon',
      name: 'icon',
      component: IconDoc
    },
    {
      path: '/switch',
      name: 'switch',
      component: SwitchDoc
    },
    {
      path: '/button',
      name: 'button',
      component: ButtonDoc
    },
    {
      path: '/select',
      name: 'select',
      component: SelectDoc
    },
    {
      path: '/message',
      name: 'message',
      component: MessageDoc
    },
  ]
})
