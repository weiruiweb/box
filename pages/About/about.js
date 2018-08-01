//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    currentId:0
  },
  onLoad: function () {
   
  },
  tab:function(e){
      var current= e.currentTarget.dataset.id
      console.log(e)
      this.setData({
        currentId:current
      })
  }
})
