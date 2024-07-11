// components/bottom-buy/bottom-buy.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    color: {
      type: String,
      value: '#fd4719'
    },
    price: {
      type: String,
      value: "0.0"
    },
    backgroundcolor: {
      type: String,
      value: 'white'
    },
    btn_bgc: {
      type: String,
      value: '#fd4719'
    },
    fcolor: {
      type: String,
      value: 'white'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    buy: function(e){
      console.log(e)
    }
  }
})