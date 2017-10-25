<template>
  <div id="icon-wrap" v-title="'Message 全局提示'">
    <commonnav>
      <div slot="content">
        <h3 class="caption-title">Message 全局提示</h3>
        <p class="mark-section">
          全局操作信息反馈组件
        </p>
        <h4 class="sub-title"> 如何使用 </h4>
        <p class="mark-section"> 使用 <code class="code-sm">$message</code>方法，示例代码如下: </p>
        <div style="margin: 2px 0 15px;">
          <s-button type="info" @click="infoTip"> 信息的提示 </s-button>
          <s-button type="success" @click="successTip"> 成功的提示 </s-button>
          <s-button type="warning" @click="warnTip"> 警告的提示 </s-button>
          <s-button type="danger" @click="errorTip"> 错误的提示 </s-button>
          <s-button type="primary" @click="timeTip"> 自定义时长的提示 </s-button>
          <s-button type="default" @click="closeTip"> 可关闭的提示 </s-button>
        </div>
        <div class="code-wrap">
          <pre>
            <code>&lt;s-button <span class="code-attr">type</span>=<span class="code-value">"info"</span> <span class="code-attr">@click</span>=<span class="code-value">"infoTip"</span>&gt; 信息的提示 &lt;s-button&gt;
&lt;s-button <span class="code-attr">type</span>=<span class="code-value">"success"</span> <span class="code-attr">@click</span>=<span class="code-value">"successTip"</span>&gt; 成功的提示 &lt;s-button&gt;
&lt;s-button <span class="code-attr">type</span>=<span class="code-value">"warning"</span> <span class="code-attr">@click</span>=<span class="code-value">"warnTip"</span>&gt; 警告的提示 &lt;s-button&gt;
&lt;s-button <span class="code-attr">type</span>=<span class="code-value">"danger"</span> <span class="code-attr">@click</span>=<span class="code-value">"errorTip"</span>&gt; 错误的提示 &lt;s-button&gt;
&lt;s-button <span class="code-attr">type</span>=<span class="code-value">"primary"</span> <span class="code-attr">@click</span>=<span class="code-value">"timeTip"</span>&gt; 自定义时长的提示 &lt;s-button&gt;
&lt;s-button <span class="code-attr">type</span>=<span class="code-value">"default"</span> <span class="code-attr">@click</span>=<span class="code-value">"closeTip"</span>&gt; 可关闭的提示 &lt;s-button&gt;
&lt;script&gt;
    <span class="code-attr">export default</span> {
        methods: {
           infoTip() {
               this.$message.info("我是一个普通信息的提示");
           },
           successTip() {
               this.$message({
                   type: 'success',
                   content: '我是一个成功信息的提示',
               });
           },
           warnTip() {
               this.$message.warn({
                   content: '我是一个警告信息的提示',
               });
           },
           errorTip() {
               this.$message.error("我是一个错误信息的提示");
           },
           timeTip() {
               this.$message.info({
                   content: '我是一个自定义时长10s的提示',
                   duration: 10
               });
           },
           closeTip() {
               this.$message.success({
                   content: '我是一个可关闭的提示',
                   closable: true
               });
           }
        }
    }
&lt;/script&gt;</code>
          </pre>
        </div>

        <h4 class="sub-title"> API </h4>
        <h4 class="sub-title" style="font-size: 16px;line-height: 34px;padding-left: 15px;"> Messgae配置属性 </h4>
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
              <td> type </td>
              <td> 提示的类型，可选值：<code class="code-sm code-xs">info</code>、<code class="code-sm code-xs">info</code>、<code class="code-sm code-xs">success</code>、<code class="code-sm code-xs">warn</code>、<code class="code-sm code-xs">error</code>。也可直接用对应的静态方法，如<code class="code-sm code-xs">this.$message.info('')</code> </td>
              <td> String </td>
              <td> info </td>
            </tr>
            <tr>
              <td>content</td>
              <td>提示内容</td>
              <td> String </td>
              <td>-</td>
            </tr>
            <tr>
              <td>duration</td>
              <td>自动关闭的延时，单位秒，不关闭可以写 0</td>
              <td> Number </td>
              <td>3</td>
            </tr>
            <tr>
              <td>closable</td>
              <td>是否显示关闭按钮</td>
              <td> Boolean </td>
              <td>false</td>
            </tr>
            <tr>
              <td>onClose</td>
              <td>关闭时的回调函数</td>
              <td> Function </td>
              <td>-</td>
            </tr>
            <tr>
              <td>top</td>
              <td>消息距离顶部的位置</td>
              <td> number </td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
        <p>全局销毁静态方法：<code class="code-sm">this.$message.destroy()</code></p>
      </div>
    </commonnav>
  </div>
</template>

<script>

export default {
  name: 'messageDoc',
  methods: {
      infoTip() {
          this.$message.info("我是一个普通信息的提示");
      },
      successTip() {
          this.$message({
              type: 'success',
              content: '我是一个成功信息的提示',
          });
      },
      warnTip() {
          this.$message.warn({
              content: '我是一个警告信息的提示',
          });
      },
      errorTip() {
          this.$message.error('我是一个错误信息的提示');
      },
      timeTip() {
          this.$message.info({
              content: '我是一个自定义时长10s的提示',
              duration: 10
          });
      },
      closeTip() {
          this.$message.success({
              content: '我是一个可关闭的提示',
              closable: true
          });
      }
  }
}
</script>
