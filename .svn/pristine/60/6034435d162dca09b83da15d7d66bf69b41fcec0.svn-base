import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import config from '@/config'

import Vant from 'vant'
import 'vant/lib/index.css'
import '@/assets/style/resetUi.css' //重置樣式
Vue.use(Vant)

// 引入样式
import 'vue-easytable/libs/themes-base/index.css'
// 导入 table 和 分页组件   @使用说明:http://doc.huangsw.com/vue-easytable/app.html#/table/api
import {VTable,VPagination} from 'vue-easytable'

// 注册到全局
Vue.component('v-table',VTable)
Vue.component('v-tablePage',VPagination)

/**
 * @description 全局注册应用配置 add by andy 2019-04-22  
 */
Vue.prototype.$config = config

Vue.config.productionTip = false

if(config.isRunApp){
  window.apiready = () => {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
    
  }
}
else{
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  
}

