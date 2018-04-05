import { getTopics } from '@/services/topics'

export default {
  namespaced: true,
  state: {
    topics: [],
  },
  mutations: {
    SET_TOPICS(state, payload) {
      state.topics = payload
    },
  },
  actions: {
    async getTopics({ state: { topics }, commit }, { refresh, ...rest }) {
      const delta = await getTopics(rest)
      commit('SET_TOPICS', refresh ? delta : [...topics, ...delta])
    },
  },
}
