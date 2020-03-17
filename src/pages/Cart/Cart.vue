<template>
  <div class="CartContainer">
    <div class="cart-header">
      <van-row gutter="20">
        <van-col span="16">购物车</van-col>
        <van-col span="8"
                 class="right-text">领卷</van-col>
      </van-row>
    </div>
    <div class="cart-content">
      <div class="cart-text">
        <van-row gutter="20">
          <van-col span="8">30天无忧退货</van-col>
          <van-col span="8">48小时快速退款</van-col>
          <van-col span="8">满88元免邮费</van-col>
        </van-row>
      </div>
      <div class="cart-img">
        <img src="./imgs/购物车.webp"
             alt="">
      </div>
      <div class="cart-login" @click="$router.push('/login')">
        <span>登录</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Cart'
}
</script>
<style lang='stylus' rel='stylesheet/stulus'>
.CartContainer
  width 100%
  height 100%
  .cart-header
    width 100%
    height 40px
    font-size 16px
    background-color #ffffff
    .van-col
      padding-left 35px !important
      margin-top 10px
    .right-text
      color red
  .cart-content
    width 100%
    height 615px
    background-color rgb(242, 245, 244)
    position relative
    .cart-img
      img
        width 248px
        height 248px
        position absolute
        top 0
        bottom 0
        left 0
        right 0
        margin auto
    .cart-text
      width 100%
      height 30px
      font-size 14px
      margin 5px 0 0 5px
      color #999
    .cart-login
      width 60%
      height 50px
      font-size 16px
      background-color red
      color #fff
      position absolute
      bottom 160px
      left 79px
      border-radius 10px
      text-align center
      line-height 50px
     


    
</style>