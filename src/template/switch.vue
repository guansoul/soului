<template>
  <div id="icon-wrap" v-title="'Switch开关'">
    <commonnav>
      <div slot="content">
        <h3 class="caption-title">Switch开关</h3>
        <p class="mark-section">
          在两种状态间切换时用到的开关选择器。
        </p>
        <h4 class="sub-title"> 如何使用 </h4>
        <p class="mark-section"> 使用 <code class="code-sm">&lt;s-switch&gt;</code> 标签声明组件，示例代码如下: </p>
        <s-row gutter="24">
          <s-col span="12">
            <s-switch v-model="switchV" @change="switchEvent"></s-switch>
            <p class="sw-note"> //最简单的用法，状态切换时触发事件 </p>
            <div class="code-wrap">
              <pre>
              <code>&lt;s-switch <span class="code-attr">v-model</span>=<span class="code-value">"switchV"</span> <span class="code-attr">@change</span>=<span class="code-value">"switchEvent"</span>&gt;
&lt;s-switch&gt;
&lt;script&gt;
    <span class="code-attr">export default</span> {
        data () {
           <span class="code-attr">return</span> {
                switchV: false
           }
        },
        methods: {
           switchEvent() {
                //提示组件
                this.$message.info("开关状态: " + this.switchV);
           }
        }
    }
&lt;/script&gt;</code>
            </pre>
            </div>
          </s-col>
          <s-col span="12">
            <s-switch size="large"></s-switch>
            <p class="sw-note"> //大号开关 </p>
            <s-switch>
              <span slot="on">开</span>
              <span slot="off">关</span>
            </s-switch>
            <p class="sw-note"> //文字开关 </p>
            <s-switch disabled> </s-switch>
            <p class="sw-note"> //禁用开关 </p>
            <div class="code-wrap">
              <pre>
            <code>//大号开关
&lt;s-switch <span class="code-attr">size</span>=<span class="code-value">"large"</span>&gt; &lt;/s-switch <span class="code-attr">size</span>=<span class="code-value">"large"</span>&gt;

//文字开关
&lt;s-switch&gt;
    &lt;span <span class="code-attr">slot</span>=<span class="code-value">"on"</span>&gt; 开 &lt;span&gt;
    &lt;span <span class="code-attr">slot</span>=<span class="code-value">"off"</span>&gt; 关 &lt;span&gt;
&lt;/s-switch&gt;

//禁用开关
&lt;s-switch <span class="code-attr">disabled</span>&gt; &lt;/s-switch&gt;





            </code>
              </pre>
            </div>
          </s-col>
        </s-row>

        <h4 class="sub-title"> API </h4>
        <h4 class="sub-title" style="font-size: 16px;line-height: 34px;padding-left: 15px;"> Switch属性 </h4>
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
              <td> 指定当前是否选中，vuejs的双向绑定指令 </td>
              <td> Boolean </td>
              <td> false </td>
            </tr>
            <tr>
              <td> size </td>
              <td> 开关的尺寸，可选值<code class="code-sm code-xs">large</code>或不选。建议开关如果使用了2个汉字的文字，使用 large。 </td>
              <td> String </td>
              <td> - </td>
            </tr>
            <tr>
              <td> disabled </td>
              <td> 禁用开关 </td>
              <td> Boolean </td>
              <td> false </td>
            </tr>
          </tbody>
        </table>
        <h4 class="sub-title" style="font-size: 16px;line-height: 34px;padding-left: 15px;"> Switch事件 </h4>
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
              <td>开关切换时触发事件</td>
              <td>true | false</td>
            </tr>
          </tbody>
        </table>
        <h4 class="sub-title" style="font-size: 16px;line-height: 34px;padding-left: 15px;"> Switch Slot </h4>
        <table class="soul-table soul-table-bordered" style="margin: 5px 0 20px;">
    			<thead>
            <tr>
              <th>属性</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>on</td>
              <td>自定义显示打开时的内容</td>
            </tr>
            <tr>
              <td>off</td>
              <td>自定义显示关闭时的内容</td>
            </tr>
          </tbody>
        </table>
      </div>
    </commonnav>
  </div>
</template>


<script>

export default {
  name: 'switchDoc',
  data() {
    return {
        "switchV": false
    }
  },
  methods: {
      switchEvent() {
          this.$message.info("开关状态: " + this.switchV);
      }
  }
}
</script>
