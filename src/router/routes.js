// 引入首页路由组件
import Msite from '../pages/Msite/Msite.vue'
// 引入分类路由组件
import Item from '../pages/Item/Item.vue'
import CateItem from '../pages/Item/cateItem'
// 引入值得买路由组件
import Topic from '../pages/Topic/Topic.vue'
// 引入购物车路由组件
import Cart from '../pages/Cart/Cart.vue'
// 引入个人路由组件
import Profile from '../pages/Profile/Profile.vue'
// 引入登录组件
import Login from '../pages/Login/Login.vue'
// 引入搜索组件
import Search from '../pages/Search/Search.vue'


// 向外暴露
export default [{
    path: '/msite',
    component: Msite,
    meta: {
      isShowFooter: true
    },
  },
  {
    path: '/item',
    component: Item,
    meta: {
      isShowFooter: true
    },
    children: [{
      path: '/item?categoryid=:id',
      component: CateItem
    }]
  },
  // {
  //   path: '/item',
  //   component: Item,
  //   children: [{
  //     path: '/item/cateList?categoryId=:id', // 
  //     component: CateItem
  //   }]
  // },
  {
    path: '/topic',
    component: Topic,
    meta: {
      isShowFooter: true
    },
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      isShowFooter: true
    },
  },
  {
    path: '/profile',
    component: Profile

  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/',
    redirect: '/msite'
  },
]