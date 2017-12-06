<template>
  <div id="icon-wrap" v-title="'DateRange 日期范围选择框'">
    <commonnav>
      <div slot="content">
        <h3 class="caption-title">DateRange 日期范围选择框</h3>
        <p class="mark-section">
          选择日期的组件。
        </p>
        <h4 class="sub-title"> 如何使用 </h4>
        <p class="mark-section"> 使用 <code class="code-sm">&lt;s-daterange&gt;</code> 标签声明组件，示例代码如下: </p>
        <div style="margin: 2px 0 15px;">
            <s-daterange type="date" startplaceholder="开始时间" endplaceholder="结束时间" v-model="rangeDate" @change="showDate"></s-daterange>
        </div>
      </div>
    </commonnav>
  </div>
</template>

<script>

export default {
  name: 'daterangeDoc',
  data () {
      return {
          rangeDate: {}
      }
  },
  methods: {
      showDate() {
          console.log(this.rangeDate);
      }
  }
}
</script>
