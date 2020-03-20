import Vue from 'vue'
import VueRouter from 'vue-router'
import MallRouter from './Mall'
import MyTollsRouter from './MyTools'
import HomeRouter from './Home'
import LoginRouter from './Login'
import RegisterRouter from './Register'
import ResumeRouter from './Resume'
import CenterRouter from './Center'

Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    HomeRouter,
    MyTollsRouter,
    MallRouter,
    LoginRouter,
    RegisterRouter,
    ResumeRouter,
    CenterRouter,
    {
      path:'/*',
      redirect:'/home'
    }
  ]
})

// 全局路由守卫
// router.beforeEach((to, from, next) => {
//   let isLogin = JSON.parse(window.localStorage.getItem("passUsrInfo")).token
//   if (to.meta.needLogin) {  // 判断该路由是否需要登录权限
//     if (isLogin) { // 判断是否已经登录
//       next()
//     }
//     else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   }
//   else {
//     next()
//   }
// })
