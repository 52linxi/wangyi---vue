// 引入axios
import axios from 'axios'
// 引入qs qs看官网
import qs from 'qs'
// 添加请求拦截器
axios.interceptors.request.use(config=>{
  // 解构
  const {method,data} = config
  //  POST请求 针对POst请求 
  if (method.toUpperCase() === 'POST' && data instanceof Object) {
      config.data = qs.stringify(data)
  }
  return config
})
// 响应拦截器
axios.interceptors.response.use(response=>{
  // 直接返回数据出去
  return response.data
},error=>{
  alert(error)
  // 中断错误消息
  return new Promise(()=>{})
})
// 向外暴露
export default axios