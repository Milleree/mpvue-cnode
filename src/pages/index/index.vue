<style lang="less">
.container {
  height: 100%;
}
.topics {
  height: 100%;
}
</style>
<template>
  <div class="container">

    <scroll-view :scroll-y="true" @scrolltolower="getMore" class="topics">
      <topic-cell v-for="(t,i) in topics" :key="i" :topic="t"></topic-cell>
    </scroll-view>

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
    ...mapActions([
      'getTopics',
    ]),
    getMore(e) {
      const refresh = this.topics.length >= 100 // 每隔一定数据量清空一次列表, 因为小程序限制数据量的传入
      this.getTopics({
        page: ++this.page,
        limit: 20,
        refresh,
      })
      // .then(() => {
      //   if (refresh) {
      //     wx.pageScrollTo({
      //       scrollTop: 0,
      //       duration: 300,
      //     })
      //   }
      // })
    },
  },

  created() {
    this.getTopics({
      page: 1,
      limit: 20,
      refresh: true, // 是否刷新列表, false表示添加到列表
    })
  },
}
</script>
