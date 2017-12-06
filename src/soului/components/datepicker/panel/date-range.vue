<template>
  <div class="soul-daterange-wrap clearfix">

    <div class="soul-datepicker-wrap">
      <div class="soul-datepicker-body">
        <div class="soul-date-header" :class="{'disabled-wrap': currentType == 'datetime'}" style="padding-right: 4px;">
          <s-icon type="angle-left" v-show="startView != 'datetime'" @click="prevYear"/>
          <s-icon type="left" v-show="startView == 'date'" @click="prevMonth"/>
          <span class="soul-datepicker-year" @click="startView = 'year';"> {{ startyearLabel }} </span>
          <span class="soul-datepicker-month" v-show="startView == 'date' || startView == 'datetime'" @click="startView = 'month';"> {{ startmonthLabel }} </span>
        </div>

        <div class="soul-date-content" :class="{'soul-daterange-bottom': !showTime}" style="padding-right: 4px;">
          <year-table ref="startyearTable" v-show="startView == 'year'" @pick="handlesStartYearPick" :year="startyear"></year-table>
          <month-table ref="startmonthTable" v-show="startView == 'month'" @pick="handleStartMonthPick" :month="startmonth"></month-table>
          <date-table ref="startdateTable" v-show="startView == 'date'" :value="startValue" :year="startyear" :month="startmonth" :date="startdate" :range-start="startValue" :range-end="endValue" datetype="range" @pick="handleDatePick"></date-table>
          <time-table ref="starttimeTable" v-show="currentType == 'datetime'" :hours="starthours" :minutes="startminutes" :seconds="startseconds" :show-seconds="showSeconds" @pick="handleTimePick"></time-table>
        </div>
      </div>
    </div>

    <div class="soul-datepicker-wrap">
      <div class="soul-datepicker-body">
        <div class="soul-date-header" :class="{'disabled-wrap': currentType == 'datetime'}" style="padding-left: 4px;">
          <span class="soul-datepicker-year" @click="endView = 'year';"> {{ endyearLabel }} </span>
          <span class="soul-datepicker-month" v-show="endView == 'date' || endView == 'datetime'" @click="endView = 'month';"> {{ endmonthLabel }} </span>
          <s-icon type="right" v-show="endView == 'date'"  @click="nextMonth"/>
          <s-icon type="angle-right" v-show="endView != 'datetime'" @click="nextYear"/>
        </div>

        <div class="soul-date-content" :class="{'soul-daterange-bottom': !showTime}" style="padding-left: 4px;">
          <year-table ref="endyearTable" v-show="endView == 'year'" @pick="handleEndYearPick" :year="endyear"></year-table>
          <month-table ref="endmonthTable" v-show="endView == 'month'" @pick="handleEndMonthPick" :month="endmonth"></month-table>
          <date-table ref="enddateTable" v-show="endView == 'date'" :value="endValue" :year="endyear" :month="endmonth" :date="enddate" :range-start="startValue" :range-end="endValue" datetype="range" @pick="handleDatePick"></date-table>
          <time-table ref="endtimeTable" v-show="currentType == 'datetime'" :hours="endhours" :minutes="endminutes" :seconds="endseconds" :show-seconds="showSeconds" @pick="handleTimePick"></time-table>
        </div>
        <div class="soul-date-footer" v-if="showTime">
           <span @click="toggleSelect">{{ selectNote }}</span>
           <button type="button" class="soul-btn soul-btn-text soul-btn-small" @click="sureTime('now')">{{ t('i.datepicker.now') }}</button>
           <button type="button" class="soul-btn soul-btn-info soul-btn-small" @click="sureTime">{{ t('i.datepicker.ok') }}</button>
        </div>
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
              startyear: null,
              startmonth: null,
              starthours: '',
              startminutes: '',
              startseconds: '',
              endyear: null,
              endmonth: null,
              endhours: '',
              endminutes: '',
              endseconds: '',
              startdate: '',
              enddate: nowDate,
              format: 'HH:mm:ss',
              currentType: 'date',
              selectionMode: 'day',
              showTime: false,
              selectNote: this.t('i.datepicker.selectTime'),
              confirm: false,
              startView: 'date',
              endView: 'date',
              value: '',
              startValue: '',
              endValue: ''
          }
      },
      mounted () {
          this.initDate();
      },
      computed: {
          startyearLabel () {
              const tYear = this.t('i.datepicker.year');
              const year = this.startyear;
              if (!year) return '';
              if (this.currentType === 'year') {
                  const startYear = Math.floor(year / 10) * 10;
                  return `${startYear}${tYear}`;
              }
              return `${year}${tYear}`;
          },
          startmonthLabel () {
              const month = this.startmonth + 1;
              return this.t(`i.datepicker.months.m${month}`);
          },
          endyearLabel () {
              const tYear = this.t('i.datepicker.year');
              const year = this.endyear;
              if (!year) return '';
              if (this.currentType === 'year') {
                  const startYear = Math.floor(year / 10) * 10;
                  return `${startYear}${tYear}`;
              }
              return `${year}${tYear}`;
          },
          endmonthLabel () {
              const month = this.endmonth + 1;
              return this.t(`i.datepicker.months.m${month}`);
          },
          showSeconds () {
              return (this.format || '').indexOf('ss') !== -1;
          },
      },
      watch: {
          startValue (newVal) {
              if (!newVal) return;
              newVal = new Date(newVal);
              if (!isNaN(newVal)) {
                  this.startdate = newVal;
                  this.startyear = newVal.getFullYear();
                  this.startmonth = newVal.getMonth();
              }
          },
          endValue (newVal) {
              if (!newVal) return;
              newVal = new Date(newVal);
              if (!isNaN(newVal)) {
                  this.enddate = newVal;
                  this.endyear = newVal.getFullYear();
                  this.endmonth = newVal.getMonth();
              }
          },
          currentType (newVal) {
              if (!newVal) return;
              this.startView = newVal;
              this.endView = newVal;
          }
      },
      methods: {
          initDate () {
              console.log(this.enddate);
              if (this.enddate && !this.endyear) {
                  this.endyear = this.enddate.getFullYear();
                  this.endmonth = this.enddate.getMonth();
                  this.endhours = this.enddate.getHours();
                  this.endminutes = this.enddate.getMinutes();
                  this.endseconds = this.enddate.getSeconds();
                  if(this.endmonth == 0) {
                      this.startmonth = 11;
                      this.startyear = this.endyear - 1;
                  } else {
                      this.startmonth = this.endmonth - 1;
                      this.startyear = this.endyear;
                  }
                  this.starthours = this.endhours;
                  this.startminutes = this.endminutes;
                  this.startseconds = this.endseconds;
                  this.startdate = new Date(this.startyear, this.startmonth, this.enddate.getDate(), this.starthours, this.startminutes, this.startseconds);
              }
          },
          resetDate () {
              this.startdate = new Date(this.startdate);
              this.enddate = new Date(this.enddate);
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
              if(this.startdate) {
                  this.startyear = this.startdate.getFullYear();
                  this.startmonth = this.startdate.getMonth();
                  this.endyear = this.enddate.getFullYear();
                  this.endmonth = this.enddate.getMonth();
              }
          },
          prevYear () {
              if (this.currentType === 'year') {
                  this.$refs.startyearTable.prevTenYear();
                  this.$refs.endyearTable.prevTenYear();
              } else {
                  this.startyear--;
                  this.endyear--;
              }
          },
          nextYear () {
              if (this.currentType === 'year') {
                  this.$refs.startyearTable.nextTenYear();
                  this.$refs.endyearTable.nextTenYear();
              } else {
                  this.startyear++;
                  this.endyear++;
              }
          },
          prevMonth () {
              this.startmonth--;
              this.endmonth--;
              if (this.startmonth < 0) {
                  this.startmonth = 11;
                  this.startyear--;
              }
              if (this.endmonth < 0) {
                  this.endmonth = 11;
                  this.endyear--;
              }
          },
          nextMonth () {
              this.startmonth++;
              this.endmonth++;
              if (this.startmonth > 11) {
                  this.startmonth = 0;
                  this.startyear++;
              }
              if (this.endmonth > 11) {
                  this.endmonth = 0;
                  this.endyear++;
              }
          },
          handlesStartYearPick(year, close = true) {
              this.handleYearPick(year, 'start');
          },
          handleEndYearPick(year, close = true) {
              this.handleYearPick(year, 'end');
          },
          handleYearPick(year, yearView, close = true) {
              this[`${yearView}year`] = year;
              if (!close) return;
              this[`${yearView}date`].setFullYear(year);
              if (this.selectionMode === 'year') {
                  //this.$emit('pick', new Date(year, 0, 1));
              } else {
                  this[`${yearView}View`] = 'month';
              }
              this.resetDate();
          },
          handleStartMonthPick (month) {
              this.handleMonthPick(month, 'start');
          },
          handleEndMonthPick (month) {
              this.handleMonthPick(month, 'end');
          },
          handleMonthPick (month, monthView) {
              this[`${monthView}month`] = month;
              const selectionMode = this.selectionMode;
              if (selectionMode !== 'month') {
                  this[`${monthView}date`].setMonth(month);
                  this[`${monthView}View`] = 'date';
              } else {
                  this[`${monthView}date`].setMonth(month);
                  this[`${monthView}year`] && this[`${monthView}date`].setFullYear(this[`${monthView}year`]);
//                  const value = new Date(this.date.getFullYear(), month, 1);
//                  this.$emit('pick', value);
              }
              this.resetDate();
          },
          handleDatePick(date) {
//              if (this.selectionMode === 'day') {
//                  date = new Date(date);
//                  this.date.setFullYear(date.getFullYear());
//                  this.date.setMonth(date.getMonth());
//                  this.date.setDate(date.getDate());
//                  this.$emit('pick', new Date(this.date));
//              }
              this.startValue = new Date(date.startdate);
              this.endValue = new Date(date.enddate);
              this.$emit('pick', date);
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
