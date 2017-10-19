<!--
<template>
  <div id="index" v-title="'首页'" style="margin: 15px 20px;">

      <switch-btn v-model="switchV1" @change="switchEvent">
      </switch-btn>
      <switch-btn v-model="switchV2">
        <span slot="on">开</span>
        <span slot="off">关</span>
      </switch-btn>
      <switch-btn v-model="switchV3" size="large">
        <span slot="on">
          <icon type="check" styles="color: #f3c;"></icon>
        </span>
        <span slot="off">
          <icon type="close" styles="color: #000;font-size:13px;" ></icon>
        </span>
      </switch-btn>
      <switch-btn v-model="switchV2" disabled>
      </switch-btn>

      <div style="width: 240px;margin: 15px 0;">
        <selection v-model="selectV1" placeholder="请选择测试" @change="selectEvent" filterable>
          <option-item v-for="item in cityList" :key="item.value" :value="item.value">{{ item.name }}</option-item>
        </selection>

      </div>
      <div style="width: 240px;margin: 15px 0;">
        <selection v-model="selectV2" placeholder="请选择城市" multiple filterable>
          <option-item v-for="item in cityList" :key="item.value" :value="item.value">{{ item.name }}</option-item>
        </selection>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import switchBtn from '../soului/components/switchBtn'
import icon from '../soului/components/icon'
import {selection, optionItem} from '../soului/components/selection'
import message from '../soului/components/message'
Vue.prototype.$message = message
export default {
  name: 'index',
  data() {
    return {
        switchV1: true,
        switchV2: false,
        switchV3: true,
        switchV2: false,
        selectData: ["北京市","上海市","深圳市","杭州市","南京市"],
        cityList: [
            { value: 'beijing',
              name: '北京市'
            },
            { value: 'shanghai',
              name: '上海市'
            },
            { value: 'shenzhen',
              name: '深圳市'
            },
            { value: 'hangzhou',
              name: '杭州市'
            },
            { value: 'nanjing',
              name: '南京市'
            },
            { value: 'chongqing',
              name: '重庆市'
            }
        ],
        selectV1: "shenzhen",
        selectV2: ["hangzhou","chongqing"],
    }
  },
  components: {
      'switch-btn': switchBtn,
      'icon': icon,
      'selection': selection,
      'optionItem': optionItem
  },
  methods: {
      switchEvent: function() {
          if(this.switchV1) {
              this.$message({
                  content: '恭喜你，这是一条成功消息',
                  type: 'success'
              });
          } else {
              this.$message.error('错了哦，这是一条错误消息');
          }
      },
      selectEvent: function() {
          console.log(this.selectV1);
      }
  }
}
</script>
-->
