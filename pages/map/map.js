//logs.js
const util = require('../../utils/util.js')

Page({
  data: {

  },


  onLoad: function () {
    
  },

  click: function (e) {
    wx.openLocation({
      latitude: 22.6383880000,
      longitude: 113.8307190000,
      height:100,
      scale: 18,
      name: '仁彩印刷有限公司',
      address:'福永街道办凤凰第一工业区兴业一路92号园'
    })
  },

})
