import $wx from 'minapp-api-promise'
export default {
  state: {
    avatarUrl: '',
    nickName: '',
    gender: 1,
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      Object.assign(state, payload)
    },
  },
  actions: {
    async getUserInfo({ commit }) {
      // 原生方法
      // wx.login({
      //   success: () => {
      //     wx.getUserInfo({
      //       success: (res) => {
      //         userInfo = res.userInfo
      //       }
      //     })
      //   }
      // })

      // Promise写法
      // $wx.login()
      //   .then($wx.getUserInfo)
      //   .then(({ userInfo }) => {
      //     userInfo = userInfo
      //   })

      // async写法
      await $wx.login()
      const { userInfo } = await $wx.getUserInfo()
      commit('SET_USER_INFO', userInfo)
    },
  },
}
