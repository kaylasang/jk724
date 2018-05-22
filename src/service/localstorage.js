export default {
  // 存储搜索记录
  setSearchWords (val) {
    localStorage.setItem('histroySearch', JSON.stringify(val))
  },
  // 获取搜索记录
  getSearchWords () {
    return JSON.parse(localStorage.getItem('histroySearch')) || []
  },
  // 删除搜索记录
  delSearchWords () {
    localStorage.removeItem('histroySearch')
  }
}
