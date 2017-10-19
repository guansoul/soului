<template>
  <div class="select-wrap" :class="selectControl" v-clickoutside="handleClose">
    <div class="select-input" @click="toggleDrop" ref="wrap">

      <div :class="{'multiple-wrap clearfix': multipleable }">
        <span class="item-tag" v-for="(item,index) in multipleLabel">
          <span> {{ item }} </span>
          <s-icon type="add" style="transform: rotate(45deg);" @click.native.stop="clearOption(index)"></s-icon>
        </span>
        <input type="text" class="select-input-inner"
             :placeholder="showPlaceholder"
             :readonly="!filterable"
             :disabled="disabled"
             :style="inputWidth"
             v-model="query"
             @blur="handleBlur"
             @keyup="resetInput"
             @keydown.delete="handleDelete"
             ref="input">
      </div>
      <s-icon :type="icontype" class="select-icon arrows"></s-icon>
      <s-icon type="closefill" class="select-icon clears" v-show="showClearIcon" @click.native.stop="clearSelect"></s-icon>
    </div>
    <transition name="slide-down">
      <s-dropdown v-show="dropVisible" :style="dropTop">
        <ul class="select-list">
          <slot></slot>
          <li v-if="emptyItem" style="color: #bbb;">{{ emptyText }}</li>
        </ul>
      </s-dropdown>
    </transition>
  </div>
</template>

