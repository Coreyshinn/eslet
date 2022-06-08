// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: {},
    count: 0
  },
 // 跳转到Message页面
 gotoMessage() {
  wx.switchTab({
    url: '/pages/message/message'
  })
},

backMessage(){
  wx.navigateBack() 
},

addCount(){
  this.setData({
    count: this.data.count + 1
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query: options
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
    console.log('触发了info的下拉刷新');
    this.setData({
      count: 0
    }),
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('出发了info的上拉触底事件');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})