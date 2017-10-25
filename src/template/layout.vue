<template>
  <div id="icon-wrap" v-title="'布局'">
    <commonnav>
      <div slot="content">
        <h3 class="caption-title">布局</h3>
        <p class="mark-section"> Soul UI 提供了Grid栅格布局和Flex布局。 </p>
        <h4 class="sub-title"> Grid栅格 </h4>
        <p class="mark-section" style="padding-top: 0;margin-top: -5px;">
          Soul UI 放弃了原有的 12 栅格系统，采用了 24 栅格系统，将区域进行 24 等分，这样可以轻松应对大部分布局问题，使页面排版更美观、舒适。
          <p>Soul UI 定义了两个概念，行<code class="code-sm">s-row</code>和列<code class="code-sm">s-col</code>，具体使用方法如下：</p>
          <ul class="desc-list">
            <li>使用<code class="code-sm">s-row</code>在水平方向创建一行</li>
            <li>将你的内容放置在<code class="code-sm">s-col</code>中，然后插入<code class="code-sm">s-row</code>中</li>
            <li>通过设置<code class="code-sm">s-col</code>的<code class="code-sm">span</code>参数，指定跨越的范围，其范围是1到24</li>
            <li>每个<code class="code-sm">s-row</code>中的<code class="code-sm">s-col</code>总和应该为24，如果超过，多余的<code class="code-sm">s-col</code>会作为一个整体另起一行排列</li>
          </ul>
          <h4 class="sub-title"> 代码示例 </h4>
          <h4 class="sub-title" style="font-size: 16px;line-height: 34px;padding-left: 15px;"> 基础栅格 </h4>
          <div class="demo-wrap">
            <s-row class="grid-demo grid-space">
              <s-col span="12"> col-12 </s-col>
              <s-col span="12"> col-12 </s-col>
            </s-row>
            <s-row class="grid-demo grid-space">
              <s-col span="8"> col-8 </s-col>
              <s-col span="8"> col-8 </s-col>
              <s-col span="8"> col-8 </s-col>
            </s-row>
          </div>

          <div class="code-wrap">
          <pre>
            <code>&lt;s-row&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"12"</span>&gt; col-12 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"12"</span>&gt; col-12 &lt;/s-col&gt;
