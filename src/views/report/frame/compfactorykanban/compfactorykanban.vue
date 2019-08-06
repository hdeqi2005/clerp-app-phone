<template>
  <div id="app">
        <headerview title='全厂综合查询' :showRightbtn="false"></headerview>
            <div class="factoryReportBG">
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
                        <van-cell title="本月订单" class="innerReport" @click="handleLink('order',totalReport[0])" :border="false">
                          <template slot="right-icon">
                            <div>
                              <van-icon size="22" color="#3296fa" name="share"/>
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
                        <van-cell title="本月生产" class="innerReport" @click="handleLink('production',totalReport[1])" :border="false">
                          <template slot="right-icon">
                            <div>
                              <van-icon size="22" color="#3296fa" name="share"/>
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
                                    <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthProductionByType(totalReport[1],'Qty'))}}</span>
                                  </div>
                                </template>
                              </van-grid-item>
                              <!--月累计 面积 -->
                              <van-grid-item>
                                <template>
                                  <div>
                                    <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthProductionByType(totalReport[1],'Area'))}}</span>
                                  </div>
                                </template>
                              </van-grid-item>
                              <!--月累计 米数 -->
                              <van-grid-item>
                                <template>
                                  <div>
                                    <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthProductionByType(totalReport[1],'Long'))}}</span>
                                  </div>
                                </template>
                              </van-grid-item>

                              <van-grid-item   text="月平均"/>
                              <!--月平均 数量 -->
                              <van-grid-item>
                                <template>
                                  <div>
                                    <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthProductionByType(totalReport[1],'Qty_avg'))}}</span>
                                  </div>
                                </template>
                              </van-grid-item>
                              <!--月平均 面积 -->
                              <van-grid-item>
                                <template>
                                  <div>
                                    <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthProductionByType(totalReport[1],'Area_avg'))}}</span>
                                  </div>
                                </template>
                              </van-grid-item>
                              <!--月平均 米数 -->
                              <van-grid-item>
                                <template>
                                  <div>
                                    <span class="girdItemTextCss">{{toThousands(totalReport.length==0 ?'':handleCurrentMonthProductionByType(totalReport[1],'Long_avg'))}}</span>
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
                        <van-cell title="本月送货" class="innerReport" @click="handleLink('delivery',totalReport[2])" :border="false">
                          <template slot="right-icon">
                            <div>
                              <van-icon size="22" color="#3296fa" name="share"/>
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
                        <van-cell title="本月原纸" @click="handleLink('basePaper',totalReport[3])" class="innerReport" :border="false">
                          <template slot="right-icon">
                            <div>
                              <van-icon size="22" color="#3296fa" name="share"/>
                            </div>
                          </template>
                      <template slot="label">
                        <div >
                            <van-grid :border="false" :column-num="5">
                              <van-grid-item   text=""/>
                              <van-grid-item   text="入库重量"/> 
                              <van-grid-item   text="入库金额"/>
                              <van-grid-item   text="出库重量"/>
                              <van-grid-item   text="出库金额"/>

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
                        <van-cell title="本月辅料" @click="handleLink('subMaterial',totalReport[4])" class="innerReport" :border="false">
                          <template slot="right-icon">
                            <div>
                              <van-icon size="22" color="#3296fa" name="share"/>
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
                        <van-cell title="本月收支"  @click="handleLink('inoutCome',totalReport[5])" class="innerReport" :border="false">
                          <template slot="right-icon">
                            <div>
                              <van-icon size="22" color="#3296fa" name="share"/>
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
                        <van-cell title="本月运输" @click="handleLink('transportation',totalReport[6])" class="innerReport" :border="false">
                          <template slot="right-icon">
                            <div>
                              <van-icon size="22" color="#3296fa" name="share"/>
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
        <!-- 报表-柱图 -->
        <van-popup v-model="popupShow" position="left" :style="{ height: '100%',width:'100%'}">
		   	<headerview :title='currentTitlefReport' :showRightbtn="false" :click-left="()=>{popupShow=false}"></headerview>
          <van-row  class="body">
                <orderBar :currentMode='currentMode' :legendData="legendData" style="height:300px;" :value="barData" :text="currentTextOfReport"></orderBar>
          </van-row>
            <van-row  class="body">
                           <div class="dataTable">
                              <v-table
                              :height="tableHeight"
                              :title-row-height="24"
                               title-bg-color="#4ba3fb"
                              :row-height="20"
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
            </van-row>
		   </van-popup>


