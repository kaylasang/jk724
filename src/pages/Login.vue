<template>
  <div class="login">
    <header class="header">
      <div class="back-box">
        <img src="../assets/back.svg" />
      </div>
      <div class="title">手机号登录</div>
    </header>
    <section class="user-login">
      <div class="codenum-box">
        <label class="code-title">手机号</label>
        <input type="tel" maxlength="11" placeholder="请输入手机号">
      </div>
      <div class="codenum-box">
        <label class="code-title">验证码</label>
        <input type="text">
        <span class="codenum">获取验证码</span>
      </div>
      <div class="confirm-box">
      <p class="lost-codenum">收不到短信验证码?</p>
      <div class="confirm-btn">确认</div>
    </div>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="less">
.login{
  background-color: #f2f2f2;
  .header{
    width: 100%;
    height: 50px;
    margin-bottom: 8px;
    background-color: #fff;
    display: flex;
    .back-box{
      flex-basis: 8%;
      img{
        width: 100%;
      }
    }
    .title{
      flex: 1;
      text-align: center;
      line-height: 50px;
    }
  }
  .user-login{
    background-color: #fff;
    .codenum-box{
      border-bottom: 1px solid #e4e4e4;
      height: 49px;
      line-height: 49px;
      padding: 0 15px;
      .code-title{
        color: #333;
        width: 23%;
      }
      .codenum{
        display: inline-block;
        height: 35px;
        line-height: 35px;
        border-radius: 2px;
        background-color:  #bae6ba;
        font-size: 14px;
        color: #fff;
        margin-left: -6px;
        padding: 0 5px;
      }
      input{
        outline: medium;
        margin: 0;
        width: 60%;
        height: 35px;
        font-size: 14px;
        margin-left: 5px;
      }
    }
    .confirm-box{
      border-top: 6px solid #f2f2f2;
      .lost-codenum{
        text-align: right;
        font-size: 12px;
        color: #1aad19;
        padding-top: 15px;
        padding-right: 15px;
        height: 30px;
        opacity: .5;
      }
      .confirm-btn{
        margin-top: 20px;
        width: 90%;
        background-color: #bae6ba;
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        text-align: center;
        color: #fff;
        margin-left: 5%;
        border-radius: 2px;
      }
    }
  }
}
</style>
