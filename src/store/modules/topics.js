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
    async getTopics({ state: { topics }, commit }, { page, limit, actionType }) {
      const delta = await getTopics({ page, limit })
      commit('SET_TOPICS', actionType === 'init' ? delta : [...topics, ...delta])
    },
  },
}
