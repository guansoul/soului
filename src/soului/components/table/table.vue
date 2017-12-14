<template>
  <div class="soul-table-wrap" v-if="height" :style="{height: height + 'px'}">
    <div class="soul-table-header">
        <table :class="classes" @click="clickEvent">
            <colgroup>
              <col v-for="cellW in colgroupCells" :width="cellW">
            </colgroup>
            <thead ref="thead"></thead>
        </table>
    </div>
    <div class="soul-table-body" :class="{'soul-thead-fixed': colgroupCells.length}" :style="{maxHeight: scrollHeight + 'px'}">
        <table :class="classes" @click="clickEvent" style="border-top: 0;">
          <colgroup>
            <col v-for="cellW in colgroupCells" :width="cellW">
          </colgroup>
          <slot></slot>
        </table>
    </div>
  </div>
  <table :class="classes" @click="clickEvent" v-else>
      <slot></slot>
  </table>
</template>

<script>
  import { oneOf } from '../../utils/util';
  const prefix = 'soul-table';

  export default {
      name: 'sTable',
      props: {
          bordered: Boolean,
          border: Boolean,
          hover: {
            type: Boolean,
            default: true
          },
          stripe: Boolean,
          size: {
              type: String,
              default: ""
          },
          height: {
              type: String,
              default: ""
          }
      },
      data() {
          return {
              colgroupCells: [],
              scrollHeight: 0
          }
      },
      computed: {
          classes () {
              return [
                  `${prefix}`,
                  {
                      [`${prefix}-bordered`]: !!this.bordered,
                      [`${prefix}-border`]: !!this.border,
                      [`${prefix}-hover`]: !!this.hover,
                      [`${prefix}-lg`]: this.size === 'large',
                      [`${prefix}-stripe`]: !!this.stripe,
                  }
              ];
          }
      },
      mounted () {
          if(this.height) {
              this.colgroupCells = [];
              let headerHeight;
              for(var item of this.$slots.default[0].children[0].elm.cells) {
                  this.colgroupCells.push(item.offsetWidth);
                  headerHeight = item.offsetHeight;
              }
              this.$refs.thead.innerHTML = this.$slots.default[0].elm.innerHTML;
              this.scrollHeight = this.height - headerHeight - 1;
          }
      },
      methods: {
        clickEvent(event) {
            this.$emit('click', event);
        }
      }
  }
</script>
