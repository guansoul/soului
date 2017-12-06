<template>
  <label :class="checkboxCls">
    <input type="checkbox" v-if="group" :disabled="disabled" :value="label" v-model="checkModel" @change="change">
    <input type="checkbox" v-else :disabled="disabled" :checked="checkStatus" @change="change">
    <span class="soul-inner"></span>
    <slot><span v-if="!$slots.default">{{ label }}</span></slot>
  </label>
</template>

<script>
  import { findComponentUpward } from '../../utils/util';

  const prefix = 'soul-checkbox';
  export default {
      name: 'sCheckbox',
      props: {
          disabled: {
              type: Boolean,
              default: false
          },
          value: {
              type: [String, Number, Boolean],
              default: false
          },
          trueValue: {
              type: [String, Number, Boolean],
              default: true
          },
          falseValue: {
              type: [String, Number, Boolean],
              default: false
          },
          label: {
              type: [String, Number, Boolean]
          },
          indeterminate: {
              type: Boolean,
              default: false
          },
          size: {
              type: String
          }
      },
      data () {
          return {
              checkModel: [],
              group: false,
              checkStatus: this.value,
              parent: {}
          }
      },
      computed: {
          checkboxCls() {
              return [
                  `${prefix}`,
                  {
                      [`${prefix}-sm`]: this.size == 'small',
                      [`${prefix}-indeterminate`]: this.indeterminate
                  }
              ];
          }
      },
      mounted () {
          this.parent = findComponentUpward(this, 'sCheckboxGroup');
          if(this.parent) {
              this.group = true;
              this.parent.updateModel();
          }
      },
      methods: {
          change (event) {
              if (this.disabled) {
                  return false;
              }
              const checked = event.target.checked;
              this.checkStatus = checked;

              let value = checked ? this.trueValue : this.falseValue;
              this.$emit('input', value);

              if (this.group) {
                  this.parent.change(this.checkModel);
              } else {
                  this.$emit('change', value);
              }
          }
      },
      watch: {
          value (val) {
              this.checkStatus = val === this.trueValue;
          }
      }
  }
</script>
