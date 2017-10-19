<template>
  <transition name="message-fade">
    <div class="message-wrap"
         :class="'message-' + type + '-bg'"
         v-show="visible"
         @mouseenter="clearTask"
         @mouseleave="startTask">
      <icon :type="iconType" class="msg-type-icon"></icon>
      <span v-html="content"></span>
      <icon v-if="showClose" type="add" class="msg-close-icon" @click.native.stop="closeMsg"></icon>
    </div>
  </transition>
</template>

<script>
  import icon from '../icon';
  export default {
      name: 'sMessage',
      components: { icon },
      data() {
        return {
            visible: false,
            content: '',
            type: 'info',
            duration: 3000,
            onClose: null,
            showClose: false,
            timedTask: null
        }
      },
      computed: {
          iconType() {
              switch(this.type) {
                case "info":
                    return 'info';
                    break;
                case "success":
                    return 'checkcircle';
                    break;
                case "warn":
                    return 'warncircle';
                    break;
                case "error":
                    return 'cry';
                    break;
              }
          }
      },
      methods: {
          closeMsg() {
              this.visible = false;
              if (typeof this.onClose === 'function') {
                this.onClose(this);
              };
              this.$el.addEventListener('transitionend', this.destroyDom);
          },
          destroyDom() {
              this.$el.removeEventListener('transitionend', this.destroyDom);
              this.$destroy(true);
              this.$el.parentNode.removeChild(this.$el);
          },
          startTask() {
            if (this.duration > 0) {
              this.timedTask = setTimeout(() => {
                if (this.visible) {
                  this.closeMsg();
                }
              }, this.duration);
            }
          },
          clearTask() {
            clearTimeout(this.timedTask);
          }
      },
      mounted() {
        this.startTask();
      }
  }
</script>
