<template>
	<div id="app">
		<headerview :title='pageTitle' :showRightbtn="false"></headerview>
		<van-tabs v-model="active">
			<van-tab title="入库">
				<div>
					<van-cell-group>
						<scannerField label="条码:" v-model="paperInFormItems.instruct" @onBlur="barCodeBlur" @scannerSuccess="barCodeBlur"></scannerField>
						<van-field label="仓位:" v-model="paperInFormItems.station" label-align="right" />
						<van-field label="工单号:" :disabled="true" v-model="paperInFormItems.fOrderNo" label-align="right" />

						<van-row>
							<van-col span="12">
								<van-field label="板号:" :disabled="true" v-model="paperInFormItems.fDNum" label-align="right" />
							</van-col>
							<van-col span="12">
								<van-field label="数量:" :disabled="true" v-model="paperInFormItems.fQty" label-align="right" />
							</van-col>
						</van-row>

						<van-row>
							<van-col span="12">
								<van-cell-group>
									<van-field label="线别:" :disabled="true" v-model="paperInFormItems.line" label-align="right" />
								</van-cell-group>
							</van-col>
							<van-col span="12">
								<van-cell-group>
									<van-field label="班别:" :disabled="true" v-model="paperInFormItems.group" label-align="right" />
								</van-cell-group>
							</van-col>
						</van-row>

						<van-row>
							<van-col span="24">
								<van-field label="备注:" v-model="paperInFormItems.desc" label-align="right" />
							</van-col>
						</van-row>

					</van-cell-group>
					<div style="padding:0.5rem;">
						<van-button type="primary" size="large" @click="paprtIn">入仓</van-button>
					</div>
				</div>
			</van-tab>
			<van-tab title="寻货">
				<div>
					<van-cell-group>
						<scannerField label="工单号:" v-model="findGoodsItem.fOrderNo">
							<van-button size="small" type="primary" @click="findGoods()">查询</van-button>
						</scannerField>
					</van-cell-group>
					<v-table :title-row-height="24" :row-height="20" title-bg-color="#3296fae0" id="dt_deliveryquery" ref="dt_deliveryquery"
					 is-vertical-resize style="width:100%;" is-horizontal-resize :columns="findGoodsColumns" :table-data="findGoodsTableDataItems"
					 :show-vertical-border="true" even-bg-color="#f4f4f4" row-hover-color="#eee" row-click-color="#edf7ff">
					</v-table>
				</div>
			</van-tab>
			<van-tab title="出仓扫描">
				<div>
					<van-cell-group>
						<van-field label="车次:" v-model="paperOutItem.batch" label-align="right" />
						<scannerField label="工单号:" v-model="paperOutItem.fOrderNo">
							<van-button size="small" type="primary" @click="paperOut()">查询</van-button>
						</scannerField>
					</van-cell-group>
					<v-table :title-row-height="24" :row-height="20" title-bg-color="#3296fae0" id="dt_deliveryquery" ref="dt_deliveryquery"
					 is-vertical-resize style="width:100%;" is-horizontal-resize :columns="findGoodsColumns" :table-data="paperOutTableDataItems"
					 :show-vertical-border="true" even-bg-color="#f4f4f4" row-hover-color="#eee" row-click-color="#edf7ff">
					</v-table>
				</div>
			</van-tab>
		</van-tabs>
	</div>