&lt;/s-row&gt;
&lt;s-row&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"8"</span>&gt; col-8 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"8"</span>&gt; col-8 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"8"</span>&gt; col-8 &lt;/s-col&gt;
&lt;/s-row&gt;</code>
          </pre>
          </div>

          <h4 class="sub-title" style="font-size: 16px;line-height: 30px;padding-left: 15px;"> 栅格布局属性 </h4>
          <p class="mark-section" style="padding-left: 15px;">区块间隔: 栅格区块时常需要间隔，你可以使用<code class="code-sm">s-row</code>的<code class="code-sm">gutter</code>属性，<code class="code-sm">gutter</code>的值为区块的间距，单位 px</p>
          <p class="mark-section" style="padding: 5px 0 5px 15px;">左右偏移: 使用<code class="code-sm">offset</code>可以将列向右侧偏移，如：<code class="code-sm">offset=4</code>将区块向右侧偏移了4个列的宽度</p>
          <p class="mark-section" style="padding-left: 15px;">响应式布局: 参照 Bootstrap 的<a href="http://getbootstrap.com/css/#grid-media-queries" target="_blank">响应式设计</a>，预设四个响应尺寸：xs sm md lg</p>
          <div class="demo-wrap">
            <s-row class="grid-demo" gutter="24">
              <s-col span="6" style="background: #fff;"> <div style="background: #10adbb;">col-6</div> </s-col>
              <s-col span="6" style="background: #fff;"> <div style="background: #10adbb;">col-6</div> </s-col>
              <s-col span="6" style="background: #fff;"> <div style="background: #10adbb;">col-6</div> </s-col>
              <s-col span="6" style="background: #fff;"> <div style="background: #10adbb;">col-6</div> </s-col>
            </s-row>
            <s-row class="grid-demo">
              <s-col span="6"> col-6 </s-col>
              <s-col span="8" offset="4"> col-8 | offset-4 </s-col>
              <s-col span="4" offset="2"> col-4 | offset-2 </s-col>
            </s-row>
            <s-row class="grid-demo">
              <s-col xs="6" sm="4" md="8" lg="12"> col </s-col>
              <s-col :xs="{span: 5, offset: 1}" :sm="{span: 14, offset: 2}" :md="{span: 7, offset: 1}" :lg="{span: 6, offset: 2}"> col </s-col>
              <s-col xs="12" sm="4" md="8" lg="4" style="background: #32c5d2;"> col </s-col>
            </s-row>
          </div>
          <div class="code-wrap">
          <pre>
            <code>&lt;s-row <span class="code-attr">gutter</span>=<span class="code-value">"24"</span>&gt;  //区间间隔
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"6"</span> &gt; &lt;div&gt; col-6 &lt;/div&gt; &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"6"</span> &gt; &lt;div&gt; col-6 &lt;/div&gt; &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"6"</span> &gt; &lt;div&gt; col-6 &lt;/div&gt; &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"6"</span> &gt; &lt;div&gt; col-6 &lt;/div&gt; &lt;/s-col&gt;
&lt;/s-row&gt;
&lt;s-row&gt;  //左右偏移
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"6"</span> &gt; col-6 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"8"</span> <span class="code-attr">offset</span>=<span class="code-value">"4"</span>&gt; col-6 | offset-4 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"4"</span> <span class="code-attr">offset</span>=<span class="code-value">"2"</span>&gt; col-6 | offset-2 &lt;/s-col&gt;
&lt;/s-row&gt;
&lt;s-row&gt;  //响应式布局
    &lt;s-col <span class="code-attr">xs</span>=<span class="code-value">"6"</span> <span class="code-attr">sm</span>=<span class="code-value">"4"</span> <span class="code-attr">md</span>=<span class="code-value">"8"</span> <span class="code-attr">lg</span>=<span class="code-value">"12"</span>&gt; col &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">:xs</span>=<span class="code-value">"{span: 5, offset: 1}"</span> <span class="code-attr">:sm</span>=<span class="code-value">"{span: 14, offset: 2}"</span>
           <span class="code-attr">:md</span>=<span class="code-value">"{span: 7, offset: 1}"</span> <span class="code-attr">:lg</span>=<span class="code-value">"{span: 6, offset: 2}"</span>&gt; col &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">xs</span>=<span class="code-value">"12"</span> <span class="code-attr">sm</span>=<span class="code-value">"4"</span> <span class="code-attr">md</span>=<span class="code-value">"8"</span> <span class="code-attr">lg</span>=<span class="code-value">"4"</span>&gt; col &lt;/s-col&gt;
&lt;/s-row&gt;</code>
          </pre>
          </div>
          <h4 class="sub-title"> Flex布局 </h4>
          <p class="mark-section"> Soul UI的栅格化系统支持<a href="http://www.runoob.com/w3cnote/flex-grammar.html">Flex布局</a>("弹性布局"，用来为盒状模型提供最大的灵活性)，你可以设置<code class="code-sm">s-row</code>的<code class="code-sm">type</code>属性为 "flex"。</p>
        <s-row gutter="24" class="desc-title">
          <s-col span="12">
            <p>自定义弹性布局，设置<code class="code-sm">flex</code>来等分剩余空间</p>
            <s-row type="flex" class="grid-demo grid-space">
              <s-col style="width: 200px">width: 200</s-col>
              <s-col flex="1">flex:1</s-col>
              <s-col flex="2">flex:2</s-col>
            </s-row>

            <div class="code-wrap">
            <pre>
              <code>&lt;s-row <span class="code-attr">type</span>=<span class="code-value">"flex"</span>&gt;  //自定义弹性布局
    &lt;s-col <span class="code-attr">style</span>=<span class="code-value">"width: 200px;"</span>&gt; width: 200 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">flex</span>=<span class="code-value">"1"</span>&gt; flex: 1 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">flex</span>=<span class="code-value">"2"</span>&gt; flex: 2 &lt;/s-col&gt;
