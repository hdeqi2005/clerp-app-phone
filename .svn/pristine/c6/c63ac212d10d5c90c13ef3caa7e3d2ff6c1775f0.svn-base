<template>
  <div id="app">
        <headerview title='订单查询' @onClickRight="onClickRight"></headerview>
          <div class="MarginTop10"></div>
         <!-- 其它内存占用高度 -->
         <div id="otherContent">
         <!--过滤按钮 -->
            <filterBtn @handleFilterData='handleFilterData' :currentFilterType="currentFilterType"></filterBtn>
              <van-swipe @change="onChangeSwipe">
                  <!--按日期汇总 默认 序号：0-->
                  <van-swipe-item>
                    <van-row  class="body">
                            <paperorderqueryBar style="height:300px;" :value="barData" text="日期汇总"></paperorderqueryBar>
                    </van-row>
                  </van-swipe-item>
                  <!--按客户汇总 序号：1-->
                  <van-swipe-item>
                    <van-row  class="body">
                            <paperorderqueryBarByCust style="height:300px;" :value="barTopData" text="客户下单TOP20"></paperorderqueryBarByCust>
                    </van-row>
                  </van-swipe-item>
                  <!--按业务员汇总 序号：2-->
                  <van-swipe-item>
                    <van-row  class="body">
                            <paperorderqueryBarByCust style="height:300px;" :value="barTopData" text="业务员TOP20"></paperorderqueryBarByCust>
                    </van-row>
                  </van-swipe-item>
                </van-swipe>
      </div>
           <reportDataTable   :height="tableHeight"
                              :dataColumns="dataColumns"
                              :dataSource="dataSource"
                              :error-content="errorContent">
          </reportDataTable>
           <van-popup  position="bottom"
                      :style="{ height: 'auto' }" v-model="showSearchForm">
                      <searchForm @handleSearch="handleSearch" :IsShowCustomerList="true" :IsShowMethodOfSumList="true"></searchForm>
           </van-popup>   
         <!-- <footerview></footerview> -->
  </div>
</template>
<script>
/**
 * @description 订单查询 paperOrderQuery
 */
