<template>
	<div id="app">
		<headerview :title='pageTitle'  :showRightbtn="false"></headerview>
		 <div id="otherContent"></div>
		<van-pull-refresh  v-model="isLoading" @refresh="searchPOData">
			<van-panel v-for="(item,index) in purchasesItems" :key="index" class="purchases-panel">
				<div slot="header" class="purchases-header" @click="searchPODetail(item.ID1,item.vendName,item.sp_SumTaxAmt,item)">
					<div>
						{{item.poerName}}-{{item.vendName}}
					</div>
					<div>
						<van-icon name="arrow" color="#949494" />
					</div>
				</div>
				<div>
					<div class="purchases-content">
						<span>采购单号:{{item.sp_No}}</span>
						<span>供应商:{{item.vendName}}</span>
					</div>
					<div class="purchases-content">
						<!-- <span>含税金额:{{item.sp_SumTaxAmt}}</span> -->
						<span>总卷数:{{item.sp_SumCoil}}</span>
					</div>
					<div class="purchases-content">
						<span>{{item.sp_PODate|timeClear}}</span>
						<span style="color: red;">未审批</span>
					</div>
				</div>
			</van-panel>
		</van-pull-refresh>

		<van-popup class="bg-color-body" v-model="popupShow" position="left" :style="{ height: '100%',width:'100%'}">
			<headerview title='采购单详情' :showRightbtn="false" :click-left="()=>{popupShow=false}"></headerview>
			<van-cell-group id='purchases-van-cell-group'>
				<van-cell title="" />
				<van-cell>
					<template slot="title">
						<van-row>
							<van-col span="24">
							 供 应 商 :  <span class="colSpanValue" v-text="kindName"></span>
							</van-col>
						</van-row>
					</template>
				</van-cell>
				<van-cell>
					<template slot="title">
						<van-row>
							<van-col span="12">
							 采购单号: <span class="colSpanValue" v-text="currentDetailItem.sp_No"></span>
							</van-col>
							<van-col span="12">
							 采购日期: <span class="colSpanValue" v-text="formatData(currentDetailItem.sp_PODate)"></span>
							</van-col>
						</van-row>
					</template>
				</van-cell>
				
				<van-cell>
					<template slot="title">
						<van-row>
							<van-col span="12">
							 税　　率: <span class="colSpanValue" v-text="`${currentDetailItem.sp_Rate}%`"></span>
							</van-col>
								<van-col span="12">
							 币　　别: <span class="colSpanValue" v-text="currentDetailItem.sp_Coin"></span>
							</van-col>
						</van-row>
					</template>
				</van-cell>
			
				<!-- <van-cell title="供 应 商:" :value="kindName" />
				<van-cell title="采购单号:" :value="currentDetailItem.sp_No" />
				<van-cell title="采购日期:" :value="formatData(currentDetailItem.sp_PODate)" />
				<van-cell title="税　　率:" :value="`${currentDetailItem.sp_Rate}%`" />
				<van-cell title="币　　别:" :value="currentDetailItem.sp_Coin" /> -->
				<!-- <van-cell title="含税单价:" :value="`${singlePrice+''}`"  /> -->
			</van-cell-group>
			
			<reportDataTable :dataColumns="dataColumns" :error-content="errorContent" :dataSource="tableDataItems" style="width:100%" />
			<div class="purchases-detail-btn-area">
				<van-button type="info" size="large" @click="popupExplainShow=true;formItems.approveState=1">同意</van-button>
				<van-button type="default" size="large" @click="popupExplainShow=true;formItems.approveState=0">不同意</van-button>
			</div>
		</van-popup>

		<van-dialog v-model="popupExplainShow" title="审批说明" show-cancel-button @confirm="approvePO()">
			<van-field v-model="formItems.approvalExplain" type="textarea" placeholder="请输入审批说明" rows="3" autosize />
		</van-dialog>
	</div>
