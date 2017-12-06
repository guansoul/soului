<template>
  <label :class="radioCls">
    <input type="radio" :disabled="disabled" :checked="checkStatus" @change="change">
    <span class="soul-inner"></span>
    <slot><span v-if="!$slots.default">{{ label }}</span></slot>
  </label>
</template>

<script>
  import { findComponentUpward } from '../../utils/util';

  const prefix = 'soul-radio';
  export default {
      name: 'sRadio',
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
          size: {
              type: String
          }
      },
      data () {
          return {
              group: false,
              checkStatus: this.value,
              parent: {}
          }
      },
      computed: {
          radioCls() {
              return [
                  `${prefix}`,
                  {
                      [`${prefix}-sm`]: this.size == 'small',
                      [`${prefix}-checked`]: this.checkStatus
                  }
              ];
          }
      },
      mounted () {
          this.parent = findComponentUpward(this, 'sRadioGroup');
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

              if (this.group && this.label !== undefined) {
                  this.parent.change(this.label);
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
