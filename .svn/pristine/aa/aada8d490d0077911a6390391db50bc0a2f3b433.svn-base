// import Vue from 'vue'
// import App from './index.vue'
// import router from '@/router'
// import store from '@/store'
// import config from '@/config'
// import 'lib-flexible/flexible.js'  //手機適配
// import Vant from 'vant'
// import 'vant/lib/index.css'
// import '@/assets/style/resetUi.css' //重置樣式
// import FastClick from 'fastclick'
// import 'vue-easytable/libs/themes-base/index.css'// 引入样式
// import {VTable,VPagination} from 'vue-easytable' // 导入 table 和 分页组件   @使用说明:http://doc.huangsw.com/vue-easytable/app.html#/table/api
// Vue.use(Vant)
// FastClick.attach(document.body)
// Vue.component('v-table',VTable) // 注册到全局
// Vue.component('v-tablePage',VPagination)

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

import App from './index.vue'
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
// export default subMain