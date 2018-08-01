//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    background: ['/images/banner1.jpg', '/images/banner2.jpg', '/images/banner3.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },
  
  onLoad: function () {
  
  },
  product:function(){
    wx.navigateTo({
      url:'/pages/productShow/productShow'
    })
  },
  about:function(){
    wx.switchTab({
      url:'/pages/About/about'
    })
  },
  more:function(){
    wx.switchTab({
      url:'/pages/product/product'
    })
  }
})