&lt;/s-row&gt;
              </code>
            </pre>
            </div>

          </s-col>
          <s-col span="12">
            <p>子元素向左排列</p>
            <s-row type="flex" justify="start" class="grid-demo grid-space">
              <s-col span="5"> col-5 </s-col>
              <s-col span="5"> col-5 </s-col>
              <s-col span="5"> col-5 </s-col>
              <s-col span="5"> col-5 </s-col>
            </s-row>

            <div class="code-wrap">
            <pre>
              <code>&lt;s-row <span class="code-attr">type</span>=<span class="code-value">"flex"</span> <span class="code-attr">justify</span>=<span class="code-value">"start"</span>&gt; //子元素向左排列
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
&lt;/s-row&gt;</code>
            </pre>
            </div>
          </s-col>
          <s-col span="12">
            <p>子元素向右排列</p>
            <s-row type="flex" justify="end" class="grid-demo grid-space">
              <s-col span="5"> col-5 </s-col>
              <s-col span="5"> col-5 </s-col>
              <s-col span="5"> col-5 </s-col>
              <s-col span="5"> col-5 </s-col>
            </s-row>

            <div class="code-wrap">
            <pre>
              <code>&lt;s-row <span class="code-attr">type</span>=<span class="code-value">"flex"</span> <span class="code-attr">justify</span>=<span class="code-value">"end"</span>&gt; //子元素向右排列
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
&lt;/s-row&gt;</code>
            </pre>
            </div>

          </s-col>
          <s-col span="12">
            <p>子元素居中排列</p>
            <s-row type="flex" justify="center" class="grid-demo grid-space">
              <s-col span="5"> col-5 </s-col>
              <s-col span="5"> col-5 </s-col>
              <s-col span="5"> col-5 </s-col>
              <s-col span="5"> col-5 </s-col>
            </s-row>

            <div class="code-wrap">
            <pre>
              <code>&lt;s-row <span class="code-attr">type</span>=<span class="code-value">"flex"</span> <span class="code-attr">justify</span>=<span class="code-value">"center"</span>&gt; //子元素居中排列
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
&lt;/s-row&gt;</code>
            </pre>
            </div>

          </s-col>
          <s-col span="12">
            <p>子元素等宽排列</p>
            <s-row type="flex" justify="space-between" class="grid-demo grid-space">
              <s-col span="5"> col-5 </s-col>
              <s-col span="5"> col-5 </s-col>
              <s-col span="5"> col-5 </s-col>
              <s-col span="5"> col-5 </s-col>
            </s-row>

            <div class="code-wrap">
            <pre>
              <code>&lt;s-row <span class="code-attr">type</span>=<span class="code-value">"flex"</span> <span class="code-attr">justify</span>=<span class="code-value">"space-between"</span>&gt; //子元素等宽排列
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
&lt;/s-row&gt;</code>
            </pre>
            </div>

          </s-col>
          <s-col span="12">
            <p>子元素分散排列</p>
            <s-row type="flex" justify="space-around" class="grid-demo grid-space">
              <s-col span="5"> col-5 </s-col>
              <s-col span="5"> col-5 </s-col>
              <s-col span="5"> col-5 </s-col>
              <s-col span="5"> col-5 </s-col>
            </s-row>

            <div class="code-wrap">
            <pre>
              <code>&lt;s-row <span class="code-attr">type</span>=<span class="code-value">"flex"</span> <span class="code-attr">justify</span>=<span class="code-value">"space-around"</span>&gt; //子元素分散排列
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt; col-5 &lt;/s-col&gt;
&lt;/s-row&gt;</code>
            </pre>
            </div>

          </s-col>
          <s-col span="12">
            <p>顶部对齐</p>
            <s-row type="flex" justify="center" align="top" class="grid-demo grid-space" style="height: 100px;">
              <s-col span="5"> <div style="height: 90px;"> col-5 </div></s-col>
              <s-col span="5"> <div style="height: 40px;"> col-5 </div> </s-col>
              <s-col span="5"> <div style="height: 80px;"> col-5 </div> </s-col>
              <s-col span="5"> <div style="height: 50px;"> col-5 </div> </s-col>
            </s-row>

            <div class="code-wrap">
            <pre>
              <code>&lt;s-row <span class="code-attr">type</span>=<span class="code-value">"flex"</span> <span class="code-attr">justify</span>=<span class="code-value">"center"</span> <span class="code-attr">align</span>=<span class="code-value">"top"</span>
       <span class="code-attr">style</span>=<span class="code-value">"height:100px"</span>&gt; //顶部对齐
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt;
          &lt;div <span class="code-attr">style</span>=<span class="code-value">"height: 90px;"</span>&gt; col-5 &lt;/div&gt;
    &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt;
          &lt;div <span class="code-attr">style</span>=<span class="code-value">"height: 40px;"</span>&gt; col-5 &lt;/div&gt;
    &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt;
          &lt;div <span class="code-attr">style</span>=<span class="code-value">"height: 80px;"</span>&gt; col-5 &lt;/div&gt;
    &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt;
          &lt;div <span class="code-attr">style</span>=<span class="code-value">"height: 50px;"</span>&gt; col-5 &lt;/div&gt;
    &lt;/s-col&gt;
