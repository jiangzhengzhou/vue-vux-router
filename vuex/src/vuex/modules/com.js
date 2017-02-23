import * as types from '../mutations_types'
export default {
  state: {
    leftNavStatus: false,
    itemTab: [
      {'title': '全部', 'type': 'all'},
      {'title': '精华', 'type': 'good'},
      {'title': '分享', 'type': 'share'},
      {'title': '问答', 'type': 'ask'},
      {'title': '招聘', 'type': 'job'}
    ],
    initIndex: 0
  },
  mutations: {
    [types.COM_NAV_STATUS] (state, status) {
      state.leftNavStatus = status
    }
  },
  getters: {},
  actions: {
    setNavState: ({commit}, status) => {
      commit(types.COM_NAV_STATUS, status)
    }
  }
}
