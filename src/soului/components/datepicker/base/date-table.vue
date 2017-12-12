<template>
  <div class="soul-date-wrap" @mousemove="handleMouseMove">
    <table class="soul-table soul-date-table">
      <tbody>
        <tr>
          <th v-for="week in weeks"> {{ t('i.datepicker.weeks.' + week) }} </th>
        </tr>
        <tr v-for="row in rows">
          <td v-for="cell in row" :class="getRangeCls(cell)"><a :class="getCellCls(cell)" @click="selectDate(cell)"> {{ cell.text }} </a></td>
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
          startdate: '',
          enddate: '',
          rangeState: {
              default () {
                  return {
                      endDate: null,
                      selecting: false
                  };
              }
          },
      },
      data(){
          return {
              weeks: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
              tableRows: [ [], [], [], [], [], [] ]
          }
      },
      methods: {
          getCellCls(cell) {
              return [
                  {
                      'soul-date-gray': cell.type != 'normal' && cell.type != 'today',
                      'soul-date-today': cell.type == 'today',
                      'soul-date-selected': (cell.selected || cell.start || cell.end) && ( cell.type == 'normal' || cell.type == 'today')
                  }
              ]
          },
          getRangeCls(cell) {
              return {
                  'soul-date-ranged': cell.range && ( cell.type == 'normal' || cell.type == 'today')
              }
          },
          selectDate(cell) {
              const newDate = cell.date;
              if(this.datetype == 'date') {
                  this.$emit('pick', newDate);
              } else {
                  let startdate = null;
                  let enddate = null;
                  if (this.startdate && this.enddate) {
                      startdate = new Date(newDate.getTime());
                      this.rangeState.selecting = true;
                      this.markRange(startdate);
                  } else if(this.startdate && !this.enddate) {
                      if (clearHours(newDate) >= clearHours(this.startdate)) {
                            startdate = this.startdate;
                            enddate = new Date(newDate.getTime());
                            this.rangeState.selecting = false;
                        } else {
                            startdate = new Date(newDate.getTime());
                            enddate = this.startdate;
                            this.rangeState.selecting = false;
                        }
                  } else if(!this.startdate) {
                      startdate = new Date(newDate.getTime());
                      this.rangeState.selecting = true;
                      this.markRange(startdate);
                  }
                  this.$emit('pick', {'startdate': startdate, 'enddate': enddate}, false);
              }
          },
          handleMouseMove(cell) {
              if(!this.rangeselect) return;
              this.markRange(cell.date);
          },
          getDateOfCell(row, column) {
              const firstDate = this.firstDate;
              return new Date(firstDate.getTime() + (row * 7 + column - this.offsetDay) * DAY_DURATION);
          },
          handleMouseMove(event) {
              if (!this.rangeState.selecting) return;
              this.$emit('changerange', {
                  startdate: this.startdate,
                  enddate: this.enddate,
                  rangeState: this.rangeState
              });
              const target = event.target;
              if (target.tagName.toLowerCase() == 'a') {
                  const column = target.parentNode.cellIndex;
                  const row = target.parentNode.parentNode.rowIndex - 1;
                  this.rangeState.endDate = this.getDateOfCell(row, column);
              }
          },
          markRange (enddate) {
              const startdate = this.startdate;
              if (!enddate) enddate = this.enddate;
              const startDay = clearHours(new Date(startdate));
              const endDay = clearHours(new Date(enddate));

              this.rows.forEach(
                  cells => {
                      cells.forEach(cell => {
                      if (cell.type === 'today' || cell.type === 'normal') {
                          const time = clearHours(new Date(this.year, this.month, cell.text));
                          cell.range = (time >= startDay && time <= endDay) || (time <= startDay && time >= endDay);
                          cell.start = startDay && time === startDay;
                          cell.end = endDay && time === endDay;
                      }
                  })
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
          firstDate() {
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
                  let rows = this.tableRows;
                  let count = 1;
                  let firstDayPosition;

                  const firstDate = this.firstDate;
                  const disabledDate = this.disabledDate;
                  const now = clearHours(new Date());
                  const selected = clearHours(new Date(this.value));
                  const startV = clearHours(new Date(this.startdate));
                  const endV = clearHours(new Date(this.enddate));

                  for (var i = 0; i < 6; i++) {
                      const row = rows[i];
                      for (var j = 0; j < 7; j++) {
                          let cell = row[j];
                          if (!cell) {
                              cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
                          }

                          cell.type = 'normal';

                          const index = i * 7 + j;
                          const time = firstDate.getTime() + DAY_DURATION * (index - offset);
                          const isToday = time === now;
                          cell.selected = time === selected;
                          cell.start = time === startV;
                          cell.end = time === endV;
                          cell.range = time >= startV && time <= endV;
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
          }
      }
  }
</script>
