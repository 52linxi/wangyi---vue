<template>
  <div class="loginContainer">
    <LoginHeader />
    <div class="login-input">
      <div>
        <van-field class="username" v-model="user.name" placeholder="请输入用户名" />
        <van-field class="phone" v-model="user.pwd" placeholder="请输入密码" />
        <a href="https://zc.reg.163.com/">注册账号</a>
        <a href="https://zc.reg.163.com/">忘记密码</a>
        <van-button class="btn" type="danger" @click="register()">登录</van-button>
      </div>
    </div>
  </div>
</template>
<script>
// 引入header
import LoginHeader from '../../components/LoginHeader/LoginHeader'
// vant 插件 全局引入不能使用 
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
export default {
  name: 'Login',
  data () {
    return {
      name: '24kcs', // 用户名
      pwd: '24kcs', // 密码
      user: { name: '', pwd: '' } // 初始化清空表单
    }
  },
  // 注册组件
  components: {
    LoginHeader
  },
  // 方法
  methods: {
    // 问我为什么这样写登录  是因为登录功能我可能要写一个星期 因为菜不想找借口了就是菜
    register () {
      // 判断输入的内容是否等于 
      // 正在的登录功能真的逻辑很绕 点登录 还要判断数据库中是否存在 不存在返回注册页面
      // 存在还要判断token是否过期 
      // 写拦截器 返回不同的响应 
      // 登录还可以用路由守卫  
      // 会说不会写 
      if (this.user.name === '24kcs' && this.user.pwd === '24kcs') {
        Toast.success('登录成功')
        this.user = { name: '', pwd: '' }
      } else {
        Toast.fail('登录失败')
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stulus">
.loginContainer
  width 100%
  height 100%
  .login-input
    width 100%
    height 400px
    margin 65px 0 0 20px
    .username
      width 90%
      display block
      border 1px solid #999
      margin-bottom 5px
      border-radius 5px
      color #000
    .phone
      width 90%
      display block
      border 1px solid #999
      border-radius 5px
      color #000
    a
      font-size 16px
      padding 10px
    .btn
      width 70%
      display block
      margin-left 40px
      margin-top 20px
</style>
