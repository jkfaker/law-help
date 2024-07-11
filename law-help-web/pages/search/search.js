const App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 图标
    leftIcon: "../../../img/icon/icon-left.png",
    searchIcon: "../../images/search1.png",
    eyeIconOne: "../../images/icon-eye.png",
    eyeIcon: "../../images/icon-eye.png",
    upperLeftArrow: "../../../img/icon/icon-upper-left-arrow.png",
    recommend: [ //热门推荐
      {
        title: "冰箱"
      },
      {
        title: "法案"
      },
      {
        title: "民法典"
      },
      {
        title: "维权"
      },
      {
        title: "通法"
      },
      {
        title: "刑法"
      },
      {
        title: "牢狱之灾"
      },
      {
        title: "小天鹅洗衣机全自动"
      },
      {
        title: "手机"
      },
      {
        title: "笔记本"
      }
    ],
    historyStorage: [],        //历史搜索
    historyStorageShow: true,
    falg: true,         //换一批
    hotsearch1: [{ title: "法案" }, { title: "民法典" }, { title: "如何维权" }, { title: "律师诉讼" }, { title: "个人维权" }, { title: "刑法" }, { title: "社会治安" }, { title: "商业法案" }, { title: "投资倡议" }, { title: "A股" }, { title: "格力空调" }, { title: "律师费" }],
    hotsearch2: [{ title: "公然违法" }, { title: "未成年人保护法" }, { title: "途径" }, { title: "iPhone" }, { title: "反证法" }, { title: "电视" }, { title: "健康法案" }, { title: "oppo" }, { title: "蓝牙耳机" }, { title: "女包" }, { title: "格力空调" }, { title: "魅族" }],
    // searchresult: false,
    inputValue: "",        //输入框输入的值
    replaceValue: "",     //替换输入框的值
    eye: false,        //显示隐藏
    searchresult: false,
    searchResult: [{ result: "死缓" }, { result: "死刑" }, { result: "改判我方30年有期徒刑" }, { result: "张三瞎人" }, { result: "工地违章" }, { result: "机动车被创" }, { result: "人民法案" }, { result: "李四的救赎" }, { result: "救人被俘虏" }]//虚拟的查询结果
  },
  // 点击返回上一级
  goBack: function () {
    let pages = getCurrentPages();      //获取小程序页面栈
    let beforePage = pages[pages.length - 2];       //获取上个页面的实例对象
    beforePage.setData({
      txt: "修改数据了"
    })
    beforePage.goUpdate();           //触发上个页面自定义的go_update()方法
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 获取顶部固定高度
   */
  attached: function () {
    this.setData({
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop,
    })
  },
  /**
   * 换一批操作
   */
  changeother: function () {
    this.setData({
      falg: !this.data.falg
    })
  },

  /**
   * 热门搜索显示隐藏
   */
  reye: function () {
    this.setData({
      eye: !this.data.eye
    })
  },

  /**
   * 清除
   */
  remove: function () {
    var _this = this
    wx: wx.showModal({
      content: '确认清除所有历史记录?',
      success: function (res) {
        if (res.confirm) {
          wx: wx.removeStorage({
            key: 'historyStorage',
            success: function (res) {
              _this.setData({
                historyStorage: []
              })
              wx.setStorageSync("historyStorage", [])
            },
          })
        } else {
          console.log("点击取消")
        }
      },
    })
  },


  /**
   * 获取input的值
   */
  getInputValue(e) {
    // console.log("获取value值",e.detail)   // {value: "ff", cursor: 2}
    this.setData({
      inputValue: e.detail.value
    })
    this.setData({
      searchresult: true,
    })
  },

  /**
   * 点击搜索提交跳转并存储历史记录
   */
  searchbegin: function (e) {
    let _this = this
    var data = e.currentTarget.dataset;
    _this.data.replaceValue = e.currentTarget.dataset.postname
    // _this.data.replaceValue = 
    wx: wx.setStorage({
      key: 'historyStorage',
      data: _this.data.historyStorage.concat(_this.data.inputValue),
      data: _this.data.historyStorage.concat(_this.data.replaceValue)
    })
    // console.log(_this.data.inputValue)
    // console.log(_this.data.historyStorage)
    wx.navigateTo({
      url: '../../commodity/commodity-search-list/index?postName=' + data['postname']
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 历史搜索
    let that = this
    wx.getStorage({
      key: 'historyStorage',
      success: function (res) {
        console.log(res.data)
        that.setData({
          historyStorageShow: true,
          historyStorage: res.data
        })
      }
    })
  },
  //点击进入详情页
  goToList: function (e) {

  },
  goUpdate: function () {
    this.onLoad()
    console.log("我更新啦")
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