import { getTopics } from '@/services/topics'

export default {
  state: {
    topics: [],
  },
  mutations: {
    SET_TOPICS(state, payload) {
      state.topics = payload
    },
  },
  actions: {
    async getTopics({ state: { topics }, commit }, options) {
      const delta = await getTopics({ page: 1 })
      commit('SET_TOPICS', [...topics, ...delta])
    },
  },
}
