var app = getApp()
Page({
  data: {
    hasUserInfo: false
  },
  getUserInfo: function () {
    var that = this

    if (app.globalData.hasLogin === false) {
      wx.login({
        success: _getUserInfo
      })
    } else {
      _getUserInfo()
    }

    function _getUserInfo() {

      wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: function (res) {
          console.log(res);
          that.setData({
            hasUserInfo: true,
            userInfo: res.userInfo
          })
          // update 函数也被清理了
          // that.update()
        }
      })
      // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
      // wx.getUserInfo({
      //   success: function (res) {
      //     console.log(res);
      //     that.setData({
      //       hasUserInfo: true,
      //       userInfo: res.userInfo
      //     })
      //     that.update()
      //   }
      // })
    }
  },
  clear: function () {
    this.setData({
      hasUserInfo: false,
      userInfo: {}
    })
  }
})
