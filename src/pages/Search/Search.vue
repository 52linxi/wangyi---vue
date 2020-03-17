<template>
  <div class="SearchContainer">
    <!-- 搜索框 -->
    <van-row>
      <van-col span="20">
        <form action="/">
          <van-search v-model="searchText" placeholder="请输入搜索关键词" @search="onSearch" />
        </form>
      </van-col>
      <van-col class="close" span="4" @click="closeText"><span>取消</span></van-col>
    </van-row>
    <!-- 热词 -->
    <div class="Searchdata" v-show="isShow"> 
      <div class="Searchdata-header">
        <h3>
          热门搜索
        </h3>
      </div>
      <nav class="search-list">
        <a class="search-item" href="JavaScript:" v-for="(item,index) in searchhot.hotKeywordVOList" :key="index">
          {{item.keyword}}
        </a>
      </nav>
    </div>

    <!-- 商品列表 -->
    <div class="SearchList" v-if="!isShow">
      <ul v-if="ShopArr.length">
        <li class="SearchItem" v-for="(item,index) in ShopArr " :key="index" >
          <img :src="item.icon" alt="">
          <span>{{item.name}}</span>
          <span style="color:red">¥165</span>
        </li>
      </ul>
      <div class="data" v-else>暂无心仪商品,请搜索口罩试试</div>
    </div>
  </div>
</template>
<script>
// vuex辅助函数
import { mapState } from 'vuex'
export default {
  name: 'search',
  data () {
    return {
      searchText: '', //初始化表单文本
      isShow: true, // 显示不同的组件
      // shops: [] //
    };
  },
  watch: {
    //监视文本框的内容 是否有 有的话隐藏热词组件
    searchText () {
      this.isShow = this.searchText ? false : true
    }
  },
  // 发送请求
  mounted () {
    this.$store.dispatch('getSearch'),
    this.$store.dispatch('getSearchHot')
  },
  // 计算属性
  computed: {
    ...mapState(['searchhot', 'search']),

    ShopArr () {
      // 把当前的文本框数据结构
      const { searchText } = this
      // 将文本内容 去找数组中的文字 过滤出数据 然后在放到结构中去遍历
      const arr = this.search.searchList.filter((item) => item.name.indexOf(searchText) !== -1)
      return arr
    }
  },
  methods: {
    // 这个功能有待解决 搜索页面不能按下回车搜索 主要请求不好发 不会写服务器带参数
    async onSearch () {
      const searchText = this.searchText.trim()
      console.log(searchText)
      console.log("发送请求")
    },
    // 跳转到首页
    closeText () {
      this.$router.push('/msite')
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stulus'>
.SearchContainer
  width 100%
  height 100%
  .close
    font-size 18px
    height 54px
    background-color #fff
    text-align center
    line-height 54px
    padding-right 10px
  .Searchdata
    width 100%
    height 150px
    background rgb(238, 238, 238)
    .Searchdata-header
      width 90%
      height 45px
      margin auto
      h3
        font-size 18px
        color #999
        margin-top 10px
    .search-list
      width 90%
      margin-left 5%
      a
        font-size 12px
        float left
        padding 0 0.2rem
        margin-right 0.42rem
        margin-bottom 0.42rem
        line-height 0.61rem
        border 1px solid #999
        border-radius 4px
        color #333
  .SearchList
    width 100%
    height 100%
    ul
      display flex
      flex-wrap wrap
      justify-content space-around
      padding 0 5px
      .SearchItem
        width 173px
        height 282px
        display flex
        flex-direction column
        justify-content space-between
        img
          width 173px
          height 173px
        span
          font-size 16px
    .data
      font-size 40px
      text-align center
      color red
</style>