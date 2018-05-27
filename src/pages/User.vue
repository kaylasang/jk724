<template>
    <div class="user">
      <header class="header">
        <p class="img-box">
          <img class="user-img" src="../assets/user.jpg" />
          <span class="user-name">张三</span>
        </p>
      </header>
      <section class="join-box">
        <div class="join-btn">
          <img class="join-logo" src="https://img.jk724.com/upload/201805/1805240009305710276113228346.png" />
          <p class="join-title">合伙人加盟</p>
        </div>
      </section>
      <section class="my-order">
        <div class="order-title">
          <span class="title">我的订单</span>
          <span class="more-order">查看更多订单></span>
        </div>
        <ul class="order-list">
          <li class="order-item">
            <img class="order-icon" src="../assets/pay.png" />
            <p class="order-name">待付款</p>
          </li>
          <li class="order-item">
            <img class="order-icon" src="../assets/u-deliver.png" />
            <p class="order-name">待发货</p>
          </li>
          <li class="order-item">
            <img class="order-icon" src="../assets/u-receive.png" />
            <p class="order-name">待收货</p>
          </li>
          <li class="order-item">
            <img class="order-icon" src="../assets/u-service.png" />
            <p class="order-name">退款/收货</p>
          </li>
        </ul>
        <ul class="user-service-list">
          <li class="user-service-item" v-for="userServiceItem in userServiceList" :key="userServiceItem.id">
            <img class="user-service-icon" :src="userServiceItem.src" />
            <p class="user-service-text">{{userServiceItem.text}}</p>
          </li>
        </ul>
      </section>
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
      userServiceList: []
    }
  },
  mounted () {
    api.user.getUserServiceList().then(resp => {
      this.userServiceList = resp.data.data.userServiceList
      console.log(resp.data.data.userServiceList)
    })
  }
}
</script>

<style lang="less">
.user{
  background-color: #f2f2f2;
  height: 100%;
  //头部
  .header{
    padding: 30px 15px;
    background-color: #1aad19;
    color: #fff;
    .img-box{
      .user-img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        vertical-align: middle;
      }
      .user-name{
        display: inline-block;
        width: 65%;
        margin-left: 20px;
        height: 50px;
        padding-top: 10px;
      }
    }
  }
  // 合伙人
  .join-box{
    margin-bottom: 10px;
    background-color: #fff;
    overflow: hidden;
    text-align: center;
    .join-btn{
      float: left;
      width: 20%;
      font-size: 12px;
      color: #666;
      padding: 6px 12px;
      border-right: 1px solid #f2f2f2;
      .join-logo{
        width: 24px;
      }
      .join-title{
        margin-top: 8px;
      }
    }
  }
  // 订单
  .my-order{
    .order-title{
      overflow: hidden;
      padding: 11px 15px;
      background-color: #fff;
      border-bottom: 1px solid #f2f2f2;
      .title{
        float: left;
        color: #333;
        font-size: 14px;
      }
      .more-order{
        float: right;
        color: #666;
        font-size: 12px;
      }
    }
    // 订单相关列表
    .order-list{
      display: flex;
      justify-content: space-around;
      background-color: #fff;
      .order-item{
        flex: 1;
        text-align: center;
        padding: 10px;
        .order-icon{
          width: 23px;
          height: 23px;
          margin-bottom: 3px;
        }
        &:nth-of-type(3){
          .order-icon{
            width: 38px
          }
        }
        .order-name{
          font-size: 12px;
          color: #666;
        }
      }
    }
    // 服务相关列表
    .user-service-list{
      background-color: #fff;
      margin-top: 10px;
      // border-bottom: 10px solid #f2f2f2;
      overflow: hidden;
      width: 100%;
      justify-content: space-around;
      .user-service-item{
        float: left;
        width: 25%;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
        // width: 68px;
        // padding: 6px 12px;
        box-sizing: border-box;
        text-align: center;
        .user-service-icon{
          padding-top: 10px;
          width: 24px;
          height: 24px;
        }
        .user-service-text{
          padding-bottom: 10px;
          margin-top: 8px;
          font-size: 12px;
          line-height: 15px;
          color: #666;
        }
      }
    }
  }
}
</style>
