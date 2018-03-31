import $wx from 'minapp-api-promise'

const LIMIT = 10

export const getTopics = ({ page = 1 }) => $wx.request({
  url: `/topics?page=${page}&limit=${LIMIT}`,
  methods: 'GET',
})
