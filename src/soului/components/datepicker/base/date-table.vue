<template>
  <div class="soul-date-wrap">
    <table class="soul-table soul-date-table">
      <tbody>
        <tr>
          <th v-for="week in weeks"> {{ t('i.datepicker.weeks.' + week) }} </th>
        </tr>
        <tr v-for="row in rows">
          <td v-for="cell in row"><a :class="getCellCls(cell)"  @click="selectDate(cell)"> {{ cell.text }} </a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import { getFirstDayOfMonth, getDayCountOfMonth, getWeekNumber, getStartDateOfMonth, DAY_DURATION } from '../../../utils/dateUtil';
  import Locale from '../../../mixins/locale';

  const clearHours = function(time) {
      const cloneDate = new Date(time);
      cloneDate.setHours(0, 0, 0, 0);
      return cloneDate.getTime();
  };

  export default {
      name: 'DateTable',
      mixins: [ Locale ],
      props: {
          firstDayOfWeek: {
              default: 7,
              type: Number,
              validator: val => val >= 1 && val <= 7
          },
          value: '',
          date: {},
          year: {},
          month: {},
          week: {},
          selectionMode: {
              default: 'day'
          },
          datetype: {
              default: 'date'
          },
          disabledDate: {},
          rangeStart: {},
          rangeEnd: {},
          rangeselect: {
              type: Boolean,
              default: false
          },
          rangeState: {
              default() {
                  return {
                      endDate: null,
                      selecting: false,
                      row: null,
                      column: null
                  };
              }
          }
      },
      data(){
          return {
              weeks: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
          }
      },
      methods: {
          getCellCls(cell) {
              return [
                  {
                      'soul-date-gray': cell.type != 'normal' && cell.type != 'today',
                      'soul-date-today': cell.type == 'today',
                      'soul-date-selected': cell.selected
                  }
              ]
          },
          selectDate(cell) {
              const newDate = cell.date;
              if(this.datetype == 'date') {
                  this.$emit('pick', newDate);
              } else {
                  let rangestart = null;
                  let rangeend = null;
                  if (this.rangeStart && this.rangeEnd) {
                      rangestart = new Date(newDate.getTime());
//                      this.rangeselect = true;
//                      this.markRange(this.startdate);
                  } else if(this.rangeStart && !this.rangeEnd) {
                      rangestart = this.rangeStart;
                      rangeend = new Date(newDate.getTime());
                  } else if(!this.rangeStart) {
                      rangestart = new Date(newDate.getTime());
                  }
                  this.$emit('pick', {'startdate': rangestart, 'enddate': rangeend}, false);
              }
          },
          markRange (maxDate) {
              const minDate = this.minDate;
              if (!maxDate) maxDate = this.maxDate;

              const minDay = clearHours(new Date(minDate));
              const maxDay = clearHours(new Date(maxDate));

              this.cells.forEach(cell => {
                  if (cell.type === 'today' || cell.type === 'normal') {
                      const time = clearHours(new Date(this.year, this.month, cell.text));
                      cell.range = time >= minDay && time <= maxDay;
                      cell.start = minDate && time === minDay;
                      cell.end = maxDate && time === maxDay;
                  }
              });
          }
      },
      computed: {
          offsetDay() {
              const week = this.firstDayOfWeek;
              // 周日为界限，左右偏移的天数，3217654 例如周一就是 -1，目的是调整前两行日期的位置
              return week > 3 ? 7 - week : -week;
          },
          monthDate() {
              return this.date.getDate();
          },
          startDate() {
              return getStartDateOfMonth(this.year, this.month);
          },
          rows() {
              if(this.year) {
                  const date = new Date(this.year, this.month, 1);
                  let day = getFirstDayOfMonth(date);
                  const dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth());
                  const dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), (date.getMonth() === 0 ? 11 : date.getMonth() - 1));

                  day = (day === 0 ? 7 : day);
                  const offset = this.offsetDay;
                  let rows = [ [], [], [], [], [], [] ];
                  let count = 1;
                  let firstDayPosition;

                  const startDate = this.startDate;
                  const disabledDate = this.disabledDate;
                  const now = clearHours(new Date());
                  const selected = clearHours(new Date(this.value));

                  for (var i = 0; i < 6; i++) {
                      const row = rows[i];
                      for (var j = 0; j < 7; j++) {
                          let cell = row[j];
                          if (!cell) {
                              cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
                          }

                          cell.type = 'normal';

                          const index = i * 7 + j;
                          const time = startDate.getTime() + DAY_DURATION * (index - offset);
                          cell.inRange = time >= clearHours(this.minDate) && time <= clearHours(this.maxDate);
                          cell.start = this.minDate && time === clearHours(this.minDate);
                          cell.end = this.maxDate && time === clearHours(this.maxDate);
                          const isToday = time === now;
                          cell.selected = time === selected;
                          if (isToday) {
                              cell.type = 'today';
                          }

                          if (i <= 1) {
                              if (j + i * 7 >= (day + offset)) {
                                  cell.text = count++;
                                  cell.date = new Date(this.year, this.month, cell.text);
                                  if (count === 2) {
                                    firstDayPosition = i * 7 + j;
                                  }
                              } else {
                                  cell.text = dateCountOfLastMonth - (day + offset - j % 7) + 1 + i * 7;
                                  cell.type = 'prev-month';
                                  cell.date = new Date(this.year, this.month - 1, cell.text);
                              }
                          } else {
                              if (count <= dateCountOfMonth) {
                                  cell.text = count++;
                                  cell.date = new Date(this.year, this.month, cell.text);
                                  if (count === 2) {
                                    firstDayPosition = i * 7 + j;
                                  }
                              } else {
                                  cell.text = count++ - dateCountOfMonth;
                                  cell.type = 'next-month';
                                  cell.date = new Date(this.year, this.month + 1, cell.text);
                              }
                          }
                          cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));

                          this.$set(row, j, cell);
                      }
                  }

                  rows.firstDayPosition = firstDayPosition;
                  return rows;
              }
          }
      },
      watch: {
          'rangeState.endDate'(newVal) {
              this.markRange(newVal);
          },

          startdate(newVal, oldVal) {
              if (newVal && !oldVal) {
                  this.rangeState.selecting = true;
                  this.markRange(newVal);
              } else if (!newVal) {
                  this.rangeState.selecting = false;
                  this.markRange(newVal);
              } else {
                  this.markRange();
              }
          },

          enddate(newVal, oldVal) {
              if (newVal && !oldVal) {
                  this.rangeState.selecting = false;
                  this.markRange(newVal);
                  this.$emit('pick', {
                      minDate: this.minDate,
                      maxDate: this.maxDate
                  });
              }
          }
      }
  }
</script>
