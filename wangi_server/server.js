const express = require('express')
const cateLists = require('./datas/cateLists.json')
const cateNavDatas = require('./datas/cateNavDatas.json')
const index = require('./datas/index.json')
const indexCateModule = require('./datas/indexCateModule.json')
const topicNav = require('./datas/topicNav.json')
const pubuData = require('./datas/pubu.json')
const search = require('./datas/search.json')
const searchname = require('./datas/search1.json')
const app = express()
const port = 3000


// 测试
app.get('/', function(req, res) {
  res.send('root')
})
// 分类列表数据接口
app.get('/getcatelist', (req, res) => res.send(cateLists))
// 分类列表导航栏数据接口
app.get('/getcatenav', (req, res) => res.send(cateNavDatas))
// 商品列表数据接口
app.get('/getshoplist', (req, res) => res.send(index))
// 商品列表中每一块数据接口
app.get('/getshopitem', (req, res) => res.send(indexCateModule))
// 值得买导航数据
app.get('/topicnav', (req, res) => res.send(topicNav))
// 值得买瀑布数据
app.get('/pubudata', (req, res) => res.send(pubuData))
// 搜索热词数据
app.get('/searchhot', (req, res) => res.send(search))
// 搜索热词数据
app.get('/search?', (req, res) => {
  console.log(req.query)
  // 你是不是想携带参数？你这个问号w开头的后面包括问好是查询字符串参数，是客户端发送给服务端的 1
  // 想搞骚操作，得去看文档，我也不会用
  // 服务器接口不用带参数得嘛 ，因该不是，我记得之前好想是这么说的
  // req.啥w玩意能截取到查询字符串参数，然后可以做一些事情 ,可以根据这个来具体响应啥吧应该
  //  那我不用req.qyery 把数据响应回去嘛
  // 你现在的意思是不是你想url地址携带参数访问服务器，不然就访问不了？返回错误的响应状态码?
  // 我只是想完成一个搜索功能 然后我觉得 不是要带参数去访问服务器嘛 然后服务器返回你带参数的数据
  // 别搞我，我不会后端
  // 那是不是在接口写参数就可以了
  // 直接把数据响应回去遍历展示不久行了么？
  // 思路是这样的，你在输入框搜索的时候，要用到计算属性来判断你输入框的值是否包含在我这个响应数据的数组中，如果包含就返回一个新数组，然后给遍历展示出来
  // 然后当你按回车的时候，把你这个输入框中的值传到子组件中，然后子组件根据你这个值去数组中找，找到了遍历展示，页面就出来了

  // 杨哥之前带我们做一个排序练习的时候就说过，意思和这个是一样的
  // 很早之前的练习嘛 嗯嗯，自己去看看把 好 谢谢富哥 客气了
  res.send(searchname)
})


app.listen(port, (err) => {
  if (!err) {
    console.log('服务器启动成功,http://localhost:3000')

  }
})