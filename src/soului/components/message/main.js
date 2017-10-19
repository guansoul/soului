import Vue from 'vue'
import sMessage from './message.vue'

let MessageConstructor = Vue.extend(sMessage);
let msgInstance;
let msgNum = 1;
let showNum = 0;
let instances = [];

var Message = function(options) {
  if (Vue.prototype.$isServer) return;
  options = options || {};
  if (typeof options === 'string') {
    options = {
      content: options
    };
  }
  let userOnClose = options.onClose;
  let id = 'message_' + msgNum++;
  showNum++;
  options.onClose = function() {
    Message.close(id, userOnClose);
    showNum--;
  };
  msgInstance = new MessageConstructor({
    data: options
  });
  msgInstance.id = id;
  msgInstance.vm = msgInstance.$mount();
  document.body.appendChild(msgInstance.vm.$el);
  msgInstance.vm.visible = true;
  msgInstance.dom = msgInstance.vm.$el;
  console.log(showNum);
  msgInstance.dom.style.top = 20 + ((showNum-1 | 0) * 48) + "px";
  msgInstance.dom.style.zIndex = 999;
  instances.push(msgInstance);
  return msgInstance.vm;
};

['info', 'success', 'warn', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        content: options
      };
    }
    options.type = type;
    return Message(options);
  };
});


Message.close = function(id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
};

Message.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};
export default Message;

