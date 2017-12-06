<template>
  <div class="soul-datepicker-wrap">
    <div class="soul-datepicker-body">
      <div class="soul-date-header" :class="{'disabled-wrap': currentType == 'datetime'}">
        <s-icon type="angle-left" v-show="currentType != 'datetime'" @click="prevYear"/>
        <s-icon type="left" v-show="currentType == 'date'" @click="prevMonth"/>
        <span class="soul-datepicker-year" @click="currentType = 'year'"> {{ yearLabel }} </span>
        <span class="soul-datepicker-month" v-show="currentType == 'date' || currentType == 'datetime'" @click="currentType = 'month'"> {{ monthLabel }} </span>
        <s-icon type="right" v-show="currentType == 'date'"  @click="nextMonth"/>
        <s-icon type="angle-right" v-show="currentType != 'datetime'" @click="nextYear"/>
      </div>
      <div class="soul-date-content">
        <year-table ref="yearTable" v-show="currentType == 'year'" @pick="handleYearPick" :year="year"></year-table>
        <month-table ref="monthTable" v-show="currentType == 'month'" @pick="handleMonthPick" :month="month"></month-table>
        <date-table ref="dateTable" v-show="currentType == 'date'" :value="value" :year="year" :month="month" :date="date" @pick="handleDatePick"></date-table>
        <time-table ref="timeTable" v-show="currentType == 'datetime'" :hours="hours" :minutes="minutes" :seconds="seconds" :show-seconds="showSeconds" @pick="handleTimePick"></time-table>
      </div>
      <div class="soul-date-footer" v-if="showTime">
         <span @click="toggleSelect">{{ selectNote }}</span>
         <button type="button" class="soul-btn soul-btn-text soul-btn-small" @click="sureTime('now')">{{ t('i.datepicker.now') }}</button>
         <button type="button" class="soul-btn soul-btn-info soul-btn-small" @click="sureTime">{{ t('i.datepicker.ok') }}</button>
      </div>
    </div>
  </div>
</template>
<script>
  import sIcon from '../../icon';
  import YearTable from '../base/year-table';
  import MonthTable from '../base/month-table';
  import DateTable from '../base/date-table';
  import TimeTable from '../base/time-table';
  import Locale from '../../../mixins/locale';
  const nowDate = new Date();
  export default {
      name: 'sDatePanel',
      mixins: [Locale],
      components: { sIcon, YearTable, MonthTable, DateTable, TimeTable },
      data() {
          return {
              year: null,
              month: null,
              hours: '',
              minutes: '',
              seconds: '',
              value: '',
              format: 'HH:mm:ss',
              currentType: 'date',
              date: nowDate,
              selectionMode: 'day',
              showTime: false,
              selectNote: this.t('i.datepicker.selectTime'),
              confirm: false
          }
      },
      mounted () {
          if (this.date && !this.year) {
              this.year = this.date.getFullYear();
              this.month = this.date.getMonth();
              this.hours = this.date.getHours();
              this.minutes = this.date.getMinutes();
              this.seconds = this.date.getSeconds();
          }
      },
      computed: {
          yearLabel () {
              const tYear = this.t('i.datepicker.year');
              const year = this.year;
              if (!year) return '';
              if (this.currentType === 'year') {
                  const startYear = Math.floor(year / 10) * 10;
                  return `${startYear}${tYear}`;
              }
              return `${year}${tYear}`;
          },
          monthLabel () {
              const month = this.month + 1;
              return this.t(`i.datepicker.months.m${month}`);
          },
          showSeconds () {
              return (this.format || '').indexOf('ss') !== -1;
          },
      },
      watch: {
          value (newVal) {
              if (!newVal) return;
              newVal = new Date(newVal);
              if (!isNaN(newVal)) {
                  this.date = newVal;
                  this.year = newVal.getFullYear();
                  this.month = newVal.getMonth();
              }
          }
      },
      methods: {
          resetDate () {
              this.date = new Date(this.date);
          },
          resetView (reset = false) {
              if (this.currentType !== 'datetime' || reset) {
                  if (this.selectionMode === 'month') {
                      this.currentType = 'month';
                  } else if (this.selectionMode === 'year') {
                      this.currentType = 'year';
                  } else {
                      this.currentType = 'date';
                  }
              }
              this.year = this.date.getFullYear();
              this.month = this.date.getMonth();
          },
          prevYear () {
              if (this.currentType === 'year') {
                  this.$refs.yearTable.prevTenYear();
              } else {
                  this.year--;
              }
          },
          nextYear () {
              if (this.currentType === 'year') {
                  this.$refs.yearTable.nextTenYear();
              } else {
                  this.year++;
              }
          },
          prevMonth () {
              this.month--;
              if (this.month < 0) {
                  this.month = 11;
                  this.year--;
              }
          },
          nextMonth () {
              this.month++;
              if (this.month > 11) {
                  this.month = 0;
                  this.year++;
              }
          },
          handleYearPick(year, close = true) {
              this.year = year;
              if (!close) return;

              this.date.setFullYear(year);
              if (this.selectionMode === 'year') {
                  this.$emit('pick', new Date(year, 0, 1));
              } else {
                  this.currentType = 'month';
              }

              this.resetDate();
          },
          handleMonthPick (month) {
              this.month = month;
              const selectionMode = this.selectionMode;
              if (selectionMode !== 'month') {
                  this.date.setMonth(month);
                  this.currentType = 'date';
                  this.resetDate();
              } else {
                  this.date.setMonth(month);
                  this.year && this.date.setFullYear(this.year);
                  this.resetDate();
                  const value = new Date(this.date.getFullYear(), month, 1);
                  this.$emit('pick', value);
              }
          },
          handleDatePick(date) {
              if (this.selectionMode === 'day') {
                  date = new Date(date);
                  this.date.setFullYear(date.getFullYear());
                  this.date.setMonth(date.getMonth());
                  this.date.setDate(date.getDate());
                  this.$emit('pick', new Date(this.date));
              }
              this.resetDate();
          },
          handleTimePick(date, emit = true) {
              if (date.hours !== undefined) {
                  this.date.setHours(date.hours);
                  this.hours = this.date.getHours();
              }
              if (date.minutes !== undefined) {
                  this.date.setMinutes(date.minutes);
                  this.minutes = this.date.getMinutes();
              }
              if (date.seconds !== undefined) {
                  this.date.setSeconds(date.seconds);
                  this.seconds = this.date.getSeconds();
              }
          },
          toggleSelect() {
              if(this.currentType == 'datetime') {
                  this.currentType = 'date';
                  this.selectNote = this.t('i.datepicker.selectTime');
              } else if(this.currentType == 'date') {
                  this.$refs.timeTable.updateScroll();
                  this.currentType = 'datetime';
                  this.selectNote = this.t('i.datepicker.selectDate');
              }
          },
          sureTime(sureDate) {
              this.confirm = false;
              if(sureDate == 'now') {
                  this.date = new Date();
              }
              this.$emit('pick', this.date);
          }
      }
  }
</script>
