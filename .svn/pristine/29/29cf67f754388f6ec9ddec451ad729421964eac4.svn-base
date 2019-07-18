<template>
  <div id="app">
        <headerview title='全厂综合查询' @onClickRight="onClickRight"></headerview>
             <van-row  class="body">
                    <!-- <van-cell :border="false" title="主体内容" >
                      <template slot="title"> -->
                           <div class="dataTable">
                              <v-table
                              id="dt_compfactoryreport"
                              ref="dt_compfactoryreport"
                              is-vertical-resize
                              style="width:100%;"
                              is-horizontal-resize
                              :columns="dataColumns"
                              :table-data="dataSource"
                              :show-vertical-border="true"
                               :error-content="errorContent"
                              even-bg-color="#f4f4f4"
                              row-hover-color="#eee"
                              row-click-color="#edf7ff">
                              </v-table>
                          </div>
                      <!-- </template>
                    </van-cell> -->
                    <van-popup  position="bottom"
                      :style="{ height: 'auto' }" v-model="showSearchForm">
                      <searchForm @handleSearch="handleSearch"></searchForm>
                  </van-popup>
            </van-row>
         <footerview></footerview>
  </div>
</template>
<script>
/**
 * @description 全厂综合报表 CompFactoryReport
 */
import searchForm from '_c/searchForm'
import { getToken, setToken,setLocalStorage,getLocalStorage } from '@/libs/util'
import baseMixin from '@/mixins'
import {mapActions} from 'vuex'
export default {
  name:'CompFactoryReport',
  components:{searchForm},
  mixins:[baseMixin],
   data(){
    return {
       errorContent:'数据加载中...',
      showSearchForm:false,
      dataSource:[], //数据源
      searchParams:{
           startDate:'2019-07-10',
           endDate:'2019-07-10',
            ctCode:'1',
            token:getToken()
      },
      //数据列描述，格式化
      dataColumns: [
                      {field: 'cab_date', title:'日期', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.cab_date}</span>`
                      },},
                       {field: 'cab_week', title:'星期', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.cab_week}</span>`
                      },},
                      {field: 'cac_BoxCOamt', title:'送货金额', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.cac_BoxCOamt}</span>`
                      },},
                      {field: 'cac_BoxInamt', title:'收款金额', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.cac_BoxInamt}</span>`
                      },},
                      {field: 'cac_BoxOutamt', title:'cac_BoxOutamt', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.cac_BoxOutamt}</span>`
                      },},
                       {field: 'cac_BoxReamt', title:'cac_BoxReamt', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.cac_BoxReamt}</span>`
                      },},
                          {field: 'cac_COamt', title:'cac_COamt', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.cac_COamt}</span>`
                      },},
                          {field: 'cac_FLamt', title:'cac_FLamt', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.cac_FLamt}</span>`
                      },},
                          {field: 'cac_Gatamt', title:'cac_Gatamt', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.cac_Gatamt}</span>`
                      },},
                          {field: 'cac_Inamt', title:'cac_Inamt', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.cac_Inamt}</span>`
                      },},
                          {field: 'cac_Outamt', title:'cac_Outamt', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.cac_Outamt}</span>`
                      },},
                          {field: 'cac_Paperamt', title:'cac_Paperamt', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.cac_Paperamt}</span>`
                      },},
                          {field: 'cac_Reamt', title:'cac_Reamt', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.cac_Reamt}</span>`
                      },},

                    ]
    }
  },
  created(){
    //实例已经在内存中创建OK，此时 data 和 methods 已经创建OK，此时还没有开始 编译模板
    this.getDataSource()
  },
  methods:{
    ...mapActions(['getColligateAnalyzer_action']),
    //获取全厂综合报表数据
    getDataSource(){
       //根据开始日期(startDate)，结束日期(endDate),token来获取全厂综合报表
        let params={
            startDate:'2018-07-10',
            endDate:'2019-07-10',
            token:getToken()
        }
        let _self =this
        this.getColligateAnalyzer_action(params).then(res=>{
          //debugger
          _self.dataSource =res
           if(_self.dataSource.length==0){
               _self.errorContent='暂无数据'
            }
        }).catch(err=>{
          _self.errorContent='暂无数据'
          _self.$toast('获取数据失败:'+err)
        })
    },
     //显示查询条件框
    onClickRight(){
      this.showSearchForm=true
    },
    //查询参数回调处理
    handleSearch(params){
      //debugger
    if(params && params.startDate!=null){
          this.searchParams.startDate =params.startDate
          this.searchParams.endDate =params.endDate
          this.getDataSource()
          this.showSearchForm=false
      }
    }
  }
}
</script>

<style lang="less">
#app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

</style>
