<template>
    <div :class="groulCls">
        <slot></slot>
    </div>
</template>

<script>
  import { findSingleComponentsDownward } from '../../utils/util';

  const prefix = 'soul-radiogroup';
  export default {
      name: 'sRadioGroup',
      props: {
          value: {
              type: [String, Number],
              default: ''
          },
          size: {
              type: String
          },
          type: {
              type: String
          },
      },
      data () {
          return {
              currentValue: this.value,
              childrens: []
          };
      },
      computed: {
          groulCls () {
              return [
                  {
                      [`${prefix}-btn`]: this.type == 'button',
                      [`${prefix}-sm`]: this.size == 'small',
                  }
              ];
          }
      },
      methods: {
          updateModel () {
              const value = this.value;
              this.childrens = findSingleComponentsDownward(this, 'sRadio');

              if (this.childrens) {
                  this.childrens.forEach(child => {
                      child.checkStatus = value == child.label;
                  });
              }
          },
          change (data) {
              this.currentValue = data;
              this.$emit('input', data);
              this.$emit('change', data);
          }
      },
      watch: {
          value () {
              this.updateModel();
          }
      }
  }
</script>
