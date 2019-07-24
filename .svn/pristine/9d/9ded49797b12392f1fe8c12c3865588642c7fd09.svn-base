import { getNoticeInfo,searchPOData,searchPODetail,approvePO,searchProdPO,searchProdPODetail,approveProdPo,approvePaperSpecPrice,searchSpecPrice} from '@/api/verify'
import config from '@/config'
import { getToken, setToken,setLocalStorage,getLocalStorage } from '@/libs/util'
const serverBusyTips="服务繁忙，请稍后再试！"


export default {
    actions: {
		 /**
		 * @description 獲取通知信息個數
		 * @params {url} 動態地址查詢
		 */
		getNoticeInfoAction({commit},params){
			return new Promise((resolve,reject)=>{
			  try {
				getNoticeInfo(params).then(res=>{
				  const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
				  if(data.success)
				  {
					resolve(data)
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
		searchPODataAction({commit}){
		  return new Promise((resolve,reject)=>{
		    try {
		      searchPOData().then(res=>{
		        const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
		        if(data.success)
		        {
		          resolve(data)
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
		},searchPODetailAction({commit},params){
			return new Promise((resolve,reject)=>{
			  try {
			    searchPODetail(params).then(res=>{
			      const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
			      if(data.success)
			      {
			        resolve(data)
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
		},approvePOAction({commit},params){
				return new Promise((resolve,reject)=>{
				  try {
				    approvePO(params).then(res=>{
				      const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
				      if(data.success)
				      {
				        resolve(data)
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
			
		},searchProdPOAction({commit}){
		  return new Promise((resolve,reject)=>{
		    try {
		      searchProdPO().then(res=>{
		        const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
		        if(data.success)
		        {
		          resolve(data)
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
		},searchProdPODetailAction({commit},params){
			return new Promise((resolve,reject)=>{
			  try {
			    searchProdPODetail(params).then(res=>{
			      const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
			      if(data.success)
			      {
			        resolve(data)
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
		},approveProdPoAction({commit},params){
				return new Promise((resolve,reject)=>{
				  try {
				    approveProdPo(params).then(res=>{
				      const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
				      if(data.success)
				      {
				        resolve(data)
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
			
		},searchSpecPriceAction({commit}){
				return new Promise((resolve,reject)=>{
				  try {
				    searchSpecPrice().then(res=>{
				      const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
				      if(data.success)
				      {
				        resolve(data)
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
			
		},approvePaperSpecPriceAction({commit},params){
				return new Promise((resolve,reject)=>{
				  try {
				    approvePaperSpecPrice(params).then(res=>{
				      const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
				      if(data.success)
				      {
				        resolve(data)
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