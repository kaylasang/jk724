<template>
 <div class="home">
   <!-- 头部搜索 -->
   <header class="header">
     <div class="h-img-box">
       <img class="menu-icon" src="../assets/logo.png" alt="" />
     </div>
     <router-link :to="{name:'search'}" tag="div" class="text-inp">
       <img class="search-icon" src="../assets/search.png" />
       <input type="text" placeholder="搜索商品" readonly/>
     </router-link>
   </header>
   <!-- 轮播图 -->
   <section class="swiper-box">
     <ul class="swiper-img-list">
       <li class="swiper-img-item">
         <img src="https://img.jk724.com/upload/201804/1804200012905710159181906323.jpg" alt="" />
       </li>
     </ul>
     <div class="swiper-text-box">
       <img class="main-tip" src="../assets/main-tip.png"/>
       <ul class="swiper-text-list">
        <li class="swiper-text-item">健康724全球发布会集锦</li>
      </ul>
     </div>
   </section>
   <!-- 菜单栏 -->
   <section class="menu-tab">
     <ul class="menu-list">
       <li @click="handleJump(menuItem.href)" class="menu-item" v-for="menuItem in menuList" :key="menuItem.id">
         <img :src="menuItem.src" alt="">
         <p>{{menuItem.text}}</p>
       </li>
     </ul>
   </section>
   <!-- 运动版块 -->
   <section class="sport-part">
     <ul class="sport-img-list">
       <li class="sport-img-item">
         <img src="https://wx.jk724.com/build/imgs/home-sport-bg.b11ac93.jpg" alt="">
       </li>
       <li class="sport-img-item">
         <img src="https://wx.jk724.com/build/imgs/health_right@2x.2cdf1cb.png" alt="">
       </li>
     </ul>
   </section>
   <!-- 健康管理师推荐 -->
   <section class="teacher-intro">
     <h2 class="main-title">
       健康管理师推荐
       <span class="more-intro" @click="handleJump('https://www.baidu.com')">更多</span>
     </h2>
     <ul class="teacher-list">
       <li @click="handleJump(teacherItem.href)" class="teacher-item" v-for="teacherItem in teacherList" :key="teacherItem.id">
         <img :src="teacherItem.src">
         <p class="teacher-name">{{teacherItem.name}}</p>
         <p class="t-goodat">{{teacherItem.text}}</p>
       </li>
     </ul>
   </section>
   <!-- 课程介绍 -->
   <section class="lesson-intro">
     <h2 class="main-title">
       精选健康课程
       <span class="more-intro" @click="handleJump('https://www.baidu.com')">更多</span>
     </h2>
     <ul class="lesson-list">
       <li @click="handleJump(lessonItem.href)" class="lesson-item" v-for="lessonItem in lessonList" :key="lessonItem.id">
         <img :src="lessonItem.src" alt="">
         <p class="lesson-main-text">{{lessonItem.text}}</p>
       </li>
     </ul>
   </section>
   <!-- 全球热卖 -->
   <section class="hot-goods-part">
     <h2 class="main-title">全球热卖</h2>
     <ul class="hot-goods-list">
       <li class="hot-goods-item" v-for="hotGoodItem in hotGoodList" :key="hotGoodItem.id">
         <img class="hot-goods-img" :src="hotGoodItem.src" alt="">
         <p class="hot-goods-title">{{hotGoodItem.text}}</p>
       </li>
     </ul>
   </section>
   <!-- 推荐商品 -->
   <section class="sale-goods-content">
     <!--商品分类 -->
    <h2 class="main-title">
       热卖商品
       <span class="more-intro" @click="handleJump('https://www.baidu.com')">更多</span>
     </h2>
     <!--商品列表 -->
      <ul class="sale-goods-list">
        <router-link tag="li" :to="{name:'goodsDetail',query:{goodsid:saleGoodItem.id},params:{id:124}}" class="sale-goods-item" v-for="saleGoodItem in saleGoodList" :key="saleGoodItem.id">
          <img :src="saleGoodItem.src" alt="">
          <p class="sale-goods-name">{{saleGoodItem.name}}</p>
          <p class="sale-goods-size">{{saleGoodItem.size}}</p>
          <p class="sale-goods-price">
            <span class="discount-price">{{saleGoodItem.disprice}}</span>
            <span class="ori-price">{{saleGoodItem.oriprice}}</span>
          </p>
        </router-link>
      </ul>
   </section>
   <!-- 底部图片 -->
   <div class="bottom-img-box">
     <img src="https://img.jk724.com/upload/201706/1706300000705710000100254991.png" alt="">
   </div>
  <my-footer></my-footer>
 </div>
