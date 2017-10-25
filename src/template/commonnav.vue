<template>
  <div id="doc-wrap">
    <div class="header">
      <a href="/" class="log-title">SOUL UI</a>
      <a href="https://github.com/guansoul/soului" class="header-link"><icon type="github"></icon>Github</a>
      <a href="/" class="header-link"><icon type="order"></icon>组件文档</a>
    </div>
    <div class="content-wrap soul-row-flex">
      <div class="menu-nav">
        <ul>
          <li>
            <a href="/#/layout" :class="{'active': linkNav == 'layout'}" @click="linkNav = 'layout'">Layout 布局</a>
          </li>
          <li>
            <a href="/#/button" :class="{'active': linkNav == 'button'}" @click="linkNav = 'button'">Button 按钮</a>
          </li>
          <li>
            <a href="/#/icon" :class="{'active': linkNav == 'icon'}" @click="linkNav = 'icon'">Icon 图标库</a>
          </li>
          <li>
            <a href="/#/switch" :class="{'active': linkNav == 'switch'}" @click="linkNav = 'switch'">Switch 开关</a>
          </li>
          <li>
            <a href="/#/select" :class="{'active': linkNav == 'select'}" @click="linkNav = 'select'">Select 选择器</a>
          </li>
          <li>
            <a href="/#/message" :class="{'active': linkNav == 'message'}" @click="linkNav = 'message'">Message 选择器</a>
          </li>
        </ul>
      </div>
      <div class="aside-wrap soul-row-flex-unit">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import icon from '../soului/components/icon'
export default {
  name: 'commonnav',
  data() {
    return {
        linkNav: ""
    }
  },
  components: {
      'icon': icon
  },
  mounted () {
      this.linkNav = this.$route.name;
  }
}
</script>
