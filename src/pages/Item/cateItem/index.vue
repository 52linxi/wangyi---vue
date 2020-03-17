<template>
  <div class="cate-wrap">
    <div class="left-warp">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item :title="item.name" v-for="(item, index) in catenav.categoryL1List" :key="index" @click="goItem(`/item?categoryid=${item.id}`)" />
      </van-sidebar>
    </div>

    <div class="right-warp">
      <div class="top-img">
        <img src="../../Msite/imgs/swiper/swiper1.webp" alt="">
      </div>
      <div class="botton-list" v-if="rightList">
        <van-grid :column-num="3">
          <van-grid-item v-for="(item, index) in (rightList.categoryList?rightList.categoryList:rightList.subCateList)" :key="index" :icon="item.bannerUrl ? item.bannerUrl : item.wapBannerUrl" :text="item.name">
          </van-grid-item>
        </van-grid>
      </div>
    </div>

  </div>
</template>
<script>
// 引入滑动插件
import BScroll from 'better-scroll'
// 引入Vuex的方法
import { mapState } from 'vuex'
export default {
  name: 'CateItem',
  data () {
    return {
      activeKey: 0,
    }
  },
  // 计算属性
  computed: {
    // 解构 vuex数据中的所有项
    ...mapState(['catenav', 'catelist']),
    // 计算右边的数据列表展示的数据 数据比较恶心 分成了两个数据
    rightList () {
      // 标识index
      let index = 0
      // 从路由中获取当前参数的id
      const id = +this.$route.query.categoryid// 
      // 判断的id是否存在 主要功能是解决第一次进入分类列表没有数据
      if (id) {
        // 如果id存在就正常找个对应的数据列表
        index = this.catelist.findIndex(item => item.id === id)
      }
      // 不存在 直接返回数据中第一个数据 
      return this.catelist[index]
    }
  },
  // 页面渲染完毕之后
  async mounted () {
    // 发请求
    await this.$store.dispatch('getCateList')
    // Bs滚动的插件 初始化
    this.$nextTick(() => {
      this.scroll = new BScroll('.left-warp', {
        click: true
      })
    })

  },
  // 方法
  methods: {
    // 判断上面传下来的path
    goItem (path) {
      // console.log(path)
      // console.log(this.$route.path);
      // 如果path和传下来的path不是一样的 就push一个新的进去  做到修改地址  
      if (this.$route.path !== path) {
        // 这个后面的回调 是防止报错的 
        this.$router.push(path, () => { })
      }
      // /*  /*      const id = +this.$route.query.categoryid
      //       console.log(id)
      //       const result = this.catelist.filter(item => item.id === id)
      //       console.log(result)
      //       console.log(this)
      //       /*       if (result[0].categoryList) {
      //               this.result = result[0].categoryList
      //             } else {
      //               this.result = resule[0].subCateList
      //             } */ */ */
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stulus'>
.cate-wrap
  width 100%
  display flex
  justify-content space-between
  .left-warp
    width 81px
    height 390px
    .van-sidebar-item
      height 15px
      position relative
      .van-sidebar-item__text
        font-size 15px
        color #000
        position absolute
        top 12px
        left 8px
  .bannerImg
    width 264px
    height 96px
  .right-warp
    flex 1
    height 13.33333rem
    text-align center
    .top-img
      width 100%
      height 150px
      img
        width 250px
        height 120px
        margin 10px
    .van-grid-item
      width 100%
      height 100%
      .van-grid-item__icon
        img
          width 72px
          height 72px
      .van-grid-item__text
        font-size 16px
        color #000
</style>