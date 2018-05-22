import Axios from 'axios'
export default {
  getSearch (words) {
    return Axios({
      url: 'https://wxuat.jk724.com/api/HotSearchWords/' + words,
      method: 'GET'
    })
  },
  getHotSearch () {
    return Axios({
      url: 'https://www.easy-mock.com/mock/5b028442fd32380d69486d6b/search/hotSearch/list',
      method: 'GET'
    })
  }
}
