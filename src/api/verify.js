/**
 *审批API
 */
import vueAxios from '@/libs/api.request'
import config from '@/config'
import ApiCloudAjax from '@/libs/ApiCloudAjax.request'
import Qs from 'qs'

var axios = config.isRunApp ? ApiCloudAjax : vueAxios
const apiPath = config.isRunApp ? '/clerp-app-api' : '/api'

/**
 * @description 采购单审批列表
 * @params {}
 */
export const searchPOData = () => {
	//参数
	let data = {}

	if (config.isRunApp) {
		//apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
		data = {
			values: data
		}
	}
	return axios.request({
		url: `${apiPath}/confirm/spaperpo/searchPOData`,
		data,
		method: 'post',
		transformRequest: [function(data) {
			// 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
			return Qs.stringify(data)

		}],
	})
}

export const searchPODetail = ({
	poId
}) => {
	//参数
	let data = {
		poId: poId
	}

	if (config.isRunApp) {
		//apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
		data = {
			values: data
		}
	}
	return axios.request({
		url: `${apiPath}/confirm/spaperpo/searchPODetail`,
		data,
		method: 'post',
		transformRequest: [function(data) {
			// 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
			return Qs.stringify(data)

		}],
	})
}
export const approvePO = ({
	poId,
	approvalExplain,
	approveState
}) => {
	//参数
	let data = {
		poId: poId,
		approvalExplain: approvalExplain,
		approveState: approveState
	}

	if (config.isRunApp) {
		//apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
		data = {
			values: data
		}
	}
	return axios.request({
		url: `${apiPath}/confirm/spaperpo/approvePO`,
		data,
		method: 'post',
		transformRequest: [function(data) {
			// 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
			return Qs.stringify(data)

		}],
	})
}
/*  辅料  */
export const searchProdPO = () => {
	//参数
	let data = {}

	if (config.isRunApp) {
		//apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
		data = {
			values: data
		}
	}
	return axios.request({
		url: `${apiPath}/confirm/prodpo/searchProdPO`,
		data,
		method: 'post',
		transformRequest: [function(data) {
			// 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
			return Qs.stringify(data)

		}],
	})
}

export const searchProdPODetail = ({
	poId
}) => {
	//参数
	let data = {
		poId: poId
	}

	if (config.isRunApp) {
		//apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
		data = {
			values: data
		}
	}
	return axios.request({
		url: `${apiPath}/confirm/prodpo/searchProdPODetail`,
		data,
		method: 'post',
		transformRequest: [function(data) {
			// 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
			return Qs.stringify(data)

		}],
	})
}

export const approveProdPo = ({
	poId,
	approvalExplain,
	approveState
}) => {
	//参数
	let data = {
		poId: poId,
		approvalExplain: approvalExplain,
		approveState: approveState
	}

	if (config.isRunApp) {
		//apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
		data = {
			values: data
		}
	}
	return axios.request({
		url: `${apiPath}/confirm/prodpo/approveProdPo`,
		data,
		method: 'post',
		transformRequest: [function(data) {
			// 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
			return Qs.stringify(data)

		}],
	})
}

//POST /confirm/paperspecprice/
/*特价*/
export const searchSpecPrice = () => {
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
		url: `${apiPath}/confirm/paperspecprice/searchSpecPrice`,
		data,
		method: 'post',
		transformRequest: [function(data) {
			// 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
			return Qs.stringify(data)

		}],
	})
}
//POST /confirm/paperspecprice/
export const approvePaperSpecPrice = ({coId,approveState,approvalExplain}) => {
	//参数
	let data = {
		coId,
		approvalExplain,
		approveState
	}
	if (config.isRunApp) {
		//apiCloud 参数传递封装，其它另行处理，参考：https://docs.apicloud.com/Client-API/api#3  ajax
		data = {
			values: data
		}
	}
	return axios.request({
		url: `${apiPath}/confirm/paperspecprice/approvePaperSpecPrice`,
		data,
		method: 'post',
		transformRequest: [function(data) {
			// 对 data 进行任意转换处理 将对象 序列化成URL的形式，以&进行拼接。
			return Qs.stringify(data)

		}],
	})
}