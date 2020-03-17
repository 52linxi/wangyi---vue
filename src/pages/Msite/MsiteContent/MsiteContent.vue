<template>
  <div>
    <Swiper class="swiper" />
    <!-- 展示的小字，轮播图紧贴的地方 -->
    <div class="extend">
      <ul class="extendlist">
        <li v-for="(policy, index) in index.policyDescList" :key="index">
          <img :src="policy.icon" alt="" /><span href="javaScript:,">{{
            policy.desc
          }}</span>
        </li>
      </ul>
    </div>
    <!-- 展示的商品导航 -->
    <div class="gridnav">
      <van-grid icon-size="50px" :square="false" :border="false" :column-num="5" v-if="index.kingKongModule">
        <van-grid-item :text="king.text" :icon="king.picUrl" border="false" v-for="(king, index) in index.kingKongModule.kingKongList" :key="index" />
      </van-grid>
    </div>
    <!-- 活动区域 -->
    <div class="content">
      <!-- 限时特惠 -->
      <div class="exhibition ">
        <div class="exhibition_top"></div>
        <div class="exhibition_bottom">
          <div class="exhibition_bottom_top">
            <div class="exhibition_bottom_left"><a href="###"></a></div>
            <div class="exhibition_bottom_right"><a href="###"></a></div>
          </div>
          <div class="exhibition_bottom_bottom">
            <ul class="exhibition_bottom">
              <li>
                <p>48H限购</p>
                <p>女王专属7折起</p>
                <img src="./imgs/4.png" alt="" />
              </li>
              <li>
                <p>女神专属爆款</p>
                <p>女王专属7折起</p>
                <img src="./imgs/tixudao.png" alt="" />
              </li>
              <li>
                <p>48H限购</p>
                <p>女王专属7折起</p>
                <img src="./imgs/longjing.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 新人礼 -->
      <div class="newperson">
        <div class="newperson_title">
          <span></span>
          <p>新人专享礼</p>
          <span></span>
        </div>
        <div class="newPerson_content">
          <div class="content_left">
            <p>新人专享礼包</p>
            <img src="./imgs/xinren.png" alt="" />
          </div>
          <div class="content_right">
            <div class="right_top">
              <div class="text">
                <span>福利社</span>
                <span class="subtitle">今日特价</span>
              </div>

              <img src="./imgs/tehui.png" alt="" />
            </div>
            <div class="right_bottom">
              <span>新人拼团</span>
              <span class="subtitle">一元起包邮</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 类目热销榜 -->
      <div class="hotsale" v-if="index.categoryHotSellModule">
        <h3>{{ index.categoryHotSellModule.title }}</h3>
        <div class="hot_top">
          <div class="hot_top_left">
            <div class="left_text">
              <span>热销榜</span>
              <span class="hot-line"></span>
            </div>
            <img src="./imgs/zhijin.webp" alt="" />
          </div>
          <div class="hot_top_right">
            <div class="right_text">
              <span>热销榜</span>
              <span class="hot-line"></span>
            </div>
            <img src="./imgs/zhijin.webp" alt="" />
          </div>
        </div>
        <div class="host_list">
          <ul v-if="index.categoryHotSellModule">
            <li v-for="(shop,
            index) in index.categoryHotSellModule.categoryList.slice(2, 10)" :key="index">
              <span>{{ shop.categoryName }}</span>
              <img :src="shop.picUrl" alt="" />
            </li>
          </ul>
        </div>
      </div>
      <!-- 限时购 -->
      <div class="timetobuy">
        <div class="title">
          <div class="title_left" v-if="index.flashSaleModule">
            <span>限时购</span>
            <van-count-down :time="index.flashSaleModule.remainTime">
              <template v-slot="timeData">
                <span class="item">{{ timeData.hours }}</span> :
                <span class="item">{{ timeData.minutes }}</span>:
                <span class="item">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>
          <span class="more">更多 ></span>
        </div>
        <div class="timetobuylist">
          <ul class="list" v-if="index.flashSaleModule">
            <li v-for="(flashSale, index) in index.flashSaleModule.itemList" :key="index">
              <img :src="flashSale.picUrl" alt="" />
              <span>¥{{ flashSale.activityPrice }}</span>
              <span class="list_discount">¥{{ flashSale.originPrice }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 新品首发 -->
      <div class="newproduct">
        <div class="title">
          <span>新品首发</span>
          <span>更多 ></span>
        </div>
        <div class="newproductlist">
          <ul class="list" v-if="index.newItemList">
            <li v-for="(shop, index) in index.newItemList.slice(1, 7)" :key="index">
              <img :src="shop.listPicUrl" alt="" />
              <p class="introduce">{{ shop.simpleDesc }}</p>
              <span class="price">¥{{ shop.retailPrice }}</span>
              <span class="btn">新品尝试</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 底部导航 -->
      <div class="bottomnav">
        <ul class="list">
          <li v-for="(shop, index) in index.sceneLightShoppingGuideModule" :key="index">
            <span class="list_top1">{{ shop.styleItem.title }}</span>
            <span class="list_top2">{{ shop.styleItem.desc }}</span>
            <div class="list_img">
              <img :src="shop.styleItem.picUrlList[0]" alt="" />
              <img :src="shop.styleItem.picUrlList[1]" alt="" />
            </div>
          </li>
        </ul>
      </div>
      <!-- 底部 -->
      <div class="bottom">
        <div class="btn">
          <span class="down">下载App</span>
          <span>电脑版</span>
        </div>
        <div class="text">
          <p>网易公司版权所有 © 1997-2020</p>
          <p>食品经营许可证：JY13301080111719</p>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "../../../components/Swiper/Swiper";
//引入辅助函数
import { mapState } from "vuex";
export default {
  name: "Home",
  data () {
    return {
      timeData: []
    };
  },
  // 注册组件
  components: {
    Swiper
  },
  //获取主页的真数据遍历
  computed: {
    ...mapState(['index']),
  },

};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.extend
  width 100%
  text-align center
  .extendlist
    display flex
    padding 10px
    li
      width 115px
      height 20px
      font-size 13px
      line-height 20px
      img
        width 15px
        height 15px
        vertical-align bottom
        margin-right 5px
.gridnav
  width 100%
.content
  background-color #eee
  .exhibition
    width 100%
    background-color #fff
    .exhibition_top
      width 100%
      height 120px
      background-image url('./imgs/1.gif')
      background-size 100% 100%
    .exhibition_bottom
      width 100%
      background-color #cc3256
      .exhibition_bottom_top
        display flex
        justify-content space-around
        width 100%
        box-sizing border-box
        padding 15px 15px 0 15px
        div
          width 170px
          height 90px
          background-image url('./imgs/2.png')
          background-size 100% 100%
        .exhibition_bottom_right
          background-image url('./imgs/3.png')
      .exhibition_bottom_bottom
        width 100%
        .exhibition_bottom
          width 100%
          display flex
          justify-content space-around
          box-sizing border-box
          padding 5px
          li
            width 118px
            display flex
            flex-direction column
            align-items center
            font-size 15px
            height 105px
            background-image url('./imgs/bg.png')
            background-size 100% 100%
            margin-bottom 10px
            color #cc3256
            p
              margin-top 5px
            img
              width 67px
              height 67px
  .newperson 
    width 100%
    margin 10px 0
    background-color #fff
    .newperson_title
      width 100%
      height 43px
      display flex
      font-size 18px
      align-items center
      justify-content center
      p
        margin 0 10px
      span
        width 16px
        height 1px
        background-color #000
    .newPerson_content
      width 100%
      font-size 18px
      display flex
      margin-bottom 10px
      .content_left
        width 165px
        height 243px
        background-color #F9E9CF
        display flex
        flex-direction column
        justify-content center
        align-items center
        margin 0 3px 20px 20px
        p
          margin 0 30px 25px 0
        img
          width 123px
          height 123px
          margin-bottom 20px
      .content_right
        width 164px
        font-size 18px
        .right_top
          width 170px
          height 120px
          background-color #fbe2d3
          display flex
          .text
            width 80px
            display flex
            flex-direction column
            margin-left 10px
            span
              width 70px
              font-size 20px
              margin-top 10px
            .subtitle
              font-size 14px
          img
            width 97px
            height 97px
        .right_bottom
          width 170px
          height 120px
          background-color #feecc2
          display flex
          flex-direction column
          margin-top 3px
          span
            margin 10px 0 0 10px
          .subtitle
            font-size 14px
  .hotsale
    width 100%
    box-sizing border-box
    padding 15px
    background-color #fff
    h3
      width 100%
      height 50px
      font-size 16px
      line-height 50px
    .hot_top
      width 100%
      font-size 15px
      display flex
      .hot_top_left
        width 170px
        display flex
        background-color #f9f3e4
        margin 0 5px 5px 0
        .left_text
          width 100px
          display flex
          flex-direction column
          justify-content center
          margin-left 20px
          .hot-line
            width 25px
            height 2px
            background-color #333
            margin-top 10px
            border-radius 2px
        img
          width 100px
          height 100px
      .hot_top_right
        width 170px
        display flex
        margin 0 5px 5px 0
        background-color #ebeff6
        .right_text
          width 100px
          display flex
          flex-direction column
          justify-content center
          margin-left 20px
          .hot-line
            width 25px
            height 2px
            background-color #333
            margin-top 10px
            border-radius 2px
        img
          width 100px
          height 100px
    .host_list
      width 100%
      ul
        display flex
        flex-wrap wrap
        justify-content space-between
        li
          width 83px
          height 90px
          font-size 12px
          display flex
          flex-direction column
          justify-content center
          align-items center
          background-color #f5f5f5
          margin-bottom 5px
          img
            width 60px
            height 60px
  .timetobuy
    width 100%
    background-color #fff
    .title
      width 100%
      height 50px
      font-size 16px
      display flex
      justify-content space-between
      align-items center
      padding 0 20px
      box-sizing border-box
      .title_left
        width 50%
        height 50px
        display flex
        align-items center
        justify-content space-around
        .item
          display inline-block
          width 22px
          margin-right 5px
          color #fff
          font-size 12px
          text-align center
          background-color #333
          border-radius 3px
      .more
        float right
    .timetobuylist
      width 100%
      padding 10px
      box-sizing border-box
      margin-top 10px
      .list
        width 100%
        display flex
        flex-wrap wrap
        justify-content space-around
        li
          width 100px
          height 145px
          font-size 14px
          text-align center
          span
            margin-right 10px
            color #dd1a21
          img
            width 105px
            height 105px
            background-color #f5f5f5
          .list_discount
            font-size 10px
            text-decoration line-through
            color #ababab
  .newproduct
    width 100%
    background-color #fff
    margin-top 10px
    .title
      width 100%
      font-size 16px
      padding 20px
      box-sizing border-box
      display flex
      justify-content space-between
    .newproductlist
      width 100%
      .list
        width 100%
        display flex
        flex-wrap wrap
        justify-content space-around
        li
          width 105px
          height 190px
          display flex
          flex-direction column
          font-size 14px
          .introduce
            width 100%
            height 40px
            text-overflow ellipsis
            font-size 12px
          .price
            color #dd1a21
            font-size 18px
          .btn
            width 50px
            height 13px
            border 1px solid #dd1a21
            border-radius 8px
            font-size 11px
            line-height 13px
            text-align center
            color #dd1a21
            margin-top 3px
          img
            width 110px
            height 110px
            background-color #f5f5f5
  .bottomnav
    width 100%
    background-color #fff
    margin-top 10px
    .list
      width 100%
      display flex
      flex-wrap wrap
      justify-content space-around
      box-sizing border-box
      padding 15px
      li
        width 170px
        height 130px
        display flex
        flex-direction column
        font-size 16px
        background-color #f5f5f5
        margin-bottom 5px
        .list_top1
          font-size 18px
          margin 15px 0 0 15px
        .list_top2
          font-size 14px
          margin 5px 0 0 15px
        .list_img
          width 100%
          display flex
          justify-content space-between
          img
            width 75px
            height 75px
  .bottom
    width 100%
    height 125px
    background-color #414141
    font-size 16px
    margin-top 10px
    box-sizing border-box
    padding 26px 10px 15px
    .btn
      width 100%
      display flex
      justify-content center
      span
        width 85px
        height 30px
        text-align center
        line-height 30px
        border 1px solid #fff
        color #fff
      .down
        margin-right 25px
    .text
      margin-top 25px
      font-size 12px
      color #999
      text-align center
      p
        margin-top 5px
.clear
  height 50px
</style>