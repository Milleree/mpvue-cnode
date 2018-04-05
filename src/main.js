import Vue from 'vue'
import App from './App'
import $wx from 'minapp-api-promise'
import requestIntercepter from './utils/requestIntercepter'
import store from './store'

// 初始化插件
$wx.intercept('request', requestIntercepter)
// 在每个vue组件里使用this.$wx, this.$store
Vue.use({
  install(Vue, options) {
    Vue.prototype.$store = store
    // 不建议在组件内使用，推荐写在src/services目录下
    // Vue.prototype.$wx = $wx
  },
})

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/index'],
    window: {
      navigationBarBackgroundColor: '#eee',
      backgroundTextStyle: 'light',
      navigationBarTitleText: 'CNode社区',
      backgroundColor: '#eee',
      navigationBarTextStyle: 'black',
      enablePullDownRefresh: true,
    },
  },
}
