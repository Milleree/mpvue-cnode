import $wx from 'minapp-api-promise'

export const getTopics = ({ page = 1, limit = 20 }) => $wx.request({
  url: `/topics?page=${page}&limit=${limit}`,
  methods: 'GET',
})

export const getDetail = ({ id }) => $wx.request({
  url: `/topic/${id}`,
  methods: 'GET',
})
