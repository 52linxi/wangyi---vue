// 包含多个间接修改数据状态的方法
// 引入mutations-type
import {
  RECEIVE_INDEX,
  RECEIVE_INDEXITEM,
  RECEIVE_CATENAV,
  RECEIVE_CATELIST,
  RECEIVE_TOPICNAV,
  RECEIVE_SEARCHHOT,
  RECEIVE_SEARCH

} from './mutation-types'
// 引入接口 发送请求
import {
  reqIndexShop,
  reqCateList,
  reqCateNav,
  reqShopItem,
  reqTopicNav,
  reqSearchHot,
  reqSearch
} from '../api'
export default {
  // 获取首页的数据
  async getIndex({
    commit
  }) {
    const index = await reqIndexShop()
    commit(RECEIVE_INDEX, index)
  },
  // 获取首页导航条数据
  async getIndexItem({
    commit
  }) {
    const indexitem = await reqShopItem()
    commit(RECEIVE_INDEXITEM, indexitem)
  },
  // 获取分类导航数据
  async getCateNav({
    commit
  }) {
    const catenav = await reqCateNav()
    commit(RECEIVE_CATENAV, catenav)
  },
  // 获取分类列表数据
  async getCateList({
    commit
  }) {
    const catelist = await reqCateList()
    commit(RECEIVE_CATELIST, catelist)
  },
  // 获取值得买的轮播图数据
  async getTopicNav({ commit }) {
    const result = await reqTopicNav()
    const topicnav = result.data
    commit(RECEIVE_TOPICNAV, topicnav)
  },
  // 获取搜索热词数据
  async getSearchHot({ commit }) {
    const result = await reqSearchHot()
    const searchhot = result.data
    commit(RECEIVE_SEARCHHOT, searchhot)
  },
  // 获取搜索内容
  async getSearch({ commit }) {
    const result = await reqSearch()
    const search = result
    console.log(search)
    commit(RECEIVE_SEARCH, search)
  },

}

/* async getTopicNav({commit}) {
  const result = await reqTopicNav()
  console.log(topicnav)
  
  if (result.code === 200) {
    const topicnav = result.data
    commit(RECEIVE_TOPICNAV, topicnav)
  }

} */