<script>
  import sIcon from '../icon';
  import sDropdown from './dropdown';
  import clickoutside from '../../directives/clickoutside';
  import Emitter from '../../mixins/emitter';
  import Locale from '../../mixins/locale';

  export default {
      mixins: [Emitter, Locale],
      name: 'selection',
      components: { sIcon, sDropdown },
      directives: { clickoutside },
      props: {
          placeholder: {
              type: String,
              default: ""
          },
          filterable: Boolean,
          clearable: Boolean,
          multiple: Boolean,
          disabled: Boolean,
          value: {
              required: true
          },
          label: {
              type: [String, Number, Array],
              default: ''
          },
      },
      data() {
          return {
              icontype: "downb",
              dropVisible: false,
              isSelect: true,
              options: [],
              optionInstances: [],
              multipleLabel: [],
              multipleValue: (this.multiple && this.value) ? this.value : [],
              query: "",
              dropTop: "",
              hoverIndex: -1,
              queryFilter: true,
              emptyItem: false,
              emptyText: this.t('i.select.noMatch'),
              inputLength: 32
          }
      },
      computed: {
          showPlaceholder() {
              if(this.multipleLabel.length) {
                  return "";
              }
              if (this.placeholder) {
                  return this.placeholder;
              } else {
                  return this.t('i.select.placeholder');
              }
          },
          selectControl() {
              return [{
                  "select-clear":  this.showClearIcon,
                  "select-visible": this.dropVisible,
                  "select-disabled": this.disabled,
                  "select-multiple": this.multiple
              }]
          },
          showClearIcon() {
              return this.clearable && !this.multiple && this.query;
          },
          multipleable() {
              return this.multiple && this.value && this.value.length;
          },
          inputWidth () {
              let style = {};
              if (this.multiple && this.filterable) {
                  style.width = this.inputLength + 'px';
              }
              if(this.multiple && !this.multipleLabel.length) {
                  style.width = "100%";
              }
              return style;
          },
      },
      methods: {
          toggleDrop(hideF) {
            if (!this.disabled) {
              if(!this.dropVisible) {
                  this.findChild((child) => {
                      child.visible = true;
                  })
              }
              this.hoverIndex = -1;
              this.dropVisible = hideF == 'static' ? false : !this.dropVisible;
              this.icontype = this.dropVisible ? "upb" : "downb";
              if(this.filterable && !this.dropVisible) {
                  this.$refs.input.blur();
              }
              if(this.multiple && this.filterable) {
                  if(this.dropVisible) {
                      this.$refs.input.focus();
                  } else {
                      this.query = "";
                  }
              }
              this.queryFilter = false;
            }
          },
          handleClose() {
              this.toggleDrop('static')
          },
          clearSelect() {
              this.query = "";
              this.$emit('input', "");
              this.$emit('change');
          },
          clearOption(optionIndex) {
              this.multipleLabel.splice(optionIndex, 1);
              this.multipleValue.splice(optionIndex, 1);
              this.$emit('input', this.multipleValue);
              setTimeout(() => {
                  this.dropTop = {"top": (this.$refs.wrap.offsetHeight - 2) + "px"};
              },10);
          },
          navigateOptions(direction) {
              if(direction == "next") {
                  this.hoverIndex++;
                  if(this.hoverIndex == this.options.length) {
                    this.hoverIndex = 0;
                  }
              }
              if(direction == "prev") {
                  this.hoverIndex--;
                  if(this.hoverIndex < 0) {
                    this.hoverIndex = this.options.length - 1;
                  }
              }
              this.findChild((child) => {
                  if (child.index === this.hoverIndex) {
                      if(!child.visible) {
                          this.navigateOptions(direction);
                          return false;
                      }
                      child.ishover = true;
                  } else {
                      child.ishover = false;
                  }
              })
          },
          updateOptions() {
              const optionInfo = this.$slots.default || [];
              let optionArr = [];
              let index = 0;

              this.findChild((child) => {
                  optionArr.push({
                      "label": child.$el.textContent,
                      "value": child.value,
                      "visible": child.visible
                  });
                  if(!this.multiple && child.value == this.value) {
                      this.query = child.$el.textContent;
                  }
                  if(this.multiple && this.value.indexOf(child.value) != -1){
                      this.multipleLabel.push(child.$el.textContent);
                  }
                  child.index = index++;
              })
              this.options = optionArr;
          },
          findChild (cb) {
              const find = function (child) {
                  const name = child.$options.componentName;
                  if (name) {
                      cb(child);
                  } else if (child.$children.length) {
                      child.$children.forEach((innerChild) => {
                          find(innerChild, cb);
                      });
                  }
              };
              if (this.optionInstances.length) {
                  this.optionInstances.forEach((child) => {
                      find(child);
                  });
              } else {
                  this.$children.forEach((child) => {
                      find(child);
                  });
              }
          },
          handleKeydown(e) {
              if(this.dropVisible) {
                  const keyCode = e.keyCode;
                  // Esc Key
                  if (keyCode === 27) {
                      e.preventDefault();
                      this.dropVisible = false;
                  }
                  // Next Key
                  if (keyCode === 40) {
                      e.preventDefault();
                      this.navigateOptions('next');
                  }
                  // Prev Key
                  if (keyCode === 38) {
                      e.preventDefault();
                      this.navigateOptions('prev');
                  }
                  // Enter Key
                  if (keyCode === 13) {
                      e.preventDefault();
                      this.findChild((child) => {
                          if (child.ishover) {
                              child.selectOption();
                          }
                      });
                  }
              }
          },
          handleBlur() {
              if(!this.multiple) {
                  setTimeout(() => {
                      if(!this.queryFilter && this.filterable) {
                          this.findChild((child) => {
                              if(child.selected) {
                                  this.query = child.labelText;
                              }
                          })
                      }
                  }, 280);
              }
          },
          resetInput() {
              this.inputLength = this.$refs.input.value.length * 12 + 20;
              this.inputLength = this.inputLength < 32 ? 32 : this.inputLength;
              setTimeout(() => {
                  this.dropTop = {"top": (this.$refs.wrap.offsetHeight - 2) + "px"};
              },10);
          },
          handleDelete() {
              if(this.multiple && this.multipleLabel.length && this.query == '') {
                  this.clearOption(this.multipleLabel.length - 1);
              }
          }
      },
      mounted () {
          this.updateOptions();

          document.addEventListener('keydown', this.handleKeydown);
          this.$on('on-selected', (option) => {
              if(this.multiple) {
                  let arrIndex = this.multipleValue.indexOf(option.value);
                  if(arrIndex == -1) {
                      this.multipleLabel.push(option.$el.textContent);
                      this.multipleValue.push(option.value);
                      this.$emit('input', this.multipleValue);
                      setTimeout(() => {
                          this.dropTop = {"top": (this.$refs.wrap.offsetHeight - 2) + "px"};
                      },10);
                  } else {
                      this.clearOption(arrIndex);
                  }
                  if(this.filterable) {
                      this.$refs.input.focus();
                  }
              } else {
                this.queryFilter = true;
                this.query = option.$el.textContent;
                this.$emit('input', option.value);
                this.handleClose();
                if(this.filterable) {
                    this.$refs.input.blur();
                }
              }
              this.$emit('change');

          })
      },
      beforeDestroy () {
          document.removeEventListener('keydown', this.handleKeydown);
      },
      watch: {
          query (val) {
              if(this.filterable) {
                  if(this.queryFilter) {
                      this.queryFilter = false;
                      return;
                  } else {
                      this.broadcast('optionItem', 'on-query-filter', val);
                      let hiddenNum = 0;
                      this.findChild((child) => {
                          if(child.visible) {
                              hiddenNum++;
                          }
                      });
                      this.emptyItem = hiddenNum == 0 ? true: false;
                  }
              }
          }
      }
  }
</script>
