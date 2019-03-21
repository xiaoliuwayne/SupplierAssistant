// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import axios from './http'
import router from './router'
import store from './store/store'
import {
  XHeader,
  XInput,
  Group,
  XButton,
  Tabbar,
  TabbarItem,
  Tab,
  TabItem,
}from 'vux'

Vue.component('x-header', XHeader);
Vue.component('x-input', XInput);
Vue.component('group', Group);
Vue.component('x-button', XButton);
Vue.component('tabbar', Tabbar);
Vue.component('tabbar-item', TabbarItem);
Vue.component('tab', Tab);
Vue.component('tab-item', TabItem);

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios;

//引入mockjs
require('./mock.js');

//保存tabbar状态
window.TABBAR_STATUS = -1;

FastClick.attach(document.body);

Vue.config.productionTip = false;

//获取微信号的id

/* eslint-disable no-new */
// new Vue({
//   el:'#app',
//   axios,
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app');
new Vue({
  el: '#app',
  // el: '#myIndex',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