</template>
<script>
	import baseMixin from '@/mixins'
	import {mapActions} from 'vuex'
	import {scannerField} from '_c/warehouse'
	export default {
		name: 'CompFactoryReport',
		mixins: [baseMixin],
		components: {
			scannerField
		},
		data() {
			return {
				pageTitle:'原纸入库',
				errorContent: '加载失败...',
				active: 0,
				paperInFormItems: {
					instruct: '', //指令
					station: '', //仓位
					fOrderNo: '', //工单号
					line: '', //线别
					group: '', //班别
					fQty: '', //数量
					fDNum: '', //板号,
					desc: '' //备注
				},
				paperInFormInit: {
					instruct: '', //指令
					station: '', //仓位
					fOrderNo: '', //工单号
					line: '', //线别
					group: '', //班别
					fQty: '', //数量
					fDNum: '', //板号,
					desc: '' //备注
				},
				findGoodsItem: {
					fOrderNo: ''
				},
				paperOutItem: {
					fOrderNo: '', //工单号
					batch: ''
				},
				findGoodsColumns: [{
					field: 'OrderNo',
					title: '工单号',
					width: 80
				}, {
					field: 'Station',
					title: '仓位',
					width: 80
				}, {
					field: 'FNum',
					title: '板号',
					width: 80
				}, {
					field: 'State',
					title: '状态',
					width: 80
				}],
				findGoodsTableDataItems: [],
				paperOutTableDataItems: []
			}
		},
		created() {},
		methods: {
			...mapActions(['spScanOrderAction']),
			barCodeBlur() {
				if (this.paperInFormItems.instruct == '') {
					this.$toast('请输入或扫描条码');
					return;
				}
				let instruct = this.paperInFormItems.instruct.split('*');
				if (instruct.length < 5) {
					this.$toast('数据解析失败，参数个数不够');
					return;
				}
				let data = {
					fOrderNo: instruct[0],
					fDNum: instruct[1],
					fQty: instruct[2],
					line: instruct[3],
					group: instruct[4]

				}
				Object.assign(this.paperInFormItems, data);
			},
			paperInRequest(data) {
				this.$toast.loading({
					mask: true,
					message: '提交中...'
				});

				return new Promise((resolve, reject) => {
					this.spScanOrderAction(data).then(res => {
						this.$toast.clear();
						resolve(res.list);
					}).catch(err => {
						this.errorContent = '暂无数据';
						this.$toast('获取数据失败:' + err);
						this.$toast.clear();
						reject();
					})
				})
			},
			paprtIn() {
				if (this.paperInFormItems.station == '') {
					this.$toast('请输入仓位');
					return;
				}
				if (
					this.paperInFormItems.fOrderNo == '' ||
					this.paperInFormItems.fQty == '' ||
					this.paperInFormItems.fDNum == '' ||
					this.paperInFormItems.line == '' ||
					this.paperInFormItems.group == ''
				) {
					this.$toast('请先扫描完整的指令');
					return;
				}
				let data = {
					BarCodeStr: this.paperInFormItems.instruct,
					Station: this.paperInFormItems.station,
					Flag: 0,
					FOrderNo: this.paperInFormItems.fOrderNo,
					FQty: this.paperInFormItems.fQty,
					FDNum: this.paperInFormItems.fDNum,
					FLine: this.paperInFormItems.line,
					FClass: this.paperInFormItems.group,
					Remark: this.paperInFormItems.desc
				}
				this.paperInRequest(data).then(res => {
					if (res && res[0].res == 1) {
						this.$toast('入仓成功');
					} else {
						this.$toast('入仓失败');
					}
				});
			},
			findGoods() {
				//寻货
				if (this.findGoodsItem.fOrderNo == '') {
					this.$toast('请输入或扫描工单号');
					return;
				}
				let data = {
					FOrderNo: this.instruct,
					BarCodeStr: this.findGoodsItem.fOrderNo,
					Flag: 2
				}
				this.paperInRequest(data).then(res => {
					if (res && res.length > 0) {
						this.findGoodsTableDataItems = res[0].resultList;
					}
				})
			},
			paperOut() {
				if (this.paperOutItem.fOrderNo == '') {
					this.$toast('请输入或扫描工单号');
					return;
				}
				if (this.paperOutItem.batch == '') {
					this.$toast('请输入车次');
					return;
				}
				let data = {
					FOrderNo: this.paperOutItem.fOrderNo,
					BarCodeStr: '',
					Batch: this.paperOutItem.batch,
					Flag: 1
				}
				this.paperInRequest(data).then(res => {
					if (res && res.length > 0) {
						this.paperOutTableDataItems = res.resultList[0];
					}
				})
			}
		},
		filters: {}
	}
</script>

<style lang="less">
	// .van-field__label {
	// 	width: 13vw;
	// }
</style>
