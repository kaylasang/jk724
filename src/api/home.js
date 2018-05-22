import Axios from 'axios'
export default {
  // 获取首页菜单列表
  getMenuList () {
    return Axios({
      url: 'https://www.easy-mock.com/mock/5b028442fd32380d69486d6b/home/menu/list',
      method: 'GET'
    })
  },
  getTeacherList () {
    return Axios({
      url: 'https://www.easy-mock.com/mock/5b028442fd32380d69486d6b/home/teacher/list',
      method: 'GET'
    })
  },
  getLessonList () {
    return Axios({
      url: 'https://www.easy-mock.com/mock/5b028442fd32380d69486d6b/home/lesson/list',
      method: 'GET'
    })
  },
  getHotGoodList () {
    return Axios({
      url: 'https://www.easy-mock.com/mock/5b028442fd32380d69486d6b/home/hotGood/list',
      method: 'GET'
    })
  },
  getSaleGoodList () {
    return Axios({
      url: 'https://www.easy-mock.com/mock/5b028442fd32380d69486d6b/home/saleGood/list',
      method: 'GET'
    })
  },
  getSearch (words) {
    return Axios({
      url: 'https://wxuat.jk724.com/api/HotSearchWords/' + words,
      method: 'GET'
    })
  }
}
