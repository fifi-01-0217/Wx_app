const { ENV } = require('./config/env')
const { system } = require('./utils/wxApi')
App({
  onLaunch() {
    console.info("当前环境:",ENV)
     this.globalData.navTop = system().top
     this.globalData.navHeight = system().navHeight
     console.log(this.globalData)
     wx.login({
       success: (res) => {
         console.log(res,'11111111111')
       },
     })
  },
  globalData: {
    navTop:'',
    navHeight:'',
  }
})
