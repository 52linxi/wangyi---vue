
<template>
<!-- 首页头部样式 -->
  <div class="msite-header">
    <van-row>
      <van-col>
        <img class="logo" src="./imgs/logo.webp" alt="" />
      </van-col>
      <van-col>
        <van-search class="header-search" disabled v-model="search" placeholder="请输入搜索关键词" @click="$router.push('/search')" />
      </van-col>
      <van-col>
        <div class="header-btn">
          登录
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  name:'Header',
  data () {
    return {
      search:''
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stulus'>
.msite-header
  width 750px
  height 44px
  display flex
  margin 0 0 0 15px
  .logo
    width 69px
    height 20px
    margin 10px 10px 0 5px
    display inline-block
    vertical-align middle
  .header-search
    width 221px
    border 0
    vertical-align middle
  .van-search__content
    background-color #ededed
  .header-btn
    width 37px
    height 20px
    line-height 20px
    text-align center
    color #DD1A21
    border 1px solid #DD1A21
    border-radius 5px
    font-size 16px
    margin 16px 16px 0 0</style>