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
                return Number.parseFloat(item.cac_BoxCOArea)
               break;
              case '1':
                return Number.parseFloat(item.cac_BoxInArea)
               break;
              case '2':
                 return Number.parseFloat(item.cac_BoxOutArea)
               break;
              case '3':
                return 0
               break;
               default:
                 return Number.parseFloat(item.cac_BoxCOArea)
                 break; 
          }
    },
   getModeAmt(item){
       switch(this.currentMode){
                case '0':
                return Number.parseFloat(item.cac_BoxCOamt)
               break;
              case '1':
                 return Number.parseFloat(item.cac_BoxInamt)
               break;
              case '2':
               return Number.parseFloat(item.cac_BoxOutamt)
               break;
              case '3':
                 return Number.parseFloat(item.cac_Gatamt)
               break;
             default:
                 return Number.parseFloat(item.cac_BoxCOamt)
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
        let currentDateTime = moment(itemList[item].cab_date).format('YYYY-MM-DD')
        let modeArea =this.getModeArea(currentObj)
        let modeAmt =this.getModeArea(currentObj)
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
         let seriesData = Object.values(params)
         //debugger
         tempList.push(seriesData)
       }
       return tempList
      },

   //初始化数据
   initData(){
       let _self = this
       let tempValue =this.value
       let sortGroup =this.sortGroup
       let yAxisUnit =this.yAxisUnit
       //debugger
       if(tempValue){ 
          
            let seriesData_date = _self.getSeriesData(tempValue,'date')
             
            let seriesData_area = _self.getSeriesData(tempValue,'area')
            let seriesData_amt = _self.getSeriesData(tempValue,'amt')


      let option = {
                  title: {
                      text: this.text,
                      bottom:5,
                      x: 'center',
                    },
                  tooltip : {
                      trigger: 'axis'
                  },
                
                  legend: {
                       data:['金额','面积',]
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
                          name : '面积',
                          // axisLabel : {
                          //     formatter: '{value} ml'
                          // }
                      },
                      {
                          type : 'value',
                          name : '金额',
                          // axisLabel : {
                          //     formatter: '{value} °C'
                          // }
                      }
                  ],
                  series : [

                      {
                          name:'面积',
                          type:'bar',
                          // data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                           data:seriesData_area
                      },
                      {
                          name:'金额',
                          type:'line',
                          yAxisIndex: 1,
                           //data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                         data:seriesData_amt

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
