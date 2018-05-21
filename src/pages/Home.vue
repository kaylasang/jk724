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
       <li class="menu-item">
         <img src="../assets/recommend.png" alt="">
         <p>我要创业</p>
       </li>
        <li class="menu-item">
         <img src="../assets/expert.png" alt="">
         <p>健康解决方案</p>
       </li>
        <li class="menu-item">
         <img src="../assets/management.png" alt="">
         <p>用户指南</p>
       </li>
        <li class="menu-item">
         <img src="../assets/classify.png" alt="">
         <p>商品分类</p>
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
       <span class="more-intro">更多</span>
     </h2>
     <ul class="teacher-list">
       <li class="teacher-item">
         <img src="https://img.jk724.com/upload/201804/1804200007805710234113329176.jpg?x-oss-process=style/230" alt="">
         <p class="teacher-name">王旭峰工作室</p>
         <p class="t-goodat">营养男神</p>
       </li>
       <li class="teacher-item">
         <img src="https://img.jk724.com/upload/201804/1804200009705710075154320810.png?x-oss-process=style/230" alt="">
         <p class="teacher-name">梁芳利工作室</p>
         <p class="t-goodat">亲子营养师</p>
       </li>
        <li class="teacher-item">
         <img src="https://img.jk724.com/upload/201710/1710270007805710226120537189?x-oss-process=style/230" alt="">
         <p class="teacher-name">贾海燕工作室</p>
         <p class="t-goodat">专注母婴健康管理</p>
       </li>
     </ul>
   </section>
   <!-- 课程介绍 -->
   <section class="lesson-intro">
     <h2 class="main-title">
       精选健康课程
       <span class="more-intro">更多</span>
     </h2>
     <ul class="lesson-list">
       <li class="lesson-item">
         <img src="https://img.jk724.com/upload/201804/1804200001305710169184441008.jpg?x-oss-process=style/240_135" alt="">
         <p class="lesson-main-text">23个国家共同倡导的健康理念724在路上</p>
       </li>
        <li class="lesson-item">
         <img src="https://img.jk724.com/upload/201804/1804200000905710168184411071.jpg?x-oss-process=style/240_135" alt="">
          <p class="lesson-main-text">健康724,幸福每一天!</p>
       </li>
     </ul>
   </section>
   <!-- 全球热卖 -->
   <section class="hot-goods-part">
     <h2 class="main-title">全球热卖</h2>
     <ul class="hot-goods-list">
       <li class="hot-goods-item">
         <img class="hot-goods-img" src="https://img.jk724.com/upload/201804/1804200004605710131172038274.jpg" alt="">
         <p class="hot-goods-title">美洲独代品牌,跨境正品保证</p>
       </li>
       <li class="hot-goods-item">
         <img class="hot-goods-img" src="https://img.jk724.com/upload/201804/1804200004405710132172254037.jpg" alt="">
         <p class="hot-goods-title">与你相约,澳洲精致生活</p>
       </li>
       <li class="hot-goods-item">
         <img class="hot-goods-img" src="https://img.jk724.com/upload/201804/1804200003605710134172406886.jpg" alt="">
         <p class="hot-goods-title">15万营养师共同推荐的健康方案</p>
       </li>
       <li class="hot-goods-item">
         <img class="hot-goods-img" src="https://img.jk724.com/upload/201804/1804200004005710135172525659.jpg" alt="">
         <p class="hot-goods-title">道地原料,溯源直供</p>
       </li>
       <li class="hot-goods-item">
         <img class="hot-goods-img" src="https://img.jk724.com/upload/201804/1804200004605710136172635461.jpg" alt="">
         <p class="hot-goods-title">健康人生,品质有道</p>
       </li>
       <li class="hot-goods-item">
         <img class="hot-goods-img" src="https://img.jk724.com/upload/201805/1805040011405710503155733384.jpg" alt="">
         <p class="hot-goods-title">健康生活运动馆</p>
       </li>
     </ul>
   </section>
   <!-- 推荐商品 -->
   <section class="sale-goods-content">
     <!--商品分类 -->
    <ul class="sale-model-list">
      <li class="sale-model-item active">推荐</li>
      <li class="sale-model-item">所有商品</li>
      <li class="sale-model-item">自有品牌</li>
      <li class="sale-model-item">魅力女人</li>
      <li class="sale-model-item">基础营养</li>
     </ul>
     <!--商品列表 -->
      <ul class="sale-goods-list">
        <li class="sale-goods-item">
          <img src="https://img.jk724.com/upload/201803/1803300004805712216170057754.jpg?x-oss-process=style/230" alt="">
          <p class="sale-goods-name">白桃胶原蛋白果冻条5盒</p>
          <p class="sale-goods-size">白桃胶原蛋白果冻条5盒</p>
          <p class="sale-goods-price">
            <span class="discount-price">¥468.00</span>
            <span class="ori-price">¥490.00</span>
          </p>
        </li>
        <li class="sale-goods-item">
          <img src="https://img.jk724.com/upload/201803/1803300008705712222170132565.jpg?x-oss-process=style/230" alt="">
          <p class="sale-goods-name">芒果胶原蛋白果冻条5盒</p>
          <p class="sale-goods-size">芒果胶原蛋白果冻条5盒</p>
          <p class="sale-goods-price">
            <span class="discount-price">¥468.00</span>
            <span class="ori-price">¥490.00</span>
          </p>
        </li>
      </ul>
   </section>
   <!-- 底部图片 -->
   <div class="bottom-img-box">
     <img src="https://img.jk724.com/upload/201706/1706300000705710000100254991.png" alt="">
   </div>
   <footer class="footer">
     <ul class="bottom-main-list">
       <li class="bottom-main-item">
         <img src="../assets/home_not.png" alt="">
         <p>首页</p>
       </li>
       <li class="bottom-main-item">
         <img src="../assets/school_not.png" alt="">
         <p>健康课堂</p>
       </li>
        <li class="bottom-main-item">
         <img src="../assets/find_not.png" alt="">
         <p>发现</p>
       </li>
        <li class="bottom-main-item">
         <img src="../assets/shopping_not.png" alt="">
         <p>购物车</p>
       </li>
        <li class="bottom-main-item">
         <img src="../assets/my_not.png" alt="">
         <p>我的</p>
       </li>
     </ul>
   </footer>
 </div>
