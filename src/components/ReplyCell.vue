<style lang="less" scoped>
.reply {
  // min-height: 150rpx;
  display: flex;
  .avatar {
    padding: 10rpx 0 0 10rpx;
    image {
      width: 100rpx;
      height: 100rpx;
      border-radius: 10%;
    }
    flex: 0 0 120rpx;
  }
  .right {
    flex: 1;
    .title {
      vertical-align: top;
      margin: 0 15rpx;
      color: #666;
      font-size: 24rpx;
      .time {
        color: #08c;
      }
    }
    .content {
      width: 90%;
    }
  }
  & + .reply {
    border-top: 1rpx solid #eee;
  }
}
</style>

<template>
  <div class="reply">
    <view class="avatar">
      <img :src="reply.author.avatar_url">
    </view>
    <view class="right">
      <text class="title">
        <text> {{reply.author.loginname}}</text>
        <text class="time"> {{lou}}楼 · {{createAt}}</text>
      </text>
      <view class="content">
        <wxParse :content="reply.content" />
      </view>
    </view>
  </div>
</template>

<script>
import wxParse from 'mpvue-wxparse'
import { timeAgo } from '@/utils/filters'
export default {
  props: ['reply', 'lou'],
  components: { wxParse },
  computed: {
    createAt() {
      return timeAgo(this.reply.create_at)
    },
  },
}
</script>