</template>
<script>
import api from '@/api'
import myFooter from '@/components/footer'
export default {
  components: {
    myFooter
  },
  data () {
    return {
      // 菜单列表
      menuList: [],
      // 健康管理师推荐
      teacherList: [],
      // 课程推荐
      lessonList: [],
      // 全球热卖
      hotGoodList: [],
      // 热卖商品
      saleGoodList: []
    }
  },
  methods: {
    handleJump (href = '') {
      if (href.indexOf('http://') === 0 || href.indexOf('https://') === 0) {
        window.location.href = href
      } else {
        this.$router.push({name: href})
      }
    }
  },
  mounted () {
    api.home.getMenuList().then(resp => {
      this.menuList = resp.data.data.menuList
      // console.log('数据获取到了:', resp.data.data.menuList)
    })

    api.home.getTeacherList().then(resp => {
      this.teacherList = resp.data.data.teacherList
      // console.log('数据获取到了:', resp.data.data.teacherList)
    })

    api.home.getLessonList().then(resp => {
      this.lessonList = resp.data.data.lessonList
      // console.log('数据获取到了:', resp.data.data.lessonList)
    })

    api.home.getHotGoodList().then(resp => {
      this.hotGoodList = resp.data.data.hotGoodList
      // console.log('数据获取到了:', resp.data.data.hotGoodList)
    })

    api.home.getSaleGoodList().then(resp => {
      this.saleGoodList = resp.data.data.saleGoodList
      // console.log('数据获取到了:', resp.data.data.saleGoodList)
    })
  }
}
</script>
<style lang="less">
.home{
  background-color: #f2f2f2;
  // 头部搜索
  .header{
    width: 100%;
    height: 45px;
    // background-color: #f8f8f8;
    // margin-bottom: 8px;
    display: flex;
    .h-img-box{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 10%;
      padding: 5px;
      .menu-icon{
        width: 19px;
        height: 16px;
      }
    }
    .text-inp{
      flex: 1;
      border-radius: 3px;
      border: 1px solid #f2f2f2;
      // background-color: #f8f8f8;
      // background-color: #fff;
      position: relative;
      padding:  8px;
      img{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 12px;
        width: 15px;
        height: 15px;
      }
      input{
        height: 100%;
        width: 100%;
        border-radius: 4px;
        padding-left: 20px;
        box-sizing: border-box;
      }
    }
  }
  // 轮播图
  .swiper-box{
    // height: 279px;
    background-color: #fff;
    .swiper-img-list{
      width: 100%;
      margin-bottom: 10px;
      .swiper-img-item img{
        width: 100%;
      }
    }
    .swiper-text-box{
      position: relative;
      height: 49px;
      border-bottom: 10px solid #f2f2f2;
      display: flex;
      .main-tip{
        width: 73px;
        height: 15px;
        flex-basis: 60px;
        padding: 17px 12px;
      }
      &::before{
        content: "";
        position: absolute;
        left: 93px;
        bottom: 5px;
        width: 1px;
        height: 40px;
        background-color: #c8c7cc;
      }
      .swiper-text-list{
        flex: 1 1 auto;
        height: inherit;
        .swiper-text-item{
          line-height: 49px;
          font-size: 13px;
          color: #333;
        }
      }
    }
  }
  // 菜单栏
  .menu-tab{
    background-color: #fff;
    height: 99px;
    margin-bottom: 10px;
    .menu-list{
      display: flex;
      .menu-item{
        flex: 1;
        font-size: 12px;
        text-align: center;
        color: #666;
        padding: 12px 0;
        img{
          width: 45px;
          border-radius: 50%;
          margin-bottom: 5px;
        }
      }
    }
  }
  // 运动版块
  .sport-part{
    background-color: #fff;
    .sport-img-list{
      padding: 15px 12px;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      border-bottom: 10px solid #f2f2f2;
      .sport-img-item{
        flex: 1;
        margin: 0 2px;
        img{
          width: 100%;
          margin-right: 2px;
        }
      }
    }
  }
  // 营养管理师推荐
  .teacher-intro{
    background-color: #fff;
   margin-bottom: 10px;
    .main-title{
      line-height: 40px;
      font-size: 16px;
      color: #333;
      font-weight: bold;
      position: relative;
      text-align: left;
      padding: 0 10px;
      .more-intro{
        position: absolute;
        top: 0;
        right: 10px;
        color: #999;
        width: 3em;
        font-size: 13px;
        background: url(../assets/more.png) no-repeat right center;
        background-size: auto 12px;
        font-weight: normal;
      }
    }
    .teacher-list{
      height: 130px;
      border-top: 1px solid #e4e4e4;
      border-bottom: 1px solid #e4e4e4;
      display: flex;
      overflow-x: scroll;
      overflow-y: hidden;
      .teacher-item{
        border-right: 1px solid #e4e4e4;
        flex: 1 0 33.33%;
        text-align: center;
        img{
          width: 54px;
          border-radius: 50%;
          margin: 10px 0;
        }
        .teacher-name{
          font-size: 14px;
          font-weight: bold;
          color: #333;
          margin-bottom: 15px;
        }
        .t-goodat{
          font-size: 12px;
          color: #999;
          margin-bottom: 15px;
        }
      }
      &:nth-of-type(3){
        border-right: none;
      }
    }
  }
  // 课程介绍
  .lesson-intro{
    background-color: #fff;
    margin-bottom: 10px;
    .main-title{
      line-height: 40px;
      font-size: 16px;
      color: #333;
      font-weight: bold;
      position: relative;
      text-align: left;
      padding: 0 10px;
      .more-intro{
        position: absolute;
        top: 0;
        right: 10px;
        color: #999;
        width: 3em;
        font-size: 13px;
        background: url(../assets/more.png) no-repeat right center;
        background-size: auto 12px;
        font-weight: normal;
      }
    }
    .lesson-list{
      display: flex;
      margin-left: 5px;
      overflow-x: scroll;
      overflow-y: hidden;
      .lesson-item{
        flex: 0 0 50%;
        margin: 0 2px;
        img{
          width:100%;
          margin-bottom: 5px;
        }
        .lesson-main-text{
          font-size: 13px;
          color: #333;
        }
      }
    }
  }
  // 全球热卖
  .hot-goods-part{
    background-color: #fff;
    .main-title{
      line-height: 40px;
      font-size: 16px;
      color: #333;
      font-weight: bold;
      position: relative;
      text-align: left;
      padding: 0 10px;
    }
    .hot-goods-list{
      width: 100%;
      .hot-goods-item{
        width: 100%;
        .hot-goods-img{
          width: 100%;
          height: calc(100vm/750*400);
        }
        .hot-goods-title{
          font-size: 12px;
          color: #666;
          // white-space: nowrap;
          padding: 10px;
          line-height: 1.8em;
        }
      }
    }
  }
  // 推荐商品
  .sale-goods-content{
    margin-bottom: 10px;
     .main-title{
       background-color: #fff;
      line-height: 40px;
      font-size: 16px;
      color: #333;
      font-weight: bold;
      position: relative;
      text-align: left;
      padding: 0 10px;
      .more-intro{
        position: absolute;
        top: 0;
        right: 10px;
        color: #999;
        width: 3em;
        font-size: 13px;
        background: url(../assets/more.png) no-repeat right center;
        background-size: auto 12px;
        font-weight: normal;
      }
    }
    .sale-goods-list{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .sale-goods-item{
          flex: 1 0 40%;
          margin: 5px;
          padding: 5px;
          background-color: #fff;
          img{
            width: 100%;
          }
          .sale-goods-name{
            font-size: 12px;
          }
          .sale-goods-size{
            color: #666;
            font-size: 12px;
          }
          .sale-goods-price{
            .discount-price{
              color: #f55424;
            }
            .ori-price{
              color:  #b3b2b2;
              font-size: 12px;
              text-decoration: line-through;
            }
          }
        }
      }
  }
  // 底部图片
  .bottom-img-box{
    width: 100%;
    img{
      width: 100%;
    }
  }
  // 底部列表
  .fixed{
    position: fixed;
    top:0;
    left: 0;
  }
}
</style>
