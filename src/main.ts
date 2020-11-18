import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'normalize.css';
import ElementUI from 'element-ui';
import '@/styles/element-variables.scss';
import '@/styles/index.scss';

import './permission';
import SvgIcon from 'vue-svgicon';
import '@/icons/components';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
