import Axios from 'axios'
export default {
  getSearch (words) {
    return Axios({
      url: 'https://wxuat.jk724.com/api/HotSearchWords/' + words,
      method: 'GET'
    })
  }
}
