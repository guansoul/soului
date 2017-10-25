<template>
  <div id="icon-wrap" v-title="'Select 选择器'">
    <commonnav>
      <div slot="content">
        <h3 class="caption-title">Select 选择器</h3>
        <p class="mark-section">
          下拉选择器组件，使用模拟下拉选择器代替原生的选择器。选择器支持单选、多选、搜索，以及键盘快捷操作。
        </p>
        <h4 class="sub-title"> 如何使用 </h4>
        <p class="mark-section"> 使用 <code class="code-sm">&lt;s-select&gt;</code> 标签声明下拉，<code class="code-sm">&lt;s-option&gt;</code> 标签声明选项，示例代码如下: </p>
        <s-row gutter="24" class="usage-wrap">
          <s-col span="12">
            <p>基本使用   <small>(你选择的值: {{ selectV1 }})</small></p>
            <s-select v-model="selectV1" placeholder="请选择" style="width: 240px;">
              <s-option value="beijing">北京市</s-option>
              <s-option value="shanghai">上海市</s-option>
              <s-option value="shenzhen">深圳市</s-option>
              <s-option value="hangzhou">杭州市</s-option>
              <s-option value="nanjing">南京市</s-option>
            </s-select>
            <div class="code-wrap">
              <pre>
                <code>&lt;s-select <span class="code-attr">v-model</span>=<span class="code-value">"selectV1"</span> <span class="code-attr">placeholder</span>=<span class="code-value">"请选择"</span> <span class="code-attr">style</span>=<span class="code-value">"width: 240px;"</span>&gt;
    &lt;s-option <span class="code-attr">value</span>=<span class="code-value">"beijing"</span>&gt;  北京市 &lt;/s-option&gt;
    &lt;s-option <span class="code-attr">value</span>=<span class="code-value">"shanghai"</span>&gt; 上海市 &lt;/s-option&gt;
    &lt;s-option <span class="code-attr">value</span>=<span class="code-value">"shenzhen"</span>&gt; 深圳市 &lt;/s-option&gt;
    &lt;s-option <span class="code-attr">value</span>=<span class="code-value">"hangzhou"</span>&gt; 杭州市 &lt;/s-option&gt;
&lt;/s-select&gt;
&lt;script&gt;
    <span class="code-attr">export default</span> {
        data () {
           <span class="code-attr">return</span> {
               selectV1: ''
           }
        }
    }
&lt;/script&gt;




                </code>
              </pre>
            </div>
          </s-col>
          <s-col span="12">
            <p>可搜索下拉框，添加属性<code class="code-sm code-xs">filterable</code>  <small>(你选择的值: {{ selectV2 }})</small></p>
            <s-select v-model="selectV2" placeholder="请选择" filterable style="width: 300px;">
              <s-option v-for="item in citys" :value="item.value" :key="item.value">{{ item.name }}</s-option>
            </s-select>
            <div class="code-wrap">
              <pre>
                <code>&lt;s-select <span class="code-attr">v-model</span>=<span class="code-value">"selectV2"</span> <span class="code-attr">placeholder</span>=<span class="code-value">"请选择"</span> <span class="code-attr">filterable</span> <span class="code-attr">style</span>=<span class="code-value">"width: 300px;"</span>&gt;
    //<a href="https://cn.vuejs.org/v2/api/#key" target="_blank" style="padding-right: 2px;">key属性</a>为Vuejs 2.2.0+ 用来优化列表重排速度的，非组件属性，可不写但有警告
    &lt;s-option <span class="code-attr">v-for</span>=<span class="code-value">"item in citys"</span> <span class="code-attr">:value</span>=<span class="code-value">"item.value"</span> <span class="code-attr">:key</span>=<span class="code-value">"item.value"</span>&gt; <span>{{</span> item.name <span>}}</span> &lt;/s-option&gt;
&lt;/s-select&gt;
&lt;script&gt;
    <span class="code-attr">export default</span> {
        data () {
           <span class="code-attr">return</span> {
              selectV2: '',
              citys:[
                 { value: 'beijing', name: '北京市' },
                 { value: 'shanghai', name: '上海市' },
                 { value: 'shenzhen', name: '深圳市' },
                 { value: 'hangzhou', name: '杭州市' },
                 { value: 'nanjing', name: '南京市' }
              ]
           }
        }
    }
&lt;/script&gt;</code>
              </pre>
            </div>
          </s-col>
          <s-col span="12">
            <p>多选下拉框，添加属性<code class="code-sm code-xs">multiple</code>  <small>(你选择的值: {{ selectV3 }})</small></p>
            <s-select v-model="selectV3" placeholder="请选择" multiple style="width: 300px;">
              <s-option v-for="item in citys" :value="item.value" :key="item.value">{{ item.name }}</s-option>
            </s-select>
            <div class="code-wrap">
              <pre>
                <code>&lt;s-select <span class="code-attr">v-model</span>=<span class="code-value">"selectV3"</span> <span class="code-attr">placeholder</span>=<span class="code-value">"请选择"</span> <span class="code-attr">multiple</span> <span class="code-attr">style</span>=<span class="code-value">"width: 300px;"</span>&gt;
    &lt;s-option <span class="code-attr">v-for</span>=<span class="code-value">"item in citys"</span> <span class="code-attr">:value</span>=<span class="code-value">"item.value"</span> <span class="code-attr">:key</span>=<span class="code-value">"item.value"</span>&gt; <span>{{</span> item.name <span>}}</span> &lt;/s-option&gt;
