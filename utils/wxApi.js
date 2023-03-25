/**
 * @description 获取手机信息 以及 胶囊信息
 * @returns { Object } system 手机信息
 * @returns { Object } menu 胶囊信息
 * @returns { Number } top 距离手机订单安全区域高度
 * @returns { Number } navHeight 自定义NavBar的高度
 */
const system = () => {
   let system , menu ,top,navHeight
   wx.getSystemInfo({
     success(res){
       system = res
       menu = wx.getMenuButtonBoundingClientRect()
       top = res.statusBarHeight
       navHeight = (menu.top - top) * 2 + menu.height
     }
   })
   return { system , menu , top, navHeight }
};
module.exports = {
  system,
};