&lt;/s-row&gt;</code>
            </pre>
            </div>

          </s-col>
          <s-col span="12">
            <p>居中对齐</p>
            <s-row type="flex" justify="space-around" align="middle" class="grid-demo grid-space" style="height: 100px;">
              <s-col span="5"> <div style="height: 90px;"> col-5 </div></s-col>
              <s-col span="5"> <div style="height: 40px;"> col-5 </div> </s-col>
              <s-col span="5"> <div style="height: 80px;"> col-5 </div> </s-col>
              <s-col span="5"> <div style="height: 50px;"> col-5 </div> </s-col>
            </s-row>

            <div class="code-wrap">
            <pre>
              <code>&lt;s-row <span class="code-attr">type</span>=<span class="code-value">"flex"</span> <span class="code-attr">justify</span>=<span class="code-value">"space-around"</span> <span class="code-attr">align</span>=<span class="code-value">"middle"</span>
       <span class="code-attr">style</span>=<span class="code-value">"height:100px"</span>&gt; //居中对齐
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt;
          &lt;div <span class="code-attr">style</span>=<span class="code-value">"height: 90px;"</span>&gt; col-5 &lt;/div&gt;
    &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt;
          &lt;div <span class="code-attr">style</span>=<span class="code-value">"height: 40px;"</span>&gt; col-5 &lt;/div&gt;
    &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt;
          &lt;div <span class="code-attr">style</span>=<span class="code-value">"height: 80px;"</span>&gt; col-5 &lt;/div&gt;
    &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt;
          &lt;div <span class="code-attr">style</span>=<span class="code-value">"height: 50px;"</span>&gt; col-5 &lt;/div&gt;
    &lt;/s-col&gt;
