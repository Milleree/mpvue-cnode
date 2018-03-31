<template>
  <div class="container">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <p>文章数量：{{topics.length}}</p>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <!-- <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form> -->

    <div class="counter">
      <button @click.stop="decrement">-</button>
      <p>{{count}}</p>
      <button @click.stop="increment">+</button>
    </div>

    <button @click="request">request</button>
  </div>
</template>

<script>
import card from '@/components/card'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    card,
  },

  data() {
    return {
      motto: 'Hello World',
    }
  },

  computed: {
    ...mapState({
      count: state => state.counter.count,
      userInfo: state => ({ ...state.userInfo }),
      topics: state => state.topics.topics,
    }),
  },

  methods: {
    ...mapMutations([
      'decrement',
      'increment',
    ]),
    // bindViewTap() {
    //   const url = '../logs/main'
    //   wx.navigateTo({ url })
    // },
    // clickHandle(msg, ev) {
    //   console.log('clickHandle:', msg, ev)
    // },
    request() {
      this.$store.dispatch('getTopics')
    },
  },

  created() {
    this.$store.dispatch('getUserInfo')
    // .then(() => {
    //   console.log(this.userInfo)
    // })
  },
}
</script>

<style scoped lang="less">
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  color: blue;
  border: 1px solid blue;
}
</style>
