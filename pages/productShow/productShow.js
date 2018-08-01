//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
   },
   map:function(){
    wx.navigateTo({
      url:'/pages/map/map'
    })
   },
   calling: function () {
    wx.makePhoneCall({
        phoneNumber: '18192654258',
    })
}
})
