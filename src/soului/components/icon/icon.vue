<template>
  <i class="soulicon" :class="icontype" :style="stylecss"></i>
</template>

<script>
  export default {
      name: 'icon',
      props: {
        type: String,
        styles: String
      },
      computed: {
          icontype() {
              return "icon-" + this.type;
          },
          stylecss() {
              return this.styles
          }
      }
  }
</script>
