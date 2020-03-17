// 引入axios
import ajax from './ajax'
// '/api 是vue.config.js定义的 省略前面地址'
const BASE = '/api'

// 发送获取首页的数据
export const reqIndexShop = () => ajax({
  method: 'GET',
  url: BASE + `/getshoplist`,
})

// 分类右边的数据
export const reqCateList = () => ajax({
  method: 'GET',
  url: BASE + `/getcatelist`,
})
// 分类左边的列表
export const reqCateNav = () => ajax({
  method: 'GET',
  url: BASE + `/getcatenav`,
})
// 主页标签中的每个导航的内容
export const reqShopItem = () => ajax({
  method: 'GET',
  url: BASE + `/getshopitem`,
})

// 值得买导航数据
export const reqTopicNav = () => ajax({
  method: 'GET',
  url: BASE + `/topicnav`,
})

// 搜索热词数据
export const reqSearchHot = () => ajax({
  method: 'GET',
  url: BASE + `/searchhot`,
})

// 搜索数据
export const reqSearch = (keyword) => ajax({
  method: 'GET',
  url: BASE + `/search`,
  params:{
    keyword
  }
})


