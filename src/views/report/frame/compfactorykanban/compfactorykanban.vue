<template>
  <div id="app">
        <headerview title='全厂综合查询' :showRightbtn="false"></headerview>
            <!-- 本月简报 -->
            <div class="currentMonthBriefReport">
                  <van-cell title="本月简报" class="innerReport" :border="false">
                <template slot="label">
                  <div >
                         <van-row>
                          <van-col span="12">
                            <van-cell-group>
                                <van-cell :border="false"  label="月累计订单金额" >
                                  <template slot="title">
                                     <van-row>
                                      <van-col span="22" class="moneyfontSet">{{toThousands(currentBriefReport.length==0 ?'':currentBriefReport[0].Amount)}}</van-col>
                                      <van-col span="2">元</van-col>
                                    </van-row>
                                  </template>
                                </van-cell>
                                <van-cell :border="false"   label="月累计送货金额" >
                                  <template slot="title">
                                     <van-row>
                                      <van-col span="22" class="moneyfontSet">{{toThousands(currentBriefReport.length==0 ?'':currentBriefReport[0].Amount)}}</van-col>
                                      <van-col span="2">元</van-col>
                                    </van-row>
                                  </template>
                                </van-cell>
                                <van-cell :border="false"   label="原纸入库金额" >
                                  <template slot="title">
                                     <van-row>
                                      <van-col span="22" class="moneyfontSet">{{toThousands(currentBriefReport.length==0 ?'':currentBriefReport[0].inamt)}}</van-col>
                                      <van-col span="2">元</van-col>
                                    </van-row>
                                  </template>
                                </van-cell>
                                <van-cell :border="false"   label="辅料入库金额" >
                                  <template slot="title">
                                     <van-row>
                                      <van-col span="22" class="moneyfontSet">{{toThousands(currentBriefReport.length==0 ?'':currentBriefReport[0].inamt)}}</van-col>
                                      <van-col span="2">元</van-col>
                                    </van-row>
                                  </template>
                                </van-cell>
                                  <van-cell :border="false"   label="收支收入金额" >
                                  <template slot="title">
                                     <van-row>
                                      <van-col span="22" class="moneyfontSet">{{toThousands(currentBriefReport.length==0 ?'':currentBriefReport[0].Gathering_Amount)}}</van-col>
                                      <van-col span="2">元</van-col>
                                    </van-row>
                                  </template>
                                </van-cell>
                            </van-cell-group>
                          </van-col>
                          <van-col span="12">
                            <van-cell-group>
                              <van-cell :border="false"  label="月累计生产面积" >
                                  <template slot="title">
                                     <van-row>
                                      <van-col span="22" class="moneyfontSet">{{toThousands(currentBriefReport.length==0 ?'':currentBriefReport[0].Area)}}</van-col>
                                      <van-col span="2">m²</van-col>
                                    </van-row>
                                  </template>
                                </van-cell>
                                <van-cell :border="false"   label="运输运费金额" >
                                  <template slot="title">
                                     <van-row>
                                      <van-col span="22" class="moneyfontSet">{{toThousands(currentBriefReport.length==0 ?'':currentBriefReport[6].TranFee_Amount)}}</van-col>
                                      <van-col span="2">元</van-col>
                                    </van-row>
                                  </template>
                                </van-cell>
                                <van-cell :border="false"   label="原纸出库金额" >
                                  <template slot="title">
                                     <van-row>
                                      <van-col span="22" class="moneyfontSet">{{toThousands(currentBriefReport.length==0 ?'':currentBriefReport[3].outamt)}}</van-col>
                                      <van-col span="2">元</van-col>
                                    </van-row>
                                  </template>
                                </van-cell>
                                <van-cell :border="false"   label="辅料出库金额" >
                                  <template slot="title">
                                     <van-row>
                                      <van-col span="22" class="moneyfontSet">{{toThousands(currentBriefReport.length==0 ?'':currentBriefReport[0].outamt)}}</van-col>
                                      <van-col span="2">元</van-col>
                                    </van-row>
                                  </template>
                                </van-cell>
                                <van-cell :border="false"   label="收支支出金额" >
                                  <template slot="title">
                                     <van-row>
                                      <van-col span="22" class="moneyfontSet">{{toThousands(currentBriefReport.length==0 ?'':currentBriefReport[0].SPay_Amount)}}</van-col>
                                      <van-col span="2">元</van-col>
                                    </van-row>
                                  </template>
                                </van-cell>
                            </van-cell-group>
                          </van-col>
                  </van-row>
                  </div>
                   
                </template>
                </van-cell>
            </div>
            <!-- 本月订单 -->
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

                          <!--月累计 数量 -->
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthOrderByType(totalReport[0],'Qty'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                        <!--月累计 面积 -->
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthOrderByType(totalReport[0],'Area'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                        <!--月累计 金额 -->
                         <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthOrderByType(totalReport[0],'Aoumt'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>

                        <van-grid-item   text="月平均"/>
                        <!--月平均 数量 -->
                       <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthOrderByType(totalReport[0],'Qty_avg'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                        <!--月平均 面积 -->
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthOrderByType(totalReport[0],'Area_avg'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                         <!--月平均 金额 -->
                       <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthOrderByType(totalReport[0],'Aoumt_avg'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                    </van-grid>
                  </div>
                   
                </template>
                </van-cell>
            </div>
             <!-- 本月生产 -->
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
                        <van-grid-item   text="面积"/>
                        <van-grid-item   text="米数"/>

                        <van-grid-item   text="月累计"/>
                        <!--月累计 数量 -->
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthOrderByType(totalReport[1],'Qty'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                         <!--月累计 面积 -->
                         <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthOrderByType(totalReport[1],'Area'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                        <!--月累计 米数 -->
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthOrderByType(totalReport[1],'Long'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>

                        <van-grid-item   text="月平均"/>
                         <!--月平均 数量 -->
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthOrderByType(totalReport[1],'Qty_avg'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                        <!--月平均 面积 -->
                         <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthOrderByType(totalReport[1],'Area_avg'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                         <!--月平均 米数 -->
                         <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthOrderByType(totalReport[1],'Long_avg'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                    </van-grid>
                  </div>
                   
                </template>
                </van-cell>
             </div>
             <!-- 本月送货 -->
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
                        <!--月累计 数量 -->
                       <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthDeliveryByType(totalReport[2],'Qty'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                          <!--月累计 面积 -->
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthDeliveryByType(totalReport[2],'Area'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                          <!--月累计 金额 -->
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthDeliveryByType(totalReport[2],'Amount'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>

                        <van-grid-item   text="月平均"/>
                        <!--月平均 数量 -->
                       <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthDeliveryByType(totalReport[2],'Qty_avg'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                        <!--月平均 面积 -->
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthDeliveryByType(totalReport[2],'Area_avg'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                        <!--月平均 金额 -->
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthDeliveryByType(totalReport[2],'Amount_avg'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                    </van-grid>
                  </div>
                   
                </template>
                </van-cell>
            </div>
            <!-- 本月原纸 -->
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
                       <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthDeliveryByType(totalReport[3],'inwt'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                       <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthDeliveryByType(totalReport[3],'inamt'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                       <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthDeliveryByType(totalReport[3],'outwt'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                         <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthDeliveryByType(totalReport[3],'outamt'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>

                        <van-grid-item   text="月平均"/>
                         <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthDeliveryByType(totalReport[3],'inwt_avg'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthDeliveryByType(totalReport[3],'inamt_avg'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthDeliveryByType(totalReport[3],'outwt_avg'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthDeliveryByType(totalReport[3],'outamt_avg'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                    </van-grid>
                  </div>
                   
                </template>
                </van-cell>
            </div>
            <!-- 本月辅料 -->
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
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthSubMaterial(totalReport[4],'inamt'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthSubMaterial(totalReport[4],'outamt'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>


                        <van-grid-item   text="月平均"/>
                         <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthSubMaterial(totalReport[4],'inamt_avg'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthSubMaterial(totalReport[4],'outamt_avg'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>

                    </van-grid>
                  </div>
                   
                </template>
                </van-cell>
            </div>

            <!-- 本月收支 -->
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
                        <!--月累计 收入 -->
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthInOutCome(totalReport[5],'SPay_Amount'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                         <!--月累计 支出 -->
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthInOutCome(totalReport[5],'Gathering_Amount'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>


                        <van-grid-item   text="月平均"/>
                         <!--月平均 收入 -->
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthInOutCome(totalReport[5],'SPay_Amount_avg'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                         <!--月平均 支出 -->
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthInOutCome(totalReport[5],'Gathering_Amount_avg'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>

                    </van-grid>
                  </div>
                   
                </template>
                </van-cell>
            </div>
            <!-- 本月运输 -->
             <div class="currentMonthBriefReport">
                  <van-cell title="本月运输" class="innerReport" :border="false">
                    <template slot="right-icon">
                      <div>
                         <van-icon name="share"/>
                      </div>
                    </template>
                <template slot="label">
                  <div >
                      <van-grid :border="false" :column-num="3">
                        <van-grid-item   text=""/>
                        <van-grid-item   text="运费"/> 
                        <van-grid-item   text=""/>

                        <van-grid-item   text="月累计"/>
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthTransportation(totalReport[6],'TranFee_Amount'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                         <van-grid-item   text=""/>


                        <van-grid-item   text="月平均"/>
                        <van-grid-item>
                          <template>
                            <div>
                              <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthTransportation(totalReport[6],'TranFee_Amount_avg'))}}</span>
                            </div>
                          </template>
                        </van-grid-item>
                          <van-grid-item   text=""/>

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

//import {toThousands} from '@/libs/tools'
import { getToken, setToken,setLocalStorage,getLocalStorage } from '@/libs/util'
import baseMixin from '@/mixins'
import {mapActions} from 'vuex'
export default {
  name:'compfactorykanban',
  components:{},
  mixins:[baseMixin],
   data(){
    return {
        actived:['1'],
        currentBriefReport:[],//本月简报
        totalReport:[],//数据集合  Data中7个数组，分别为 0：订单，1：生产，2：送货，3：原纸，4：辅料，5：收支，6：运输数据
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
  methods: { // 
    /**
     * @desc compfactorykanban 描述 本月收入支出 数据处理
     * 
     * @params 参数 集体数据源
     * 
     * @author Andy Huang
     * 
     * @created 2019/08/05 14:12:39
     */
    handleCurrentMonthTransportation(sourceData,type){
      //debugger
      if(sourceData.length==0){
        return ''
      }
      switch(type){
          case 'TranFee_Amount':
          return sourceData.slice(-2,-1).TranFee_Amount //月累计 倒数第二个数据 支出金额
            case 'TranFee_Amount_avg':
          return sourceData.slice(-1).TranFee_Amount //月平均 倒数第一个数据 


      }
    },
    /**
     * @desc compfactorykanban 描述 本月收入支出 数据处理
     * 
     * @params 参数 集体数据源
     * 
     * @author Andy Huang
     * 
     * @created 2019/08/05 14:12:39
     */
    handleCurrentMonthInOutCome(sourceData,type){
      //debugger
      if(sourceData.length==0){
        return ''
      }
      switch(type){
          case 'SPay_Amount':
          return sourceData.slice(-2,-1).SPay_Amount //月累计 倒数第二个数据 支出金额
           case 'Gathering_Amount':
          return sourceData.slice(-2,-1).Gathering_Amount
            case 'SPay_Amount_avg':
          return sourceData.slice(-1).SPay_Amount //月平均 倒数第一个数据 
           case 'Gathering_Amount_avg':
          return sourceData.slice(1).Gathering_Amount //收入金额

      }
    },
   /**
     * @desc compfactorykanban 描述 本月辅料 数据处理
     * 
     * @params 参数 集体数据源
     * 
     * @author Andy Huang
     * 
     * @created 2019/08/05 14:12:39
     */
    handleCurrentMonthSubMaterial(sourceData,type){
      this.handleCurrentMonthBasePaperByType(sourceData,type)
    },
     /**
     * @desc compfactorykanban 描述 本月原纸 数据处理
     * 
     * @params 参数 集体数据源
     * 
     * @author Andy Huang
     * 
     * @created 2019/08/05 14:12:39
     */
    handleCurrentMonthBasePaperByType(sourceData,type){

      if(sourceData.length==0){
        return ''
      }
      switch(type){  //入库重量 入库金额 出库重量 出口金额
          case 'inwt':
          return sourceData.slice(-2,-1).inwt //月累计 倒数第二个数据
           case 'inamt':
          return sourceData.slice(-2,-1).inamt
           case 'outwt':
          return sourceData.slice(-2,-1).outwt
            case 'outamt':
          return sourceData.slice(-2,-1).outamt
            case 'inwt_avg':
          return sourceData.slice(-1).inwt //月平均 倒数第一个数据
           case 'inamt_avg':
          return sourceData.slice(1).inamt
           case 'outwt_avg':
          return sourceData.slice(-1).outwt
            case 'outamt_avg':
          return sourceData.slice(-1).outamt
      }
    },
    /**
     * @desc compfactorykanban 描述 本月送货 数据处理
     * 
     * @params 参数 集体数据源
     * 
     * @author Andy Huang
     * 
     * @created 2019/08/05 14:12:39
     */
    handleCurrentMonthDeliveryByType(sourceData,type){
      this.handleCurrentMonthOrderByType(sourceData,type)
    },
    /**
     * @desc compfactorykanban 描述 本月生产 数据处理
     * 
     * @params 参数 集体数据源
     * 
     * @author Andy Huang
     * 
     * @created 2019/08/05 14:12:39
     */
    handleCurrentMonthProductionByType(sourceData,type){
      //debugger
      if(sourceData.length==0){
        return ''
      }
      switch(type){
          case 'Long':
          return sourceData.slice(-2,-1).Long //月累计 倒数第二个数据
           case 'Area':
          return sourceData.slice(-2,-1).Area
           case 'Qty':
          return sourceData.slice(-2,-1).Qty
            case 'Long_avg':
          return sourceData.slice(-1).Long //月平均 倒数第一个数据
           case 'Area_avg':
          return sourceData.slice(1).Area
           case 'Qty_avg':
          return sourceData.slice(-1).Qty
      }
    },
    /**
     * @desc compfactorykanban 描述 本月订单 数据处理
     * 
     * @params 参数 集体数据源
     * 
     * @author Andy Huang
     * 
     * @created 2019/08/05 14:12:39
     */
    handleCurrentMonthOrderByType(sourceData,type){
      //debugger
      if(sourceData.length==0){
        return ''
      }
      switch(type){
          case 'Aoumt':
          return sourceData.slice(-2,-1).Aoumt //月累计 倒数第二个数据
           case 'Area':
          return sourceData.slice(-2,-1).Area
           case 'Qty':
          return sourceData.slice(-2,-1).Qty
            case 'Aoumt_avg':
          return sourceData.slice(-1).Aoumt //月平均 倒数第一个数据
           case 'Area_avg':
          return sourceData.slice(1).Area
           case 'Qty_avg':
          return sourceData.slice(-1).Qty
      }
    },
    //将数据转换微千分符
      toThousands(num){
       // debugger
          if(num==null || num =='' || num ==0){
            return '0.00'
          }
          let result =''
          num = (num || 0).toString()

          while (num.length > 3) {
              result = ',' + num.slice(-3) + result
              num = num.slice(0, num.length - 3)
          }
          if (num) { result = num + result }
          return result
      },
    /**
     * @desc compfactorykanban 描述 从数据源截取 本月简报 数据
     * //res Data中7个数组，分别为 订单，生产，送货，原纸，辅料，收支，运输数据
     * @params 参数 dataList 原始数据源
     * 
     * @author Andy Huang
     * 
     * @created 2019/08/05 10:11:15
     */
      getCurrentBriefReportData(dataList){
         //debugger
         let _self =this
          dataList.forEach(item => {
               _self.currentBriefReport.push(...item.slice(-2,-1)) //获取倒数第二个数据
          });
          return  this.currentBriefReport
      },
      /**
       * @desc compfactorykanban 描述 获取数据源   //res Data中7个数组，分别为 订单，生产，送货，原纸，辅料，收支，运输数据
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
         let _self =this
         this.$store.dispatch('getFactoryKanban_action',params).then(res=>{
         
            console.log(JSON.stringify(res))
            _self.totalReport=res
            _self.getCurrentBriefReportData(res)
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
  padding: 5px 2px;
}
.moneyfontSet{
    font-weight: bold;
    //font-size: 15px;
}
.currentMonthBriefReport .van-cell__title{
   font-weight: bold;
}
.girdItemTextCss{
   font-weight: bold;
   color: #000;
}
</style>
