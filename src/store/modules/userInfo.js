import $wx from 'minapp-api-promise'
import { login } from '@/services/user'

export default {
  namespaced: true,
  state: {
    'avatar_url': '',
    loginname: '',
    id: '',
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      Object.assign(state, payload)
    },
  },
  actions: {
    async getUserInfo({ commit }, { storagedaccesstoken }) {
      let accesstoken = storagedaccesstoken
      if (!storagedaccesstoken) {
        const { confirm } = await $wx.showModal({
          title: '如何获取AccessToken？',
          content: '登录网页后，在设置页面可以看到自己的AccessToken。',
          confirmText: '准备好了',
        })
        if (!confirm) return
        const { result } = await $wx.scanCode()
        accesstoken = result
        wx.setStorageSync('accesstoken', accesstoken)
      }
      // console.log(accesstoken);
      const { success, ...userInfo } = await login({ accesstoken })
      success && commit('SET_USER_INFO', userInfo)
    },
  },
}
