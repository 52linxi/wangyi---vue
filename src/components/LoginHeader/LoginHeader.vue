<template>
  <div class="ProfileContainer">
    <!-- 头部登录和个人中心的头部 -->
    <div class="header">
      <van-row gutter="20">
        <van-col span="7" @click="$router.push('/msite')">
          <van-icon name="wap-home-o" />
        </van-col>
        <van-col span="9" class="right-img">
          <img src="./imgs/logo.webp" alt="">
        </van-col>
        <van-col span="8" class="right-icon">
          <van-icon name="search" @click.stop="$router.push('/search')" />
          <van-icon name="shopping-cart-o" />
        </van-col>
      </van-row>
      <div class="profile-header-img">
        <img src="./imgs/title.png" alt="">
      </div>
    </div>
    <!-- 内容 -->
  </div>

</template>
<script>
export default {
  name:'LoginHeader'
}
</script>
<style lang='stylus' rel='stylesheet/stulus'>
.ProfileContainer
  width 100%
  height 100%
  .header
    font-size 30px
    width 100%
    height 160px
    background-color #fff
    margin 15px 0 0 10px
    .right-icon
      padding-left 40px !important
    .right-img
      img
        width 100px
        height 30px
    .profile-header-img
      height 250px
      display flex
      img
        width 140px
        height 45px
        margin auto
</style>