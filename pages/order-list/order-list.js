// pages/order-list/order-list.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    bottomStyle:"content-box-border-bottom",
    bottomStyleList: ["content-box-border-bottom"],
    goodsList: [
      {
        pic: '../../images/homepage/1.jpg',
        name: "纯天然无污染橘子",
        price: 66.66,
        discount_price: 88.88,
        id: 1,
        shop_name:"橘花台",
        order_sn:672379232938293
      },
      {
        pic: '../../images/homepage/2.jpg',
        name: "劲爆篮球",
        price: "999999",
        discount_price: 1000000,
        id: 2,
        shop_name:"天才运动装备",
        order_sn: 67233456232900
      },
      {
        pic: '../../images/homepage/3.jpg',
        name: "八王椅",
        price: 8888.9,
        discount_price: 8888,
        id: 3,
        shop_name:"指尖办公用具",
        order_sn: 67237892759849
      },
      {
        pic: '../../images/homepage/4.jpg',
        name: "高跟女鞋",
        price: 8888.9,
        discount_price: 8888,
        id: 4,
        shop_name:"俏佳人",
        order_sn: 8723096830534056
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.type){
      this.data.bottomStyleList = [];
      var index = parseInt(options.type);
      this.data.bottomStyleList[index] = this.data.bottomStyle;
      this.setData({ bottomStyleList: this.data.bottomStyleList });
    }
    wx.setNavigationBarTitle({
      title: '订单列表'
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
  
  },
  chooseType:function(event){
    var index = parseInt(event.currentTarget.dataset.typeid);
    this.data.bottomStyleList = [];
    this.data.bottomStyleList[index] = this.data.bottomStyle;
    this.setData({ bottomStyleList: this.data.bottomStyleList});
    // wx.startPullDownRefresh();
    // setTimeout(()=>{
    //   wx.stopPullDownRefresh();
    // },5000)
  }
})