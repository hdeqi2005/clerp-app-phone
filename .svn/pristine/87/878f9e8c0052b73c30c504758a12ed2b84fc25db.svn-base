import axios from 'axios'
import { getToken, setToken,setLocalStorage,getLocalStorage } from '@/libs/util'

class HttpRequest {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        token:getLocalStorage('TOKEN'),
        time: Date.now().toString()
      }
    }
    return config
  }
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide()
    }
  }
  interceptors (instance, url){
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      this.queue[url] = true
      //console.warn('======请求拦截========:'+JSON.stringify(config))
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
			// if(res.data.status == 443){
      //   store.dispatch('handleLogOut').then(res=>{
      //     let rediretUrl ='http://'+window.location.host+'/#/login'
      //     window.location.href = rediretUrl //defaultSetting.baseUrl.pro
      //   })
			// 	return;
      // }else{
          this.destroy(url)
          const { data, status } = res
          return { data, status }
      // }
   
    }, error => {
      this.destroy(url)
      //addErrorLog(error.response)
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)

    this.interceptors(instance, options.url)
    return instance(options)

  }
}
export default HttpRequest
