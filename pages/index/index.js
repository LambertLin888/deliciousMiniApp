//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    screenHeight:480,
    pagecount:5,
    secondLevellist:[
      {
        icon: "../../images/homepage/chongzhi.png",
        name: "充值中心",
        url:"../detail/detail"
      },
      {
        icon: "../../images/homepage/waimai.png",
        name: "外卖",
        url: "../detail/detail"
      },
      {
        icon: "../../images/homepage/chongzhi.png",
        name: "超市",
        url: "../detail/detail"
      },
      {
        icon: "../../images/homepage/waimai.png",
        name: "旅行",
        url: "../detail/detail"
      },
      {
        icon: "../../images/homepage/chongzhi.png",
        name: "进口",
        url: "../detail/detail"
      },
      {
        icon: "../../images/homepage/waimai.png",
        name: "鞋袜",
        url: "../detail/detail"
      },
      {
        icon: "../../images/homepage/chongzhi.png",
        name: "零食",
        url: "../detail/detail"
      },
      {
        icon: "../../images/homepage/waimai.png",
        name: "鞋袜",
        url: "../detail/detail"
      },
      {
        icon: "../../images/homepage/chongzhi.png",
        name: "美容",
        url: "../detail/detail"
      },
      {
        icon: "../../images/homepage/waimai.png",
        name: "医疗",
        url: "../detail/detail"
      },
    ],
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
    ],
      
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
    duration: 500,
  },
  onLoad:function(){
    this.setData({screenHeight:wx.getSystemInfoSync().screenHeight-100},function(){});
  },
  lower:function(){
    console.log(this.data.pagecount);
    if (this.data.pagecount==0){
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
  goDetail: function (e){
    var id = e.currentTarget.dataset.id;
    var url = '../detail/detail?id='+id;
    wx.navigateTo({
      url:url,
    })
  },
  goRootType:function(e){
    wx.showToast({
      title: '此功能暂未上线',
      icon:"loading"
    })
  }
})
