// pages/discover/discover.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    screenHeight: 480,
    goodsList: [
      {
        pic: '../../images/homepage/1.jpg',
        name: "纯天然无污染橘子",
        price: 66.66,
        discount_price: 88.88,
        checked: true,
        id: 1
      },
      {
        pic: '../../images/homepage/2.jpg',
        name: "劲爆篮球",
        price: "999999",
        discount_price: 1000000,
        checked: true,
        id: 2
      },
      {
        pic: '../../images/homepage/3.jpg',
        name: "八王椅",
        price: 8888.9,
        discount_price: 8888,
        checked: true,
        id: 3
      },
      {
        pic: '../../images/homepage/4.jpg',
        name: "高跟女鞋",
        price: 8888.9,
        discount_price: 8888,
        checked: true,
        id: 4
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '发现'
    })
    this.setData({ screenHeight: wx.getSystemInfoSync().screenHeight - 350 }, function () { });
  },
  lower: function () {
    console.log(this.data.pagecount);
    if (this.data.pagecount == 0) {
      return;
    }
    this.data.goodsList = this.data.goodsList.concat(this.data.goodsList);
    this.setData({
      goodsList: this.data.goodsList
    }, function () {
      // this is setData callback
    })
    this.pagecount--;
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