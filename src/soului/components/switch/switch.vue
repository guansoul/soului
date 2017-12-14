<template>
  <label class="switch-btn" :class="switchsize" >
    <input type="checkbox" :checked="currentValue" @change="toggle" :disabled="disabled">
    <div class="switch-inner">
      <span class="switch-text">
        <slot name="on" v-if="currentValue"></slot>
        <slot name="off" v-if="!currentValue"></slot>
      </span>
    </div>
  </label>
</template>

<script>
  export default {
      name: 'sSwitch',
      props: {
          value: {
            type: Boolean,
            default: false
          },
          disabled: {
              type: Boolean,
              default: false
          },
          size: {
              type: String,
              default: ""
          }
      },
      data() {
          return {
              currentValue: this.value,
              switchsize: this.size == 'large' ? "lg-switch" : ""
          }
      },
      methods: {
          toggle() {
              this.currentValue = !this.currentValue;
              this.$emit('input', !this.value);
              this.$emit('change', event);
          }
      }
  }
</script>
