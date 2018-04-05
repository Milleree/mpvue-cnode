// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/userInfo'
import topics from './modules/topics'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    userInfo,
    topics,
  },
})

export default store
