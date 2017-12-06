<template>
  <div class="soul-datepicker" :class="{'soul-daterange': dateType == 'range'}" v-clickoutside="handleClose">
    <div class="soul-datepicker-input">
      <s-icon type="calendar" class="soul-datepicker-icon"></s-icon>
      <div class="select-input" v-if="dateType == 'date'">
        <input type="text" class="select-input-inner" :placeholder="placeholder" :value="internalValue" @focus="handleFocus">
      </div>
      <div class="select-input soul-row-flex" v-else>
        <input type="text" class="select-input-inner soul-row-flex-unit" style="padding-right: 8px;" :placeholder="startplaceholder" :value="startdate" @focus="handleFocus">
        <span class="soul-daterange-cuter"> {{ rangetext }}</span>
        <input type="text" class="select-input-inner soul-row-flex-unit" :placeholder="endplaceholder" :value="enddate" @focus="handleFocus">
      </div>
    </div>
    <transition name="slide-down">
      <s-dropdown ref="drop" v-show="dropVisible">
        <div ref="picker"></div>
      </s-dropdown>
    </transition>
  </div>
</template>
<script>
  import sIcon from '../icon';
  import sDropdown from '../select/dropdown';
  import clickoutside from '../../directives/clickoutside';
  import { formatDate, parseDate, DateEquals } from '../../utils/dateUtil';
  import Emitter from '../../mixins/emitter';

  const DEFAULT_FORMATS = {
      date: 'yyyy-MM-dd',
      month: 'yyyy-MM',
      year: 'yyyy',
      datetime: 'yyyy-MM-dd HH:mm:ss',
      time: 'HH:mm:ss',
      timerange: 'HH:mm:ss',
      daterange: 'yyyy-MM-dd',
      datetimerange: 'yyyy-MM-dd HH:mm:ss'
  };

  const DATE_FORMATTER = function(value, format) {
      return formatDate(value, format);
  };
  const DATE_PARSER = function(text, format) {
      return parseDate(text, format);
  };
  const RANGE_FORMATTER = function(value, format) {
      if (Array.isArray(value) && value.length === 2) {
          const start = value[0];
          const end = value[1];
          if (start && end) {
              return formatDate(start, format) + RANGE_SEPARATOR + formatDate(end, format);
          }
      }
      return '';
  };
  const RANGE_PARSER = function(text, format) {
      const array = text.split(RANGE_SEPARATOR);
      if (array.length === 2) {
          const range1 = array[0];
          const range2 = array[1];
          return [parseDate(range1, format), parseDate(range2, format)];
      }
      return [];
  };
  const TYPE_VALUE_RESOLVER_MAP = {
    default: {
        formatter(value) {
            if (!value) return '';
            return '' + value;
        },
        parser(text) {
            if (text === undefined || text === '') return null;
            return text;
        }
    },
    date: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    datetime: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    daterange: {
        formatter: RANGE_FORMATTER,
        parser: RANGE_PARSER
    },
    datetimerange: {
        formatter: RANGE_FORMATTER,
        parser: RANGE_PARSER
    },
    timerange: {
        formatter: RANGE_FORMATTER,
        parser: RANGE_PARSER
    },
    time: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    month: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    year: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    number: {
        formatter(value) {
            if (!value) return '';
            return '' + value;
        },
        parser(text) {
            let result = Number(text);
            if (!isNaN(text)) {
                return result;
            } else {
                return null;
            }
        }
    }
};

  export default {
      name: 'sPicker',
      mixins: [ Emitter ],
      components: { sDropdown },
      directives: { clickoutside },
      props: {
          format: {
              type: String
          },
          readonly: {
              type: Boolean,
              default: false
          },
          disabled: {
              type: Boolean,
              default: false
          },
          clearable: {
              type: Boolean,
              default: true
          },
          placeholder: {
              type: String,
              default: ''
          },
          placement: {
              type: String,
              default: 'bottom-start'
          },
          value: {},
          startplaceholder: {
              type: String,
              default: ''
          },
          endplaceholder: {
              type: String,
              default: ''
          },
          rangetext: {
              type: String,
              default: '至'
          },
      },
      data () {
          return {
              showClose: false,
              dropVisible: false,
              picker: null,
              internalValue: this.value,
              disableClickOutSide: false,
              disableCloseUnderTransfer: false,
              startdate: '',
              enddate: ''
          };
      },
      computed: {
          selectionMode() {
              if (this.type === 'month') {
                  return 'month';
              } else if (this.type === 'year') {
                  return 'year';
              }
              return 'day';
          }
      },
      methods: {
          handleClose() {
              this.dropVisible = false;
          },
          handleFocus() {
              if(this.readonly) return;
              this.dropVisible = true;
          },
          showPicker() {
              if (!this.picker) {
                  const type = this.type;
                  this.picker = this.Panel.$mount(this.$refs.picker);
                  this.picker.selectionMode = this.selectionMode;
                  this.picker.currentType = type == 'datetime' ? 'date' : type;
                  if (type === 'datetime' || type === 'datetimerange') {
                      this.picker.confirm = true;
                      this.picker.showTime = true;
                  }
                  if (this.format) this.picker.format = this.format;
                  this.picker.value = this.value;

                  this.picker.$on('pick', (date, visible = false) => {
                      if (!this.picker.confirm) {
                          this.dropVisible = visible;
                      }
                      if(this.dateType == 'date') {
                          this.picker.value = date;
                      } else {
                          this.picker.startValue = date.startdate;
                          this.picker.endValue = date.enddate;
                      }
                      this.picker.resetView();
                      this.emitChange(date);
                  });
              } else {
                  this.picker.confirm = this.type == "datetime" ? true : false;
                  this.picker.value = this.value;
              }
              this.picker.resetView();
          },
          formattingDate (date) {
              const type = this.type;
              const format = this.format || DEFAULT_FORMATS[type];
              const formatter = (
                  TYPE_VALUE_RESOLVER_MAP[type] ||
                  TYPE_VALUE_RESOLVER_MAP['default']
              ).formatter;

              let newDate = formatter(date, format);
              if (type === 'daterange' || type === 'timerange' || type === 'datetimerange') {
                  newDate = [newDate.split(RANGE_SEPARATOR)[0], newDate.split(RANGE_SEPARATOR)[1]];
              }
              return newDate;
          },
          emitChange (date) {
              if(this.dateType == 'date') {
                const newDate = this.formattingDate(date);
                this.internalValue = newDate;
                this.$emit('input', newDate);
                this.$emit('change', newDate);
              } else {
                this.startdate = date.startdate ? this.formattingDate(date.startdate) : "";
                this.enddate = date.enddate ? this.formattingDate(date.enddate) : "";
                date = { "startdate": this.startdate, "enddate": this.enddate };
                this.$emit('input', date);
                this.$emit('change', date);
              }
          },
      },
      watch: {
          dropVisible (val) {
              if (val) {
                  this.showPicker();
                  //this.$refs.drop.update();
              } else {
                  if (this.picker) this.picker.resetView && this.picker.resetView(true);
                  //this.$refs.drop.destroy();
              }
          }
      },
      beforeDestroy () {
          if (this.picker) {
              this.picker.$destroy();
          }
      },
  }
</script>
