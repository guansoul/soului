<template>
  <div id="icon-wrap" v-title="'Radio 单选框'">
    <commonnav>
      <div slot="content">
        <h3 class="caption-title">Radio 单选框</h3>
        <p class="mark-section">
          基础组件。
        </p>
        <h4 class="sub-title"> 如何使用 </h4>
        <p class="mark-section"> 使用 <code class="code-sm">&lt;s-radio-group&gt;</code>、<code class="code-sm">&lt;s-radio&gt;</code> 标签声明组件，示例代码如下: </p>
        <s-row gutter="24">
          <s-col span="24" class="single-radio">
            <s-radio v-model="checked1"> 单个Radio </s-radio>(状态：{{ checked1 }})
            <s-radio v-model="checked2" true-value="选中了"> Radio的选值 </s-radio>({{ checked2 }})
            <s-radio v-model="checked3" disabled> 禁用Checkbox </s-radio>
            <s-radio v-model="checked4" size="small"> 小尺寸Checkbox </s-radio>

            <div class="code-wrap" style="margin-top: 8px;">
              <pre><code>&lt;s-radio <span class="code-attr">v-model</span>=<span class="code-value">"checked1"</span>&gt; 单个Radio &lt;/s-radio&gt;(状态：<span>{{</span> checked1 <span>}}</span>)
&lt;s-radio <span class="code-attr">v-model</span>=<span class="code-value">"checked2"</span> <span class="code-attr">true-value</span>=<span class="code-value">"选中了"</span>&gt; Radio的选值 &lt;/s-radio&gt;(<span>{{</span> checked2 <span>}}</span>)
&lt;s-radio <span class="code-attr">v-model</span>=<span class="code-value">"checked3"</span> disabled&gt; 禁用Radio &lt;/s-checkbox&gt;
&lt;s-radio <span class="code-attr">v-model</span>=<span class="code-value">"checked4"</span> <span class="code-attr">size</span>=<span class="code-value">"small"</span>&gt; 小尺寸Radio &lt;/s-radio&gt;
&lt;script&gt;
    <span class="code-attr">export default</span> {
        data () {
           <span class="code-attr">return</span> {
              checked1: false,
              checked2: "",
              checked3: true,
              checked4: true,
           }
        }
    }
&lt;/script&gt;</code></pre>
            </div>

          </s-col>
          <s-col span="24">
            <s-radio-group v-model="checkedGroup" style="display: inline-block">
              <s-radio v-for="item in citys" :label="item" :key="item"></s-radio>
            </s-radio-group>
            (选中的值：{{ checkedGroup }})

            <div class="code-wrap" style="margin-top: 8px;">
              <pre><code>&lt;s-radio-group <span class="code-attr">v-model</span>=<span class="code-value">"checkedGroup"</span>&gt;
    &lt;s-radio <span class="code-attr">v-for</span>=<span class="code-value">"item in citys"</span> <span class="code-attr">:label</span>=<span class="code-value">"item"</span> <span class="code-attr">:key</span>=<span class="code-value">"item"</span>&gt;&lt;/s-radio&gt;
&lt;/s-radio-group&gt; (选中的值：<span>{{</span> checkedGroup <span>}}</span>)
&lt;script&gt;
    <span class="code-attr">export default</span> {
        data () {
           <span class="code-attr">return</span> {
              citys: ['上海', '北京', '广州', '深圳'],
              checkedGroup: ''
           }
        }
    }
&lt;/script&gt;</code></pre>
            </div>

          </s-col>

          <s-col span="24">
            <s-radio-group v-model="checkedbtnGroup" style="display: inline-block" type="button">
              <s-radio v-for="item in citys" :label="item" :key="item"></s-radio>
            </s-radio-group>
            <span style="display: inline-block;position: relative;top: -7px;left:4px;"> (按钮型单选框的值：{{ checkedbtnGroup }}) </span>

            <div class="code-wrap" style="margin-top: 8px;">
              <pre><code>&lt;s-radio-group <span class="code-attr">v-model</span>=<span class="code-value">"checkedbtnGroup"</span> <span class="code-attr">type</span>=<span class="code-value">"button"</span>&gt;
    &lt;s-radio <span class="code-attr">v-for</span>=<span class="code-value">"item in citys"</span> <span class="code-attr">:label</span>=<span class="code-value">"item"</span> <span class="code-attr">:key</span>=<span class="code-value">"item"</span>&gt;&lt;/s-radio&gt;
