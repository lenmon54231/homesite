import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import common from '@/comF/common.js'
Vue.prototype.common = common

import axios from 'axios'
Vue.prototype.axios = axios

// 路由变化跳转页面回到顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

Vue.filter("price",function(value) {
  var num2 = Number(value).toFixed(2);
  var num = num2.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return num;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
