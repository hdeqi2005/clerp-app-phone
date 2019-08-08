// import Vue from 'vue'
// import App from './report.vue'
// import router from '@/router'
// import store from '@/store'
// import config from '@/config'
// import 'lib-flexible/flexible.js'  //手機適配
// import Vant from 'vant'
// import 'vant/lib/index.css'
// import '@/assets/style/resetUi.css' //重置樣式
// Vue.use(Vant)

// import FastClick from 'fastclick'
// // 使用
// FastClick.attach(document.body)
// /**
//  * @description 全局注册应用配置 add by andy 2019-04-22  
//  */
// Vue.prototype.$config = config

// Vue.config.productionTip = false

// if(config.isRunApp){
//   window.apiready = () => {
//     new Vue({
//       router,
//       store,
//       render: h => h(App)
//     }).$mount('#app')
    
//   }
// }
// else{
//   new Vue({
//     router,
//     store,
//     render: h => h(App)
//   }).$mount('#app')
  
// }


/**
 * @desc main 描述 继续子类 全厂综合查询 页面配置
 * 
 * @params 参数 config 当前页面入口
 * 
 * @author Andy Huang
 * 
 * @created 2019/08/02 14:19:01
 */

import App from './report.vue'
import BaseMain  from '@/main'
class Main extends BaseMain {
   constructor (config) {
     super(config)
   }
 } 
let config = {
  enterPageName:App
}
const subMain = new Main(config)