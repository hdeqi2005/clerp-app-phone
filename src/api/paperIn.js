/**
 * 纸板入库，出仓
 */
import vueAxios from '@/libs/api.request'
import config from '@/config'
import ApiCloudAjax from '@/libs/ApiCloudAjax.request'
import Qs from 'qs'

var axios = config.isRunApp ? ApiCloudAjax : vueAxios
const apiPath=config.isRunApp ?'/clerp-app-api':'/api'

export const spScanOrder = ({BarCodeStr,Station,Flag,FOrderNo,FQty,FDNum,FLine,FClass,Remark}) => {
    //参数
    let data = {
      BarCodeStr,Station,Flag,FOrderNo,FQty,FDNum,FLine,FClass,Remark
     }
     
    if(config.isRunApp){
      //apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
      data= {values: data} 
    } 
    return axios.request({
      url: `${apiPath}/warehouse/warehouse/execute/spScanOrder`,
      data,
      method: 'post',
      transformRequest: [function (data) {
        // 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
        return Qs.stringify(data) 
  
      }],
    })
  }


