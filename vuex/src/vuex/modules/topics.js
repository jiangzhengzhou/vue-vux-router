import * as api from '../../fetch/api'

export default {
  state: {},
  mutations: {},
  getters: {},
  // actions是发送http请求的唯一地方
  actions: {
    getTopicList: ({commit}, params) => {
      api.TopicsList(`?tab=${state.searchKey.tab}&page=${state.searchKey.page}&limit=20`)
    }
  }
}
