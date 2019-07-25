import Vue from 'vue'
//import App from './index.vue'
import router from '@/router'
import store from '@/store'
import config from '@/config'
import 'lib-flexible/flexible.js'  //手機適配
import Vant from 'vant'
import 'vant/lib/index.css'
import '@/assets/style/resetUi.css' //重置樣式
import 'vue-easytable/libs/themes-base/index.css' // 引入样式
import {VTable,VPagination} from 'vue-easytable' // 导入 table 和 分页组件   @使用说明:http://doc.huangsw.com/vue-easytable/app.html#/table/api
import FastClick from 'fastclick'

//  (0)、方法之间之间调用使用this.方法名称()
//  (1)、方法之间不需要逗号分隔
//  (2)、toString () {} 等价于 toString: function () {}
//  (3)、你仍然可以使用Point.prototype
//  (4)、你可以用Object.assign()一次性扩展很多方法
//  (5)、类内部定义方法多是不可以枚举的
//  (6)、constructor(){}是一个默认方法，如果没有添加，会自动添加一个空的。
//  (7)、constructor默认返回实例对象（this），完全可以指定返回其他的对象。
//  (8)、必须用new调用
//  (9)、不存在变量提升
//  (10)、当用一个变量去接受class时，可以省略classname
//  (11)、es6不提供私有方法。

//  (12)、子类的__proto__属性总是指向父类
//  (13)、子类的prototype属性的__proto__总是指向父类的prototype
//  (14)、Object.getPrototypeOf()获取父类
//  (15)、super作为方法只能在constructor中
//  (16)、super作为属性指向父类的prototype.
//  (17)、在constructor中使用super.x = 2，实际上this.x = 2;但是读取super.x时，又变成了父类.prototype.x。
//  (18)、原生构造函数是无法继承的。
//  (19)、get set 方法可以对属性的赋值和读取进行拦截
//  (20)、静态方法不能被实例继承。通过static声明
//  (21)、静态属性只能 ThreeDPoint.name = "123" 声明 （与static没什么关系）
// (22)、constructor中必须调用super,因为子类中没有this,必须从父类中继承。

/**
*
*@desc 入口函数 基类 方便 继承使用
*
*
*/
class BaseMain {
    /**
     * 构造方法
     * @param  {object} config 配置参数
     */
     constructor(config) {
        this.initPlugins()
        this.initData(config.enterPageName)
        //console.log('BaseMain constructor start...')
     }
      /**
      * @desc 初始化插件
      */
     initPlugins(){
          Vue.use(Vant)
          Vue.prototype.$config = config
          Vue.config.productionTip = false
          // 注册到全局
          Vue.component('v-table',VTable)
          Vue.component('v-tablePage',VPagination)
          FastClick.attach(document.body)
     }
      /**
      * @desc 初始化数据 
      */
     initData(_pageName){
          if(config.isRunApp){
            window.apiready = () => {
              new Vue({
                router,
                store,
                render: h => h(_pageName)
              }).$mount('#app')
              
            }
          }
          else{
            new Vue({
              router,
              store,
              render: h => h(_pageName)
            }).$mount('#app')
          }
    }
}

 export default BaseMain