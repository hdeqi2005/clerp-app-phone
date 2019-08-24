/**
 * 纸箱成品入库,成品出库,半成品入库
 */
import vueAxios from '@/libs/api.request'
import config from '@/config'
import ApiCloudAjax from '@/libs/ApiCloudAjax.request'
import Qs from 'qs'

let axios = config.isRunApp ? ApiCloudAjax : vueAxios
let apiPath=config.isRunApp ?'/clerp-app-api':'/api' //正式环境
//apiPath= '/clerp-app-api' //测试使用 放开

/**
 * @desc boxIn 描述 添加出入库
 * 
 * @params 参数
 * 
 * @author Andy Huang
 * 
 * @created 2019/08/22 13:43:45
 */

export const aspSaveBoxIn = ({
	bi_Group,
	bi_WorkNo,
	bi_InQty
}) => {
	//参数
	let data = {
		bi_Group,
		bi_WorkNo,
		bi_InQty
	}

	if (config.isRunApp) {
		//apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
		data = {
			values: data
		}
	}
	return axios.request({
		url: `${apiPath}/warehouse/warehouse/execute/aspSaveBoxIn`,
		data,
		method: 'post',
		transformRequest: [function(data) {
			// 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
			return Qs.stringify(data)

		}],
	})
}

export const boxScanOrder = ({
	bi_WorkNo,
	bc_No,
	Flag
}) => {
	//参数
	let data = {
		bi_WorkNo,
		bc_No,
		Flag
	}

	if (config.isRunApp) {
		//apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
		data = {
			values: data
		}
	}
	return axios.request({
		url: `${apiPath}/warehouse/warehouse/execute/boxScanOrder`,
		data,
		method: 'post',
		transformRequest: [function(data) {
			// 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
			return Qs.stringify(data)

		}],
	})
}

export const aspSaveBoxOutTemp = ({
	bd_CarNo,
	bd_Follower,
	bd_Loador,
	bd_SenderID,
	OrderQtyStr,
	NoStr
}) => {
	//参数
	let data = {
		bd_CarNo,
		bd_Follower,
		bd_Loador,
		bd_SenderID,
		OrderQtyStr,
		NoStr
	}

	if (config.isRunApp) {
		//apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
		data = {
			values: data
		}
	}
	return axios.request({
		url: `${apiPath}/warehouse/warehouse/execute/aspSaveBoxOutTemp`,
		data,
		method: 'post',
		transformRequest: [function(data) {
			// 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
			return Qs.stringify(data)

		}],
	})
}

export const aspSaveBoxHalfProdIn =  ({
	hp_bi_WorkNo,
	hp_wpl_Id,
	hp_mo_ID,
	hp_tt_Code,
	Qty,
	Remark
}) => {
	//参数
	let data = {
		hp_bi_WorkNo,
		hp_wpl_Id,
		hp_mo_ID,
		hp_tt_Code,
		Qty,
		Remark
	}
	if (config.isRunApp) {
		//apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
		data = {
			values: data
		}
	}
	return axios.request({
		url: `${apiPath}/warehouse/warehouse/execute/aspSaveBoxHalfProdIn`,
		data,
		method: 'post',
		transformRequest: [function(data) {
			// 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
			return Qs.stringify(data)

		}],
	})
}

export const findUser =  ({
	workType
}) => {
	//参数
	let data = {
		workType
	}
	if (config.isRunApp) {
		//apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
		data = {
			values: data
		}
	}
	return axios.request({
		url: `${apiPath}/warehouse/warehouse/execute/findUser`,
		data,
		method: 'post',
		transformRequest: [function(data) {
			// 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
			return Qs.stringify(data)

		}],
	})
}

export const findCar =  () => {
	//参数
	let data = {
	}
	if (config.isRunApp) {
		//apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
		data = {
			values: data
		}
	}
	return axios.request({
		url: `${apiPath}/warehouse/warehouse/execute/findCar`,
		data,
		method: 'post',
		transformRequest: [function(data) {
			// 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
			return Qs.stringify(data)

		}],
	})
}
