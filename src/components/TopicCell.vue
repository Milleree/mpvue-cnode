<template functional>
  <div class="cell">
    <img class="user_avatar" :src="topic.author.avatar_url">
    <text class="label active" v-if="topic.top">置顶</text>
    <text class="label active" v-else-if="topic.good">精华</text>
    <text class="label" v-else-if="topic.tab==='ask'">问答</text>
    <text class="label" v-else-if="topic.tab==='share'">分享</text>
    <text class="reply_count">{{topic.reply_count}}/{{topic.visit_count}}</text>
    <text>{{topic.title}}</text>
  </div>
</template>

<script>
export default {
  props: ['topic'],
}
</script>

<style lang="less">
.cell {
  padding: 10px;
  font-size: 28rpx;
  // margin-bottom: 10rpx;
  .user_avatar {
    width: 40rpx;
    height: 40rpx;
    // margin-bottom: -4rpx;
    margin-right: 10rpx;
    vertical-align: middle;
  }
  .reply_count {
    font-size: 20rpx;
    color: #b4b4b4;
    vertical-align: middle;
  }
  .label {
    background-color: #e5e5e5;
    color: #999;
    font-size: 24rpx;
    padding: 4rpx 8rpx;
    border-radius: 6rpx;
    margin-right: 10rpx;
    vertical-align: middle;
    &.active {
      background-color: #80bd01;
      color: #fff;
    }
  }
}
</style>