</div>
</template>
<script>
/**
 * @description 全厂综合报表 CompFactoryReport
 */
import moment from 'moment'
import orderBar from '_c/charts/compfactoryreportkanban/compfactoryreportkanbantBar.vue'
import { getToken, setToken,setLocalStorage,getLocalStorage } from '@/libs/util'
import baseMixin from '@/mixins'
import {mapActions} from 'vuex'
export default {
  name:'compfactorykanban',
  components:{orderBar},
  mixins:[baseMixin],
   data(){
    return {
        legendData:['面积','金额',''],//图表暂时字段
        actived:['1'],
        currentMode:'0',// 0：订单，1：生产，2：送货，3：原纸，4：辅料，5：收支，6：运输数据
        errorContent:'数据加载中...',
        tableHeight: window.innerHeight || document.body.clientHeight,
        dataColumns: [],
        dataSource:[], //数据源
        currentTextOfReport:'',//popup 图表标题
        currentTitlefReport:'',//popup标题
        barData:[],//柱图数据
        popupShow: false,
        currentBriefReport:[],//本月简报
        totalReport:[],//数据集合  Data中7个数组，分别为 0：订单，1：生产，2：送货，3：原纸，4：辅料，5：收支，6：运输数据
        //0订单 （面积、金额）==数据列描述，格式化
        dataColumnsM0: [
                      {field: 'Date', title:'日期', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              let newFormataDate=this.formatDataByTime(rowData.Date)
                              return `<span>${newFormataDate}</span>`
                      },},
                       {field: 'Week', title:'星期', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.Week}</span>`
                      },},
                      {field: 'Amount', title:'金额', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.Amount}</span>`
                      },},
                      {field: 'Area', title:'面积', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.Area}</span>`
                      },},
                    ],

       //1生产（面积、金额） ==数据列描述，格式化
        dataColumnsM1: [
                      {field: 'Date', title:'日期', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              let newFormataDate=this.formatDataByTime(rowData.Date)
                              return `<span>${newFormataDate}</span>`
                      },},
                       {field: 'Week', title:'星期', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.Week}</span>`
                      },},
                      {field: 'Qty', title:'数量', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.Qty}</span>`
                      },},
                      {field: 'Area', title:'面积', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.Area}</span>`
                      },},
                    ],

        //2送货（面积、金额） ==数据列描述，格式化
        dataColumnsM2: [
                      {field: 'Date', title:'日期', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              let newFormataDate=this.formatDataByTime(rowData.Date)
                              return `<span>${newFormataDate}</span>`
                      },},
                       {field: 'Week', title:'星期', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.Week}</span>`
                      },},
                      {field: 'Amount', title:'金额', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.Amount}</span>`
                      },},
                      {field: 'Area', title:'面积', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.Area}</span>`
                      },},
                    ],
       //3原纸（当天、当月） ==数据列描述，格式化
        dataColumnsM3: [
                      {field: 'Date', title:'日期', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              let newFormataDate=this.formatDataByTime(rowData.Date)
                              return `<span>${newFormataDate}</span>`
                      },},
                       {field: 'Week', title:'星期', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.Week}</span>`
                      },},
                      {field: 'inwt', title:'入库重量', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.inwt}</span>`
                      },},
                       {field: 'inamt', title:'入库金额', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.inamt}</span>`
                      },},
                       {field: 'outwt', title:'出库重量', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.outwt}</span>`
                      },},
                       {field: 'outamt', title:'出库金额', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.outamt}</span>`
                      },},
                    ],
       //4辅料（当天、当月） ==数据列描述，格式化
        dataColumnsM4: [
                      {field: 'Date', title:'日期', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              let newFormataDate=this.formatDataByTime(rowData.Date)
                              return `<span>${newFormataDate}</span>`
                      },},
                       {field: 'Week', title:'星期', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.Week}</span>`
                      },},
                      {field: 'inamt', title:'入库金额', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.inamt}</span>`
                      },},
                      {field: 'outamt', title:'出库金额', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.outamt}</span>`
                      },},
                    ],
       //5收支（当天、当月） ==数据列描述，格式化
        dataColumnsM5: [
                      {field: 'Date', title:'日期', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              let newFormataDate=this.formatDataByTime(rowData.Date)
                              return `<span>${newFormataDate}</span>`
                      },},
                       {field: 'Week', title:'星期', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.Week}</span>`
                      },},
                      {field: 'Gathering_Amount', title:'收入', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.Gathering_Amount}</span>`
                      },},
                      {field: 'Gathering_Amount', title:'支出', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.SPay_Amount}</span>`
                      },},
                    ],
       //6运输数据（当天、当月） ==数据列描述，格式化
        dataColumnsM6: [
                      {field: 'Date', title:'日期', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              let newFormataDate=this.formatDataByTime(rowData.Date)
                              return `<span>${newFormataDate}</span>`
                      },},
                       {field: 'Week', title:'星期', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.Week}</span>`
                      },},
                      {field: 'TranFee_Amount', title:'金额', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                      formatter: (rowData, index)=>{
                              return `<span>${rowData.TranFee_Amount}</span>`
                      },},
                    ]
    }
  },
  computed:{
   },
   mounted(){
     let _self =this
     this.$nextTick(()=>{
           _self.getDataSource()
            _self.tableHeight =_self.getLeftHeight()-10  //减去额外的margin-top
     })
   },
  created(){

  },
  methods: { 
      //是否为中文
      isChinese(val){
        let re=/[\u4e00-\u9fa5]/g
        if (re.test(val)) return true 
        return false 
      },
      //格式化数据日期
      formatDataByTime(val){
         return val
        // if(val.indexOf('-')!=-1){
        //   return val
        // }
        // return moment(val).format('YYYY-MM-DD')
      },
      //图表显示处理 
      handleLink(type,sourceData){
        this.legendData=['面积','金额','']
        this.popupShow =true
        this.barData =sourceData
        this.dataSource =sourceData
        //0：订单，1：生产，2：送货，3：原纸，4：辅料，5：收支，6：运输数据
         switch(type){
          case 'order':
            this.currentMode ='0'
            this.dataColumns =this.dataColumnsM0 
            this.currentTitlefReport ='本月订单'
            this.currentTextOfReport ='订单(面积、金额)对照'
            break
          case 'production':
            this.currentMode ='1'
            this.legendData=['面积','米数','']
            this.dataColumns =this.dataColumnsM1 
            this.currentTitlefReport ='本月生产'
            this.currentTextOfReport ='生产(面积、米数)对照'
            break
         case 'delivery':
            this.currentMode ='0'
            this.dataColumns =this.dataColumnsM2 
            this.currentTitlefReport ='本月送货'
            this.currentTextOfReport ='送货(面积、金额)对照'
            break
         case 'basePaper':
            this.currentMode ='3'
            this.legendData=['','入库金额','出库金额']
            this.dataColumns =this.dataColumnsM3 
            this.currentTitlefReport ='本月原纸'
            this.currentTextOfReport ='原纸(金额)对照'
            break
         case 'subMaterial':
            this.currentMode ='4'
            this.legendData=['','入库金额','出库金额']
            this.dataColumns =this.dataColumnsM4 
            this.currentTitlefReport ='本月辅料'
            this.currentTextOfReport ='辅料(金额)对照'
            break
        case 'inoutCome':
            this.currentMode ='5'
            this.legendData=['','收入','支出']
            this.dataColumns =this.dataColumnsM5 
            this.currentTitlefReport ='本月收支'
            this.currentTextOfReport ='收支(金额)对照'
            break
        case 'transportation':
            this.currentMode ='6'
            this.legendData=['','金额','']
            this.dataColumns =this.dataColumnsM6 
            this.currentTitlefReport ='本月运输'
            this.currentTextOfReport ='运输(金额)对照'
            break
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
.factoryReportBG{
  background-color: #909399;
  padding: 5px 0px;
}
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
 // box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
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
.table-title {
    color: white;
    // font-weight: bold;
 }
</style>
