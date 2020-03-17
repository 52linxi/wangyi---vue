<template>
  <div>
    <swiper class="swiper" />
    <div class="Catecontent">
      <div class="cartlist">
        <div class="carttitle">
          <span>抑制防螨</span>
          <span class="title-bottom">抑制防螨，健康居家</span>
        </div>
        <ul class="cart_list">
          <li v-for="(shop, index) in catedata" :key="index">
            <div class="cart_list_img">
              <img :src="shop.wapBannerUrl" alt="" />
              <span>{{ shop.frontDesc }}</span>
            </div>
            <span>18小时持续抑菌，口罩抗菌抑菌喷雾</span>
            <span class="cart_price">￥45</span>
            <div class="sale">
              <span>满99减10</span>
              <span>满99减10</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
//引入swiper
import swiper from "../../../components/Swiper/Swiper";
export default {
  name: "Cart",
  // 接收一下Msite的传进来的参数 
  props: {
    catedata: Array
  },
  //注册组件
  components: {
    swiper
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.cartlist
  width 100%
  height 100%
  background-color #fff
  margin-top 10px
  .carttitle
    height 50px
    font-size 16px
    display flex
    flex-direction column
    justify-content space-around
    align-items center
    .title-bottom
      font-size 12px
      color #999
  .cart_list
    width 100%
    li
      width 166px
      height 295px
      display flex
      flex-direction column
      justify-content space-around
      font-size 16px
      float left
      margin-left 13px
      .cart_list_img
        width 166px
        height 188px
        background-color #f1ece2
        img
          width 166px
          height 166px
        span
          width 100%
          height 23px
          font-size 12px
          background-color #f1ece2
          box-sizing border-box
          color #9F8A60
      span
        font-size 13px
        color #333
      .cart_price
        font-size 16px
        color #DD1A21
      .sale
        width 100%
        span
          font-size 10px
          margin 3px
          border 1px solid #DD1A21
          border-radius 5px
          color #DD1A21
</style>
