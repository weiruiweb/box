//index.js
//获取应用实例
/*const app = getApp()

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
*/
import {Api} from '../../utils/api.js';
var api = new Api();

Page({
  data: {
    multiIndex: [0, 0, 0],
    
    region: '西安市',
    mainData:[],
    artData:[],
    sliderData:[],

    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
  },
  //事件处理函数




  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },



  onLoad(){
    const self = this;
    self.data.paginate = api.cloneForm(getApp().globalData.paginate);
    self.getMainData();
    self.getartData();
    self.getSliderData()
  },

  getMainData(isNew){
    const self = this;
    if(isNew){
      api.clearPageIndex(self);  
    };
    const postData = {};
    postData.paginate = api.cloneForm(self.data.paginate);
    postData.searchItem = {
      menu_id:'384',
      thirdapp_id:'59'
    };

    const callback = (res)=>{
      if(res.info.data.length>0){
        self.data.mainData.push.apply(self.data.mainData,res.info.data);
        if(res.info.data.length>4){
          self.data.mainData = self.data.mainData.slice(0,4) 
        }
      }else{
        self.data.isLoadAll = true;
      };
      wx.hideLoading();
      self.setData({
        web_mainData:self.data.mainData,
      });  
    };
    api.articleGet(postData,callback);
  },



  getartData(isNew){
    const self = this;
    if(isNew){
      api.clearPageIndex(self);  
    };
    const postData = {};
    postData.paginate = api.cloneForm(self.data.paginate);
    postData.searchItem = {
      menu_id:'385',
      thirdapp_id:'59'
    };
    const callback = (res)=>{
      self.data.artData = res.info.data[0];
      wx.hideLoading();
      self.setData({
        web_artData:self.data.artData,
      });  
    };
    api.articleGet(postData,callback);
  },


  intoPath(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'nav');
  },

  intoPathTab(e){
    const self = this;
    api.pathTo(api.getDataSet(e,'path'),'tab');
  },



  getSliderData(){
    const self = this;
    const postData = {};
    postData.searchItem = {
      parentid:'381',
      thirdapp_id:'59'
    };
    const callback = (res)=>{ 
     self.data.sliderData = res;
      self.setData({
        web_sliderData:self.data.sliderData,
      });
      console.log(self.data.sliderData)

    };
    api.labelGet(postData,callback);
  },

  
})