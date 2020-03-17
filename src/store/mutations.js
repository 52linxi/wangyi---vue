// 包含多个直接修改数据状态的方法
// 引入mutations-types
import {
  RECEIVE_INDEX,
  RECEIVE_CATELIST,
  RECEIVE_CATENAV,
  RECEIVE_INDEXITEM,
  RECEIVE_TOPICNAV,
  RECEIVE_SEARCHHOT,
  RECEIVE_SEARCH
} from './mutation-types.js'
export default {
  // 获取首页数据
  [RECEIVE_INDEX](state, index) {
    state.index = index
  },
  // 获取首页导航条数据
  [RECEIVE_INDEXITEM](state, indexitem) {
    state.indexitem = indexitem
  },
  // 获取分类导航数据
  [RECEIVE_CATENAV](state, catenav) {
    state.catenav = catenav
  },
  // 获取分类列表数据
  [RECEIVE_CATELIST](state, catelist) {
    state.catelist = catelist
  },
  // 获取值得买的轮播图数据
  [RECEIVE_TOPICNAV](state, topicnav) {
    state.topicnav = topicnav
  },
  // 获取搜索热词数据
  [RECEIVE_SEARCHHOT](state, searchhot) {
    state.searchhot = searchhot
  },
  // 获取搜索内容
  [RECEIVE_SEARCH](state, search) {
    state.search = search
  },
}