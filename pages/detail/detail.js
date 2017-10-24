// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {
        pic: '../../images/homepage/11.jpg',
        id: 222
      },
      {
        pic: '../../images/homepage/12.jpg',
        id: 222
      },
      {
        pic: '../../images/homepage/13.jpg',
        id: 222
      },
      {
        pic: '../../images/homepage/14.jpg',
        id: 222
      },
      {
        pic: '../../images/homepage/15.jpg',
        id: 222
      },
      {
        pic: '../../images/homepage/16.jpg',
        id: 222
      },
      {
        pic: '../../images/homepage/17.jpg',
        id: 222
      },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500
  },
  goCart: function () {
    wx.switchTab({
      url: '../cart/cart'
    })
  },
  goHome:function(){
    wx.switchTab({
      url: '../index/index'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        this.setData({
          title: options.id
      });
        wx.setNavigationBarTitle({
          title: '详情'
        })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})