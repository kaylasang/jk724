<template>
  <footer class="footer">
     <ul class="bottom-main-list">
       <li class="bottom-main-item" @click="handleJump('home')">
         <img src="../assets/home_not.png" />
         <p>首页</p>
       </li>
        <li class="bottom-main-item" @click="handleJump('shopcar')">
         <img src="../assets/shopping_not.png" />
         <p>购物车</p>
       </li>
        <li class="bottom-main-item" @click="handleJump('user')">
         <img src="../assets/my_not.png" />
         <p>我的</p>
       </li>
     </ul>
   </footer>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handleJump (urlName) {
      this.$router.push({name: urlName})
    }
  }
}
</script>

<style lang="less">
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
</style>
