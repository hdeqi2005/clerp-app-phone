<template>
  <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
// import echarts from 'echarts'
 // 重点：此位置引入的是你单独配置的echarts
import moment from 'moment'; 
import echarts from '@/libs/echarts' //按需加载
import tdTheme from './../theme.json'
import { on, off } from '@/libs/tools'
echarts.registerTheme('tdTheme', tdTheme)
export default {
  name: 'ChartBar',
  props: {
    currentMode:{
        type:String,
        default:'0'
    },
    legendData:{
        type:Array,
        default: () => ['面积','金额','']
    },
    sortGroup:{
         type:String,
         default:'天'
    },
    value: Array,
    text: String,
    subtext: String
  },
  data () {
    return {
      dom: null, yAxisUnit:'面积'
    }
  },
  watch:{
    value(val){
      if(val){
        this.initData()
      }
    }
  },
  methods: {
    resize () {
      this.dom.resize()
    },
    getModeArea(item){
         switch(this.currentMode){
               case '0':
               case '1':
               case '2':
                 return Number.parseFloat(item.Area)
               break;
              case '3':
              case '4':
              case '5':
              case '6':
                return 0
               break;
               default:
                 return Number.parseFloat(item.Area)
                 break; 
          }
    },
    getModeAmt(item){
       switch(this.currentMode){
              case '0':
                return Number.parseFloat(item.Amount)
               break;
              case '1':
                 return Number.parseFloat(item.Qty)
               break;
              case '2':
               return Number.parseFloat(item.Amount)
               break;
              case '3':
              case '4':
                 return Number.parseFloat(item.inamt)
              case '5':
                 return Number.parseFloat(item.Gathering_Amount)
              case '6':
                 return Number.parseFloat(item.TranFee_Amount)         
               break;
             default:
                 return 0
                 break; 
          }
    },
    getModeOutAmt(item){
      //debugger
       switch(this.currentMode){
              case '0':
              case '1':
              case '2':
              case '6':
                return 0
                break;
              case '3':
              case '4':
                  return Number.parseFloat(item.outamt)  
              case '5':
                 return Number.parseFloat(item.SPay_Amount)
             default:
                 return 0
                 break; 
          }
    },
    //获取图表数据
    getSeriesData(itemList,typeValue){
      if(itemList.constructor != Array || itemList.length==0){
                return
       }
      let tempList = []
      for(let item in itemList){
        let currentObj =itemList[item]
       // debugger
        let currentDateTime =itemList[item].FDate // moment(itemList[item].Date).format('YYYY-MM-DD')
        let modeArea =this.getModeArea(currentObj)
        let modeAmt =this.getModeAmt(currentObj)
        let modeOutAmt =this.getModeOutAmt(currentObj)
        let params ={}
      
          if(typeValue=='date'){
              params.date =currentDateTime
          }
           if(typeValue=='area'){
              params.area =modeArea
          }
            if(typeValue=='amt'){
              params.amt =modeAmt
          }
           if(typeValue=='outamt'){
              params.outAmt =modeOutAmt
          }
         let seriesData = Object.values(params)
         //debugger
         tempList.push(seriesData)
       }
       return tempList
      },

   //初始化数据
   initData(){
       let _self = this
       let legendData = this.legendData
       let barTitle =this.text
       let tempValue =this.value
       let sortGroup =this.sortGroup
       let yAxisUnit =this.yAxisUnit 
       //debugger
       if(tempValue){ 
          
            let seriesData_date = _self.getSeriesData(tempValue,'date')
            let seriesData_area = _self.getSeriesData(tempValue,'area')
            let seriesData_amt = _self.getSeriesData(tempValue,'amt')
            let seriesData_outAmt = _self.getSeriesData(tempValue,'outamt')


      let option = {
                  title: {
                      text: barTitle,
                      bottom:5,
                      x: 'center',
                    },
                  tooltip : {
                      trigger: 'axis'
                  },
                
                  legend: {
                       data:legendData
                  },
                    
                  xAxis : [
                      {
                          type : 'category',
                          //data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                          data:seriesData_date
                      }
                  ],
                  yAxis : [
                      {
                          type : 'value',
                          name : legendData[1],
                       
                      },
                      {
                          type : 'value',
                          name : legendData[0]
                      },
                      {
                          type : 'value',
                          name : legendData[2]
                      },
                  ],
                  series : [

                      {
                          name:legendData[0],
                          type:'bar',
                          data:seriesData_area
                      },
                      {
                          name:legendData[1],
                          type:'line',
                          yAxisIndex: 1,
                          data:seriesData_amt
                      },
                      {
                          name:legendData[2],
                          type:'line',
                          //yAxisIndex: 1,
                          data:seriesData_outAmt
                      }
                  ]
              }
      this.dom = echarts.init(this.$refs.dom, 'tdTheme')
      this.dom.setOption(option)

      on(window, 'resize', this.resize)
    }
     
   } 
},
  mounted () {
    this.$nextTick(() => {
      this.initData()
    })
  },
  beforeDestroy () {
    off(window, 'resize', this.resize)
  }
}
</script>
