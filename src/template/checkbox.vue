<template>
  <div id="icon-wrap" v-title="'Checkbox 多选框'">
    <commonnav>
      <div slot="content">
        <h3 class="caption-title">Checkbox 多选框</h3>
        <p class="mark-section">
          基础组件。
        </p>
        <h4 class="sub-title"> 如何使用 </h4>
        <p class="mark-section"> 使用 <code class="code-sm">&lt;s-checkbox-group&gt;</code>、<code class="code-sm">&lt;s-checkbox&gt;</code> 标签声明组件，示例代码如下: </p>
        <s-row gutter="24">
          <s-col span="24" class="single-checkbox">
            <s-checkbox v-model="checked1"> 单个Checkbox </s-checkbox>(状态：{{ checked1 }})
            <s-checkbox v-model="checked2" true-value="选中了" false-value="未选中"> Checkbox的选值 </s-checkbox>({{ checked2 }})
            <s-checkbox v-model="checked3" disabled> 禁用Checkbox </s-checkbox>
            <s-checkbox v-model="checked4" size="small"> 小尺寸Checkbox </s-checkbox>

            <div class="code-wrap" style="margin-top: 8px;">
              <pre><code>&lt;s-checkbox <span class="code-attr">v-model</span>=<span class="code-value">"checked1"</span>&gt; 单个Checkbox &lt;/s-checkbox&gt;(状态：<span>{{</span> checked1 <span>}}</span>)
&lt;s-checkbox <span class="code-attr">v-model</span>=<span class="code-value">"checked2"</span> <span class="code-attr">true-value</span>=<span class="code-value">"选中了"</span> <span class="code-attr">false-value</span>=<span class="code-value">"未选中"</span>&gt; Checkbox的选值 &lt;/s-checkbox&gt;(<span>{{</span> checked2 <span>}}</span>)
&lt;s-checkbox <span class="code-attr">v-model</span>=<span class="code-value">"checked3"</span> disabled&gt; 禁用Checkbox &lt;/s-checkbox&gt;
&lt;s-checkbox <span class="code-attr">v-model</span>=<span class="code-value">"checked4"</span> <span class="code-attr">size</span>=<span class="code-value">"small"</span>&gt; 小尺寸Checkbox &lt;/s-checkbox&gt;
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

            <s-checkbox v-model="allchecked" :indeterminate="indeterminate" @change="checkAll">全选</s-checkbox>
            <s-checkbox-group v-model="checkedGroup" @change="checkGroupChange" style="display: inline-block">
              <s-checkbox v-for="item in citys" :label="item" :key="item"></s-checkbox>
            </s-checkbox-group>
            (选中的值：{{ checkedGroup }})

            <div class="code-wrap" style="margin-top: 8px;">
              <pre><code>&lt;s-checkbox <span class="code-attr">v-model</span>=<span class="code-value">"allchecked"</span>  <span class="code-attr">:indeterminate</span>=<span class="code-value">"indeterminate"</span> <span class="code-attr">@change</span>=<span class="code-value">"checkAll"</span>&gt; 全选 &lt;/s-checkbox&gt;
&lt;s-checkbox-group <span class="code-attr">v-model</span>=<span class="code-value">"checkedGroup"</span> <span class="code-attr">@change</span>=<span class="code-value">"checkGroupChange"</span>&gt;
    &lt;s-checkbox <span class="code-attr">v-for</span>=<span class="code-value">"item in citys"</span> <span class="code-attr">:label</span>=<span class="code-value">"item"</span> <span class="code-attr">:key</span>=<span class="code-value">"item"</span>&gt;&lt;/s-checkbox&gt;
&lt;/s-checkbox-group&gt; (选中的值：<span>{{</span> checkedGroup <span>}}</span>)
&lt;script&gt;
    <span class="code-attr">export default</span> {
        data () {
           <span class="code-attr">return</span> {
              allchecked: false,
              citys: ['上海', '北京', '广州', '深圳'],
              checkedGroup: [],
              indeterminate: false
           }
        },
        methods: {
            checkAll () {
                <span class="code-attr">this</span>.indeterminate = <span class="code-value">false</span>;
                <span class="code-attr">if</span>(<span class="code-attr">this</span>.allchecked) {
                    <span class="code-attr">this</span>.checkedGroup = <span class="code-attr">this</span><span class="code-value">.citys</span>;
                  } <span class="code-attr">else</span> {
                    <span class="code-attr">this</span>.checkedGroup = <span class="code-value">[]</span>;
                }
            },
            checkGroupChange() {
                <span class="code-attr">if</span>(<span class="code-attr">this</span>.checkedGroup.length == <span class="code-attr">this</span>.citys.length) {
                    <span class="code-attr">this</span>.indeterminate = <span class="code-value">false</span>;
                    <span class="code-attr">this</span>.allchecked = <span class="code-value">true</span>;
                } <span class="code-attr">else if</span>(<span class="code-attr">this</span>.checkedGroup.length > 0) {
                    <span class="code-attr">this</span>.indeterminate = <span class="code-value">true</span>;
                    <span class="code-attr">this</span>.allchecked = <span class="code-value">true</span>;
                } <span class="code-attr">else</span> {
                    <span class="code-attr">this</span>.indeterminate = <span class="code-value">false</span>;
                    <span class="code-attr">this</span>.allchecked = <span class="code-value">false</span>;
                }
            }
        }
    }
&lt;/script&gt;</code></pre>
            </div>

          </s-col>
        </s-row>


        <h4 class="sub-title"> API </h4>
        <h4 class="sub-title" style="font-size: 16px;line-height: 34px;padding-left: 15px;"> Checkbox属性 </h4>
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
              <td> 复选框组使用时有效。指定当前选项的 value 值，组合会自动判断是否选中 </td>
              <td> String | Number | Boolean </td>
              <td> - </td>
            </tr>
            <tr>
              <td> indeterminate </td>
              <td> 设置全选框的状态，仅负责样式控制，可通过方法控制使用 </td>
              <td> Boolean </td>
              <td> false </td>
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
              <td> 多选框的尺寸，可选值为<code class="code-sm code-xs">small</code>或不选</td>
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
              <td> Array </td>
              <td> [] </td>
            </tr>
            <tr>
              <td> size </td>
              <td> 多选框组的尺寸，可选值为<code class="code-sm code-xs">small</code>或不选</td>
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
  name: 'checkboxDoc',
  data() {
      return {
          checked1: false,
          checked2: "",
          checked3: true,
          checked4: true,
          allchecked: false,
          citys: ['上海', '北京', '广州', '深圳'],
          checkedGroup: [],
          indeterminate: false
      }
  },
  methods: {
      checkAll () {
          this.indeterminate = false;
          if(this.allchecked) {
              this.checkedGroup = this.citys;
          } else {
              this.checkedGroup = [];
          }
      },
      checkGroupChange() {
          if(this.checkedGroup.length == this.citys.length) {
              this.indeterminate = false;
              this.allchecked = true;
          } else if(this.checkedGroup.length > 0) {
              this.indeterminate = true;
              this.allchecked = true;
          } else {
              this.indeterminate = false;
              this.allchecked = false;
          }
      }
  }
}
</script>
