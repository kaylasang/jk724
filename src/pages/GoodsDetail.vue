<template>
    <div class="good-content">
<header class="header"> <!-- 头部 -->
    <div @click="toHome" class="backBtn-box">
        <img src="../assets/back.svg" class="back-icon" alt="">
    </div>
    <p class="good-name">白桃胶原蛋白果冻条5盒</p>
</header>
<!-- 返回主页logo -->
<img class="home-back-btn" src="../assets/homeBack.png"/>
<!-- 轮播图 -->
<section class="good-swiper">
  <ul class="good-sw-list">
      <li class="good-sw-item" v-for="goodswItem in swiperImg" :key="goodswItem.id">
          <img  :src="'https://img.jk724.com'+goodswItem.url" alt="">
      </li>
  </ul>
  <div class="good-detail">
    <p class="good-name">白桃胶原蛋白果冻条5盒</p>
    <p class="good-l-e"><span class="good-local">中国</span>·<span class="good-effect">可以吃的肌肤修护素</span></p>
    <p class="good-price"><span class="p-title">零售价:</span><span class="g-price">¥468.00</span></p>
  </div>
</section>
<!-- 包邮 -->
<div class="trans-p">
  <span class="trans-t">邮费:</span><span class="trans-c">包邮</span>
  </div>
  <!-- 促销 -->
  <div class="sale-prom">
    <p class="sale-act">
      <span class="sale-mark">促销</span>
      国内商品满298包邮
    </p>
    <p class="sale-act">
      <span class="sale-mark">促销</span>
      该商品不能使用优惠券
    </p>
    <p class="good-prom">
      <img class="pro-icon" src="../assets/true-icon.png" />
      <span class="pro-text">正品保障</span>
      <img class="pro-icon" src="../assets/time-icon.png" />
      <span class="pro-text">24小时发货</span>
    </p>
  </div>
  <!-- 公益活动 -->
  <div class="benefit-plan">
    <div class="plan-item">
      <img class="plan-img" src="https://wx.jk724.com/build/imgs/title.f127159.png" />
    </div>
    <div class="plan-item">
      <span class="square-point"></span>
      该商品参与了公益宝贝计划,724承诺每笔成交将为国际自我保健基金会捐款1元
    </div>
    <div class="plan-item">
      <span class="square-point"></span>
      善款用途简介:开展自我保健科普讲座、养生书籍、运动器械等。
    </div>
  </div>
  <div class="up-loading-more">
    <img src="../assets/up-load-more.png" />
  </div>
  <!-- 商品详情 -->
  <div class="good-img-show">
    <p>
      <img src="https://img.jk724.com/upload/201804/1804120002105710219114043681.jpg" />
    </p>
    <p>
      <img src="https://img.jk724.com/upload/201803/1803300007105712480175334337.jpg" />
    </p>
    <p>
      <img src="https://img.jk724.com/upload/201803/1803300009205712481175334787.jpg" />
    </p>
    <p>
      <img src="https://img.jk724.com/upload/201803/1803300010805712485175354539.jpg" />
    </p>
    <p>
      <img src="https://img.jk724.com/upload/201803/1803300004905712486175358888.jpg" />
    </p>
    <p>
      <img src="https://img.jk724.com/upload/201803/1803300009205712488175405749.jpg" />
    </p>
    <p>
      <img src="https://img.jk724.com/upload/201803/1803300009905712490175409675.jpg" />
    </p>
    <p>
      <img src="https://img.jk724.com/upload/201803/1803300009205712491175414357.jpg" />
    </p>
    <p>
      <img src="https://img.jk724.com/upload/201803/1803300006805712492175418313.jpg" />
    </p>
    <p>
      <img src="https://img.jk724.com/upload/201803/1803300010805712494175424915.jpg" />
    </p>
  </div>
  <!-- 产品推荐 -->
  <div class="products-recommend">
    <div class="title">
      <img src="../assets/products-recommend.jpg" />
    </div>
    <ul class="products-list">
      <li class="products-item" v-for="productsItem in productsList" :key="productsItem.id">
        <div class="products-img">
          <img :src="productsItem.src" />
        </div>
        <p class="pro-title">{{productsItem.title}}</p>
        <p class="pro-desc">{{productsItem.desc}}</p>
        <p class="pro-price">{{productsItem.price}}</p>
      </li>
    </ul>
  </div>
  <footer class="footer">
    <ul class="service-list">
      <li class="service-item">
        <img src="../assets/service.png" />
        <p class="service-text">客服</p>
      </li>
      <li class="service-item">
        <img src="../assets/collect.png" />
        <p class="service-text">收藏</p>
      </li>
      <li class="service-item">
        <img src="../assets/shopcar.png" />
        <p class="service-text">购物车</p>
      </li>
    </ul>
    <div class="shoping-text">
      <span class="service-text add">加入购物车</span>
      <span class="service-text shopping">立即购买</span>
    </div>
  </footer>
    </div>

