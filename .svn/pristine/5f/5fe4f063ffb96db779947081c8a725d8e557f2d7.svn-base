<template>
    <div id='appfooter'>
            <!-- 占位符 -->
         <div class="footerMargin"></div>
        <van-row  class="footer">
            <van-tabbar @change="handleChangeEven" :safe-area-inset-bottom="true" v-model="active">
             <van-tabbar-item v-for="(item,index) in menuList" :key="index" @click.native="turnToPage(`${item.data.resLink}`)"  :icon="item.data.resIcon">{{item.title}}</van-tabbar-item>
            <!-- <van-tabbar-item @click.native="turnToPage('index')" icon="home-o">审批</van-tabbar-item>
            <van-tabbar-item @click.native="turnToPage('login')" icon="search">预警</van-tabbar-item>
            <van-tabbar-item icon="friends-o">仓库</van-tabbar-item>
            <van-tabbar-item @click.native="turnToPage('report')"  icon="setting-o">报表</van-tabbar-item> -->
            </van-tabbar>
        </van-row>

    </div>
</template>

<script>
import * as switchMethods  from '@/libs/switchMethods'
export default {
    name:'footer-view',
    data(){
        return{
            tempActive:0,
            active:0
        }
    },
    watch:{
        // active(oldValue,newValue){
        //     //console.log('active :'+oldValue,newValue)
        // }
    },
    computed: {
        menuList() {
             let tempMenuList =this.$store.getters.menuList_getters
            // console.log('footer tempMenuList'+JSON.stringify(tempMenuList))
            return tempMenuList
        },
         currentMenuIndex(){
            let tempMenuIndex =this.$store.getters.currentSelectedMenuIndex_getter
            return tempMenuIndex
        }
  },
   mounted(){
       this.active = this.currentMenuIndex
       //console.log('currentMenuIndex:'+this.currentMenuIndex)
   },
    methods:{
        handleChangeEven(val){
           // console.log('handleChangeEven :'+val)
            this.tempActive =val
            this.$store.commit('setCurrentSelectdMenuIndex',val)
        },
        handleActive(){

        }, 
        //跳转到指定页面，默认字符串
       turnToPage(path){
           this.active = this.tempActive
          //console.log('path Name ：'+path,this.tempActive)
          let params ={
              name:path
          }
          switchMethods.turnToPage(params)
      },
    }
    
}
</script>
<style scoped>
 .footerMargin{
     /* margin-top:54px; */
     height: 54px;
      /* padding-top: 54px; */
 }
</style>