</template>
<script>
	/**
	 * @description 全厂综合报表 CompFactoryReport
	 */
	import moment from 'moment'
	import baseMixin from '@/mixins'
	import reportDataTable from '_c/report/paperorderquery/reportDataTable'
	import {
		mapActions
	} from 'vuex'
	export default {
		name: 'CompFactoryReport',
		mixins: [baseMixin],
		components: {
			reportDataTable
		},
		data() {
			return {
				pageTitle:'采购单审批',
				errorContent:'数据加载中...',
				currentDetailItem:{},
				pullRefreshHeight:window.innerHeight || document.body.clientHeight,
				isLoading:false,
				popupShow: false,
				popupExplainShow: false,
				purchasesItems: [],
				dataColumns: [{
					field: 'kindName',
					title: '品名',
					titleAlign: 'center',
					columnAlign: 'center',
					isResize: true,
					width: 80
				}, {
					field: 'si_Width',
					title: '纸宽',
					titleAlign: 'center',
					columnAlign: 'center',
					isResize: true,
					width: 80
				}, {
					field: 'si_Gram',
					title: '克重',
					titleAlign: 'center',
					columnAlign: 'center',
					isResize: true,
					width: 80
				}, {
					field: 'gradeName',
					title: '级别',
					titleAlign: 'center',
					columnAlign: 'center',
					isResize: true,
					width: 80
				}, {
					field: 'si_Coil',
					title: '卷数',
					titleAlign: 'center',
					columnAlign: 'center',
					isResize: true,
					width: 80
				}, {
					field: 'si_TaxPrice',
					title: '价格(含税)',
					titleAlign: 'center',
					columnAlign: 'center',
					isResize: true,
					width: 100
				}],
				tableDataItems: [],
				kindName: '',
				singlePrice: 0,
				formItems: {
					poId: '',
					approvalExplain: '',
					approveState: 0
				}
			}
		},
		mounted(){
			let _self =this
			this.$nextTick(()=>{
					_self.pullRefreshHeight =_self.getLeftHeight()
			})
		 
		},
		created() {
			this.searchPOData();
		},
		methods: {
			...mapActions(['searchPODataAction', 'searchPODetailAction', 'approvePOAction']),
			searchPOData() {
				let _self =this
				this.searchPODataAction().then(res => {
					_self.purchasesItems = res.data;
					_self.isLoading = false;
					 if(_self.purchasesItems.length==0){
						_self.errorContent='暂无数据'
						}
				}).catch(err => {
					_self.errorContent = '暂无数据';
					_self.$toast('获取数据失败:' + err);
					_self.isLoading = false;
				})
			},
			searchPODetail(poId, kindName, singlePrice,item) {
				this.currentDetailItem =item
				//console.log('purchases currentDetailItem'+JSON.stringify(this.currentDetailItem))
				this.kindName = kindName;
				this.singlePrice = singlePrice;
				this.formItems.poId = poId;
				this.formItems.approvalExplain = '';
				let _self =this
				this.searchPODetailAction({
					poId: poId
				}).then(res => {
					//debugger;
					///console.log(res);
					_self.tableDataItems = res.data;
					_self.popupShow = true;
					 if(_self.tableDataItems.length==0){
						_self.errorContent='暂无数据'
					}
				}).catch(err => {
					_self.errorContent = '暂无数据';
					_self.$toast('获取数据失败:' + err);
				});
			},
			approvePO() {
				if(this.formItems.approveState==0 &&this.formItems.approvalExplain==''){
					this.$toast('请填写备注')
					return
				}
				this.approvePOAction(this.formItems).then(res => {
					this.$toast('审批成功');
				}).catch(err => {
					this.errorContent = '暂无数据';
					this.$toast('执行失败:' + err);
				});
			}
		},
		filters: {
			timeClear: function(value) {
				if (value) {
					return value.replace('00:00:00', '');
				}
				return value;
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
		//background-color: #E4E4E4;
	}

		.purchases-content,
	.purchases-header {
		font-size: 12px;
		justify-content: space-between;
		display: flex;
		padding: 7px 14px;
	}

	.purchases-content span {
		color: #949494;
	}

	.purchases-panel {
		 margin-bottom: 5px;
	}

	.purchases-header {
		border-bottom: 1px dashed #E4E4E4;
		font-size: 16px;
		line-height: 18px;
		padding: 7px 14px;
	}

	.purchases-detail-btn-area {
		display: flex;
		position: fixed;
		width: 100%;
		bottom: 0;
	}
	#purchases-van-cell-group .van-cell__value {
    // position: relative;
    // overflow: hidden;
    // color: #969799;
     text-align: left; 
    // vertical-align: middle;
}
</style>
