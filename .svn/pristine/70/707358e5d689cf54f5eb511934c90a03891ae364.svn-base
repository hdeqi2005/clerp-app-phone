import {spScanOrder} from '@/api/paperIn'
import config from '@/config'
import {setLocalStorage,getLocalStorage } from '@/libs/util'
const serverBusyTips="服务繁忙，请稍后再试！"


export default {
    state: {
     
    },
    mutations: {
     
    },
    actions: {
		 spScanOrderAction({commit},params){
		   return new Promise((resolve,reject)=>{
		     try {
		       spScanOrder(params).then(res=>{
		         const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
		         if(data.success)
		         {
		           resolve(data.data)
		         }
		         else
		         {
		           reject(data.msg)
		         } 
		       }).catch(err=>{
		         console.error(JSON.stringify(err))
		         reject(serverBusyTips)
		       })
		     } catch (error) {
		       reject(serverBusyTips+error)
		     }
		   })
		 }
	}
  }