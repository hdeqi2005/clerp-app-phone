<template>
  <div id="app">
        <headerview title='订单查询' @onClickRight="onClickRight"></headerview>
                   <!--过滤按钮 -->
                     <van-row type="flex" justify="center">
                        <van-col span="6"><van-button @click="handleFilterData('week')" size="large" :type="currentFilterType=='week'? 'info': 'default'">周</van-button></van-col>
                        <van-col span="6"><van-button @click="handleFilterData('month')" size="large" :type="currentFilterType=='month'? 'info': 'default'">月</van-button></van-col>
                         <van-col span="6"><van-button @click="handleFilterData('season')" size="large" :type="currentFilterType=='season'? 'info': 'default'">季</van-button></van-col>
                      </van-row>
                     <!--图表数据展示 -->
                      <van-row  class="body">
                          <paperorderqueryBar style="height:300px;" :value="barData" text="客户下单TOP20"></paperorderqueryBar>
                      </van-row>
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
                      <searchForm @handleSearch="handleSearch" :IsShowCustomerList="true" :IsShowMethodOfSumList="true"></searchForm>
                  </van-popup>
                 </van-row>
         <footerview></footerview>
  </div>
</template>
<script>
/**
 * @description 订单查询 paperOrderQuery
 */
import {paperorderqueryBar} from '_c/charts/paperorderquery'
import moment from 'moment'; 
import searchForm from '_c/searchForm'
import { getToken, setToken,setLocalStorage,getLocalStorage } from '@/libs/util'
import baseMixin from '@/mixins'
import {mapActions} from 'vuex'
export default {
  name:'paperOrderQuery',
  mixins:[baseMixin],
  components:{searchForm,paperorderqueryBar},
   data(){
   return {
      barData:[],//图表数据
      currentFilterType:'week',
      errorContent:'数据加载中...',
      showSearchForm:false,
      dataSource:[], //数据源
      searchParams:{
           startDate:'2018-07-10',
           endDate:'2019-07-10',
           ctCode:'',
           mode:5 ,//汇总方式:0客户汇总 1 业务员汇总 5日期汇总
           token:getToken(),
           size:20
      },
      dataColumns:[],
      //数据列描述，格式化
      dataColumnsM1: [
                      {field: 'Aarea', title:'面积', width: 136, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.Aarea}</span>`
                      },},
                       {field: 'Acube', title:'总体积', width: 136, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.Acube}</span>`
                      },},
                      {field: 'BMoney', title:'本币金额', width: 136, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.BMoney}</span>`
                      },},
                      {field: 'Weight', title:'重量', width: 136, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.Weight}</span>`
                      },},
                      {field: 'co_Qty', title:'数量', width: 136, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.co_Qty}</span>`
                      },},
                        {field: 'co_RateM', title:'金额%', width: 136, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.co_RateM}</span>`
                      },},
                //         {field: 'w_Name', title:'业务员', width: 136, titleAlign: 'center',columnAlign:'center',
                //       formatter: (rowData, index)=>{
                //               return `<span">${rowData.w_Name}</span>`
                //       },},
                 
                    ],

         //业务员==》数据列描述，格式化
      dataColumnsM2: [
                     {field: 'w_Name', title:'业务员', width: 136, titleAlign: 'center',columnAlign:'left',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.w_Name}</span>`
                      },},
                      {field: 'co_Qty', title:'数量', width: 136, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.co_Qty}</span>`
                      },},
                        {field: 'BMoney', title:'本币金额', width: 136, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.BMoney}</span>`
                      },},
                      {field: 'co_RateM', title:'金额%', width: 136, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.co_RateM}</span>`
                      },},
                      {field: 'Weight', title:'重量', width: 136, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.Weight}</span>`
                      },},
                      {field: 'Aarea', title:'面积', width: 136, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.Aarea}</span>`
                      },},
                       {field: 'Acube', title:'总体积', width: 136, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.Acube}</span>`
                      },},
                    ],
       //业务员==》数据列描述，格式化
      dataColumnsM3: [
                     {field: 'co_Date', title:'订单日期', width: 136, titleAlign: 'center',columnAlign:'left',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.co_Date}</span>`
                      },},
                      {field: 'co_Qty', title:'数量', width: 136, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.co_Qty}</span>`
                      },},
                        {field: 'BMoney', title:'本币金额', width: 136, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.BMoney}</span>`
                      },},
                      {field: 'co_RateM', title:'金额%', width: 136, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.co_RateM}</span>`
                      },},
                      {field: 'Weight', title:'重量', width: 136, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.Weight}</span>`
                      },},
                      {field: 'Aarea', title:'面积', width: 136, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.Aarea}</span>`
                      },},
                       {field: 'Acube', title:'总体积', width: 136, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span">${rowData.Acube}</span>`
                      },},
                    ] 
                                   
    }
  },
  created(){ 
    this.searchParams.endDate =moment().format('YYYY-MM-DD')
    //实例已经在内存中创建OK，此时 data 和 methods 已经创建OK，此时还没有开始 编译模板
    this.getDataSource()
  },
  methods:{
     //过滤数据BY  周 月 季
    handleFilterData(type){
        this.currentFilterType = type
    },
    ...mapActions(['getPaperCOQueryAnaly_action']),
    //获取订单数据
    getDataSource(){
      //根据开始日期(startDate)， 结束日期(endDate) ，客户编号(ctCode)，汇总方式(mode)来获取订单信息。
      //入参：startDate,endDate,ctCode,mode,token,size(前多少条数，默认20条)；
      //结果集是个map：key--orderData(订单数据)，topData(前多少条数据)==> map 参数
    
        let params= Object.assign({},this.searchParams) 
            params.ctCode='' //test
        let _self =this
        //
        this.handleSwichDataColumns()
        this.getPaperCOQueryAnaly_action(params).then(res=>{
                debugger
            _self.barData =res.orderData
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
    //更加汇总模式改变，显示的列也做相应的变化
    handleSwichDataColumns(){
            //汇总方式:0客户汇总 1 业务员汇总 5日期汇总
            //debugger
          switch(this.searchParams.mode){
             case 0:
               this.dataColumns = this.dataColumnsM1
               break;
              case 1:
               this.dataColumns = this.dataColumnsM2
               break;
              case 5:
               this.dataColumns = this.dataColumnsM3
               break;
          }
    },
    //查询参数回调处理
    handleSearch(params){
     // debugger
       if(params && params.startDate!=null){
          this.searchParams =Object.assign(this.searchParams,params)  
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
