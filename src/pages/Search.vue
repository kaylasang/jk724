<template>
  <div class="search">
      <header class="header">
        <div class="h-img-box">
            <img class="menu-icon" src="../assets/logo.png" alt="" />
            </div>
        <div class="text-inp">
        <img class="search-icon" src="../assets/search.png" />
        <input type="text" placeholder="搜索商品" />
        </div>
        <div class="cancelBtn-box">
         <span class="cancelBtn">取消</span>
        </div>
      </header>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.search{
    // 头部搜索
    background-color: red;
  .header{
    width: 100%;
    // height: 45px;
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
    .cancelBtn-box{
      flex-basis: 10%;
      .cancelBtn{
        line-height: 1.8;
        font-size: 14px;
        color: #666;
        margin-top: 5px;
        display: inline-block;
      }
    }
  }
}
</style>
