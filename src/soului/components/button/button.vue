<template>
  <button :type="btnType" :class="classes" :disabled="disabled" @click="clickEvent">
    <slot></slot>
  </button>
</template>

<script>
  import { oneOf } from '../../utils/util';
  const prefix = 'soul-btn';

  export default {
      name: 'sButton',
      props: {
          type: {
              default: 'default',
              validator (value) {
                  return oneOf(value, ['primary', 'success', 'warning', 'danger', 'info', 'default']);
              }
          },
          shape: {
              validator (value) {
                  return oneOf(value, ['circle']);
              }
          },
          size: {
              validator (value) {
                  return oneOf(value, ['small', 'large', 'default']);
              }
          },
          btnType: {
              default: 'button',
              validator (value) {
                  return oneOf(value, ['button', 'submit', 'reset']);
              }
          },
          disabled: Boolean
      },
      computed: {
          classes () {
              return [
                  `${prefix}`,
                  {
                      [`${prefix}-${this.type}`]: !!this.type,
                      [`${prefix}-${this.shape}`]: !!this.shape,
                      [`${prefix}-${this.size}`]: !!this.size
                  }
              ];
          }
      },
      methods: {
        clickEvent(event) {
            this.$emit('click', event);
        }
      }
  }
</script>