</template>
<script>
export default {
  data () {
    return {}
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
        img{
          width: 45px;
          padding: 15px 20px 10px 12px;
        }
      }
    }
  }
  //运动版块
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
      .teacher-item{
        border-right: 1px solid #e4e4e4;
        flex: 1;
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
      justify-content: space-around;
      margin-left: 5px;
      .lesson-item{
        flex: 1;
        margin: 0 2px;
        img{
          width:100%;
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
    .sale-model-list{
      display: flex;
      background-color: #fff;
      width: 100%;
      border-top: 1px solid #f2f2f2;
      border-bottom: 1px solid #f2f2f2;
      margin-bottom: 10px;
      .sale-model-item{
        flex: 1;
        margin: 0 2px;
        font-size: 14px;
        color: #4f4f4f;
        line-height: 45px;
        text-align: center;
      }
      .active{
        border-bottom: 2px solid #1aac19;
      }
    }
    .sale-goods-list{
        width: 100%;
        display: flex;
        .sale-goods-item{
          flex: 40%;
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
  //底部图片
  .bottom-img-box{
    width: 100%;
    img{
      width: 100%;
    }
  }
  //底部列表
  .footer{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid #ccc;
    .bottom-main-list{
      background-color: #fff;
      display: flex;
      width: 100%;
      padding-bottom: 5px;
      .bottom-main-item{
        flex: 1;
        text-align: center;
        img{
          width: 23px;
          margin: 8px auto 2px;
        }
        p{
          font-size: 10px;
        }
      }
    }
  }
  .fixed{
    position: fixed;
    top:0;
    left: 0;
  }
}
</style>
