import Vue from 'vue'
import Router from 'vue-router'
import Index from '../template/index'
import IconDoc from '../template/icon'
import LayoutDoc from '../template/layout'
import ButtonDoc from '../template/button'
import SwitchDoc from '../template/switch'
import SelectDoc from '../template/select'
import MessageDoc from '../template/message'
import CheckboxDoc from '../template/checkbox'
import RadioDoc from '../template/radio'
import DatepickerDoc from '../template/datepicker'
import DaterangeDoc from '../template/daterange'
import TableDoc from '../template/table'

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
          name: 'layout',
          component: LayoutDoc
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
          path: '/table',
          name: 'table',
          component: TableDoc
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
        {
          path: '/checkbox',
          name: 'checkbox',
          component: CheckboxDoc
        },
        {
          path: '/radio',
          name: 'radio',
          component: RadioDoc
        },
        {
          path: '/datepicker',
          name: 'datepicker',
          component: DatepickerDoc
        },
        {
          path: '/daterange',
          name: 'daterange',
          component: DaterangeDoc
        },
    ]
})
