import {
	aspSaveBoxIn,
	boxScanOrder,
	aspSaveBoxOutTemp,
	aspSaveBoxHalfProdIn,
	findUser,
	findCar
} from '@/api/boxIn'
import config from '@/config'
import {
	setLocalStorage,
	getLocalStorage
} from '@/libs/util'
const serverBusyTips = "服务繁忙，请稍后再试！"


export default {
	state: {

	},
	mutations: {

	},
	actions: {
		baseAction({
			commit
		}, callback, params) {
			
		},
		aspSaveBoxInAction({
			commit
		}, params) {
		 return new Promise((resolve, reject) => {
				try {
					aspSaveBoxIn(params).then(res => {
						const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
						if (data.success) {
							resolve(data.data)
						} else {
							reject(data.msg)
						}
					}).catch(err => {
						console.error(JSON.stringify(err))
						reject(serverBusyTips)
					})
				} catch (error) {
					reject(serverBusyTips + error)
				}
			})
		},
		boxScanOrderAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
							try {
								boxScanOrder(params).then(res => {
									const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
									if (data.success) {
										resolve(data.data)
									} else {
										reject(data.msg)
									}
								}).catch(err => {
									console.error(JSON.stringify(err))
									reject(serverBusyTips)
								})
							} catch (error) {
								reject(serverBusyTips + error)
							}
						})
		},
		aspSaveBoxOutTempAction({
			commit
		}, params) {
			return new Promise((resolve, reject) => {
							try {
								aspSaveBoxOutTemp(params).then(res => {
									const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
									if (data.success) {
										resolve(data.data)
									} else {
										reject(data.msg)
									}
								}).catch(err => {
									console.error(JSON.stringify(err))
									reject(serverBusyTips)
								})
							} catch (error) {
								reject(serverBusyTips + error)
							}
						})
		},
		aspSaveBoxHalfProdInAction({
			commit
		}, params) {
				return new Promise((resolve, reject) => {
							try {
								aspSaveBoxHalfProdIn(params).then(res => {
									const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
									if (data.success) {
										resolve(data.data)
									} else {
										reject(data.msg)
									}
								}).catch(err => {
									console.error(JSON.stringify(err))
									reject(serverBusyTips)
								})
							} catch (error) {
								reject(serverBusyTips + error)
							}
						})
		},findUserAction({
			commit
		}, params) {
				return new Promise((resolve, reject) => {
							try {
								findUser(params).then(res => {
									const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
									if (data.success) {
										resolve(data.data)
									} else {
										reject(data.msg)
									}
								}).catch(err => {
									console.error(JSON.stringify(err))
									reject(serverBusyTips)
								})
							} catch (error) {
								reject(serverBusyTips + error)
							}
						})
		},findCarAction({commit}){
			return new Promise((resolve, reject) => {
						try {
							findCar().then(res => {
								const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
								if (data.success) {
									resolve(data.data)
								} else {
									reject(data.msg)
								}
							}).catch(err => {
								console.error(JSON.stringify(err))
								reject(serverBusyTips)
							})
						} catch (error) {
							reject(serverBusyTips + error)
						}
					})
		}
	}
}
