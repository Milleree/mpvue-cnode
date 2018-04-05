<template>
  <div class="container">

    <topic-cell v-for="(t,i) in topics" :key="i" :topic="t"></topic-cell>

  </div>
</template>

<script>
import TopicCell from '@/components/TopicCell'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    TopicCell,
  },

  data() {
    return {
      page: 1,
    }
  },

  computed: {
    ...mapState({
      topics: state => state.topics.topics,
    }),
  },

  methods: {
    ...mapActions('topics', [
      'getTopics',
    ]),
    async getMore() {
      // 每隔一定数据量清空一次列表, 因为小程序限制数据量的传入
      const refresh = this.topics.length >= 100
      await this.getTopics({
        page: ++this.page,
        limit: 20,
        refresh,
      })
      // 回到顶部
      if (refresh) {
        wx.pageScrollTo({ scrollTop: 0, duration: 300 })
      }
    },
  },

  created() {
    this.getTopics({
      page: 1,
      limit: 20,
      refresh: true, // 是否刷新列表, false表示添加到列表
    })
  },

  onReachBottom() {
    this.getMore()
  },

  async onPullDownRefresh() {
    await this.getTopics({
      page: 1,
      limit: 20,
      refresh: true,
    })
    wx.stopPullDownRefresh()
  },
}
</script>
