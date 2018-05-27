import Axios from 'axios'
export default {
  getUserServiceList () {
    return Axios({
      url: 'https://www.easy-mock.com/mock/5b028442fd32380d69486d6b/user/userservice/list',
      method: 'GET'
    })
  }
}
