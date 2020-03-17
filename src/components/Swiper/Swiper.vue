<template>
  <!-- 首页轮播图 -->
  <div class="out">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="https://yanxuan.nosdn.127.net/be01331fb46a63943357fcb2f2c54e3a.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://yanxuan.nosdn.127.net/291f05d639363a80382fb4e21cb8f123.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://yanxuan.nosdn.127.net/d46d2fd850b9a660eca68028fe974bb0.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://yanxuan.nosdn.127.net/576a305539b868edb0ed05b632b572d7.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name:'Swiper'
}
</script>
<style lang='stylus' rel='stylesheet/stulus'>
.my-swipe .van-swipe-item
  width 100%
  height 80px
  img
    width 100%
    height 100%
</style>