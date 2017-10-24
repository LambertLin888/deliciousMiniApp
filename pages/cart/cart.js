// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderform: {totalAmount:0},
    chooseAll:true,
    goodsList: [
      {
        pic: '../../images/homepage/1.jpg',
        name: "纯天然无污染橘子",
        price: 66.66,
        discount_price: 88.88,
        checked:true,
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
    ],
    hasChooseGoodsList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    var that = this;
    if (that.data.goodsList.length > 0) {
      that.data.goodsList.forEach(function (currentValue, index, arr) {
        if (currentValue.checked){
           that.data.hasChooseGoodsList.push(currentValue.id);
        }
      })
      this.recalculateTotalAmount();
    }
  },
  recalculateTotalAmount:function(){
    var that = this;
    var totalAmount;
    if (that.data.hasChooseGoodsList.length == 0) {
      totalAmount=0;
      }else{
        totalAmount = getTotalAmount(that.data.hasChooseGoodsList, that.data.goodsList);
      }
      that.data.orderform.totalAmount = totalAmount;
      that.setData({ orderform: that.data.orderform });
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
  checkboxChange: function (e) {
    if (e.detail.value.length > 0 &&  e.detail.value.length == this.data.goodsList.length){
      this.setData({ chooseAll: true });
    }else{
      this.setData({ chooseAll: false });
    }
    this.data.hasChooseGoodsList = e.detail.value;
    this.recalculateTotalAmount();
  },
  checkboxChangeAll:function(e){
    var that = this;
    var hasChooseGoodsList=[];
    if (e.detail.value.length > 0 && that.data.goodsList.length>0){
      that.data.goodsList.forEach(function (currentValue, index, arr){
        that.data.goodsList[index].checked = true;
        hasChooseGoodsList.push(currentValue.id);
        })

    }
    else if (e.detail.value.length == 0 && that.data.goodsList.length > 0){
      that.data.goodsList.forEach(function (currentValue, index, arr) {
        that.data.goodsList[index].checked = false;
        hasChooseGoodsList=[];
      })
    }else{
      return;
    }
    this.setData({ goodsList: this.data.goodsList });
    this.data.hasChooseGoodsList = hasChooseGoodsList;
    this.recalculateTotalAmount();
  },
  goSettlement:function(){
    console.log(this.data.hasChooseGoodsList);
    getTotalAmount
  }
})

function getTotalAmount(idList,goodsList){
      var totalAmount=0;
      if (idList.length == 0){
        return totalAmount;
      }
      for(var i=0;i<idList.length;i++){
        for (var j=0; j < goodsList.length; j++){
          if(idList[i]==goodsList[j].id){
            totalAmount += parseFloat(goodsList[j].price);
          }
        }
      }
      return totalAmount.toFixed(2);
}