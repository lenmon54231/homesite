import Vue from 'vue'
import VueRouter from 'vue-router'
import MallRouter from './Mall'
import MyTollsRouter from './MyTools'
import HomeRouter from './Home'
import LoginRouter from './Login'
import RegisterRouter from './Register'
import ResumeRouter from './Resume'
import CenterRouter from './Center'
import LoadingRouter from './Loading'

Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    HomeRouter,
    MyTollsRouter,
    MallRouter,
    LoginRouter,
    RegisterRouter,
    ResumeRouter,
    CenterRouter,
    LoadingRouter,
    {
      path: '/*',
      redirect: '/home'
    }
  ]
})

