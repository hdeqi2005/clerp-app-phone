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
    //获取图表数据
    getSeriesData(itemList){
      //debugger
      let tempList = []
      for(let item in itemList){
        let currentDateTime = moment(itemList[item].cab_date).format('YYYY-MM-DD')
        let params = {
                  cab_date:currentDateTime,
                  cac_BoxCOamt:Number.parseFloat(itemList[item].cac_BoxCOamt),
                  cac_BoxInamt:Number.parseFloat(itemList[item].cac_BoxInamt),
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
       //debugger
       if(tempValue){
            let seriesData = _self.getSeriesData(tempValue)
       let option = {
        legend: {
          //  align: 'right',
          //  orient:'vertical',
          //  itemWidth:38,
          //  itemHeight:22,
           top:20,
           left:60,
           selectedMode:'single', //单选
           inactiveColor:'rgba(0,23,11,0.3)',
           textStyle:{color:'#000'}
        },
         grid: [
                 {top:25,left:60} 
         ],
         title: {
          text: this.text,
          bottom:5,
          // subtext: this.subtext,
           x: 'center',
          // y: 0
        },
        dataset: {
            // 提供一份数据。
            // dimensions:  ['product', '送货金额', '收款金额'],
            source: seriesData
          
        },
    
        xAxis: [
               {type: 'category'},
               ],
        // 声明一个 Y 轴，数值轴。
          yAxis:{},
       
        series: _self.getSeriesCount(2)
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
