<template>
  <div class="soul-date-wrap">
    <table class="soul-table soul-year-table" @click="selectMonth">
      <tbody>
        <tr>
          <td>
            <a :class="{'soul-year-selected': month == 0}" month="0"> {{ t('i.datepicker.months.m1') }} </a>
          </td>
          <td>
            <a :class="{'soul-year-selected': month == 1}" month="1"> {{ t('i.datepicker.months.m2') }} </a>
          </td>
          <td>
            <a :class="{'soul-year-selected': month == 2}" month="2"> {{ t('i.datepicker.months.m3') }} </a>
          </td>
        </tr>
        <tr>
          <td>
            <a :class="{'soul-year-selected': month == 3}" month="3"> {{ t('i.datepicker.months.m4') }} </a>
          </td>
          <td>
            <a :class="{'soul-year-selected': month == 4}" month="4"> {{ t('i.datepicker.months.m5') }} </a>
          </td>
          <td>
            <a :class="{'soul-year-selected': month == 5}" month="5"> {{ t('i.datepicker.months.m6') }} </a>
          </td>
        </tr>
        <tr>
          <td>
            <a :class="{'soul-year-selected': month == 6}" month="6"> {{ t('i.datepicker.months.m7') }} </a>
          </td>
          <td>
            <a :class="{'soul-year-selected': month == 7}" month="7"> {{ t('i.datepicker.months.m8') }} </a>
          </td>
          <td>
            <a :class="{'soul-year-selected': month == 8}" month="8"> {{ t('i.datepicker.months.m9') }} </a>
          </td>
        </tr>
        <tr>
          <td>
            <a :class="{'soul-year-selected': month == 9}" month="9">{{ t('i.datepicker.months.m10') }}</a>
          </td>
          <td>
            <a :class="{'soul-year-selected': month == 10}" month="10">{{ t('i.datepicker.months.m11') }}</a>
          </td>
          <td>
            <a :class="{'soul-year-selected': month == 11}" month="11">{{ t('i.datepicker.months.m12') }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import Locale from '../../../mixins/locale';

  export default {
      name: 'MonthTable',
      mixins: [ Locale ],
      props: {
          disabledDate: {},
          month: {
              type: Number
          }
      },
      methods: {
          selectMonth(event) {
              const target = event.target;
              if (target.tagName.toLowerCase() === 'a') {
                  const month = target.getAttribute('month');
                  this.$emit('pick', Number(month));
              }
          }
      }
  }
</script>
