<template>
  <div id="icon-wrap" v-title="'Table 表格'">
    <commonnav>
      <div slot="content">
        <h3 class="caption-title">Table 表格</h3>
        <p class="mark-section">
          基础组件，为灵活使用, 仅对table外层做了封装，thead、tbody、tfoot、tr、th、td等内部标签均按原始标签使用
        </p>
        <h4 class="sub-title"> 如何使用 </h4>
        <p class="mark-section"> 使用 <code class="code-sm">&lt;s-table&gt;</code> 标签声明组件，示例代码如下: </p>
        <div style="margin: 2px 0 15px;">
            <p style="padding: 0 0 6px 4px;"> 基本使用 (建议严格按thead、tbody的层级结构填充表格，不然有些功能可能会失效): </p>
            <s-table style="margin-bottom: 15px;">
              <thead>
                <tr>
                  <th>组件</th>
                  <th>描述</th>
                  <th>生成时间</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Layout 布局</td>
                  <td>Grid栅格布局和Flex布局</td>
                  <td>2017-10-12 10:23:11</td>
                </tr>
                <tr>
                  <td>Icon 图标库</td>
                  <td>语义化的矢量图形库</td>
                  <td>2017-10-13 13:15:28</td>
                </tr>
              </tbody>
            </s-table>
        <div class="code-wrap">
          <pre>
            <code>&lt;s-table <span class="code-attr">style</span>=<span class="code-value">"margin-bottom: 15px;"</span>&gt;
     &lt;thead&gt;
         &lt;tr&gt;
            &lt;th&gt; 组件 &lt;/th&gt;
            &lt;th&gt; 描述 &lt;/th&gt;
            &lt;th&gt; 生成时间 &lt;/th&gt;
         &lt;/tr&gt;
     &lt;/thead&gt;
     &lt;tbody&gt;
        &lt;tr&gt;
           &lt;td&gt; Layout 布局 &lt;/td&gt;
           &lt;td&gt; Grid栅格布局和Flex布局 &lt;/td&gt;
           &lt;td&gt; 2017-10-12 10:23:11 &lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
           &lt;td&gt; Icon 图标库 &lt;/td&gt;
           &lt;td&gt; 语义化的矢量图形库 &lt;/td&gt;
           &lt;td&gt; 2017-10-13 13:15:28 &lt;/td&gt;
        &lt;/tr&gt;
     &lt;/tbody&gt;
  &lt;s-table&gt;</code>
          </pre>
        </div>
        <p style="padding: 0 0 6px 4px;"> 行间样式: </p>
        <s-table border style="margin-bottom: 15px;">
          <thead>
            <tr>
              <th>组件</th>
              <th>描述</th>
              <th>生成时间</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Layout 布局</td>
              <td>Grid栅格布局和Flex布局</td>
              <td>2017-10-12 10:23:11</td>
            </tr>
            <tr class="soul-tr-success">
              <td>Icon 图标库</td>
              <td>语义化的矢量图形库</td>
              <td>2017-10-13 13:15:28</td>
            </tr>
            <tr>
              <td>Button 按钮</td>
              <td>按钮基础组件</td>
              <td>2017-10-18 14:35:31</td>
            </tr>
            <tr class="soul-tr-danger">
              <td>Checkbox 多选框</td>
              <td>多选框基础组件</td>
              <td>2017-11-01 09:38:45</td>
            </tr>
            <tr>
              <td>Message 全局提示</td>
              <td>全局操作信息反馈组件</td>
              <td>2017-11-22 13:38:55</td>
            </tr>
            <tr class="soul-tr-warning">
              <td>DatePicker 日期选择框</td>
              <td>选择日期的组件</td>
              <td>2017-12-02 11:35:45</td>
            </tr>
          </tbody>
        </s-table>
        <div class="code-wrap">
          <pre>
            <code>&lt;s-table border <span class="code-attr">style</span>=<span class="code-value">"margin-bottom: 15px;"</span>&gt;
     &lt;thead&gt;
         &lt;tr&gt;
            &lt;th&gt; 组件 &lt;/th&gt;
            &lt;th&gt; 描述 &lt;/th&gt;
            &lt;th&gt; 生成时间 &lt;/th&gt;
         &lt;/tr&gt;
     &lt;/thead&gt;
     &lt;tbody&gt;
        &lt;tr&gt;
           &lt;td&gt; Layout 布局 &lt;/td&gt;
           &lt;td&gt; Grid栅格布局和Flex布局 &lt;/td&gt;
           &lt;td&gt; 2017-10-12 10:23:11 &lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr <span class="code-attr">class</span>=<span class="code-value">"soul-tr-success"</span>&gt;
           &lt;td&gt; Icon 图标库 &lt;/td&gt;
           &lt;td&gt; 语义化的矢量图形库 &lt;/td&gt;
           &lt;td&gt; 2017-10-13 13:15:28 &lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
           &lt;td&gt; Button 按钮 &lt;/td&gt;
           &lt;td&gt; 按钮基础组件 &lt;/td&gt;
           &lt;td&gt; 2017-10-18 14:35:31 &lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr <span class="code-attr">class</span>=<span class="code-value">"soul-tr-danger"</span>&gt;
           &lt;td&gt; Checkbox 多选框 &lt;/td&gt;
           &lt;td&gt; 语义化的矢量图形库 &lt;/td&gt;
           &lt;td&gt; 2017-10-13 13:15:28 &lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
           &lt;td&gt; Message 全局提示 &lt;/td&gt;
           &lt;td&gt; 全局操作信息反馈组件 &lt;/td&gt;
           &lt;td&gt; 2017-11-22 13:38:55 &lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr <span class="code-attr">class</span>=<span class="code-value">"soul-tr-warning"</span>&gt;
           &lt;td&gt; DatePicker 日期选择框 &lt;/td&gt;
           &lt;td&gt; 选择日期的组件 &lt;/td&gt;
           &lt;td&gt; 2017-12-02 11:35:45 &lt;/td&gt;
        &lt;/tr&gt;
     &lt;/tbody&gt;
  &lt;s-table&gt;</code>
          </pre>
        </div>
            <p style="padding: 0 0 6px 4px;"> 固定表头: </p>
            <s-table bordered height="180" style="margin-bottom: 20px;">
              <thead>
                <tr>
                  <th style="width: 175px;">组件名</th>
                  <th>简称</th>
                  <th>描述</th>
                  <th>生成时间</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="item in list">
                    <td>{{ item.name }}</td>
                    <td>{{ item.shorter }}</td>
                    <td>{{ item.desc }}</td>
                    <td>{{ item.createtime }}</td>
                    <td> <s-button type="info" size="small">查 看</s-button> </td>
                  </tr>
              </tbody>
            </s-table>
        <div class="code-wrap">
          <pre>
            <code>&lt;s-table bordered <span class="code-attr">height</span>=<span class="code-value">"180"</span> <span class="code-attr">style</span>=<span class="code-value">"margin-bottom: 15px;"</span>&gt;
     &lt;thead&gt;
         &lt;tr&gt;
            &lt;th&gt; 组件 &lt;/th&gt;
            &lt;th&gt; 简称 &lt;/th&gt;
            &lt;th&gt; 描述 &lt;/th&gt;
            &lt;th&gt; 生成时间 &lt;/th&gt;
            &lt;th&gt; 操作 &lt;/th&gt;
         &lt;/tr&gt;
     &lt;/thead&gt;
     &lt;tbody&gt;
        &lt;tr <span class="code-attr">v-for</span>=<span class="code-value">"item in list"</span>&gt;
           &lt;td&gt; <span>{{</span> item.name <span>}}</span> &lt;/td&gt;
           &lt;td&gt; <span>{{</span> item.shorter <span>}}</span> &lt;/td&gt;
           &lt;td&gt; <span>{{</span> item.desc <span>}}</span> &lt;/td&gt;
           &lt;td&gt; <span>{{</span> item.createtime <span>}}</span> &lt;/td&gt;
           &lt;td&gt; &lt;s-button <span class="code-attr">type</span>=<span class="code-value">"info"</span> <span class="code-attr">size</span>=<span class="code-value">"small"</span>&gt; 查 看 &lt;/s-button&gt; &lt;/td&gt;
        &lt;/tr&gt;
     &lt;/tbody&gt;
  &lt;s-table&gt;
  &lt;script&gt;
    <span class="code-attr">export default</span> {
        data () {
             <span class="code-attr">return</span> {
                  list: [
                      {
                          name: '布局',
                          shorter: 'Layout',
                          desc: 'Grid栅格布局和Flex布局',
                          createtime: '2017-10-12 10:23:11',
                      },
                      {
                          name: '图标库',
                          shorter: 'Icon',
                          desc: '语义化的矢量图形库',
                          createtime: '2017-10-13 13:15:28'
                      },
                      {
                          name: '按钮',
                          shorter: 'Button',
                          desc: '按钮基础组件',
                          createtime: '2017-10-18 14:35:31'
                      },
                      {
                          name: '多选框',
                          shorter: 'Checkbox',
                          desc: '多选基础组件',
                          createtime: '2017-11-01 09:38:45'
                      },
                      {
                          name: '单选框',
                          shorter: 'Radio',
                          desc: '单选基础组件',
                          createtime: '2017-11-04 11:19:20'
                      },
                      {
                          name: '开关',
                          shorter: 'Switch',
                          desc: '开关选择器',
                          createtime: '2017-11-12 15:22:42'
                      },
                      {
                          name: '选择器',
                          shorter: 'Select',
                          desc: '下拉选择器组件',
                          createtime: '2017-11-18 16:28:12'
                      },
                      {
                          name: '全局提示',
                          shorter: 'Message',
                          desc: '全局操作信息反馈组件',
                          createtime: '2017-11-22 13:38:55'
                      },
                      {
                          name: '日期选择框',
                          shorter: 'Datepicker',
                          desc: '选择日期的组件',
                          createtime: '2017-12-02 11:35:45'
                      }
                  ]
             }
          }
      }
  &lt;/script&gt;</code>
          </pre>
        </div>

        </div>

        <h4 class="sub-title"> API </h4>
        <h4 class="sub-title" style="font-size: 16px;line-height: 34px;padding-left: 15px;"> Table属性 </h4>
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
              <td> bordered </td>
              <td> 是否显示纵向边框 </td>
              <td> Boolean </td>
              <td> false </td>
            </tr>
            <tr>
              <td> border </td>
              <td> 是否显示表格边框 </td>
              <td> Boolean </td>
              <td> false </td>
            </tr>
            <tr>
              <td> hover </td>
              <td> 鼠标悬停时是否高亮 </td>
              <td> Boolean </td>
              <td> true </td>
            </tr>
            <tr>
              <td> stripe </td>
              <td> 是否显示间隔斑马纹 </td>
              <td> Boolean </td>
              <td> false </td>
            </tr>
            <tr>
              <td> size </td>
              <td> 表格尺寸，可选值为<code class="code-sm code-xs">large</code>或不选</td>
              <td> String </td>
              <td> - </td>
            </tr>
            <tr>
              <td> height </td>
              <td>表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头</td>
              <td> Number | String </td>
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
  name: 'tableDoc',
  data() {
      return {
          list: [
              {
                  name: '布局',
                  shorter: 'Layout',
                  desc: 'Grid栅格布局和Flex布局',
                  createtime: '2017-10-12 10:23:11',
              },
              {
                  name: '图标库',
                  shorter: 'Icon',
                  desc: '语义化的矢量图形库',
                  createtime: '2017-10-13 13:15:28'
              },
              {
                  name: '按钮',
                  shorter: 'Button',
                  desc: '按钮基础组件',
                  createtime: '2017-10-18 14:35:31'
              },
              {
                  name: '多选框',
                  shorter: 'Checkbox',
                  desc: '多选基础组件',
                  createtime: '2017-11-01 09:38:45'
              },
              {
                  name: '单选框',
                  shorter: 'Radio',
                  desc: '单选基础组件',
                  createtime: '2017-11-04 11:19:20'
              },
              {
                  name: '开关',
                  shorter: 'Switch',
                  desc: '开关选择器',
                  createtime: '2017-11-12 15:22:42'
              },
              {
                  name: '选择器',
                  shorter: 'Select',
                  desc: '下拉选择器组件',
                  createtime: '2017-11-18 16:28:12'
              },
              {
                  name: '全局提示',
                  shorter: 'Message',
                  desc: '全局操作信息反馈组件',
                  createtime: '2017-11-22 13:38:55'
              },
              {
                  name: '日期选择框',
                  shorter: 'Datepicker',
                  desc: '选择日期的组件',
                  createtime: '2017-12-02 11:35:45'
              }
          ]
      }
  }
}
</script>
