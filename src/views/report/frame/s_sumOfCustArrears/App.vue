<template>
  <div id="app">
    <headerview title='客户欠款查询' @onClickRight="onClickRight"></headerview>
            <van-row  class="body">
                    <van-cell :border="false" title="主体内容" >
                        客户欠款查询
                    </van-cell>
                    <van-popup  position="bottom"
  :style="{ height: 'auto' }" v-model="showSearchForm"><searchForm></searchForm></van-popup>
                   
            </van-row>
         <footerview></footerview>
  </div>
</template>
<script>
/**
 * @description  //客户欠款汇总表 SumOfCustArrears
 */

import searchForm from '_c/searchForm'
import { getToken, setToken,setLocalStorage,getLocalStorage } from '@/libs/util'
import baseMixin from '@/mixins'
import {mapActions} from 'vuex'
export default {
  name:'SumOfCustArrears',
  mixins:[baseMixin],
  components:{searchForm},
  data(){
    return {
      showSearchForm:false,
      dataSource:[], //数据源
      searchParams:{
          startDate:'2019-07-10',
          endDate:'2019-07-10',
          ctCode:'1',
          token:''
      }
    }
  },
  created(){
    //实例已经在内存中创建OK，此时 data 和 methods 已经创建OK，此时还没有开始 编译模板
    this.getDataSource()
  },
  methods:{
    ...mapActions(['getAccRAnalyzer_action']),
    //获取客户欠款汇总数据
    getDataSource(){
        //根据开始日期(startDate)，结束日期(endDate)，客户(ctCode)来汇总客户欠款
        let params={
            startDate:'2019-07-10',
            endDate:'2019-07-10',
            ctCode:'1',
            token:getToken()
        }
        let _self =this

        this.getAccRAnalyzer_action(params).then(res=>{
            _self.dataSource =res
        }).catch(err=>{
             _self.$toast('获取数据失败:'+err)
        })
    },
    //查询条件
    onClickRight(){
      this.showSearchForm=true
    }
  }


  
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
}

</style>
