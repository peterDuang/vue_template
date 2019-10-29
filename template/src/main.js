{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}
{{#store}}
import store from './store'
{{/store}}

import VueWechatTitle from 'vue-wechat-title'
// 导入 http 文件夹下的 index.js
import api from './http/index'
// 全局引入Toast
import './components/toast/toast.css';
import Toast from './components/toast/index';

Vue.use(Toast)
Vue.use(api)
Vue.use(VueWechatTitle)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#store}}
  store,
  {{/store}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
