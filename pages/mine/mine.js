//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    orderIconList:[
      {
        icon:"../../images/mine/fa_xqy.png",
        name:"代付款",
        type:1
      },
      {
        icon: "../../images/mine/fa_xqy.png",
        name: "待发货",
        type: 2
      },
      {
        icon: "../../images/mine/fa_xqy.png",
        name: "待收货",
        type: 3
      },
      {
        icon: "../../images/mine/fa_xqy.png",
        name: "已完成",
        type: 4
      },
    ]
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: ''
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
  },
  goToCart:function(){
    wx.switchTab({
      url: '../cart/cart'
    })
  },
  getUserInfo: function (e) {
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})