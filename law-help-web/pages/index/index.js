// app中的全局变量要在页面上方实例化
const app = getApp();
// index.js
Page({
  // 页面的初始数据
  data: {
    // 存放轮播图数据的列表
    swiperList1: [
      {
        img: '/images/swiper1.jpg',
        id: 1
      },
      {
        img: '/images/swiper2.jpg',
        id: 2
      },
      {
        img: '/images/swiper3.jpg',
        id: 3
      },
      {
        img: '/images/swiper4.jpg',
        id: 4
      }
    ],
    // 首页下块状栏的列表
    gridlist: []
  },
  // 获取数据
  getdata() {
    // console.log(app.globalData)
    wx.request({
      url: app.globalData.url,
      method: 'GET',
      success: (res) => {
        // console.log(res);
        this.setData({
          gridlist: res.data.data
        })
      }
    })
  },
  // 生命周期函数，当页面加载时自动调用
  onLoad: function (options) {
    // console.log(options);
    this.getdata();
  },

  // get方法获取轮播图数据
  getSwiperList() {

  }
})