&lt;/s-select&gt;
&lt;script&gt;
    <span class="code-attr">export default</span> {
        data () {
           <span class="code-attr">return</span> {
              selectV3: [],
              citys:[
                 { value: 'beijing', name: '北京市' },
                 { value: 'shanghai', name: '上海市' },
                 { value: 'shenzhen', name: '深圳市' },
                 { value: 'hangzhou', name: '杭州市' },
                 { value: 'nanjing', name: '南京市' }
              ]
           }
        }
    }
&lt;/script&gt;









                </code>
              </pre>
            </div>
          </s-col>
          <s-col span="12">
            <p>可清除下拉框，禁用下拉框，添加属性<code class="code-sm code-xs">clearable</code>、<code class="code-sm code-xs">disabled</code></p>
            <s-select v-model="selectV4" placeholder="请选择" clearable @change="selectEvent" style="width: 200px;">
              <s-option v-for="item in citys" :value="item.value" :key="item.value">{{ item.name }}</s-option>
            </s-select>
            <s-select v-model="selectV5" placeholder="请选择" disabled style="width: 200px;">
              <s-option v-for="item in citys" :value="item.value" :key="item.value">{{ item.name }}</s-option>
            </s-select>
            <div class="code-wrap">
              <pre>
                <code>&lt;s-select <span class="code-attr">v-model</span>=<span class="code-value">"selectV4"</span> <span class="code-attr">placeholder</span>=<span class="code-value">"请选择"</span> <span class="code-attr">@change</span>=<span class="code-value">"selectEvent"</span> <span class="code-attr">clearable</span> <span class="code-attr">style</span>=<span class="code-value">"width: 200px;"</span>&gt;
    &lt;s-option <span class="code-attr">v-for</span>=<span class="code-value">"item in citys"</span> <span class="code-attr">:value</span>=<span class="code-value">"item.value"</span> <span class="code-attr">:key</span>=<span class="code-value">"item.value"</span>&gt; <span>{{</span> item.name <span>}}</span> &lt;/s-option&gt;
&lt;/s-select&gt;
&lt;s-select <span class="code-attr">v-model</span>=<span class="code-value">"selectV5"</span> <span class="code-attr">placeholder</span>=<span class="code-value">"请选择"</span> <span class="code-attr">disabled</span> <span class="code-attr">style</span>=<span class="code-value">"width: 200px;"</span>&gt;
    &lt;s-option <span class="code-attr">v-for</span>=<span class="code-value">"item in citys"</span> <span class="code-attr">:value</span>=<span class="code-value">"item.value"</span> <span class="code-attr">:key</span>=<span class="code-value">"item.value"</span>&gt; <span>{{</span> item.name <span>}}</span> &lt;/s-option&gt;
&lt;/s-select&gt;
&lt;script&gt;
    <span class="code-attr">export default</span> {
        data () {
           <span class="code-attr">return</span> {
              selectV4: '',
              selectV5: '',
              citys:[
                 { value: 'beijing', name: '北京市' },
                 { value: 'shanghai', name: '上海市' },
                 { value: 'shenzhen', name: '深圳市' },
                 { value: 'hangzhou', name: '杭州市' },
                 { value: 'nanjing', name: '南京市' }
              ]
           }
        },
        methods: {
           selectEvent() {
               let tipInfo = this.selectV4 ? ("选择的值: " + this.selectV4) : "你清除了选择的值";
               this.$message.success(tipInfo);  //提示组件
           }
        }
    }
&lt;/script&gt;</code>
              </pre>
            </div>
          </s-col>
        </s-row>



        <h4 class="sub-title"> API </h4>
        <h4 class="sub-title" style="font-size: 16px;line-height: 34px;padding-left: 15px;"> Select属性 </h4>
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
              <td> 指定选中项目的 value 值，vuejs的双向绑定指令 </td>
              <td> String | Number | Array </td>
              <td> - </td>
            </tr>
            <tr>
              <td> filterable </td>
              <td> 是否支持搜索</td>
              <td> Boolean </td>
              <td> false </td>
            </tr>
            <tr>
              <td> multiple </td>
              <td> 是否支持多选</td>
              <td> Boolean </td>
              <td> false </td>
            </tr>
            <tr>
              <td> clearable </td>
              <td> 是否可以清空选项，只在单选时有效 </td>
              <td> Boolean </td>
              <td> false </td>
            </tr>
            <tr>
              <td> disabled </td>
              <td> 是否禁用 </td>
              <td> Boolean </td>
              <td> false </td>
            </tr>
          </tbody>
        </table>
        <h4 class="sub-title" style="font-size: 16px;line-height: 34px;padding-left: 15px;"> Option属性 </h4>
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
              <td> 选项值 </td>
              <td> String | Number </td>
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
  name: 'selectDoc',
  data() {
    return {
        selectV1: '',
        selectV2: '',
        selectV3: [],
        selectV4: '',
        selectV5: '',
        citys: [
          {
              value: 'beijing',
              name: '北京市'
          },
          {
              value: 'shanghai',
              name: '上海市'
          },
          {
              value: 'shenzhen',
              name: '深圳市'
          },
          {
              value: 'hangzhou',
              name: '杭州市'
          },
          {
              value: 'nanjing',
              name: '南京市'
          }
        ]
    }
  },
  methods: {
     selectEvent() {
         let tipInfo = this.selectV4 ? ("选择的值: " + this.selectV4) : "你清除了选择的值";
         this.$message.success(tipInfo);

     }
  }
}
</script>
