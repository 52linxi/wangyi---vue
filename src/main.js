import Vue from 'vue'
import App from './App.vue'
// 控制台输出是否有提示
Vue.config.productionTip = false
// 引入适配文件
import './tools/rem'
// 引入路由
import router from './router'
// 引入vuex
import store from './store'
import VirtualCollection from 'vue-virtual-collection'
Vue.use(VirtualCollection)
// 使用vant
import { Tab, Tabs, Swipe, SwipeItem, Col, Row, Search, Grid, GridItem, Sticky, Sidebar, SidebarItem, Icon, Field, Button, Tabbar, TabbarItem, CountDown } from 'vant'
Vue.use(Col).use(Row).use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(Search).use(Grid).use(GridItem).use(Sticky).use(Sidebar).use(SidebarItem).use(Icon).use(Field).use(Button).use(Tabbar).use(TabbarItem).use(CountDown)
// Vue实例对象
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  // 注册路由器
  router,
  // 注册vuex
  store
})