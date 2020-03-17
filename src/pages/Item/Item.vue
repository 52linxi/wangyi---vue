<template>
  <div class="ItemWarp">
    <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center" @click="$router.push('/search')" />
    <CateItem />
  </div>
</template>
<script>
// 引入抽取的组件
import CateItem from './cateItem'
export default {
  name: 'Item',
  data () {
    return {
      value: '',

    }
  },
  mounted () {
    this.$store.dispatch('getCateNav')
    this.$store.dispatch('getCateList')
  },
  // 注册组件
  components: {
    CateItem
  }


}
</script>
<style lang="stylus" rel="stylesheet/stulus">
.ItemWarp
  width 100%
  height 100%
  .van-search
    position relative
    z-index 999
</style>
