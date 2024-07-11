// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a: 1,
    title: '',
    button1: '/images/信息2.png',
    button2: '/images/customer-group-fill.png'
  },

  contact1: function (e) {
    this.setData({
      a: 1,
      button1: '/images/信息2.png',
      button2: '/images/customer-group-fill.png'
    })
  },

  contact2: function (e) {
    this.setData({
      a: 2,
      button1: '/images/信息.png',
      button2: '/images/customer-group-fill1.png'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
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
  onDetailClick: function () {
    wx.navigateTo({

      url: '/pages/index/index',
      success: function (res) {
        // 跳转成功的回调函数  
      },
      fail: function () {
        // 跳转失败的回调函数  
      }

    })
  },
})