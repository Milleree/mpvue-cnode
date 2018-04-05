import $wx from 'minapp-api-promise'

export const login = data => $wx.request({
  url: `/accesstoken`,
  method: 'POST',
  data,
})