import paperorderqueryBarByCust from '_c/charts/paperorderquery/paperorderqueryBarByCust.vue'
import filterBtn from '_c/report/paperorderquery/filterBtn.vue'
import reportDataTable from '_c/report/paperorderquery/reportDataTable.vue'
import {paperorderqueryBar} from '_c/charts/paperorderquery'
import moment from 'moment'; 
import searchForm from '_c/searchForm'
import { getToken, setToken,setLocalStorage,getLocalStorage } from '@/libs/util'
import baseMixin from '@/mixins'
import {mapActions} from 'vuex'
export default {
  name:'paperOrderQuery',
  mixins:[baseMixin],
  components:{searchForm,paperorderqueryBar,filterBtn,reportDataTable,paperorderqueryBarByCust},
   data(){
   return {
      dataWindowH: window.innerHeight || document.body.clientHeight,
      tableHeight: window.innerHeight || document.body.clientHeight,
      currentFilterType:'',
      barTopData:[],
      barData:[],//图表数据
      errorContent:'数据加载中...',
      showSearchForm:false,
      dataSource:[], //数据源
      searchParams:{
           startDate:'2018-07-10',
           endDate:'2019-07-10',
           ctCode:'',
           mode:5 ,//汇总方式:0客户汇总 1 业务员汇总 5日期汇总
           token:getLocalStorage('TOKEN'),
           size:20
      },
      dataColumns:[],//动态列原型
       //按客户员汇总
      dataColumnsM1: [
                     {field: 'co_CustId', title:'客户编号', width: 100, titleAlign: 'center',columnAlign:'left',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.co_CustId}</span>`
                      },},
                      {field: 'ct_Desc', title:'客户名称', width: 100, titleAlign: 'center',columnAlign:'left',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.ct_Desc}</span>`
                      },},
                     {field: 'co_Qty', title:'数量', width: 80, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.co_Qty}</span>`
                      },},
                      {field: 'BMoney', title:'本币金额', width: 80, titleAlign: 'center',columnAlign:'right',
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.BMoney}</span>`
                      },},
                   
                //       {field: 'Weight', title:'重量', width: 136, titleAlign: 'center',columnAlign:'right',
                //       formatter: (rowData, index)=>{
                //               return `<span>${rowData.Weight}</span>`
                //       },},
                //       {field: 'Aarea', title:'面积', width: 136, titleAlign: 'center',columnAlign:'right',
                //       formatter: (rowData, index)=>{
                //               return `<span>${rowData.Aarea}</span>`
                //       },},
                //        {field: 'Acube', title:'总体积', width: 136, titleAlign: 'center',columnAlign:'right',
                //       formatter: (rowData, index)=>{
                //               return `<span>${rowData.Acube}</span>`
                //       },},
                    
                    
                //         {field: 'co_RateM', title:'金额%', width: 136, titleAlign: 'center',columnAlign:'right',
                //       formatter: (rowData, index)=>{
                //               return `<span>${rowData.co_RateM}</span>`
                //       },},
                //         {field: 'w_Name', title:'业务员', width: 136, titleAlign: 'center',columnAlign:'center',
                //       formatter: (rowData, index)=>{
                //               return `<span>${rowData.w_Name}</span>`
                //       },},
                 
                    ],

         //按业务员汇总
      dataColumnsM2: [
                     {field: 'w_Name', title:'业务员', width: 136, titleAlign: 'center',columnAlign:'left',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.w_Name}</span>`
                      },},
                      {field: 'co_Qty', title:'数量', width: 136, titleAlign: 'center',columnAlign:'right',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.co_Qty}</span>`
                      },},
                        {field: 'BMoney', title:'本币金额', width: 136, titleAlign: 'center',columnAlign:'right',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.BMoney}</span>`
                      },},
                //       {field: 'co_RateM', title:'金额%', width: 136, titleAlign: 'center',columnAlign:'right',
                //       formatter: (rowData, index)=>{
                //               return `<span>${rowData.co_RateM}</span>`
                //       },},
                //       {field: 'Weight', title:'重量', width: 136, titleAlign: 'center',columnAlign:'right',
                //       formatter: (rowData, index)=>{
                //               return `<span>${rowData.Weight}</span>`
                //       },},
                //       {field: 'Aarea', title:'面积', width: 136, titleAlign: 'center',columnAlign:'right',
                //       formatter: (rowData, index)=>{
                //               return `<span>${rowData.Aarea}</span>`
                //       },},
                //        {field: 'Acube', title:'总体积', width: 136, titleAlign: 'center',columnAlign:'right',
                //       formatter: (rowData, index)=>{
                //               return `<span>${rowData.Acube}</span>`
                //       },},
                    ],

       //按日期汇总 5
      dataColumnsM3: [
                     {field: 'co_Date', title:'订单日期', width: 136, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.co_Date}</span>`
                      },},
                      {field: 'co_Qty', title:'数量', width: 136, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.co_Qty}</span>`
                      },},
                //         {field: 'BMoney', title:'本币金额', width: 136, titleAlign: 'center',columnAlign:'right',
                //       formatter: (rowData, index)=>{
                //               return `<span>${rowData.BMoney}</span>`
                //       },},
                //       {field: 'co_RateM', title:'金额%', width: 136, titleAlign: 'center',columnAlign:'right',
                //       formatter: (rowData, index)=>{
                //               return `<span>${rowData.co_RateM}</span>`
                //       },},
                //       {field: 'Weight', title:'重量', width: 136, titleAlign: 'center',columnAlign:'right',
                //       formatter: (rowData, index)=>{
                //               return `<span>${rowData.Weight}</span>`
                //       },},
                //       {field: 'Aarea', title:'面积', width: 136, titleAlign: 'center',columnAlign:'right',
                //       formatter: (rowData, index)=>{
                //               return `<span>${rowData.Aarea}</span>`
                //       },},
                //        {field: 'Acube', title:'总体积', width: 136, titleAlign: 'center',columnAlign:'right',
                //       formatter: (rowData, index)=>{
                //               return `<span>${rowData.Acube}</span>`
                //       },},
                    ] 
                                   
    }
  },
   mounted(){
     let _self =this
     this.$nextTick(()=>{
            _self.tableHeight =_self.getLeftHeight()-10  //减去额外的margin-top
            //console.log('_self.tableHeight:'+_self.tableHeight)
     })
   },
  created(){ 
     this.searchParams.startDate =moment().add(0, 'month').format('YYYY-MM') + '-01'
     this.searchParams.endDate =moment().format('YYYY-MM-DD')
    //实例已经在内存中创建OK，此时 data 和 methods 已经创建OK，此时还没有开始 编译模板
    this.getDataSource()
  },
  methods:{
    //切換按鈕事件 周 月 季
    handleFilterData(type){
        this.currentFilterType =type
        switch(type){
          case 'week':
            this.searchParams.startDate =moment().day(0).format('YYYY-MM-DD')
            this.searchParams.endDate =moment().format('YYYY-MM-DD')
             break
          case 'month':
            this.searchParams.startDate =moment().add(0, 'month').format('YYYY-MM') + '-01'
            this.searchParams.endDate =moment().format('YYYY-MM-DD')
            break 
          case 'season':
            this.searchParams.startDate =moment().add(-3,'months').format('YYYY-MM-DD')
            this.searchParams.endDate =moment().format('YYYY-MM-DD')
            break
        }
       this.getDataSource() 
    },
    //切换图层事件
    onChangeSwipe(value){
           //汇总方式:默认方式 日期汇总5  客户汇总0  业务员汇总 1
          let currentMode =Number(value)
            switch(currentMode){
              case 0:
               this.searchParams.mode = 5 //日期汇总5
               break;
              case 1:
                 this.searchParams.mode = 0 //客户汇总0
               break;
              case 2:
                this.searchParams.mode = 1  //业务员汇总
               break;
          }
          this.getDataSource()
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
        //debugger
        this.handleSwichDataColumns()
        this.getPaperCOQueryAnaly_action(params).then(res=>{
                //debugger
            _self.barTopData =res.topData
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
       this.currentFilterType =''
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
.MarginTop10{
              margin-top:10px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

</style>
