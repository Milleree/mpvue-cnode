import $wx from 'minapp-api-promise'

export const getTopics = ({ page = 1, limit = 20, tab = 'all' }) => $wx.request({
  url: `/topics?page=${page}&limit=${limit}&tab=${tab}`,
  methods: 'GET',
})
  .then(topics => {
    // content字段数据量太大，列表页也没有用到，所以删掉
    topics.forEach(topic => {
      delete topic.content
    })
    return topics
  })

export const getDetail = ({ id }) => $wx.request({
  url: `/topic/${id}`,
  methods: 'GET',
})
