<script>
export default {
  // onError(e) {
  //   console.log(e.message);
  // },
}
</script>

<style lang="less">
@import url('./utils/vars');
Page {
  height: 100%;
  background-color: #eee;
}
.fr {
  float: left;
}
.panel {
  margin: 20rpx 0;
  border-radius: 20rpx;
  overflow: hidden;
  background: #fff;
  .header {
    background-color: #f6f6f6;
    padding: 15rpx;
  }
}
.label {
  display: inline-block;
  padding: 4rpx 8rpx;
  margin-right: 10rpx;
  font-size: 24rpx;
  background-color: #e5e5e5;
  border-radius: 6rpx;
  color: #999;
  vertical-align: middle;
  &.active {
    background-color: @maincolor;
    color: #fff;
  }
}
</style>
