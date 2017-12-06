<template>
  <div id="icon-wrap" v-title="'DatePicker 日期选择框'">
    <commonnav>
      <div slot="content">
        <h3 class="caption-title">DatePicker 日期选择框</h3>
        <p class="mark-section">
          选择日期的组件。
        </p>
        <h4 class="sub-title"> 如何使用 </h4>
        <p class="mark-section"> 使用 <code class="code-sm">&lt;s-datepicker&gt;</code> 标签声明组件，示例代码如下: </p>
        <div style="margin: 2px 0 15px;">
            <s-datepicker placeholder="请选择年份" style="width: 202px;" type="datetime" format="yyyy-MM-dd HH:mm" v-model="selectDate" @change="showDate"></s-datepicker>

        </div>
      </div>
    </commonnav>
  </div>
</template>

<script>

export default {
  name: 'datepickerDoc',
  data () {
      return {
          selectDate: "",
      }
  },
  methods: {
      showDate() {
          console.log(this.selectDate);
      }
  }
}
</script>
