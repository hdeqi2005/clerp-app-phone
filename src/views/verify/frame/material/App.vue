<template>
	<div id="app">
		<headerview title='辅料审批' :showRightbtn="false"></headerview>
		<van-pull-refresh v-model="isLoading" @refresh="searchProdPO">
			<van-panel v-for="(item,index) in purchasesItems" :key="index" class="purchases-panel">
				<div slot="header" class="purchases-header" @click="searchProdPODetail(item.ID1,item.vendName,item.po_SumNoTax)">
					<div>
						{{item.poerName}}-{{item.vendName}}
					</div>
					<div>
						<van-icon name="arrow" color="#949494" />
					</div>
				</div>
				<div>
					<div class="purchases-content">
						<span>采购单号:{{item.po_No}}</span>
						<span>供应商:{{item.vendName}}</span>
					</div>
					<div class="purchases-content">
						<span>金额:{{item.po_SumNoTax}}</span>
						<span>总数:{{item.po_Qty}}</span>
					</div>
					<div class="purchases-content">
						<span>{{item.po_PODate|timeClear}}</span>
						<span style="color: red;">未审批</span>
					</div>
				</div>
			</van-panel>
		</van-pull-refresh>

		<van-popup v-model="popupShow" position="left" :style="{ height: '100%',width:'100%'}">
			<headerview title='采购单详情' :showRightbtn="false" :click-left="()=>{popupShow=false}"></headerview>
			<div style="text-align: left;line-height: 0.8rem;padding: 0 0.4rem;">
				<p>
					<label>供应商:{{kindName}}</label>
				</p>
				<p>
					<label>金额:{{singlePrice}}</label>
				</p>
			</div>
			<reportDataTable :dataColumns="dataColumns" :dataSource="tableDataItems" style="width:100%" />
			<div class="purchases-detail-btn-area">
				<van-button type="info" size="large" @click="popupExplainShow=true;formItems.approveState=1">同意</van-button>
				<van-button type="default" size="large" @click="popupExplainShow=true;formItems.approveState=0">不同意</van-button>
			</div>
		</van-popup>

		<van-dialog v-model="popupExplainShow" title="审批说明" show-cancel-button @confirm="approveProdPo()">
			<van-field v-model="formItems.approvalExplain" type="textarea" placeholder="请输入审批说明" rows="3" autosize />
		</van-dialog>
	</div>
</template>
<script>
	/**
	 * @description 全厂综合报表 CompFactoryReport
	 */

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
				isLoading:false,
				popupShow: false,
				popupExplainShow: false,
				purchasesItems: [],
				dataColumns: [{
					field: 'prodName',
					title: '名称',
					titleAlign: 'center',
					columnAlign: 'center',
					isResize: true,
					width: 80
				}, {
					field: 'model',
					title: '规格',
					titleAlign: 'center',
					columnAlign: 'center',
					isResize: true,
					width: 80
				}, {
					field: 'kindName',
					title: '类别',
					titleAlign: 'center',
					columnAlign: 'center',
					isResize: true,
					width: 80
				}, {
					field: 'unitName',
					title: '单位',
					titleAlign: 'center',
					columnAlign: 'center',
					isResize: true,
					width: 80
				}, {
					field: 'poi_PoQty',
					title: '数量',
					titleAlign: 'center',
					columnAlign: 'center',
					isResize: true,
					width: 80
				}, {
					field: 'poi_TaxPrice',
					title: '单价',
					titleAlign: 'center',
					columnAlign: 'center',
					isResize: true,
					width: 80
				}, {
					field: 'TaxAmt',
					title: '金额',
					titleAlign: 'center',
					columnAlign: 'center',
					isResize: true,
					width: 80
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
		created() {
			this.searchProdPO();
		},
		methods: {
			...mapActions(['searchProdPOAction', 'searchProdPODetailAction', 'approveProdPoAction']),
			searchProdPO() {
				this.searchProdPOAction().then(res => {
					//console.log(res);
					this.purchasesItems = res.data;
					this.isLoading = false;
				}).catch(err => {
					this.errorContent = '暂无数据';
					this.$toast('获取数据失败:' + err);
					this.isLoading = false;
				})
			},
			searchProdPODetail(poId, kindName, singlePrice) {
				this.kindName = kindName;
				this.singlePrice = singlePrice;
				this.formItems.poId = poId;
				this.formItems.approvalExplain = '';
				this.searchProdPODetailAction({
					poId: poId
				}).then(res => {
					//debugger;
					//console.log(res);
					this.tableDataItems = res.data;
					this.popupShow = true;
				}).catch(err => {
					this.errorContent = '暂无数据';
					this.$toast('获取数据失败:' + err);
				});
			},
			approveProdPo() {
				this.approveProdPoAction(this.formItems).then(res => {
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
		justify-content: space-between;
		display: flex;
		padding: 0.1rem 0.4rem;
	}

	.purchases-content span {
		color: #949494;
	}

	.purchases-panel {
		margin-bottom: 0.3rem;
	}

	.purchases-header {
		border-bottom: 1px dashed #E4E4E4;
		font-size: 0.4rem;
		line-height: 0.4rem;
		padding: 0.2rem 0.4rem;
	}

	.purchases-detail-btn-area {
		display: flex;
		position: fixed;
		width: 100%;
		bottom: 0;
	}
</style>
