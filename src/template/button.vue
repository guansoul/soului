<template>
  <div id="icon-wrap" v-title="'Button 按钮'">
    <commonnav>
      <div slot="content">
        <h3 class="caption-title">Button 按钮</h3>
        <p class="mark-section">
          基础组件。
        </p>
        <h4 class="sub-title"> 如何使用 </h4>
        <p class="mark-section"> 使用 <code class="code-sm">&lt;s-button&gt;</code> 标签声明组件，示例代码如下: </p>
        <div style="margin: 2px 0 15px;">
            <s-button type="default">Default</s-button>
            <s-button type="primary">primary</s-button>
            <s-button type="info">info</s-button>
            <s-button type="success">success</s-button>
            <s-button type="warning">warning</s-button>
            <s-button type="danger">danger</s-button>
            <s-button type="default" disabled>default-disabled</s-button>
        </div>
        <div style="margin: 2px 0 15px;">
            <s-button type="default" shape="circle">Default</s-button>
            <s-button type="primary" shape="circle">primary</s-button>
            <s-button type="info" shape="circle">info</s-button>
            <s-button type="success" shape="circle">success</s-button>
            <s-button type="warning" shape="circle">warning</s-button>
            <s-button type="danger" shape="circle">danger</s-button>
          <s-button type="default" shape="circle" disabled>default-disabled</s-button>
        </div>
        <div style="margin: 2px 0 15px;">
            <s-button type="default" disabled>Default</s-button>
            <s-button type="primary" disabled>primary</s-button>
            <s-button type="info" disabled>info</s-button>
            <s-button type="success" disabled>success</s-button>
            <s-button type="warning" disabled>warning</s-button>
            <s-button type="danger" disabled>danger</s-button>
            <s-button type="default" disabled>default-disabled</s-button>
        </div>
        <div style="margin: 2px 0 15px;">
            <s-button type="primary" size="large">尺寸:大</s-button>
            <s-button type="primary">尺寸:正常</s-button>
            <s-button type="primary" size="small">尺寸:小</s-button>
            <s-button type="success">正常按钮</s-button>
            <s-button type="success" btn-type="submit">提交按钮</s-button>
            <s-button type="success" btn-type="reset">重置按钮</s-button>
        </div>

        <div class="code-wrap">
          <pre>
            <code>//按钮类型：default、primary、info、success、warning、danger
&lt;s-button <span class="code-attr">type</span>=<span class="code-value">"default"</span>&gt; Default &lt;s-button&gt;

//圆角按钮
&lt;s-button <span class="code-attr">type</span>=<span class="code-value">"default"</span>  <span class="code-attr">shape</span>=<span class="code-value">"circle"</span>&gt;  Default &lt;s-button&gt;

//禁用按钮
&lt;s-button <span class="code-attr">type</span>=<span class="code-value">"default"</span>  <span class="code-attr">disabled</span>&gt;  Default &lt;s-button&gt;

//按钮尺寸、原生类型
&lt;s-button <span class="code-attr">type</span>=<span class="code-value">"primary"</span>  <span class="code-attr">size</span>=<span class="code-value">"large"</span>&gt; 尺寸:大 &lt;s-button&gt;
&lt;s-button <span class="code-attr">type</span>=<span class="code-value">"primary"</span> &gt; 尺寸:正常 &lt;s-button&gt;
&lt;s-button <span class="code-attr">type</span>=<span class="code-value">"primary"</span>  <span class="code-attr">size</span>=<span class="code-value">"small"</span>&gt; 尺寸:小 &lt;s-button&gt;
&lt;s-button <span class="code-attr">type</span>=<span class="code-value">"primary"</span>  <span class="code-attr">size</span>=<span class="code-value">"small"</span>&gt; 尺寸:小 &lt;s-button&gt;
&lt;s-button <span class="code-attr">type</span>=<span class="code-value">"success"</span>&gt; 正常按钮 &lt;s-button&gt;
&lt;s-button <span class="code-attr">type</span>=<span class="code-value">"success"</span>  <span class="code-attr">btn-type</span>=<span class="code-value">"submit"</span>&gt; 提交按钮 &lt;s-button&gt;
&lt;s-button <span class="code-attr">type</span>=<span class="code-value">"success"</span>  <span class="code-attr">btn-type</span>=<span class="code-value">"reset"</span>&gt; 重置按钮 &lt;s-button&gt;</code>
          </pre>
        </div>
        <h4 class="sub-title"> API </h4>
        <h4 class="sub-title" style="font-size: 16px;line-height: 34px;padding-left: 15px;"> Button属性 </h4>
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
              <td> 按钮类型，可选值为<code class="code-sm code-xs">default</code>、<code class="code-sm code-xs">primary</code>、
                   <code class="code-sm code-xs">info</code>、<code class="code-sm code-xs">success</code>、
                   <code class="code-sm code-xs">warning</code>、<code class="code-sm code-xs">danger</code>或不设置,
                   默认为：<code class="code-sm code-xs">default</code>
              </td>
              <td> String </td>
              <td> default </td>
            </tr>
            <tr>
              <td> shape </td>
              <td> 按钮形状，可选值为<code class="code-sm code-xs">circle</code>或不选</td>
              <td> String </td>
              <td> - </td>
            </tr>
            <tr>
              <td> disabled </td>
              <td> 设置按钮为禁用状态</td>
              <td> Boolean </td>
              <td> false </td>
            </tr>
            <tr>
              <td> size </td>
              <td> 按钮尺寸，可选值为<code class="code-sm code-xs">large</code>、<code class="code-sm code-xs">small</code>或不选</td>
              <td> String </td>
              <td> - </td>
            </tr>
            <tr>
              <td> btn-type </td>
              <td> 按钮原生类型，可选值为<code class="code-sm code-xs">submit</code>、<code class="code-sm code-xs">reset</code>或不选</td>
              <td> String </td>
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
  name: 'buttonDoc',
}
</script>