&lt;/s-row&gt;</code>
            </pre>
            </div>

          </s-col>
          <s-col span="12">
            <p>底部对齐</p>
            <s-row type="flex" justify="center" align="bottom" class="grid-demo grid-space" style="height: 100px;">
              <s-col span="5"> <div style="height: 90px;"> col-5 </div></s-col>
              <s-col span="5"> <div style="height: 40px;"> col-5 </div> </s-col>
              <s-col span="5"> <div style="height: 80px;"> col-5 </div> </s-col>
              <s-col span="5"> <div style="height: 50px;"> col-5 </div> </s-col>
            </s-row>
          </s-col>
          <s-col span="12">

            <div class="code-wrap">
            <pre>
              <code>&lt;s-row <span class="code-attr">type</span>=<span class="code-value">"flex"</span> <span class="code-attr">justify</span>=<span class="code-value">"center"</span> <span class="code-attr">align</span>=<span class="code-value">"bottom"</span>
       <span class="code-attr">style</span>=<span class="code-value">"height:100px"</span>&gt; //底部对齐
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt;
          &lt;div <span class="code-attr">style</span>=<span class="code-value">"height: 90px;"</span>&gt; col-5 &lt;/div&gt;
    &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt;
          &lt;div <span class="code-attr">style</span>=<span class="code-value">"height: 40px;"</span>&gt; col-5 &lt;/div&gt;
    &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt;
          &lt;div <span class="code-attr">style</span>=<span class="code-value">"height: 80px;"</span>&gt; col-5 &lt;/div&gt;
    &lt;/s-col&gt;
    &lt;s-col <span class="code-attr">span</span>=<span class="code-value">"5"</span>&gt;
          &lt;div <span class="code-attr">style</span>=<span class="code-value">"height: 50px;"</span>&gt; col-5 &lt;/div&gt;
    &lt;/s-col&gt;
&lt;/s-row&gt;</code>
            </pre>
            </div>

          </s-col>
        </s-row>
        <h4 class="sub-title"> API </h4>
        <h4 class="sub-title" style="font-size: 16px;line-height: 34px;padding-left: 15px;"> Row属性 </h4>
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
              <td>gutter</td>
              <td>栅格间距，单位 px，左右平分</td>
              <td>number</td>
              <td>0</td>
            </tr>
            <tr>
              <td>type</td>
              <td>布局模式，可选值为flex或不选</td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>justify</td>
              <td>flex 布局下的水平排列方式：<code class="code-sm code-xs">start </code> <code class="code-sm code-xs"> end </code>
                <code class="code-sm code-xs"> center </code> <code class="code-sm code-xs"> space-around </code>
                <code class="code-sm code-xs"> space-between </code>
              </td>
              <td>string</td>
              <td>-</td>
            </tr>
            <tr>
              <td>align</td>
              <td>flex 布局下的垂直对齐方式：<code class="code-sm code-xs"> top </code>
                <code class="code-sm code-xs"> middle </code> <code class="code-sm code-xs"> bottom </code>
              </td>
              <td>string</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>

        <h4 class="sub-title" style="font-size: 16px;line-height: 34px;padding-left: 15px;"> Col属性 </h4>
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
              <td>span</td>
              <td>栅格的占位格数，可选值为0~24的整数，为 0 时，相当于 <code class="code-sm code-xs"> display:none </code></td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>offset</td>
              <td>栅格左侧的间隔格数，间隔内不可以有栅格</td>
              <td>number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>xs</td>
              <td>
                <code class="code-sm code-xs"><768px </code> 响应式栅格，可为栅格数或一个包含其他属性的对象
              </td>
              <td>number | object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>sm</td>
              <td>
                <code class="code-sm code-xs">>=768px </code> 响应式栅格，可为栅格数或一个包含其他属性的对象
              </td>
              <td>number | object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>md</td>
              <td>
                <code class="code-sm code-xs">>=992px </code> 响应式栅格，可为栅格数或一个包含其他属性的对象
              </td>
              <td>number | object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>lg</td>
              <td>
                <code class="code-sm code-xs">>=1200px </code> 响应式栅格，可为栅格数或一个包含其他属性的对象
              </td>
              <td>number | object</td>
              <td>-</td>
            </tr>
            <tr>
              <td>flex</td>
              <td>
                flex弹性布局，剩余空间等分后所占等份
              </td>
              <td>number</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </commonnav>
  </div>
</template>

<script>
export default {
  name: 'layoutDoc'
}
</script>
