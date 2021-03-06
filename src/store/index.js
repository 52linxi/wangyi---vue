// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入state
import state from './state'
// 引入mutations
import mutations from './mutations'
// 引入actions
import actions from './actions'
// 引入getters
import getters from './getters'
// 声明使用Vuex
Vue.use(Vuex)
// 实例化对象 并且暴露
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})