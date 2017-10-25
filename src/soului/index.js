// es6 polyfill
import 'core-js/fn/array/find';
import 'core-js/fn/array/find-index';

import sIcon from './components/icon';
import { sRow, sCol } from './components/layout';
import sMessage from './components/message';
import { sSelect, sOption } from './components/select';
import sSwitch from './components/switch';
import sButton from './components/button';

const components = {
  sIcon,
  sRow,
  sCol,
  sSelect,
  sOption,
  sSwitch,
  sButton
}


const install = function(Vue, opts = {}) {

  Object.keys(components).forEach((key) => {
      Vue.component(key, components[key]);
  });

  Vue.prototype.$message = sMessage;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
    install
};
