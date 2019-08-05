<template>
  <div id="app">
        <headerview title='全厂综合查询' :showRightbtn="false"></headerview>
            <div class="currentMonthBriefReport">
                  <van-cell title="本月简报" class="innerReport" :border="false">
                <template slot="label">
                  <div >
                         <van-row>
                          <van-col span="12">
                            <van-cell-group>
                                <van-cell :border="false" title="单元格" value="元"  label="描述信息" />
                                <van-cell :border="false" title="单元格" value="元"  label="描述信息" />
                                <van-cell :border="false" title="单元格" value="元"  label="描述信息" />
                                <van-cell :border="false" title="单元格" value="元"  label="描述信息" />
                                  <van-cell :border="false" title="单元格" value="元"  label="描述信息" />
                            </van-cell-group>
                          </van-col>
                          <van-col span="12">
                            <van-cell-group>
                              <van-cell :border="false" title="单元格" value="m²"  label="描述信息" />
                                <van-cell :border="false" title="单元格" value="元"  label="描述信息" />
                                <van-cell :border="false" title="单元格" value="元"  label="描述信息" />
                                <van-cell :border="false" title="单元格" value="元"  label="描述信息" />
                                <van-cell :border="false" title="单元格" value="元"  label="描述信息" />
                            </van-cell-group>
                          </van-col>
                  </van-row>
                  </div>
                   
                </template>
                </van-cell>
            </div>
           
             <div class="currentMonthBriefReport">
                  <van-cell title="本月订单" class="innerReport" :border="false">
                    <template slot="right-icon">
                      <div>
                         <van-icon name="share"/>
                      </div>
                    </template>
                <template slot="label">
                  <div >
                      <van-grid :border="false" :column-num="4">
                        <van-grid-item   text=""/>
                        <van-grid-item   text="数量"/> 
                        <van-grid-item   text="面积"/>
                        <van-grid-item   text="金额"/>

                        <van-grid-item   text="月累计"/>
                        <van-grid-item   text="85，620"/>
                        <van-grid-item   text="785，620"/>
                        <van-grid-item   text="285，620"/>

                        <van-grid-item   text="月平均"/>
                        <van-grid-item   text="5，620"/>
                        <van-grid-item   text="185，622"/>
                        <van-grid-item   text="95，333"/>
                    </van-grid>
                  </div>
                   
                </template>
                </van-cell>
            </div>

              <div class="currentMonthBriefReport">
                  <van-cell title="本月生产" class="innerReport" :border="false">
                    <template slot="right-icon">
                      <div>
                         <van-icon name="share"/>
                      </div>
                    </template>
                <template slot="label">
                  <div >
                      <van-grid :border="false" :column-num="4">
                        <van-grid-item   text=""/>
                        <van-grid-item   text="数量"/>
                        <van-grid-item   text="金额"/>
                        <van-grid-item   text="米数"/>

                        <van-grid-item   text="月累计"/>
                        <van-grid-item   text="85，620"/>
                        <van-grid-item   text="785，620"/>
                        <van-grid-item   text="285，620"/>

                        <van-grid-item   text="月平均"/>
                        <van-grid-item   text="5，620"/>
                        <van-grid-item   text="185，622"/>
                        <van-grid-item   text="95，333"/>
                    </van-grid>
                  </div>
                   
                </template>
                </van-cell>
            </div>

               <div class="currentMonthBriefReport">
                  <van-cell title="本月送货" class="innerReport" :border="false">
                    <template slot="right-icon">
                      <div>
                         <van-icon name="share"/>
                      </div>
                    </template>
                <template slot="label">
                  <div >
                      <van-grid :border="false" :column-num="4">
                        <van-grid-item   text=""/>
                        <van-grid-item   text="数量"/> 
                        <van-grid-item   text="面积"/>
                        <van-grid-item   text="金额"/>

                        <van-grid-item   text="月累计"/>
                        <van-grid-item   text="85，620"/>
                        <van-grid-item   text="785，620"/>
                        <van-grid-item   text="285，620"/>

                        <van-grid-item   text="月平均"/>
                        <van-grid-item   text="5，620"/>
                        <van-grid-item   text="185，622"/>
                        <van-grid-item   text="95，333"/>
                    </van-grid>
                  </div>
                   
                </template>
                </van-cell>
            </div>

              <div class="currentMonthBriefReport">
                  <van-cell title="本月原纸" class="innerReport" :border="false">
                    <template slot="right-icon">
                      <div>
                         <van-icon name="share"/>
                      </div>
                    </template>
                <template slot="label">
                  <div >
                      <van-grid :border="false" :column-num="5">
                        <van-grid-item   text=""/>
                        <van-grid-item   text="入库重量"/> 
                        <van-grid-item   text="入库金额"/>
                        <van-grid-item   text="出库重量"/>
                        <van-grid-item   text="出口金额"/>

                        <van-grid-item   text="月累计"/>
                        <van-grid-item   text="85，620"/>
                        <van-grid-item   text="785，620"/>
                        <van-grid-item   text="285，620"/>
                         <van-grid-item   text="285，620"/>

                        <van-grid-item   text="月平均"/>
                        <van-grid-item   text="5，620"/>
                        <van-grid-item   text="185，622"/>
                        <van-grid-item   text="95，333"/>
                         <van-grid-item   text="285，620"/>
                    </van-grid>
                  </div>
                   
                </template>
                </van-cell>
            </div>
            
                 <div class="currentMonthBriefReport">
                  <van-cell title="本月辅料" class="innerReport" :border="false">
                    <template slot="right-icon">
                      <div>
                         <van-icon name="share"/>
                      </div>
                    </template>
                <template slot="label">
                  <div >
                      <van-grid :border="false" :column-num="3">
                        <van-grid-item   text=""/>
                        <van-grid-item   text="入库金额"/> 
                        <van-grid-item   text="出口金额"/>
 

                        <van-grid-item   text="月累计"/>
                        <van-grid-item   text="85，620"/>
                        <van-grid-item   text="785，620"/>


                        <van-grid-item   text="月平均"/>
                        <van-grid-item   text="5，620"/>
                        <van-grid-item   text="185，622"/>

                    </van-grid>
                  </div>
                   
                </template>
                </van-cell>
            </div>


             <div class="currentMonthBriefReport">
                  <van-cell title="本月收支" class="innerReport" :border="false">
                    <template slot="right-icon">
                      <div>
                         <van-icon name="share"/>
                      </div>
                    </template>
                <template slot="label">
                  <div >
                      <van-grid :border="false" :column-num="3">
                        <van-grid-item   text=""/>
                        <van-grid-item   text="收入"/> 
                        <van-grid-item   text="支出"/>
 

                        <van-grid-item   text="月累计"/>
                        <van-grid-item   text="85，620"/>
                        <van-grid-item   text="785，620"/>


                        <van-grid-item   text="月平均"/>
                        <van-grid-item   text="5，620"/>
                        <van-grid-item   text="185，622"/>

                    </van-grid>
                  </div>
                   
                </template>
                </van-cell>
            </div>

             <div class="currentMonthBriefReport">
                  <van-cell title="本月运输" class="innerReport" :border="false">
                    <template slot="right-icon">
                      <div>
                         <van-icon name="share"/>
                      </div>
                    </template>
                <template slot="label">
                  <div >
                      <van-grid :border="false" :column-num="2">
                        <van-grid-item   text=""/>
                        <van-grid-item   text="运费"/> 
 

                        <van-grid-item   text="月累计"/>
                        <van-grid-item   text="85，620"/>



                        <van-grid-item   text="月平均"/>
                        <van-grid-item   text="5，620"/>
    

                    </van-grid>
                  </div>
                   
                </template>
                </van-cell>
            </div>

