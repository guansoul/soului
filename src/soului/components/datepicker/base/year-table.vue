<template>
  <div class="soul-date-wrap">
    <table class="soul-table soul-year-table" @click="selectYear">
      <tbody>
        <tr>
          <td>
            <a @click.stop.prevent="prevTenYear" class="soul-year-gray">{{ startYear - 1 }}</a>
          </td>
          <td>
            <a :class="{'soul-year-selected': startYear == year}"> {{ startYear }} </a>
          </td>
          <td>
            <a :class="{'soul-year-selected': (startYear + 1) == year}"> {{ startYear + 1 }} </a>
          </td>
        </tr>
        <tr>
          <td>
            <a :class="{'soul-year-selected': (startYear + 2) == year}"> {{ startYear + 2 }} </a>
          </td>
          <td>
            <a :class="{'soul-year-selected': (startYear + 3) == year}"> {{ startYear + 3 }} </a>
          </td>
          <td>
            <a :class="{'soul-year-selected': (startYear + 4) == year}"> {{ startYear + 4 }} </a>
          </td>
        </tr>
        <tr>
          <td>
            <a :class="{'soul-year-selected': (startYear + 5) == year}"> {{ startYear + 5 }} </a>
          </td>
          <td>
            <a :class="{'soul-year-selected': (startYear + 6) == year}"> {{ startYear + 6 }} </a>
          </td>
          <td>
            <a :class="{'soul-year-selected': (startYear + 7) == year}"> {{ startYear + 7 }} </a>
          </td>
        </tr>
        <tr>
          <td>
            <a :class="{'soul-year-selected': (startYear + 8) == year}">{{ startYear + 8 }}</a>
          </td>
          <td>
            <a :class="{'soul-year-selected': (startYear + 9) == year}">{{ startYear + 9 }}</a>
          </td>
          <td>
            <a @click.stop.prevent="nextTenYear" class="soul-year-gray">{{ startYear + 10 }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
      name: 'YearTable',
      props: {
          disabledDate: {},
          year: {}
      },
      computed: {
          startYear() {
              return Math.floor(this.year / 10) * 10;
          }
      },
      methods: {
          nextTenYear() {
              this.$emit('pick', Number(this.year) + 10, false);
          },
          prevTenYear() {
              this.$emit('pick', Number(this.year) - 10, false);
          },
          selectYear(event) {
              const target = event.target;
              if (target.tagName.toLowerCase() === 'a') {
                  const year = target.textContent || target.innerText;
                  this.$emit('pick', Number(year));
              }
          }
      }
  }
</script>
