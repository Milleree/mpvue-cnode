<style lang="less">
.topic_header {
  font-size: 28rpx;
  padding: 0 15rpx;
  .topic_full_title {
    font-size: 44rpx;
    font-weight: 700;
    margin: 16rpx 0;
    display: inline-block;
    vertical-align: bottom;
    line-height: 130%;
  }
  .changes {
    font-size: 24rpx;
    color: #838383;
    border-bottom: 1rpx solid #e5e5e5;
    margin-bottom: 20rpx;
    text::before {
      content: "·";
      font-weight: 900;
    }
  }
}
</style>

<template>
  <div>
    <div class="header topic_header">
      <text class="topic_full_title">
        <text class="label active" v-if="topic.top">置顶</text>
        <text class="label active" v-else-if="topic.good">精华</text>
        <text class="label" v-else-if="topic.tab==='ask'">问答</text>
        <text class="label" v-else-if="topic.tab==='share'">分享</text>
        {{topic.title}}
      </text>
      <div class="changes">
        <text> 发布于 {{createAt}} </text>
        <text> 作者 {{topic.author.loginname}} </text>
        <text> {{topic.visit_count}} 次浏览 </text>
        <br>
        <text> 最后一次编辑是{{lastReplyAt}} </text>
      </div>
    </div>
    <wxParse :content="topic.content" />
  </div>
</template>

<script>
import wxParse from 'mpvue-wxparse'
import { getDetail } from '@/services/topics'
import { timeAgo } from '@/utils/filters'
export default {
  components: {
    wxParse,
  },
  data() {
    return {
      topic: {
        author: {
          loginname: '',
        },
        title: '',
        content: '',
        create_at: '',
        last_reply_at: '',
        visit_count: 0,
      },
    }
  },
  computed: {
    createAt() {
      return timeAgo(this.topic.create_at)
      // return formatDate(this.topic.create_at, 'yyyy/M/d')
    },
    lastReplyAt() {
      return timeAgo(this.topic.last_reply_at)
      // return formatDate(this.topic.last_reply_at)
    },
  },
  async onLoad({ id }) {
    this.topic = await getDetail({ id })
  },
}
</script>
