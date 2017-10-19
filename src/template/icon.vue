<template>
  <div id="icon-wrap" v-title="'图标库'">
    <commonnav>
      <div slot="content">
        <h3 class="caption-title">图标库</h3>
        <p class="mark-section">
          soul icon是一套语义化的矢量图形库，提供了常用的图标集合。
        </p>
        <h4 class="sub-title"> 如何使用 </h4>
        <p class="mark-section"> 使用 <s-icon /> 标签声明组件，指定图标对应的 type 属性,改变样式直接用style编写样式，示例代码如下: </p>
        <pre class="code-wrap"><code style="line-height: 30px;"><s-icon type="smile" style="font-size: 20px;top:3px;"/> &lt;s-icon <span class="code-attr">type</span>=<span class="code-value">"smile"</span> /&gt;
<s-icon type="warn" style="font-size: 20px;top:3px;color: #ff6d5e;"/> &lt;s-icon <span class="code-attr">type</span>=<span class="code-value">"warn"</span> <span class="code-attr">style</span>=<span class="code-value">"color: #ff6d5e;"</span> /&gt; </code>
        </pre>

        <p class="mark-section"> soul icon在原有基础上新增了两个动态效果，快速旋转和缓慢旋转效果，示例: </p>
        <pre class="code-wrap">
          <code style="line-height: 30px;"><s-icon type="loader" animation="fast" style="font-size: 20px;top:3px;"/> &lt;s-icon <span class="code-attr">type</span>=<span class="code-value">"loader"</span> <span class="code-attr">animation</span>=<span class="code-value">"fast"</span> /&gt;
