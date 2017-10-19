<template>
  <i class="soulicon" :class="icontype" :style="stylecss" ></i>
</template>

<script>
  export default {
      name: 'sIcon',
      props: {
        type: String,
        styles: String,
        animation: String
      },
      computed: {
          icontype() {
              return "icon-" + this.type + " " + (this.animation ? ("animation-" + this.animation) : "");
          },
          stylecss() {
              return this.styles
          }
      }
  }
</script>
