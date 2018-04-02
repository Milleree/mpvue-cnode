<style lang="less">
.topic_header {
  font-size: 28rpx;
  padding: 0 15rpx;
  .label {
    font-size: 38rpx;
    vertical-align: middle;
    line-height: 130%;
  }
  .topic_title {
    font-size: 44rpx;
    font-weight: 700;
    vertical-align: middle;
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
      <div>
        <text class="label active" v-if="topic.top">置顶</text>
        <text class="label active" v-else-if="topic.good">精华</text>
        <text class="label" v-else-if="topic.tab==='ask'">问答</text>
        <text class="label" v-else-if="topic.tab==='share'">分享</text>
        <text class="topic_title">{{topic.title}}</text>
      </div>
      <div class="changes">
        <text> 发布于 {{createAt}} </text>
        <text> 作者 {{topic.author.loginname}} </text>
        <text> {{topic.visit_count}} 次浏览 </text>
        <br>
        <text> 最后一次编辑是{{lastReplyAt}} </text>
      </div>
    </div>

    <wxParse :content="topic.content" />

    <div class="replies panel">
      <h4 class="header">{{topic.replies.length}} 回复</h4>
      <reply-cell v-for="(reply,i) in topic.replies" :key="i" :reply="reply" :lou="i+1" />
    </div>

  </div>
</template>

<script>
import wxParse from 'mpvue-wxparse'
import ReplyCell from '@/components/ReplyCell'
import { getDetail } from '@/services/topics'
import { timeAgo } from '@/utils/filters'
export default {
  components: {
    wxParse,
    ReplyCell,
  },
  data() {
    return {
      topic: {
        id: '',
        author: {
          loginname: '',
        },
        title: '',
        content: '',
        'create_at': '',
        'last_reply_at': '',
        'visit_count': 0,
        replies: [],
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
  async onPullDownRefresh() {
    this.topic = await getDetail({ id: this.topic.id })
    wx.stopPullDownRefresh()
  },
}
</script>
