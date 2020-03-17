<template>
  <div>
    <!-- 搜索头部 -->
    <Header />
    <div class="Nav">
      <van-tabs class="Tabs" @click="changetab">
        <van-tab class="tab" title="推荐"></van-tab>
        <van-tab class="tab" :title="cate.name" :name="cate.id" v-for="(cate, index) in indexitem" :key="index"></van-tab>
      </van-tabs>
    </div>
    <!-- 内容 -->
    <HomeContent v-if="isShow" />
    <!-- 不同的每个列表内容-->
    <Cate v-else :catedata="catedata" />
  </div>
</template>
<script>
//引入头部
import Header from "../../components/Header/Header"
import HomeContent from "./MsiteContent/MsiteContent"
// 引入tab切换主页数据
import Cate from "./Cate/Cate"
//引入辅助函数
import { mapState } from "vuex"


export default {
  name: "Home",
  data () {
    return {
      catedata: [], //定义一个空数组接收真正得数据
      isShow: true // 判断当前首页页面显示
    };
  },
  // 注册组件
  components: {
    Header,
    HomeContent,
    Cate
  },
  mounted () {
    this.$store.dispatch('getIndex')
    this.$store.dispatch('getIndexItem')
  },
  methods: {
    // name是vant的提供的事件参数
    changetab (name) {
      //判断是显示不同的组件
      // 为什么是0呢 因为数据里面没有首页的tab 只能为0 
      if (name !== 0) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
      //获取整体数据
      const result = this.indexitem;
      //循环遍历 得到要传入的对象
      result.forEach(res => {
        //根据id值获取数据
        if (res.id == name) {
          // 用数组存起来 传到cate中 遍历展示不同的界面
          this.catedata = res.subCateList;
        }
      })
    },
  },
  computed: {
    ...mapState(['indexitem'])
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.swiper
  .Nav
    width 100%
    position fixed
    top 45px
    z-index 2
    background-color #fff
    .Tabs
      width 80%
      .tab
        margin-left 30px
</style>
