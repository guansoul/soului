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
        <s-row gutter="24" class="usage-wrap">
          <s-col span="12">
            <p>月份选择   <small>(你选择的月份范围: <span v-show="selectMonth.startdate">{{ selectMonth.startdate }} ～ {{ selectMonth.enddate }}</span>)</small></p>
            <s-daterange type="month" v-model="selectMonth"></s-daterange>
            <div class="code-wrap">
              <pre>
                <code>&lt;s-daterange <span class="code-attr">type</span>=<span class="code-value">"month"</span> <span class="code-attr">v-model</span>=<span class="code-value">"selectMonth"</span>&gt;
&lt;/s-daterange&gt;
&lt;script&gt;
    <span class="code-attr">export default</span> {
        data () {
           <span class="code-attr">return</span> {
               selectMonth: {
                   startdate: "",
                   enddate: ""
               }
           }
        }
    }
&lt;/script&gt;</code>
              </pre>
            </div>
          </s-col>
          <s-col span="12">
            <p>日期选择   <small>(你选择的日期范围: <span v-show="selectDate.startdate">{{ selectDate.startdate }} ～ {{ selectDate.enddate }}</span>)</small></p>
            <s-daterange type="date" v-model="selectDate"></s-daterange>
            <div class="code-wrap">
              <pre>
                <code>&lt;s-daterange <span class="code-attr">type</span>=<span class="code-value">"date"</span> <span class="code-attr">v-model</span>=<span class="code-value">"selectDate"</span>&gt;
&lt;/s-daterange&gt;
&lt;script&gt;
    <span class="code-attr">export default</span> {
        data () {
           <span class="code-attr">return</span> {
               selectDate: {
                   startdate: "2017-11-11",
                   enddate: "2017-12-12"
               }
           }
        }
    }
&lt;/script&gt;</code>
              </pre>
            </div>
          </s-col>
          <s-col span="24">
            <p>时间选择   <small>(你选择的时间范围: <span v-show="selectTime.startdate">{{ selectTime.startdate }} ～ {{ selectTime.enddate }}</span>)</small></p>
            <s-daterange type="datetime" v-model="selectTime" startplaceholder="开始时间" endplaceholder="结束时间" rangetext="～" @change="showDate" style="width: 480px;"></s-daterange>
            <div class="code-wrap">
              <pre>
                <code>&lt;s-daterange <span class="code-attr">type</span>=<span class="code-value">"datetime"</span> <span class="code-attr">v-model</span>=<span class="code-value">"datetime"</span> <span class="code-attr">@change</span>=<span class="code-value">"showDate"</span> <span class="code-attr">rangetext</span>=<span class="code-value">"～"</span>
             <span class="code-attr">startplaceholder</span>=<span class="code-value">"开始时间"</span> <span class="code-attr">endplaceholder</span>=<span class="code-value">"结束时间"</span> <span class="code-attr">style</span>=<span class="code-value">"width: 480px;"</span>&gt;
&lt;/s-daterange&gt;
&lt;script&gt;
    <span class="code-attr">export default</span> {
        data () {
           <span class="code-attr">return</span> {
               selectTime: {
                   startdate: "",
                   enddate: ""
               }
           }
        },
        methods: {
           <span class="code-attr">return</span> {
               showDate() {  //提示组件
                   this.$message.info("你选择的时间范围:" + this.selectTime.startdate + "～" + this.selectTime.enddate);
               }
           }
        }
    }
&lt;/script&gt;</code>
              </pre>
            </div>
          </s-col>
        </s-row>
        <h4 class="sub-title"> API </h4>
        <h4 class="sub-title" style="font-size: 16px;line-height: 34px;padding-left: 15px;"> DateRange属性 </h4>
        <table class="soul-table soul-table-bordered" style="margin: 5px 0 20px;">
          <thead>
            <tr>
              <th>属性</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> v-model </td>
              <td> 日期范围的值，vuejs的双向绑定指令 </td>
              <td> Object ( 格式：{startdate: "", enddate: ""} ) </td>
              <td> - </td>
            </tr>
            <tr>
              <td> type </td>
              <td> 日期类型，可选值为<code class="code-sm code-xs">month</code>、<code class="code-sm code-xs">date</code>、<code class="code-sm code-xs">datetime</code>  </td>
              <td> String </td>
              <td> <code class="code-sm code-xs">date</code> </td>
            </tr>
            <tr>
              <td> format </td>
              <td> 展示的日期格式 </td>
              <td> String </td>
              <td> <strong>month: </strong> yyyy-MM; <strong style="padding-left: 12px;">date: </strong> yyyy-MM-dd;
                   <p><strong>datetime: </strong> yyyy-MM-dd HH:mm:ss</p>
              </td>
            </tr>
            <tr>
              <td> startplaceholder </td>
              <td> 开始输入框提示文字 </td>
              <td> String </td>
              <td> "开始日期" </td>
            </tr>
            <tr>
              <td> endplaceholder </td>
              <td> 结束输入框提示文字 </td>
              <td> String </td>
              <td> "结束日期" </td>
            </tr>
            <tr>
              <td> rangetext </td>
              <td> 范围分隔提示文字 </td>
              <td> String </td>
              <td> "至" </td>
            </tr>
            <tr>
              <td> disabled </td>
              <td> 是否禁用选择框 </td>
              <td> Boolean </td>
              <td> false </td>
            </tr>
          </tbody>
        </table>
        <h4 class="sub-title" style="font-size: 16px;line-height: 34px;padding-left: 15px;"> DatePicker事件 </h4>
        <table class="soul-table soul-table-bordered" style="margin: 5px 0 20px;">
    			<thead>
            <tr>
              <th>属性</th>
              <th>说明</th>
              <th>返回值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>on-change</td>
              <td>日期范围发生变化时触发事件</td>
              <td>已经格式化后的日期对象，比如 { 'startdate': '2017-11-15', 'enddate': '2017-12-11' }</td>
            </tr>
          </tbody>
        </table>
      </div>
    </commonnav>
  </div>
</template>

<script>
export default {
  name: 'daterangeDoc',
  data () {
      return {
          selectMonth: {
              startdate: "",
              enddate: ""
          },
          selectDate: {
              startdate: "2017-11-11",
              enddate: "2017-12-12"
          },
          selectTime: {
              startdate: "",
              enddate: ""
          }
      }
  },
  methods: {
      showDate() {
          this.$message.success("你选择的时间范围: " + this.selectTime.startdate + "～" + this.selectTime.enddate);
      }
  }
}
</script>
