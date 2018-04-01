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
      if (this.page >= 10) return
      this.getTopics({
        page: ++this.page,
        limit: 20,
      })
    },
  },

  created() {
    this.getTopics({
      page: 1,
      limit: 20,
      actionType: 'init', // 'init'覆盖列表（刷新）, 其余情况表示添加到列表
    })
  },
}
</script>
