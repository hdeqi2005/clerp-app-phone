/**
 * @name mixin
 * @description 所有.vue 公共方法
 * @action .vue 中 添加mixin:[name]
 * 
 */
 import { getToken, setToken,setLocalStorage,getLocalStorage } from '@/libs/util'
import headerview from '_c/header'
import footerview from '_c/footer'
import config from '@/config'
import * as switchMethods  from '@/libs/switchMethods'
export default {
    name:'mixin-base',
    components:{headerview,footerview},
    data() {
        return {
            msg:'',
            // menuList:[],
        }
    },
    computed: {
      menuList () {
        let tempMenuList =this.$store.getters.menuList_getters
        //  if(tempMenuList!=""){
        //         //tempMenuList =JSON.parse(tempMenuList)
        //     }
        return tempMenuList
      }
    },
    methods: {
       getLeftHeight(){
          let otherObj =null
          let footerObj =null
          let otherH =0
          let footerH =0
          let headerH = document.getElementById('appheaderM').offsetHeight
             otherObj = document.getElementById('otherContent')
             if(otherObj==null){
                otherH =0
              }else{
                otherH =otherObj.offsetHeight
              }
            footerObj = document.getElementById('appfooter')
              if(footerObj==null){
                footerH =0
              }else{
                footerH =footerObj.offsetHeight
              }
          return (this.dataWindowH -headerH -otherH -footerH)
       },
        //如监听回退刷新事件
        RefreshEventListener(callback){
          window.api.addEventListener({
          name: 'refreshEvent'
            }, function(ret, err) {
              callback(ret, err)
            });
       },
       //安卓手机禁用返回键
       forbidReturn(){
        if(config.isRunApp){
          window.api.addEventListener({
            name: 'keyback'
          }, function(ret, err){
            window.api.closeToWin({
              name: 'root'
            });
            window.api.closeWin();
          })
        }
       },
      //跳转到指定页面，默认字符串
       turnToPage(path){
          let params ={
              name:path
          }
          switchMethods.turnToPage(params)
      },
      fixHeaderStatusBar(){
        if(config.isRunApp){
          let header = $api.byId('appheaderM')
          //console.log('header：'+header.innerHTML)
          $api.fixStatusBar(header);
        }
       
      },
      fixFooterStatusBar(){
        if(config.isRunApp){
          let header = $api.byId('appheaderM');
          let footer = $api.byId('appfooter');
          let headerH = $api.offset(header).h
          let footerH = $api.offset(footer).h
          let otherH = winodw.api.winHeight - headerH - footerH
          return otherH
        }
      },
         //获取设备编码
         getDeviceId(){
          let deviceId = 'dk408F8B-9598-48B6-A740-B9037ADCXXXE'
          if(config.isRunApp){
              let deviceId_Param = window.api.getPrefs({
                sync: true,
                key: 'deviceId'
              })
               if(deviceId_Param!=""){
                deviceId = deviceId_Param; //权限控制
                //console.log('login deviceId_Param :' +deviceId_Param)
               }else{
                deviceId = window.api.deviceId;  //比如： FC408F8B-9598-48B6-A740-B9037ADCXXXE
               // console.log('login deviceId :' +deviceId)
               }
          }
          return deviceId
      },
      
    },
    mounted(){
        let _self =this
        this.$nextTick(() => {
            // _self.menuList =this.$store.getters.menuList_getters
           // console.log('_self.menuList:'+_self.menuList)
      })
      if(getLocalStorage('TOKEN')=="" || this.menuList==null || this.menuList.length==0 || this.menuList.constructor != Array){
          this.turnToPage('login')
      }

      this.fixHeaderStatusBar();
      if(config.isRunApp){
        this.RefreshEventListener(function(){})
      }
      
    }

}