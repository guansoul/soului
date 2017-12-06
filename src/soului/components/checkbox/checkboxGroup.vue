<template>
    <div :class="{'soul-checkboxgroup-sm': size == 'small'}">
        <slot></slot>
    </div>
</template>

<script>
  import { findSingleComponentsDownward } from '../../utils/util';

  export default {
      name: 'sCheckboxGroup',
      props: {
          value: {
              type: Array,
              default () {
                  return [];
              }
          },
          size: {
              type: String
          }
      },
      data () {
          return {
              childrens: []
          };
      },
      methods: {
          updateModel () {
              const value = this.value;
              this.childrens = findSingleComponentsDownward(this, 'sCheckbox');

              if (this.childrens) {
                  this.childrens.forEach(child => {
                      child.checkModel = value;
                  });
              }
          },
          change (data) {
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