</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      swiperImg: [
        {
          id: 'goodsw1',
          url: '/upload/201803/1803300004805712216170057754.jpg?x-oss-process=style/750'
        },
        {
          id: 'goodsw2',
          url: '/upload/201803/1803300004805712217170100907.jpg?x-oss-process=style/750'
        },
        {
          id: 'goodsw3',
          url: '/upload/201803/1803300006905712219170104910.jpg?x-oss-process=style/750'
        },
        {
          id: 'goodsw4',
          url: '/upload/201803/1803300008705712220170107523.jpg?x-oss-process=style/750'
        },
        {
          id: 'goodsw5',
          url: '/upload/201803/1803300006005712221170110448.jpg?x-oss-process=style/750'
        }
      ],
      // 产品推荐列表
      productsList: []
    }
  },
  methods: {
    toHome () {
      this.$router.go(-1)
    }
  },
  mounted () {
    api.goodContent.getProductsList().then(resp => {
      this.productsList = resp.data.data.productsList
      console.log(resp.data.data.productsList)
    })
  }
}
</script>
<style lang="less" scoped>
.good-content{
    background-color: #f2f2f2;
    padding-bottom: 60px;
    //头部
    .header{
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
        background-color: #fff;
        border-bottom: 1px solid #e6e4e4;
        display: flex;
        .backBtn-box{
            flex-basis: 8%;
            background-color: #fff;
            padding: 8px 0;
            img{
                width: 20px;
                background-color: #fff;
            }
        }
        .good-name{
            flex-basis: 1;
            text-align: center;
           font-weight: normal;
            text-overflow: ellipsis;
            line-height: 44px;
            font-size: 17px;
        }
    }
    // 返回主菜单按钮
    .home-back-btn{
      width: 50px;
      position: fixed;
      right: 10px;
      bottom: 88px;
    }
    //轮播图
    .good-swiper{
      width: 100%;
      overflow: hidden;
     .good-sw-list{
       width: 500%;
       display: flex;
       .good-sw-item{
         flex: 1;
         img{
           width: 100%;
         }
       }
     }
     .good-detail{
       margin-bottom: 10px;
       background-color: #fff;
       padding: 0 10px;
       .good-name{
         padding-top: 5px;
         line-height: 1.5;
         font-size: 16px;
         color: #333;
       }
       .good-l-e{
         color: #666;
         font-size: 14px;
         line-height: 1.5;
       }
       .good-price{
         padding: 5px 0;
         .p-title{
           font-size: 12px;
           color: #666;
         }
         .g-price{
           color: #f65426;
           font-size: 22px;
         }
       }
     }
    }
    //包邮区
    .trans-p{
      padding: 0 10px;
      margin-bottom: 3px;
      background-color: #fff;
      span{
        display: inline-block;
        line-height: 45px;
        font-size: 13px;
      }
      .trans-t{
        color: #666;
      }
      .trans-c{
        color: #333;
        text-indent: 4px;
      }
    }
    //促销活动
    .sale-prom{
    .sale-act{
      font-size: 12px;
      line-height: 30px;
      color: #333;
      padding: 0 10px;
      .sale-mark{
        display: inline-block;
        font-size: 10px;
        border: 1px solid #ff2424;
        border-radius: 3px;
        padding: 2px 5px;
        margin-right: 5px;
        color: #ff2424;
        line-height: 1;
      }
    }
    .good-prom{
      padding: 0 10px;
      .pro-icon{
        width: 20px;
      }
      .pro-text{
        display: inline-block;
        margin-right: 20px;
        color: #f55424;
        font-size: 14px;
      }
    }
    }
    // 公益
    .benefit-plan{
      background-color: #fff;
      color: #618fb4;
      font-size: 12px;
      padding: 0 10px;
      .plan-item{
        .plan-img{
          width: 100%;
        }
        .square-point{
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 1px;
          background-color: #333;
        }
      }
    }
    // 上拉加载更多
    .up-loading-more{
      img{
        width: 100%;
      }
    }
    // 商品介绍
    .good-img-show{
      img{
        width: 100%;
      }
    }
    // 商品推荐
    .products-recommend{
      .title{
        img{
          width: 100%;
        }
      }
      .products-list{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-around;
        .products-item{
          margin-top: 4px;
          flex: 0 0 48%;
          background-color: #fff;
          padding-bottom: 20px;
          img{
            width: 100%;
          }
          .pro-title{
            font-size: 14px;
            color: #333;
            height: 25px;
            padding: 5px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .pro-desc{
            font-size: 12px;
            padding: 0 5px;
            height: 39px;
            line-height: 20px;
            color: #666;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .pro-price{
            color: #f55424;
            font-size: 16px;
            padding: 0 5px;
          }
        }
      }
    }
    //底部购物模块
    .footer{
      width: 100%;
      display: flex;
      position: fixed;
      bottom: 0;
      left: 0;
      justify-content: space-around;
      background-color: #fff;
      margin-top: 10px;
      .service-list{
        flex: 1;
        overflow: hidden;
        .service-item{
          float: left;
          padding: 5px 15px;
          text-align: center;
          img{
            width: 18px;
            height: 18px;
            margin-bottom: 5px;
          }
          .service-text{
            font-size: 12px;
          }
        }
      }
    .shoping-text{
      flex: 1;
      font-size: 0;
      text-align: center;
      .add{
        width: 50%;
        display: inline-block;
        background-color: #5fd25f;
        font-size: 14px;
        color: #fff;
        line-height: 50px;
        }
        .shopping{
          width: 50%;
          display: inline-block;
          font-size: 14px;
          color: #fff;
          line-height: 50px;
          background-color: #1aad19;
        }
      }
    }
}
</style>