<s-icon type="loading" animation="slow" style="font-size: 20px;top: 3px;"/> &lt;s-icon <span class="code-attr">type</span>=<span class="code-value">"loading"</span> <span class="code-attr">animation</span>=<span class="code-value">"slow"</span> /&gt;</code>
        </pre>

        <h4 class="sub-title"> 图标列表 </h4>
        <h4 class="sub-title" style="font-size: 16px;line-height: 40px;"> 常用图标 </h4>
        <ul class="icon-lists clearfix">
          <li>
            <s-icon type="add" />
            <p>add</p>
          </li>
          <li>
            <s-icon type="move" />
            <p>move</p>
          </li>
          <li>
            <s-icon type="check" />
            <p>check</p>
          </li>
          <li>
            <s-icon type="close" />
            <p>close</p>
          </li>
          <li>
            <s-icon type="delete" />
            <p>delete</p>
          </li>
          <li>
            <s-icon type="edit" />
            <p>edit</p>
          </li>
          <li>
            <s-icon type="search" />
            <p>search</p>
          </li>
          <li>
            <s-icon type="filter" />
            <p>filter</p>
          </li>
          <li>
            <s-icon type="filter-fill" />
            <p>filter-fill</p>
          </li>
          <li>
            <s-icon type="location" />
            <p>location</p>
          </li>
          <li>
            <s-icon type="wifi" />
            <p>wifi</p>
          </li>
          <li>
            <s-icon type="home" />
            <p>home</p>
          </li>
          <li>
            <s-icon type="check-circle" />
            <p>check-circle</p>
          </li>
          <li>
            <s-icon type="plus-circle" />
            <p>plus-circle</p>
          </li>
          <li>
            <s-icon type="plus-square" />
            <p>plus-square</p>
          </li>
          <li>
            <s-icon type="minus-circle" />
            <p>minus-circle</p>
          </li>
          <li>
            <s-icon type="close-circle" />
            <p>close-circle</p>
          </li>
          <li>
            <s-icon type="close-fill" />
            <p>close-fill</p>
          </li>
          <li>
            <s-icon type="question" />
            <p>question</p>
          </li>
          <li>
            <s-icon type="question-fill" />
            <p>question-fill</p>
          </li>
          <li>
            <s-icon type="info" />
            <p>info</p>
          </li>
          <li>
            <s-icon type="info-fill" />
            <p>info-fill</p>
          </li>
          <li>
            <s-icon type="warn" />
            <p>warn</p>
          </li>
          <li>
            <s-icon type="warn-circle" />
            <p>warn-circle</p>
          </li>
          <li>
            <s-icon type="warn-fill" />
            <p>warn-fill</p>
          </li>
          <li>
            <s-icon type="loader" />
            <p>loader</p>
          </li>
          <li>
            <s-icon type="loading" />
            <p>loading</p>
          </li>
          <li>
            <s-icon type="loading-circle" />
            <p>loading-circle</p>
          </li>
          <li>
            <s-icon type="loading-semi" />
            <p>loading-semi</p>
          </li>
          <li>
            <s-icon type="sync" />
            <p>sync</p>
          </li>
          <li>
            <s-icon type="link" />
            <p>link</p>
          </li>
          <li>
            <s-icon type="disconnect" />
            <p>disconnect</p>
          </li>
          <li>
            <s-icon type="share" />
            <p>share</p>
          </li>
          <li>
            <s-icon type="share-alt" />
            <p>share-alt</p>
          </li>
          <li>
            <s-icon type="shutdown" />
            <p>shutdown</p>
          </li>
          <li>
            <s-icon type="login" />
            <p>login</p>
          </li>
          <li>
            <s-icon type="logout" />
            <p>logout</p>
          </li>
          <li>
            <s-icon type="back" />
            <p>back</p>
          </li>
          <li>
            <s-icon type="time" />
            <p>time</p>
          </li>
          <li>
            <s-icon type="history" />
            <p>history</p>
          </li>
          <li>
            <s-icon type="pause-circle" />
            <p>pause-circle</p>
          </li>
          <li>
            <s-icon type="pause-fill" />
            <p>pause-fill</p>
          </li>
          <li>
            <s-icon type="play-fill" />
            <p>play-fill</p>
          </li>
          <li>
            <s-icon type="smile" />
            <p>smile</p>
          </li>
          <li>
            <s-icon type="cry" />
            <p>cry</p>
          </li>
          <li>
            <s-icon type="user" />
            <p>user</p>
          </li>
          <li>
            <s-icon type="locker" />
            <p>locker</p>
          </li>
          <li>
            <s-icon type="add-user" />
            <p>user-add</p>
          </li>
          <li>
            <s-icon type="team" />
            <p>team</p>
          </li>
          <li>
            <s-icon type="user-fill" />
            <p>user-fill</p>
          </li>
          <li>
            <s-icon type="password" />
            <p>password</p>
          </li>
          <li>
            <s-icon type="computer" />
            <p>computer</p>
          </li>
          <li>
            <s-icon type="cloud-up" />
            <p>cloud-up</p>
          </li>
          <li>
            <s-icon type="cloud-down" />
            <p>cloud-down</p>
          </li>
          <li>
            <s-icon type="cloud" />
            <p>cloud</p>
          </li>
          <li>
            <s-icon type="tool" />
            <p>tool</p>
          </li>
          <li>
            <s-icon type="setting" />
            <p>setting</p>
          </li>
          <li>
            <s-icon type="menu-open" />
            <p>menu-open</p>
          </li>
          <li>
            <s-icon type="menu-fold" />
            <p>menu-fold</p>
          </li>
          <li>
            <s-icon type="list" />
            <p>list</p>
          </li>
          <li>
            <s-icon type="bars" />
            <p>bars</p>
          </li>
          <li>
            <s-icon type="videocamera" />
            <p>videocamera</p>
          </li>
          <li>
            <s-icon type="camera" />
            <p>camera</p>
          </li>
          <li>
            <s-icon type="mail" />
            <p>mail</p>
          </li>
          <li>
            <s-icon type="battery" />
            <p>battery</p>
          </li>
          <li>
            <s-icon type="plane" />
            <p>plane</p>
          </li>
          <li>
            <s-icon type="pushpin" />
            <p>pushpin</p>
          </li>
          <li>
            <s-icon type="pushpin-fill" />
            <p>pushpin-fill</p>
          </li>
          <li>
            <s-icon type="tags" />
            <p>tags</p>
          </li>
          <li>
            <s-icon type="tag" />
            <p>tag</p>
          </li>
          <li>
            <s-icon type="paper-clip" />
            <p>paper-clip</p>
          </li>
          <li>
            <s-icon type="flag" />
            <p>flag</p>
          </li>
          <li>
            <s-icon type="fire" />
            <p>fire</p>
          </li>
          <li>
            <s-icon type="like" />
            <p>like</p>
          </li>
          <li>
            <s-icon type="heart" />
            <p>heart</p>
          </li>
          <li>
            <s-icon type="calculator" />
            <p>calculator</p>
          </li>
          <li>
            <s-icon type="calendar" />
            <p>calendar</p>
          </li>
          <li>
            <s-icon type="note" />
            <p>note</p>
          </li>
          <li>
            <s-icon type="order" />
            <p>order</p>
          </li>
          <li>
            <s-icon type="mobile" />
            <p>mobile</p>
          </li>
          <li>
            <s-icon type="phone" />
            <p>phone</p>
          </li>
          <li>
            <s-icon type="telephony-list" />
            <p>telephony-list</p>
          </li>
          <li>
            <s-icon type="shake" />
            <p>shake</p>
          </li>
          <li>
            <s-icon type="printer" />
            <p>printer</p>
          </li>
          <li>
            <s-icon type="star" />
            <p>star</p>
          </li>
          <li>
            <s-icon type="praise" />
            <p>praise</p>
          </li>
          <li>
            <s-icon type="praise-fill" />
            <p>praise-fill</p>
          </li>
          <li>
            <s-icon type="speech" />
            <p>speech</p>
          </li>
          <li>
            <s-icon type="micoff" />
            <p>micoff</p>
          </li>
          <li>
            <s-icon type="clock" />
            <p>clock</p>
          </li>
          <li>
            <s-icon type="bell" />
            <p>bell</p>
          </li>
          <li>
            <s-icon type="sound" />
            <p>sound</p>
          </li>
          <li>
            <s-icon type="music" />
            <p>music</p>
          </li>
          <li>
            <s-icon type="eye" />
            <p>eye</p>
          </li>
          <li>
            <s-icon type="tasks" />
            <p>tasks</p>
          </li>
          <li>
            <s-icon type="database" />
            <p>database</p>
          </li>
          <li>
            <s-icon type="hdd" />
            <p>hdd</p>
          </li>
          <li>
            <s-icon type="ip" />
            <p>ip</p>
          </li>
          <li>
            <s-icon type="api" />
            <p>api</p>
          </li>
          <li>
            <s-icon type="usb" />
            <p>usb</p>
          </li>
          <li>
            <s-icon type="fork" />
            <p>fork</p>
          </li>
          <li>
            <s-icon type="download" />
            <p>download</p>
          </li>
          <li>
            <s-icon type="save" />
            <p>save</p>
          </li>
          <li>
            <s-icon type="scan" />
            <p>scan</p>
          </li>
          <li>
            <s-icon type="full-scan" />
            <p>full-scan</p>
          </li>
          <li>
            <s-icon type="ban" />
            <p>ban</p>
          </li>
          <li>
            <s-icon type="dashboard" />
            <p>dashboard</p>
          </li>
          <li>
            <s-icon type="chart" />
            <p>chart</p>
          </li>
          <li>
            <s-icon type="bar-chart" />
            <p>bar-chart</p>
          </li>
          <li>
            <s-icon type="ths" />
            <p>ths</p>
          </li>
          <li>
            <s-icon type="appstore" />
            <p>appstore</p>
          </li>
          <li>
            <s-icon type="picture" />
            <p>picture</p>
          </li>
          <li>
            <s-icon type="feedback" />
            <p>feedback</p>
          </li>
          <li>
            <s-icon type="msg" />
            <p>msg</p>
          </li>
          <li>
            <s-icon type="qrcode" />
            <p>qrcode</p>
          </li>
          <li>
            <s-icon type="pulse" />
            <p>pulse</p>
          </li>
          <li>
            <s-icon type="brisk" />
            <p>brisk</p>
          </li>
          <li>
            <s-icon type="file" />
            <p>file</p>
          </li>
          <li>
            <s-icon type="earth" />
            <p>earth</p>
          </li>
          <li>
            <s-icon type="global" />
            <p>global</p>
          </li>
          <li>
            <s-icon type="shopping-cart" />
            <p>shopping-cart</p>
          </li>
          <li>
            <s-icon type="gift" />
            <p>gift</p>
          </li>
          <li>
            <s-icon type="book" />
            <p>book</p>
          </li>
          <li>
            <s-icon type="idcard" />
            <p>idcard</p>
          </li>
          <li>
            <s-icon type="pay" />
            <p>pay</p>
          </li>
        </ul>
        <h4 class="sub-title" style="font-size: 16px;"> 方向箭头图标 </h4>
        <ul class="icon-lists clearfix">
          <li>
            <s-icon type="arrow-up" />
            <p>arrow-up</p>
          </li>
          <li>
            <s-icon type="arrow-down" />
            <p>arrow-down</p>
          </li>
          <li>
            <s-icon type="arrow-left" />
            <p>arrow-left</p>
          </li>
          <li>
            <s-icon type="arrow-right" />
            <p>arrow-right</p>
          </li>
          <li>
            <s-icon type="top-arrow-fill" />
            <p>top-arrow-fill</p>
          </li>
          <li>
            <s-icon type="back-top" />
            <p>back-top</p>
          </li>
          <li>
            <s-icon type="up" />
            <p>up</p>
          </li>
          <li>
            <s-icon type="down" />
            <p>down</p>
          </li>
          <li>
            <s-icon type="left" />
            <p>left</p>
          </li>
          <li>
            <s-icon type="right" />
            <p>right</p>
          </li>
          <li>
            <s-icon type="upb" />
            <p>upb</p>
          </li>
          <li>
            <s-icon type="downb" />
            <p>downb</p>
          </li>
          <li>
            <s-icon type="leftb" />
            <p>leftb</p>
          </li>
          <li>
            <s-icon type="rightb" />
            <p>rightb</p>
          </li>
          <li>
            <s-icon type="up-square" />
            <p>up-square</p>
          </li>
          <li>
            <s-icon type="down-square" />
            <p>down-square</p>
          </li>
          <li>
            <s-icon type="left-square" />
            <p>left-square</p>
          </li>
          <li>
            <s-icon type="right-square" />
            <p>right-square</p>
          </li>
          <li>
            <s-icon type="up-circle" />
            <p>up-circle</p>
          </li>
          <li>
            <s-icon type="up-circle" />
            <p>up-circle</p>
          </li>
          <li>
            <s-icon type="down-circle" />
            <p>down-circle</p>
          </li>
          <li>
            <s-icon type="left-circle" />
            <p>left-circle</p>
          </li>
          <li>
            <s-icon type="right-circle" />
            <p>right-circle</p>
          </li>
          <li>
            <s-icon type="verticle-left" />
            <p>verticle-left</p>
          </li>
          <li>
            <s-icon type="verticle-right" />
            <p>verticle-right</p>
          </li>
          <li>
            <s-icon type="angle-left" />
            <p>angle-left</p>
          </li>
          <li>
            <s-icon type="angle-right" />
            <p>angle-right</p>
          </li>
          <li>
            <s-icon type="swap" />
            <p>swap</p>
          </li>
          <li>
            <s-icon type="boost" />
            <p>boost</p>
          </li>
          <li>
            <s-icon type="full-screen" />
            <p>full-screen</p>
          </li>
        </ul>

        <h4 class="sub-title" style="font-size: 16px;"> 品牌标识图标 </h4>
        <ul class="icon-lists clearfix">
          <li>
            <s-icon type="android" />
            <p>android</p>
          </li>
          <li>
            <s-icon type="android-fill" />
            <p>android-fill</p>
          </li>
          <li>
            <s-icon type="apple" />
            <p>apple</p>
          </li>
          <li>
            <s-icon type="apple-fill" />
            <p>apple-fill</p>
          </li>
          <li>
            <s-icon type="qq" />
            <p>qq</p>
          </li>
          <li>
            <s-icon type="wechat-fill" />
            <p>wechat-fill</p>
          </li>
          <li>
            <s-icon type="weibo" />
            <p>weibo</p>
          </li>
          <li>
            <s-icon type="windows" />
            <p>windows</p>
          </li>
          <li>
            <s-icon type="ie" />
            <p>ie</p>
          </li>
          <li>
            <s-icon type="chrome" />
            <p>chrome</p>
          </li>
          <li>
            <s-icon type="github" />
            <p>github</p>
          </li>
          <li>
            <s-icon type="jira" />
            <p>jira</p>
          </li>
          <li>
            <s-icon type="xbox" />
            <p>xbox</p>
          </li>
        </ul>
      </div>
    </commonnav>
  </div>
</template>


<script>

export default {
  name: 'iconDoc'
}
</script>
