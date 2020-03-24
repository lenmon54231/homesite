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

// 全局路由守卫
router.beforeEach((to, from, next) => {
  let nameLists = ["/center", "/mall/pay"]
  let isLogin = JSON.parse(window.localStorage.getItem("passUsrInfo")) ? JSON.parse(window.localStorage.getItem("passUsrInfo")).token : "";
  let index = nameLists.findIndex(v => v == to.path)
  if (index > -1) {  // 判断该路由是否需要登录权限
    console.log("1")
    if (isLogin) { // 判断是否已经登录
      console.log("11")
      next()
    }
    else {
      console.log("12")
      next({
        path: '/loading',
        query: { redirect: to.fullPath }  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

