import HttpRequest from '@/libs/axios'
import config from '@/config'
const baseUrl = config.isRunApp ? config.baseUrl.pro : config.baseUrl.dev
const axios = new HttpRequest(baseUrl)
export default axios
