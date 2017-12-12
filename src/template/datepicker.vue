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
        <s-row gutter="24" class="usage-wrap">
          <s-col span="12">
            <p>年份选择   <small>(你选择的年份: {{ selectYear }})</small></p>
            <s-datepicker placeholder="请选择年份" style="width: 222px;" type="year" v-model="selectYear"></s-datepicker>
            <div class="code-wrap">
              <pre>
                <code>&lt;s-datepicker <span class="code-attr">type</span>=<span class="code-value">"year"</span> <span class="code-attr">v-model</span>=<span class="code-value">"selectYear"</span> <span class="code-attr">placeholder</span>=<span class="code-value">"请选择年份"</span> <span class="code-attr">style</span>=<span class="code-value">"width: 222px;"</span>&gt;
&lt;/s-datepicker&gt;
&lt;script&gt;
    <span class="code-attr">export default</span> {
        data () {
           <span class="code-attr">return</span> {
               selectYear: ''
           }
        }
    }
&lt;/script&gt;</code>
              </pre>
            </div>
          </s-col>
          <s-col span="12">
            <p>月份选择   <small>(你选择的月份: {{ selectMonth }})</small></p>
            <s-datepicker placeholder="请选择月份" style="width: 222px;" type="month" v-model="selectMonth"></s-datepicker>
            <div class="code-wrap">
              <pre>
                <code>&lt;s-datepicker <span class="code-attr">type</span>=<span class="code-value">"month"</span> <span class="code-attr">v-model</span>=<span class="code-value">"selectMonth"</span> <span class="code-attr">placeholder</span>=<span class="code-value">"请选择月份"</span> <span class="code-attr">style</span>=<span class="code-value">"width: 222px;"</span>&gt;
&lt;/s-datepicker&gt;
&lt;script&gt;
    <span class="code-attr">export default</span> {
        data () {
           <span class="code-attr">return</span> {
               selectMonth: '2017-11'
           }
        }
    }
&lt;/script&gt;</code>
              </pre>
            </div>
          </s-col>
          <s-col span="12">
            <p>日期选择   <small>(你选择的日期: {{ selectDate }})</small></p>
            <s-datepicker placeholder="请选择日期" style="width: 222px;" type="date" v-model="selectDate" @change="showDate"></s-datepicker>
            <div class="code-wrap">
              <pre>
                <code>&lt;s-datepicker <span class="code-attr">type</span>=<span class="code-value">"date"</span> <span class="code-attr">v-model</span>=<span class="code-value">"selectDate"</span> <span class="code-attr">@change</span>=<span class="code-value">"showDate"</span> <span class="code-attr">placeholder</span>=<span class="code-value">"请选择日期"</span> <span class="code-attr">style</span>=<span class="code-value">"width: 222px;"</span>&gt;
&lt;/s-datepicker&gt;
&lt;script&gt;
    <span class="code-attr">export default</span> {
        data () {
           <span class="code-attr">return</span> {
               selectDate: ''
           }
        },
        methods: {
           <span class="code-attr">return</span> {
               showDate() { //提示组件
                   this.$message.info("你选择的日期: " + this.selectDate);
               }
           }
        }
    }
&lt;/script&gt;</code>
              </pre>
            </div>
          </s-col>
          <s-col span="12">
            <p>时间选择   <small>(你选择的时间: {{ selectTime }})</small></p>
            <s-datepicker placeholder="请选择时间" style="width: 222px;" type="datetime" format="yyyy-MM-dd HH:mm" v-model="selectTime"></s-datepicker>
            <div class="code-wrap">
              <pre>
                <code>&lt;s-datepicker <span class="code-attr">type</span>=<span class="code-value">"datetime"</span> <span class="code-attr">v-model</span>=<span class="code-value">"selectTime"</span>
              <span class="code-attr">format</span>=<span class="code-value">"yyyy-MM-dd HH:mm"</span> <span class="code-attr">placeholder</span>=<span class="code-value">"请选择时间"</span> <span class="code-attr">style</span>=<span class="code-value">"width: 222px;"</span>&gt;
&lt;/s-datepicker&gt;
&lt;script&gt;
    <span class="code-attr">export default</span> {
        data () {
           <span class="code-attr">return</span> {
               selectTime: ''
           }
        }
    }
&lt;/script&gt;





                </code>
              </pre>
            </div>
          </s-col>
        </s-row>

        <h4 class="sub-title"> API </h4>
        <h4 class="sub-title" style="font-size: 16px;line-height: 34px;padding-left: 15px;"> DatePicker属性 </h4>
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
              <td> 日期的值，vuejs的双向绑定指令 </td>
              <td> Date格式 </td>
              <td> - </td>
            </tr>
            <tr>
              <td> type </td>
              <td> 日期类型，可选值为<code class="code-sm code-xs">year</code>、<code class="code-sm code-xs">month</code>、<code class="code-sm code-xs">date</code>、<code class="code-sm code-xs">datetime</code>  </td>
              <td> String </td>
              <td> <code class="code-sm code-xs">date</code> </td>
            </tr>
            <tr>
              <td> format </td>
              <td> 展示的日期格式 </td>
              <td> String </td>
              <td> <strong>year: </strong> yyyy; <strong style="padding-left: 61px;">month: </strong> yyyy-MM;
                   <p><strong>date: </strong> yyyy-MM-dd; <strong style="padding-left: 10px;">datetime: </strong> yyyy-MM-dd HH:mm:ss</p>
              </td>
            </tr>
            <tr>
              <td> placeholder </td>
              <td> 输入框提示文字 </td>
              <td> String </td>
              <td> - </td>
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
              <td>日期发生变化时触发事件</td>
              <td>已经格式化后的日期，比如 2017-11-15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </commonnav>
  </div>
</template>

<script>

export default {
  name: 'datepickerDoc',
  data () {
      return {
          selectYear: "",
          selectMonth: "2017-11",
          selectDate: "",
          selectTime: ""
      }
  },
  methods: {
      showDate() {
          this.$message.info("你选择的日期: " + this.selectDate);
      }
  }
}
</script>
