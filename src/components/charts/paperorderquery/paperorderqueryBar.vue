<template>
  <div ref="dom" class="charts chart-bar"></div>
</template>

<script>
// import echarts from 'echarts'
 // 重点：此位置引入的是你单独配置的echarts
 import echarts from '@/libs/echarts' //按需加载
import tdTheme from './../theme.json'
import { on, off } from '@/libs/tools'
echarts.registerTheme('tdTheme', tdTheme)
export default {
  name: 'ChartBar',
  props: {
    sortGroup:{
         type:String,
         default:''
    },
    value: Array,
    text: String,
    subtext: String
  },
  data () {
    return {
      dom: null, yAxisUnit:'订单数'
    }
  },
  watch:{
    value(val){
      if(val){
         //console.log('数据变化：...')
        this.initData()
      }
    }
  },
  methods: {
    resize () {
      this.dom.resize()
    },
    //获取图表数据
    getSeriesData(itemList){
      let tempList = []
      for(let item in itemList){

        let params = {
                  co_Date:itemList[item].co_Date,
                  co_Qty:Number.parseFloat(itemList[item].co_Qty),
                  } 
              
         let seriesData = Object.values(params)
         //debugger
         tempList.push(seriesData)
       }
       return tempList
      },
      //获取bar总数
    getSeriesCount(num){
     // debugger
      let seriesArray  = []
      for (var i = 0; i < num; i++) {  
           let series={
              type: 'bar'
            } 
        seriesArray.push(series)
      }  
      return seriesArray
   },
  
   //初始化数据
   initData(){
       let _self = this
       let tempValue =this.value
       let sortGroup =this.sortGroup
       let yAxisUnit =this.yAxisUnit

       if(tempValue){
            let seriesData = _self.getSeriesData(tempValue)
       let option = {
        legend: {
          //  align: 'right',
          //  orient:'vertical',
          //  itemWidth:38,
          //  itemHeight:22,
          //  top:16,
          //  left:8,
           selectedMode:'single', //单选
           //type: 'scroll',
           inactiveColor:'rgba(0,23,11,0.3)',
           textStyle:{color:'#000'}
        },
         tooltip : {
                      trigger: 'axis'
                  },
         grid: [
                 {top:36,left:60} 
         ],

        dataset: {
            // 提供一份数据。
            // dimensions:  ['product', '面积', '米数', '车速','损耗','停次'],
            source: seriesData
          
        },
        // title: {
        // text: this.text,
        // subtext: this.subtext,
        // x: 'center',
        // y: 0
        // },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: [
               {type: 'category'},
               ],
        // 声明一个 Y 轴，数值轴。
          yAxis:{name:yAxisUnit},
      
        series: _self.getSeriesCount(1)
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
