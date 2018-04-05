<style lang="less" scoped>
@import url("../../utils/vars");
.tabs {
  padding: 20rpx;
  .label {
    font-size: 30rpx;
    color: @maincolor;
    background: transparent;
    &.active {
      color: white;
      background: @maincolor;
    }
  }
}
</style>


<template>
  <div class="container">
    <div class="tabs">
      <text class="label" v-for="(title,tab) in tabs" :key="tab" :class="{'active':currentTab===tab}" @click="switchTab(tab)">{{title}}</text>
    </div>

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
      currentTab: 'all',
      tabs: {
        'all': '全部',
        'good': '精华',
        'share': '分享',
        'ask': '问答',
        'job': '招聘',
      },
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
        tab: this.currentTab,
        refresh,
      })
      // 回到顶部
      if (refresh) {
        wx.pageScrollTo({ scrollTop: 0, duration: 300 })
      }
    },
    async switchTab(tab) {
      await this.getTopics({
        page: this.page = 1,
        refresh: true,
        tab: this.currentTab = tab,
      })
    },
  },

  created() {
    this.getTopics({
      page: 1,
      tab: this.currentTab,
      refresh: true, // 是否刷新列表, false表示添加到列表, 不能用page===1代替
    })
  },

  onReachBottom() {
    this.getMore()
  },

  async onPullDownRefresh() {
    await this.getTopics({
      page: 1,
      tab: this.currentTab,
      refresh: true,
    })
    wx.stopPullDownRefresh()
  },
}
</script>