</div>
</template>
<script>
/**
 * @description 全厂综合报表 CompFactoryReport
 */

import { getToken, setToken,setLocalStorage,getLocalStorage } from '@/libs/util'
import baseMixin from '@/mixins'
import {mapActions} from 'vuex'
export default {
  name:'compfactorykanban',
  components:{},
  mixins:[baseMixin],
   data(){
    return {
        actived:['1']
    }
  },
  computed:{
   },
   mounted(){
     let _self =this
     this.$nextTick(()=>{
           _self.getDataSource()
     })
   },
  created(){

  },
  methods:{
      /**
       * @desc compfactorykanban 描述 获取数据源
       * 
       * @params 参数 token
       * 
       * @author Andy Huang
       * 
       * @created 2019/08/02 14:25:26
       */
       getDataSource(){
         let params ={
           token:getLocalStorage('TOKEN')
         }
         this.$store.dispatch('getFactoryKanban_action',params).then(res=>{
            console.log(JSON.stringify(res))
         }).catch(err=>{
           console.error('获取数据源失败：'+err)
         })
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
.currentMonthBriefReport{
  border: 1px #ccc solid;
  margin:10px;
  border-radius:25px;
 // box-shadow: 10px 5px 5px #ccc;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
.innerReport{
   border-radius:25px;
}
.van-grid-item__content{
  padding: 5px 10px;
}
</style>
