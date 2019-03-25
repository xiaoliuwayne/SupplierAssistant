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
  AlertPlugin ,
}from 'vux'

Vue.component('x-header', XHeader);
Vue.component('x-input', XInput);
Vue.component('group', Group);
Vue.component('x-button', XButton);
Vue.component('tabbar', Tabbar);
Vue.component('tabbar-item', TabbarItem);
Vue.component('tab', Tab);
Vue.component('tab-item', TabItem);
Vue.use(AlertPlugin);

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios;

//引入mockjs
require('./mock.js');

//保存tabbar状态
window.TABBAR_STATUS = -1;

// //获取open_id
// let cur_url = window.location.href; //
// // let cur_url = 'http://ssdsd?open_id=oUgkh1Tg7Zv7UQAmNfH2skiCYMRo#/';
// let temp = cur_url.split('=')[1];
// const open_id = temp.split('#')[0];

//引入自定义js函数
// import * as COMMON from './assets/js/common.js'
// Vue.prototype.common = COMMON;
// Vue.use(COMMON);

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
