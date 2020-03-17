<template>
  <div class="app">
    <router-view />
    <Footer v-show="$route.meta.isShowFooter" />
  </div>
</template>
<script>
// 引入Footer
import Footer from './components/Footer/Footer.vue'
export default {
  name: 'App',
  components: {
    Footer
  },
}
</script>
<style lang="stylus" rel="stylesheet/stulus"></style>
