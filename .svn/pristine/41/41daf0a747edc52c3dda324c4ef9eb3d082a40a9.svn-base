<template>
  <div id="app">
        <headerview title='订单查询' @onClickRight="onClickRight"></headerview>
               <van-row  class="body">
                    <!-- <van-cell :border="false" title="主体内容" >
                      <template slot="title"> -->
                           <div class="dataTable">
                              <v-table
                              id="dt_paperorderquery"
                              ref="dt_paperorderquery"
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
 * @description 订单查询 paperOrderQuery
 */
import searchForm from '_c/searchForm'
import { getToken, setToken,setLocalStorage,getLocalStorage } from '@/libs/util'
import baseMixin from '@/mixins'
import {mapActions} from 'vuex'
export default {
  name:'paperOrderQuery',
  mixins:[baseMixin],
  components:{searchForm},
   data(){
   return {
      errorContent:'数据加载中...',
      showSearchForm:false,
      dataSource:[], //数据源
      searchParams:{
           startDate:'2018-07-10',
           endDate:'2019-07-10',
            ctCode:'acc',
            token:getToken()
      },
      //数据列描述，格式化
      dataColumns: [
                      {field: 'Aarea', title:'Aarea', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.Aarea}</span>`
                      },},
                       {field: 'Acube', title:'Acube', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.Acube}</span>`
                      },},
                      {field: 'BMoney', title:'BMoney', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.BMoney}</span>`
                      },},
                      {field: 'Weight', title:'Weight', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.Weight}</span>`
                      },},
                      {field: 'co_Qty', title:'co_Qty', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.co_Qty}</span>`
                      },},
                        {field: 'co_RateM', title:'co_RateM', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.co_RateM}</span>`
                      },},
                        {field: 'co_Qty', title:'co_Qty', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.co_Qty}</span>`
                      },},
                        {field: 'co_Qty', title:'co_Qty', width: 136, titleAlign: 'center',columnAlign:'center',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.co_Qty}</span>`
                      },},
                    ]
    }
  },
  created(){
    //实例已经在内存中创建OK，此时 data 和 methods 已经创建OK，此时还没有开始 编译模板
    this.getDataSource()
  },
  methods:{
    ...mapActions(['getPaperCOQueryAnaly_action']),
    //获取订单数据
    getDataSource(){
      //根据开始日期(startDate)， 结束日期(endDate) ，客户编号(ctCode)，汇总方式(mode)来获取订单信息。
      //入参：startDate,endDate,ctCode,mode,token,size(前多少条数，默认20条)；
      //结果集是个map：key--orderData(订单数据)，topData(前多少条数据)==> map 参数
       let params={
          startDate:'2018-07-10',
          endDate:'2019-07-10',
          ctCode:'',
          token:getToken(),
          mode:'1',
          size:20
        }
        let _self =this
        this.getPaperCOQueryAnaly_action(params).then(res=>{
             debugger
            _self.dataSource =res.orderData
              if(res.orderData.length==0){
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
