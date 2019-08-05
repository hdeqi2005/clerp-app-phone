// import { login, logout, getUserInfo, } from '@/api/app'
import {setLocalStorage,getLocalStorage } from '@/libs/util'
// import { GetGuid } from '@/libs/tools'
// const serverBusyTips="服务繁忙，请稍后再试！";

export default {
    state: {
      currentSelectedMenuIndex: getLocalStorage('currentSelectedMenuIndex'),
      currentSelectedFooterMenu: getLocalStorage('currentSelectedFooterMenu')
    },
    //获取：this.$store.getters.currentSelectedMenu_getter
    getters:{
        currentSelectedMenu_getter:(state)=>{
            if(state.currentSelectedFooterMenu==''){
                return 'index'
            }
            return state.currentSelectedFooterMenu
        },
        currentSelectedMenuIndex_getter:(state)=>{
           // debugger
            //console.log('getters:'+state.currentSelectedMenuIndex)
            if(state.currentSelectedMenuIndex==null || state.currentSelectedMenuIndex=='undefined'){
                return 0
            }
            return state.currentSelectedMenuIndex
        }
    },
    //设置：this.$store.commit('setCurrentSelectdMenu',data)
    mutations: {
      setCurrentSelectdFooterMenu (state, data) {
        state.currentSelectedFooterMenu = data
        setLocalStorage('currentSelectedFooterMenu',data)
      },
      setCurrentSelectdMenuIndex (state, data) {
        state.currentSelectedMenuIndex = data
        setLocalStorage('currentSelectedMenuIndex',data)
      },
    },
    actions: {}

  }