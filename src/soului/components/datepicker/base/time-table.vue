<template>
    <div class="soul-row-flex soul-time-wrap">
      <div class="soul-row-flex-unit" ref="hours">
        <ul>
          <li v-for="item in hoursList" :class="{'soul-time-selected': item.selected}" @click="selectTime('hours', item)" >{{ formatTime(item.text) }}</li>
        </ul>
      </div>
      <div class="soul-row-flex-unit" ref="minutes">
        <ul>
          <li v-for="item in minutesList" :class="{'soul-time-selected': item.selected}" @click="selectTime('minutes', item)">{{ formatTime(item.text) }}</li>
        </ul>
      </div>
      <div class="soul-row-flex-unit" ref="seconds" v-show="showSeconds">
        <ul>
          <li v-for="item in secondsList" :class="{'soul-time-selected': item.selected}" @click="selectTime('seconds', item)">{{ formatTime(item.text) }}</li>
        </ul>
      </div>
    </div>
</template>
<script>
  import Locale from '../../../mixins/locale';
  import { scrollTop } from '../../../utils/util';

  export default {
      name: 'TimeTable',
      mixins: [ Locale ],
      props: {
            year: { },
            month: { },
            hours: {
                type: [Number, String],
                default: 0
            },
            minutes: {
                type: [Number, String],
                default: 0
            },
            seconds: {
                type: [Number, String],
                default: 0
            },
            showSeconds: {
                type: Boolean,
                default: true
            }
      },
      data () {
          return {
              compiled: false
          }
      },
      mounted () {
          this.$nextTick(() => this.compiled = true);
      },
      computed: {
          hoursList () {
              let hours = [];
              for (let i = 0; i < 24; i ++) {
                  hours.push({
                      selected: this.hours == i,
                      text: i
                  })
              }
              return hours;
          },
          minutesList () {
              let minutes = [];
              for (let i = 0; i < 60; i ++) {
                  minutes.push({
                      selected: this.minutes == i,
                      text: i
                  })
              }
              return minutes;
          },
          secondsList () {
              let seconds = [];
              for (let i = 0; i < 60; i ++) {
                  seconds.push({
                      selected: this.seconds == i,
                      text: i
                  })
              }
              return seconds;
          },
          monthLabel () {
              const month = this.month + 1;
              return this.t(`i.datepicker.months.m${month}`);
          }
      },
      methods: {
          formatTime (text) {
              return text < 10 ? '0' + text : text;
          },
          selectTime (type, cell) {
              if (cell.disabled) return;
              const data = {};
              data[type] = cell.text;
              this.$emit('pick', data);
          },
          scroll (type, index) {
              const from = this.$refs[type].scrollTop;
              const to = 24 * index;
              scrollTop(this.$refs[type], from, to, 500);
          },
          getItemIndex(type, val){
              const item = this[`${type}List`].find(obj => obj.text == val);
              return this[`${type}List`].indexOf(item);
          },
          updateScroll () {
              const times = ['hours', 'minutes', 'seconds'];
              this.$nextTick(() => {
                  times.forEach(type => {
                      this.scroll(type, this.getItemIndex(type, this[type]));
                  });
              });
          },
      },
      watch: {
          hours (val) {
              if (!this.compiled) return;
              this.scroll('hours', this.getItemIndex('hours', val));
          },
          minutes (val) {
              if (!this.compiled) return;
              this.scroll('minutes', this.getItemIndex('minutes', val));
          },
          seconds (val) {
              if (!this.compiled) return;
              this.scroll('seconds', this.getItemIndex('seconds', val));
          }
      },
  }
</script>