&lt;/s-radio-group&gt; (按钮型单选框的值：<span>{{</span> checkedbtnGroup <span>}}</span>)
&lt;script&gt;
    <span class="code-attr">export default</span> {
        data () {
           <span class="code-attr">return</span> {
              citys: ['上海', '北京', '广州', '深圳'],
              checkedbtnGroup: '上海'
           }
        }
    }
&lt;/script&gt;</code></pre>
            </div>

          </s-col>
        </s-row>


        <h4 class="sub-title"> API </h4>
        <h4 class="sub-title" style="font-size: 16px;line-height: 34px;padding-left: 15px;"> Radio属性 </h4>
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
              <td> value </td>
              <td> 可以使用<code class="code-sm code-xs"> v-model </code> 双向绑定,  单个选项时有效 </td>
              <td> Boolean </td>
              <td> false </td>
            </tr>
            <tr>
              <td> label </td>
              <td> 单选框组使用时有效。指定当前选项的 value 值，组合会自动判断是否选中 </td>
              <td> String | Number | Boolean </td>
              <td> - </td>
            </tr>
            <tr>
              <td> true-value </td>
              <td> 选中时的值 </td>
              <td> String, Number, Boolean </td>
              <td> true </td>
            </tr>
            <tr>
              <td> false-value </td>
              <td> 未选中时的值 </td>
              <td> String, Number, Boolean </td>
              <td> false </td>
            </tr>
            <tr>
              <td> disabled </td>
              <td> 设置多选框为禁用状态</td>
              <td> Boolean </td>
              <td> false </td>
            </tr>
            <tr>
              <td> size </td>
              <td> 单选框的尺寸，可选值为<code class="code-sm code-xs">small</code>或不选</td>
              <td> String </td>
              <td> - </td>
            </tr>
            <tr>
              <td> change </td>
              <td> 选项状态发生改变时触发的事件方法；通过修改外部的数据改变时不触发 </td>
              <td> function </td>
              <td> - </td>
            </tr>
          </tbody>
        </table>
        <h4 class="sub-title" style="font-size: 16px;line-height: 34px;padding-left: 15px;"> CheckboxGroup属性 </h4>
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
              <td> value </td>
              <td> 可以使用<code class="code-sm code-xs"> v-model </code> 双向绑定,  多个复选框时使用 </td>
              <td> String | Number </td>
              <td> - </td>
            </tr>
            <tr>
              <td> type </td>
              <td> 设置单选框显示样式类型，可选值为 button 或不填，为<code class="code-sm code-xs">button</code>时使用按钮组合样式 </td>
              <td> String </td>
              <td> - </td>
            </tr>
            <tr>
              <td> size </td>
              <td> 单选框组的尺寸，可选值为<code class="code-sm code-xs">small</code>或不选</td>
              <td> String </td>
              <td> - </td>
            </tr>
            <tr>
              <td> change </td>
              <td> 选项状态发生改变时触发的事件方法；通过修改外部的数据改变时不触发 </td>
              <td> function </td>
              <td> - </td>
            </tr>
          </tbody>
        </table>
      </div>
    </commonnav>
  </div>
</template>


<script>

export default {
  name: 'radioDoc',
  data() {
      return {
          checked1: false,
          checked2: "",
          checked3: true,
          checked4: true,
          citys: ['上海', '北京', '广州', '深圳'],
          checkedGroup: '',
          checkedbtnGroup: '上海'
      }
  }
}
</script>
