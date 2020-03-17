<template>
<!-- 底部Tabbar 路由切换 -->
  <div>
    <van-tabbar route
                v-model="active"
                active-color="red">
      <van-tabbar-item replace
                       to="/msite"
                       icon="wap-home">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace
                       to="/item"
                       icon="column">
        分类
      </van-tabbar-item>
      <van-tabbar-item replace
                       to="/topic"
                       icon="youzan-shield">
        值得买
      </van-tabbar-item>
      <van-tabbar-item replace
                       to="/cart"
                       icon="cart">
        购物车
      </van-tabbar-item>
      <van-tabbar-item replace
                       to="/profile"
                       icon="manager">
        个人
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name:'Footer',
  data () {
    return {
      active: 0
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stulus"></style>
