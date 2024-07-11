const app = getApp()
// pages/buy/buy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 0,
    // 页面生命周期函数 将指定数据加载至此对象
    list_load: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getdata(id) {
    wx.request({
      url: 'app.globalData.url',
      data: {
        id
      },
      method: 'GET',
      success: (res) => {
        console.log(res);
        this.setData({
          list_load: res.data.data
        })
      }
    })
  },
  onLoad: function (options) {
    this.getdata(options.name);
    // console.log(options)
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

  }
})