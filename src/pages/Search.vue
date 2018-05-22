<template>
  <div class="search">
      <header class="header">
        <div class="h-img-box">
            <img class="menu-icon" src="../assets/logo.png" alt="" />
            </div>
        <div class="text-inp">
        <img class="search-icon" src="../assets/search.png" />
        <input type="text" v-model="keyword" placeholder="搜索商品  小熊糖、维生素、美白" />
        </div>
        <div @click="toHome" class="cancelBtn-box">
         <span class="cancelBtn">取消</span>
        </div>
      </header>
      <div class="searchwordsbox" v-if="searchKeywordsList.length > 0">
        <div class="searchKeywordsItem" @click="handleGoodJump(searchKeywordsItem.name)" v-for="(searchKeywordsItem,index) in searchKeywordsList" :key="index">{{searchKeywordsItem.name}}</div>
      </div>
      <section class="history" v-if="historyList.length > 0">
        <div class="h-title">
          历史搜索:
          <img @click="deleteHistory" class="del-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjcxMDU1RDgzMEFDMTFFN0I1MzRDM0E5QkRBMzcwQzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjcxMDU1RDkzMEFDMTFFN0I1MzRDM0E5QkRBMzcwQzIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNzEwNTVENjMwQUMxMUU3QjUzNEMzQTlCREEzNzBDMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNzEwNTVENzMwQUMxMUU3QjUzNEMzQTlCREEzNzBDMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm8kUe8AAAHCSURBVHja1JbNK4RBHMeflWexai1t9uSwaU/+AfEPyL8g5WIvXIWLk+IicXDmoBwoF4WDHOQlXCSKKK8H7ynssl6+U9+tMa3d2Z3xyK8+Nc/MM/Odmd9vfjO+eDzueG1Fzh9YcQF9ykEN8IEA8IMjcPVbK+0A12Af7IEtsAou2WZdNAiGQTdXWkXCFOznyq2KNgEXjINzcE9uwRQIgfZ8fToAapX2SvAGSkAj63bBMUjx25X6iZ1oAaf0fYL90yZ83yuLnjE4IqAVvIBJ8MD2zSyTX89QF+Y4ItA2wA41vq10TCpXM1C6DE/HJ6gDDTo+PaGvTO0GXOgGkl9jwAjJZa+6omX0b9p8DCbZxNHpUepc0yMTlMoiIKaV9lJlIuJILZmKppTUF8oxlkgUFaaiT1I54Fg03YzkeiUqCz16JRpQDvn/vsR1RUUkJ3P8I5L7h82Xwwwva3Ui8qTnwYGJaEL5viOyTSjp8pnXXsGiSY1d2NYY35+PT8UdGrUQM9FMD7afRBdBM4gZCMY4xoLu9i6DWbAChsAafaZj4nzX8wEwl49o+mbpBG2gj0lfx8TkDsEgGM2UWLKJvoMRYtW+BBgAiOdVPRI0ty0AAAAASUVORK5CYII="/>
        </div>
        <div class="h-content">
          <span v-for="(historyItem, index) in  historyList" :key="index">{{historyItem}}</span>
        </div>
      </section>
      <section class="hot-search" v-if="hsList.length > 0">
        <div class="hs-title">
          热搜
        </div>
        <div class="hs-content">
          <span v-for="hsItem in hsList" :key="hsItem.id">{{hsItem.name}}</span>
        </div>
      </section>
  </div>
</template>
<script>
import api from '@/api'
import storage from '@/service/localstorage'
export default {
  data () {
    return {
      keyword: '',
      searchKeywordsList: [],
      historyList: [],
      hsList: []
    }
  },
  methods: {
    toHome () {
      this.$router.go(-1)
    },
    handleGoodJump (val) {
      // 存储历史搜索记录
      let historyList = storage.getSearchWords()
      // 去重
      if (!historyList.includes(val)) {
        historyList.push(val)
        storage.setSearchWords(historyList)
      }
      // 跳转目标页面
      location.href = 'https://wxuat.jk724.com/product-brand?keyword=' + val
    },
    deleteHistory () {
      this.historyList = []
      storage.delSearchWords()
    }
  },
  watch: {
    keyword: function (val, oldVal) {
      if (val === '') {
        this.searchKeywordsList = []
        return ''
      } else {
        api.search.getSearch(val).then(resp => {
          // console.log(resp)
          this.searchKeywordsList = resp.data.result
        })
      }
    }
  },
  mounted () {
    this.historyList = storage.getSearchWords()
    api.search.getHotSearch().then(resp => {
      this.hsList = resp.data.data.hsList
      // console.log(resp.data.data.hsList)
    })
  }
}
</script>
<style lang="less" scoped>
.search{
    // 头部搜索
    background-color: #fff;
  .header{
    width: 100%;
    // height: 45px;
    background-color: #f8f8f8;
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
        height: 30px;
        width: 100%;
        border-radius: 4px;
        padding-left: 25px;
        box-sizing: border-box;
      }
    }
    .cancelBtn-box{
      flex-basis: 10%;
      .cancelBtn{
        line-height: 1.8;
        font-size: 14px;
        color: #666;
        margin-top: 12px;
        display: inline-block;
      }
    }
  }
  .searchwordsbox{
    z-index: 999;
    background-color: #fff;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    min-height: 500px;
    padding: 0 10px;
    .searchKeywordsItem{
      line-height: 40px;
      font-size: 16px;
      color: #666;
    }
  }
  .history{
    padding: 0 5px;
    // background-color: #fff;
    .h-title{
      width: 100%;
      margin-top: 10px;
      border-bottom: 1px solid #e4e4e4;
      color: #666;
      font-size: 14px;
      line-height: 40px;
      .del-icon{
        width: 15px;
       float: right;
       margin-top: 13px;
      }
    }
    .h-content{
      margin-top: 10px;
      width: 100%;
      span{
        display: inline-block;
        background-color: #f2f2f2;
        color: #333;
        border-radius: 15px;
        font-size: 12px;
        padding: 5px 8px;
        margin: 2% 1%;
      }
    }
  }
  .hot-search{
    padding: 0 5px;
    // background-color: #fff;
    .hs-title{
      margin-top: 10px;
      border-bottom: 1px solid #e4e4e4;
      color: #666;
      font-size: 14px;
      line-height: 40px;
    }
    .hs-content{
      margin-top: 10px;
      width: 100%;
      span{
        display: inline-block;
        background-color: #f2f2f2;
        color: #333;
        border-radius: 15px;
        font-size: 12px;
        padding: 5px 8px;
        margin: 2% 1%;
      }
    }
  }
}
</style>
