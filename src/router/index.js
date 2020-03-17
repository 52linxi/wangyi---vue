// 引入Vue
import Vue from 'vue'
// 引入Vue-router
import VueRouter from 'vue-router'
// 引入routes
import routes from './routes'
// 声明使用
Vue.use(VueRouter)
//暴露出去
export default new VueRouter({
  // history模式
  mode:'history',
  routes
})