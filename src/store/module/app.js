// import { login, logout, getUserInfo, } from '@/api/app'
import {setLocalStorage,getLocalStorage } from '@/libs/util'
// import { GetGuid } from '@/libs/tools'
// const serverBusyTips="服务繁忙，请稍后再试！";

export default {
    state: {
      currentSelectedMenuIndex: getLocalStorage('currentSelectedMenuIndex'),
      currentSelectedMenu: getLocalStorage('currentSelectedMenu')
    },
    //获取：this.$store.getters.currentSelectedMenu_getter
    getters:{
        currentSelectedMenu_getter:(state)=>{
            if(state.currentSelectedMenu==''){
                return 'index'
            }
            return state.currentSelectedMenu
        },
        currentSelectedMenuIndex_getter:(state)=>{
           // debugger
            if(state.currentSelectedMenuIndex==null || state.currentSelectedMenuIndex=='undefined'){
                return 0
            }
            return state.currentSelectedMenuIndex
        }
    },
    //设置：this.$store.commit('setCurrentSelectdMenu',data)
    mutations: {
      setCurrentSelectdMenu (state, data) {
        state.currentSelectedMenu = data
        setLocalStorage('currentSelectedMenu')
      },
      setCurrentSelectdMenuIndex (state, data) {
        state.currentSelectedMenuIndex = data
        setLocalStorage('currentSelectedMenuIndex')
      },
    },
    actions: {}

  }