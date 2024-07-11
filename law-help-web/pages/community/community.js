const app = getApp()
// pages/community/community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gridlist: [
      {
        id: 1,
        image: '/images/community-1.jpg',
        title: '二房东不退押金',
        head: '/images/user.png',
        name: '法小白6EBDDBB'
      },
      {
        id: 2,
        image: '/images/community-1.jpg',
        title: '交通事故苏州太仓 想找法师',
        head: '/images/user.png',
        name: '发小白1F139B2'
      },
      {
        id: 3,
        image: '/images/community-1.jpg',
        title: '租房押金没退',
        head: '/images/user.png',
        name: '发小白CB24C2C'
      },
      {
        id: 4,
        image: '/images/community-1.jpg',
        title: '试用期临时制定为为期两天的考核，以考核不通...',
        head: '/images/user.png',
        name: '发小白1242F21'
      },
      {
        id: 5,
        image: '/images/community-1.jpg',
        title: '专升本机构乱收费',
        head: '/images/user.png',
        name: '发小白79C8507'
      },
      {
        id: 6,
        image: '/images/community-1.jpg',
        title: '代理执行',
        head: '/images/user.png',
        name: '发小白0F032A6'
      },
    ]
  },


  getdata() {
    wx.request({
      url: app.globalData.url + '/community',
      method: 'GET',
      success: (res) => {
        console.log(res);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(options);
    this.getdata();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  fresh() {
    wx.stopPullDownRefresh()
  }
})