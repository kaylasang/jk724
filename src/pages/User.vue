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
          <span class="more-order">查看更多订单</span>
        </div>
      </section>
    </div>
</template>
<style lang="less">
.user{
  background-color: #f2f2f2;
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
  // .my-order
}
</style>
