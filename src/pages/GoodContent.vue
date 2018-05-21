<template>
    <div class="good-content">
<header class="header"> <!-- 头部 -->
    <div @click="toHome" class="backBtn-box">
        <img src="../assets/back.svg" class="back-icon" alt="">
    </div>
    <p class="good-name">白桃胶原蛋白果冻条5盒</p>
</header>
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
  <div class=""></div>
  <footer class="footer"></footer>
    </div>

</template>

<script>
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
      ]
    }
  },
  methods: {
    toHome () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.good-content{
    background-color: #f2f2f2;
    //头部
    .header{
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
            flex-basis: 92%;
            text-align: center;
           font-weight: normal;
            text-overflow: ellipsis;
            line-height: 44px;
            font-size: 17px;
        }
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
}
</style>
