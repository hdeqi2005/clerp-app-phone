import {aspSaveBoxIn,boxScanOrder,aspSaveBoxOutTemp,aspSaveBoxHalfProdIn} from '@/api/boxIn'
import config from '@/config'
import {setLocalStorage,getLocalStorage } from '@/libs/util'
const serverBusyTips="服务繁忙，请稍后再试！"


export default {
    state: {
     
    },
    mutations: {
     
    },
    actions: {
		baseAction({commit},callback,params){
			return new Promise((resolve,reject)=>{
			  try {
			    callback(params).then(res=>{
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
		},
		 aspSaveBoxInAction({commit},params){
		   return this.baseAction(commit,aspSaveBoxIn,params);
		 },boxScanOrderAction({commit},params){
		   return this.baseAction(commit,boxScanOrder,params);
		 },aspSaveBoxOutTempAction({commit},params){
		   return this.baseAction(commit,aspSaveBoxOutTemp,params);
		 },aspSaveBoxHalfProdInAction({commit},params){
		   return this.baseAction(commit,aspSaveBoxHalfProdIn,params);
		 }
	}
  }